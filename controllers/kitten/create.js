const Kitten 	= require('../../models/kitten.js');

module.exports = function(req, res, next) {
	// TODO: parse post request
	var kitten = new Kitten({ name: req.body.name });
	kitten.save(function (err, kitten) {
	  if (err) return console.error(err);
	  res.send(kitten)
	});  	
}