const express = require('express');
const router = express.Router();

const { createTask, getAllTasks, updateTaskById, deleteTaskById, updateTaskStatusById} = require('../controllers/task.controller');


router.post('/tasks',createTask);
router.get('/tasks',getAllTasks);
router.put('/tasks/:taskId',updateTaskById);
router.delete('/tasks/:taskId',deleteTaskById);
router.put('/tasks/:taskId/:status',updateTaskStatusById);
module.exports = router;