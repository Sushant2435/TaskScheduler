const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const passport = require('passport');
const session = require('express-session');
require('../Server/config/db');
require('./controllers/fbauth')
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api', taskRoutes);
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

