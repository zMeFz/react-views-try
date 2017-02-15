var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
        	<nav>
        		<ul>
        			<li>
        				<a href="/kittens/">All Kittens</a>
        			</li>
        			<li>
        				<a href="/kittens/new">New Kitten</a>
        			</li>
        		</ul>
        	</nav>
        	<hr />
        	{this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;