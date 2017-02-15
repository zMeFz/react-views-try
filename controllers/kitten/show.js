const Kitten 	= require('../../models/kitten.js');

module.exports = function(req, res, next) {
  kitten = Kitten.findById(req.params.id, function (error, kitten) {
	  if (error)
	  	res.send("Kitten not found")
	  res.render( "ShowKittenPage", { kitten } )
  })
}