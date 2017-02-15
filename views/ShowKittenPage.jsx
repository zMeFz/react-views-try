var React = require('react');
var DefaultLayout = require('./layouts/default');
var Kitten = require('./components/Kitten');

var ShowKittenPage = ({kitten}) => {
	return (
	  <DefaultLayout title="{kitten.name} kitten | KotoList">
	    <Kitten kitten={kitten} />
	  </DefaultLayout>
	)
}

module.exports = ShowKittenPage;