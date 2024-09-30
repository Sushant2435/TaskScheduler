
const Task = require('../models/taskModel')
const authenticateToken = require('../middlewares/authmiddleware')

exports.createtask = [authenticateToken, async (req, res) => {
    try {
        console.log("Request body:", req.body);
        let task = new Task(req.body);
        let result = await task.save();
        res.status(201).send(result);
    } catch (error) {
        console.error("Failed to create task:", error);
        res.status(500).send({ error: 'Failed to create task' });
    }
}];


// // Task list
exports.tasklist = async (req, res) => {
    let task = await Task.find();
    if (task.length > 0) {
        res.send(task)
    } else {
        res.send({ result: "No Task found" });
    }
}
// Task find by id
exports.getTaskListbyid = [authenticateToken, async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findById(taskId);

        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404).json({ message: 'Task not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching task', error });
    }
}];
// Update Task
exports.updateTaskList = [authenticateToken, async (req, res) => {
    try {
        let updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedTask) {
            console.log(updatedTask);
            res.send(updatedTask);
        } else {
            res.status(404).send({ result: "Task not found" });
        }
    } catch (error) {
        res.status(500).send({ result: "Error updating task", error });
    }
}];

// Delete Task
exports.deleteTaskbyid = [authenticateToken, async (req, res) => {
    try {
        let deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (deletedTask) {
            res.send({ result: "Task deleted successfully", deletedTask });
        } else {
            res.status(404).send({ result: "Task not found" });
        }
    } catch (error) {
        res.status(500).send({ result: "Error deleting task", error });
    }
}];