var React = require('react');

var Kitten = ({kitten}) => {
	return(
		<div>
			<a href={"/kittens/" + kitten._id}>
				<h4>{kitten.name || "anonymous"} kitten</h4>
			</a>			
		</div>
	)
}

module.exports = Kitten;