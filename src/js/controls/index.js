const {v4: uuid} = require('uuid');
const {Router} = require('express');
const router = Router();

const connection = require('../db');

const { ERRORS, SUCCESS } = require('../constants');

const {decodeId} = require('../utils');

router.get('/projects', (req, res) => {
  connection.query('select * from project', (err, projects) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    const convertedData = projects.map(({
      id,
      name,
      description,
      manager_id,
      workspace_id
    }) => ({
      name,
      description,
      id: decodeId(id),
      manager_id: decodeId(manager_id),
      workspace_id: decodeId(workspace_id),
    }));

    res.status(200).json({
      data: convertedData,
    });
  });
});

router.get('/project/:id', (req, res) => {
  const {id} = req.params;
  connection.query(`select * from project where id = unhex("${id}")`, (err, [project]) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    if (!project) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      });
      return;
    }

    res.status(200).json({
      data: {
        ...project,
        id: decodeId(project.id),
        manager_id: decodeId(project.manager_id),
        workspace_id: decodeId(project.workspace_id),
      },
    });
  });
});

router.post('/project', (req, res) => {
  const {name, description, workspace_id, manager_id} = req.body;

  if (!(name && description && workspace_id && manager_id)) {
    res.status(400).json({
      message: ERRORS.ALL_FIELDS_REQUIRED,
    });
    return;
  }

  const id = uuid().replaceAll('-', '');

  connection.query(
    `insert into project (
        id,
        name,
        description,
        workspace_id,
        manager_id
      ) values (
        unhex("${id}"),
        "${name}",
        "${description}",
        unhex("${workspace_id}"),
        unhex("${manager_id}")
      )`,
    (err) => {
      if (err) {
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        });
        return;
      }

      res.status(201).json({
        message: SUCCESS.PROJECT_CREATED,
      });
    }
  );
});

router.put('/project/:id', (req, res) => {
  const {id} = req.params;

  connection.query(`select * from project where id = unhex("${id}")`, (err, [project]) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    if (!project) {
      res.status(404).json({
        message: ERRORS.NOT_FOUND,
      });
      return;
    }

    const {
      name,
      description,
      workspace_id,
      manager_id
    } = {
      ...project,
      workspace_id: decodeId(project.workspace_id),
      manager_id: decodeId(project.manager_id),
      ...req.body
    };

    connection.query(
      `update project set 
        name = "${name}", 
        description = "${description}",
        workspace_id = unhex("${workspace_id}"),
        manager_id = unhex("${manager_id}")
        where id = unhex("${id}")`,
      (err) => {
        if (err) {
          res.status(500).json({
            message: ERRORS.SERVER_ERROR,
          });
          return;
        }

        res.status(200).json({
          message: SUCCESS.PROJECT_UPDATED,
        });
      }
    );
  });
});

router.delete('/project/:id', (req, res) => {
  const {id} = req.params;
  connection.query(`delete from project where id = unhex("${id}")`, (err) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    res.status(200).json({
      message: SUCCESS.PROJECT_DELETED,
    });
  });
});

module.exports = router;
