'use strict';

const path 			= require('path');
const express 		= require('express')
const mongoose 		= require('mongoose');
const router 		= require('./router');

const port 		= process.env.PORT 		|| 3000;
const env		= process.env.NODE_ENV 	|| 'production';
const database 	= process.env.DATABASE 	|| 'database-try';
 

const app = express()
app.use(router);

mongoose.connect('mongodb://localhost/' + database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?'.red);
});


mongoose.connection.once('open', function() {
  	console.log("Connected")
});

app.use(express.static(path.join(__dirname, 'static')));

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});