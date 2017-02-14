const express = require('express');
const requireTree = require('require-tree')
const controllers 	= requireTree('./controllers');

var router = express.Router();

router.get('/kittens', controllers.kitten.show);
router.get('/kittens/new', controllers.kitten.new);
router.post('/kittens', controllers.kitten.create);

module.exports = router;
