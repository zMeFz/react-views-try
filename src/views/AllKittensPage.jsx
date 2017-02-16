var React = require('react');
var DefaultLayout = require('./layouts/default');
var Kittens = require('./components/Kittens');

var AllKittensPage = ({kittens}) => {
	return (
	  <DefaultLayout title="All Kittens | KotoList">
	  	<h2>All Kittens:</h2>
 	    { kittens.length 
	    	? <Kittens kittens={kittens} /> 
	    	: "No kittens now :("}
	  </DefaultLayout>
	)
}

module.exports = AllKittensPage;