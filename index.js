const express = require('express'); //Commonjs vs es2015 module style (which would use import statement)
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

//bodyParser will parse any incoming response to json
app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app); //this passes app to authRoutes

require('./routes/billingRoutes')(app);

//Dynamic port binding
const PORT = process.env.PORT || 5000; //door 5000
app.listen(PORT);
