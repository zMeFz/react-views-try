module.exports = function(req, res, next) {
	var kitten = new Kitten({ name: req.query.name });
	kitten.save(function (err, kitten) {
	  if (err) return console.error(err);
	  res.send(kitten)
	});  	
}