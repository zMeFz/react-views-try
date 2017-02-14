var React = require('react');

var Kitten = ({kitten}) => {
	return(
		<div>
			<h4>Name: {kitten.name || "anonymous"}</h4>
		</div>
	)
}

module.exports = Kitten;