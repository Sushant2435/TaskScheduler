const jwt = require('jsonwebtoken');
require('dotenv').config();
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!authHeader) {
        return res.status(401).send({ error: 'Authorization header missing' });
    }
    if (token == null) {
        return res.status(401).send({ error: 'Token missing' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send({ error: 'Token verification failed' });
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
