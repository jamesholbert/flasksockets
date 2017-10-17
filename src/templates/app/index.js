import React from 'react';
import ReactDOM from 'react-dom';

// import {Hero} from './components/hero/Hero';

console.log("it works");

class App extends React.Component {
	render() {
		return (
			<div>
				Hello World!
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
