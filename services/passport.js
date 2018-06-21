const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //Strategy property is specified here in object notation
const keys = require('../config/keys');

//Creates a new instance of the google passport strategy - GoogleStrategy is built in with an internal identifier with google
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback'
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('accessToken: ', accessToken);
			console.log('refresh token: ', refreshToken);
			console.log('profile: ', profile);
		}
	)
);
