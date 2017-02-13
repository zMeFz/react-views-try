var express = require('express');
var router = express.Router();
// const controllers 	= require('./controllers');
// var bodyParser = require('body-parser')
 
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

const Kitten 	= require('./models/kitten.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  	Kitten.find(function (err, kittens) {
	  	if (err) return console.error(err);
  		res.send(kittens.map(kitten => kitten.name))
	})
});

router.get('/new', function(req, res, next) {
	var kitten = new Kitten({ name: req.query.name });
	kitten.save(function (err, kitten) {
	  if (err) return console.error(err);
	  res.send(kitten)
	});  	
});
module.exports = router;


