import React from 'react';
import socketFunction from './socket'
import './styles.css';

export class Hero extends React.Component {
	handleClick() {
		socketFunction()
	}
	render() {
		return (
			<div>
				Hello
				<button onClick={this.handleClick}>Click me!</button>
			</div>
		)
	}
}