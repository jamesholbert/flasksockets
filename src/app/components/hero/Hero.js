import React from 'react';
import socketFunction from './socket'
import './styles.css';

export class Hero extends React.Component {
	constructor(props) {
		super(props)
		this.state={'name':''}		
	}

	handleClick() {
		// let x = JSON.stringify(this.state.name)
		let x = this.state.name
		socketFunction(x)
		console.log(x)
	}

	onChange(ev) {
		this.setState({'name':ev.target.value})
	}
	render() {
		return (
			<div className='blue'>
				Hello blues
				<input onChange={this.onChange.bind(this)}></input>
				<button onClick={this.handleClick.bind(this)}>Click me!</button>
			</div>
		)
	}
}