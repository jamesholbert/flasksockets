# from __future__ import print_function
# import sys #these top two are just for printing
from flask import Flask, flash, redirect, render_template, request, session, abort, url_for
from flask_socketio import SocketIO, send, emit

import os

tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static/')
app = Flask(__name__, template_folder=tmpl_dir)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

users = 0

@app.route("/")
@app.route("/index")
def index():
	return render_template('index.html') 

@socketio.on('connect')
def handle_message():
	print('connected!')
	socketio.emit('messageToClient', 'User has joined.')

@socketio.on('disconnect')
def handle_message():
	print('User disconnected!')
	socketio.emit('messageToClient', 'User has left.')

@socketio.on('sendDataToServer')
def handle_message(data):
	print('got data from client: ' + str(data))
	socketio.emit('messageToClient', str(data))
# @app.errorhandler(404)
# def page_not_found(e):
# 	return render_template('404.html'), 404

# @app.errorhandler(500)
# def server_error(e):
# 	return render_template('500.html'), 500


if __name__ == "__main__":
    # app.run(debug=True)
	socketio.run(app)

    # app.run()    