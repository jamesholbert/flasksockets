import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');
socket.on('messageToClient', (message)=>{console.log(message)});

// socket.on('')
function socketFunction(cb) {
  socket.emit('sendDataToServer', 'data');
}
export default socketFunction;

