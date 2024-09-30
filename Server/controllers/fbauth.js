const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
require('dotenv').config();
const FB_APPID = process.env.FB_APPID
const FB_APPSECRET = process.env.FB_APPSECRET
const User = require('../models/userModel')

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
})
passport.use(new FacebookStrategy({
    clientID: FB_APPID,
    clientSecret: FB_APPSECRET,
    callbackURL: '/auth/facebook/callback',
    profileFields: ['id', 'name'] // Request email and name
}, async (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, refreshToken, profile)
    try {
        let user = await User.findOne({ facebookId: profile.id });
        if (!user) {
            // If the user doesn't exist, create a new one
            user = new User({
                name: `${profile.name.givenName} ${profile.name.familyName}`,
                email: profile.emails ? profile.emails[0].value : null,
                facebookId: profile.id
            });
            await user.save();
        }
        done(null, user);
    } catch (error) {
        done(error, false);
    }
}));


