var React = require('react');
var DefaultLayout = require('./layouts/default');
var KittenForm = require('./components/KittenForm');

var NewKittensPage = () => {
	return(
	  <DefaultLayout title="New Kittens | KotoList">
	    <KittenForm />
	  </DefaultLayout>
	)
}

module.exports = NewKittensPage;