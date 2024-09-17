const express = require('express');
const User = require('./db/user');
const Task = require('./db/task')
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('./db/config');
const app = express();
const saltRounds = 10;

app.use(express.json());
app.use(cors());

const JWT_SECRET = "957fa1d754057631145919f4735b91b41a1b5657db905e0cd184f242c0245416";

//authenticate the token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// Signup user
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const newUser = new User({ name, email, password: hashedPassword });

        const result = await newUser.save();
        console.log(result);
        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('User registration error:', error);
        res.status(500).json({ error: 'Error during user registration' });
    }
});

// Login user
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Missing email or password' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        // Create JWT token
        const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ message: 'Login successful', user: { id: user._id, name: user.name, email: user.email }, token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Error during login' });
    }
});

//Create task
app.post("/createtask", authenticateToken, async (req, res) => {
    let task = new Task(req.body);
    let result = await task.save();
    res.send(result)
})
// Task list
app.get("/tasklist", async (req, res) => {
    let task = await Task.find();
    if (task.length > 0) {
        res.send(task)
    } else {
        res.send({ result: "No Task found" });
    }
})
// Task find by id
app.get('/tasklist/:id', authenticateToken, async (req, res) => {
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
});
// Update Task 
app.put("/updatetask/:id", authenticateToken, async (req, res) => {
    try {
        let updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedTask) {
            res.send(updatedTask);
        } else {
            res.status(404).send({ result: "Task not found" });
        }
    } catch (error) {
        res.status(500).send({ result: "Error updating task", error });
    }
});

// Delete Task
app.delete("/deletetask/:id", authenticateToken, async (req, res) => {
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
});


app.listen(3000, () => {
    console.log('Server started on port 3000');
});
