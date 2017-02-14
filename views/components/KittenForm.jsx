var React = require('react');

var KittenForm = () => {
	return(
	  <form action="/kittens" method="POST">
	    <label>
	      Name: 
	      <input type="text" name="name" />
	    </label>
	    <input type="submit" />
	  </form>
	)
}

module.exports = KittenForm;