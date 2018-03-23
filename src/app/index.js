import React from 'react';
import ReactDOM from 'react-dom';

import {Hero} from './components/hero/Hero';

class App extends React.Component {
	render() {
		return (
			<div>
				Hello World!
				<Hero />
			</div>
		)
	}
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
