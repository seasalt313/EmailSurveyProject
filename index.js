const express = require('express'); //common js vs es2015 module style
const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'maple' });
});

//dynamic port binding
const PORT = process.env.PORT || 5000;

app.listen(PORT);
