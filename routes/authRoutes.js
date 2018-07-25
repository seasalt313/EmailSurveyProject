const passport = require('passport');

module.exports = app => {
	//Route handler - We reference the express app object, state the method (get), the path as first argument, and 2nd is the code that should be executed whenever a request comes in.
	//Whenever a user goes to this route, we want to kick them into the passport flow to authenticate them
	//The key 'scope' - specifies what we want access to in the user's account
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
			res.redirect('/surveys');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
