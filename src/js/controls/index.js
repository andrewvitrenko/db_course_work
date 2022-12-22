const {v4: uuid} = require('uuid');
const {Router} = require('express');
const router = Router();

const connection = require('../db');

const ERRORS = require('../constants/errors');

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
  connection.query(`select * from project where id = unhex("${id}")`, (err, project) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    const convertedData = project.map(({
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

router.post('/project', (req, res) => {
  const {name, description, workspace_id, manager_id} = req.body;

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
    (err, project) => {
      if (err) {
        res.status(500).json({
          message: ERRORS.SERVER_ERROR,
        });
        return;
      }

      console.log(project);

      res.status(200).json({
        data: project,
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
      (err, result) => {
        if (err) {
          res.status(500).json({
            message: ERRORS.SERVER_ERROR,
          });
          return;
        }

        res.status(200).json({
          data: result,
        });
      }
    );
  });
});

router.delete('/project/:id', (req, res) => {
  const {id} = req.params;
  connection.query(`delete from project where id = unhex("${id}")`, (err, result) => {
    if (err) {
      res.status(500).json({
        message: ERRORS.SERVER_ERROR,
      });
      return;
    }

    res.status(200).json({
      data: result,
    });
  });
});

module.exports = router;
