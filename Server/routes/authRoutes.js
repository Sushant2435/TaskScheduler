const express = require('express');
const passport = require('passport');
const { signup, login } = require('../controllers/auth')
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)

router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// Facebook callback route
router.get('/facebook/callback', passport.authenticate('facebook', {
    failureRedirect: '/login',
    session: true
}), (req, res) => {
    res.json({ message: 'Facebook login successful', user: req.user });
    res.send("login")
});

module.exports = router;