# from __future__ import print_function
# import sys #these top two are just for printing
from flask import Flask, flash, redirect, render_template, request, session, abort, url_for
# from functions import getWages, getOccWage, getTextBoxValues
import os
# import filler
tmpl_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'dist/')
application = Flask(__name__, template_folder=tmpl_dir)

@application.route("/")
@application.route("/index")
def index():
    return render_template('index.html') 

# @application.errorhandler(404)
# def page_not_found(e):
# 	return render_template('404.html'), 404

# @application.errorhandler(500)
# def server_error(e):
# 	return render_template('500.html'), 500


if __name__ == "__main__":
    application.run(debug=True)
    # application.run()    