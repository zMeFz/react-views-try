const Kitten 	= require('../../models/kitten.js');

module.exports = function(req, res) {
	var kitten = new Kitten({ name: req.body.name });
	kitten.save(function (err, kitten) {
	  if (err) return console.error(err);
	  res.redirect('kittens');
	});  	
}