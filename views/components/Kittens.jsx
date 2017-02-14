var React = require('react');
var Kitten = require('./Kitten');

var Kittens = ({kittens}) => {
	return(<ul>{kittens.map( kitten => (<li><Kitten kitten={kitten}/></li>) )}</ul>)
}

module.exports = Kittens;