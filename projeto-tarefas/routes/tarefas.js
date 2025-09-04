const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Em vez de colocar a função de callback aqui, chamamos uma do controller
router.post('/', tarefaController.createTask);
router.get('/', tarefaController.getAllTasks);
router.get('/', tarefaController.getTaskById);
router.patch('/', tarefaController.getUpdateTask);
router.patch('/', tarefaController.getDeleteTask);

exports.module = router
