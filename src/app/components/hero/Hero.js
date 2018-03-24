import React from 'react';
// import socketFunction from './socket'
import './styles.css';
import openSocket from 'socket.io-client';
import webpackImage from '../../images/webpack.png'

export class Hero extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			'name':'',
			'history':[],
			'socket': openSocket('http://localhost')
		}
		// const socket = openSocket('http://localhost:5000');
	}
	
	componentDidMount() {
		this.state.socket.on('messageToClient', (message)=>{this.saveHistory(message)});
	}

	saveHistory(message) {
		console.log('received')
		let newHistory = this.state.history
		newHistory.push(message)
		this.setState({'history': newHistory})
	}

	socketFunction(name) {
		  this.state.socket.emit('sendDataToServer', name);
	}
	
	handleClick() {
		let x = this.state.name
		this.socketFunction(x)
		this.setState({'name':''})
	}

	onChange(ev) {
		this.setState({'name':ev.target.value})
	}
	render() {
		return (
			<div className='blue'>
				<img src={webpackImage} />
				{this.state.history.map((thing)=>{return <div key={thing}>{thing}</div>})}
				<input onChange={this.onChange.bind(this)} value={this.state.name}></input>
				<button onClick={this.handleClick.bind(this)}>Click me!</button>
			</div>
		)
	}
}