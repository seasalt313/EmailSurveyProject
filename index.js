const express = require('express'); //Commonjs vs es2015 module style (which would use import statement)
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

require('./routes/authRoutes')(app); //this passes app to authRoutes

//Dynamic port binding
const PORT = process.env.PORT || 5000; //door 5000
app.listen(PORT);
