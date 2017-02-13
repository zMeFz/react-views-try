var express = require('express');
var router = express.Router();
// var bodyParser = require('body-parser')
 
// var jsonParser = bodyParser.json()
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

const Kittens 	= require('./models/kitten.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  	Kittens.find(function (err, kittens) {
	  	if (err) return console.error(err);
  		res.send(kittens.map(kitten => kitten.name))
	})
});

router.get('/new', function(req, res, next) {
	// var fluffy = new Kitten({ name: 'fluffy' });
	// fluffy.save(function (err, fluffy) {
	//   if (err) return console.error(err);
	//   fluffy.speak();
	// });
	res.send(req.query.name)  	
});
module.exports = router;


