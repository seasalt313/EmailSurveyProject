const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //Strategy property is specified here in object notation
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

//Creates a new instance of the google passport strategy - GoogleStrategy is built in with an internal identifier with google
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ googleId: profile.id });

			if (existingUser) {
				return done(null, existingUser);
			}

			const user = await new User({
				googleId: profile.id
			}).save();
			done(null, user);
		}
	)
);
