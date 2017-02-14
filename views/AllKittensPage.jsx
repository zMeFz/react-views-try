var React = require('react');
var DefaultLayout = require('./layouts/default');
var Kittens = require('./components/Kittens');

var AllKittensPage = ({kittens}) => {
	return (
	  <DefaultLayout title="All Kittens | KotoList">
	    <Kittens kittens={kittens} />
	  </DefaultLayout>
	)
}

module.exports = AllKittensPage;