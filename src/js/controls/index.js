const { Router } = require('express');
const router = Router();

const ERRORS = require('../constants/errors');

router.get('/projects', async (req, res) => {
  try {

  } catch (e) {
    res.status(500).json({
      message: ERRORS.SERVER_ERROR,
    });
  }
});

router.get('/project/:id', async (req, res) => {
  try {
    const { id } = req.params;

  } catch (e) {
    res.status(500).json({
      message: ERRORS.SERVER_ERROR,
    });
  }
});

router.post('/project', async (req, res) => {
  try {

  } catch (e) {
    res.status(500).json({
      message: ERRORS.SERVER_ERROR,
    });
  }
});

router.put('/project/:id', async (req, res) => {
  try {
    const { id } = req.params;

  } catch (e) {
    res.status(500).json({
      message: ERRORS.SERVER_ERROR,
    });
  }
});

router.delete('/project/:id', async (req, res) => {
  try {
    const { id } = req.params;

  } catch (e) {
    res.status(500).json({
      message: ERRORS.SERVER_ERROR,
    });
  }
});

module.exports = router;
