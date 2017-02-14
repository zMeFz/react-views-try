const Kitten 	= require('../../models/kitten.js');

module.exports = function(req, res, next) {
  Kitten.find(function (err, kittens) {
	  	if (err) return console.error(err);
  		res.render("AllKittensPage", {kittens: kittens})
	})
}