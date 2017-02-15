const requireTree     	= require('require-tree')
const controllers     	= requireTree('./controllers');
const bodyParser 				= require('body-parser')

const jsonParser 				= bodyParser.json()
const urlencodedParser	= bodyParser.urlencoded({ extended: false })

module.exports = (app) => {

	app.get('/kittens/new', controllers.kitten.new);
	app.get('/kittens/:id', controllers.kitten.show);
	app.get('/kittens', controllers.kitten.all);
	app.post('/kittens', urlencodedParser, controllers.kitten.create);

}