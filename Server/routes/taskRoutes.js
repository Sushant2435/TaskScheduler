const express = require('express');
const { createtask, tasklist, getTaskListbyid, updateTaskList, deleteTaskbyid } = require('../controllers/task')
const router = express.Router();
router.post('/createtask', createtask)
router.get('/tasklist', tasklist)
router.get('/tasklist/:id', getTaskListbyid)
router.put('/updatetask/:id', updateTaskList)
router.delete('/deletetask/:id', deleteTaskbyid)

module.exports = router;