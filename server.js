'use strict';

const path 				= require('path');
const express 		= require('express')
const mongoose 		= require('mongoose');
const routes 			= require('./routes');

const port 				= process.env.PORT 		|| 3000;
const env					= process.env.NODE_ENV 	|| 'production';
const database 		= process.env.DATABASE 	|| 'database-try';

const app = express()

app.use(function (req, res, next) {
	console.log('Required: ' + req.url);
	next();
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

routes(app)

mongoose.connect('mongodb://localhost/' + database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});


mongoose.connection.once('open', function() {
  	console.log("Connected")
});

app.use(express.static(path.join(__dirname, 'static')));

app.use(function(req, res, next) {
	res.status(404);
  res.end();
});

app.use('/css', express.static(__dirname + '/src/css'));
app.use('/js',  express.static(__dirname + '/src/js' ));
app.use('/img', express.static(__dirname + '/src/img'));

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});