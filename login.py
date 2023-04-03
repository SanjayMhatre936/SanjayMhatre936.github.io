from flask import Flask, render_template, request, redirect, url_for, session
from flask_cors import CORS
import re
import json

app = Flask(__name__)
CORS(app)
app.secret_key = 'key1'

# @app.route('/')


@app.route('/json', methods=['GET', 'POST'])
def process_json():
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        json = request.json
        return json
    else:
        return 'Content-Type not supported!'


@app.route('/login', methods=['GET', 'POST'])
def login():
    msg = ''
    if request.method == 'POST' and 'username' in request.json and 'password' in request.json:
        username = request.json['username']
        password = request.json['password']

        if username == "admin" and password == "admin":
            session['loggedin'] = True
            session['id'] = "test1"
            session['username'] = username
            return json.loads('{"sessionId": "' + session['id'] + '","loggedIn":"' + str(session['loggedin']) + '","username":"'+session['username']+'"}')
        else:
            return json.loads('{"loggedIn":"' + str(session['loggedin']) + '","message":"Incorrect Username / Password"}')
    return msg


"""
@app.route('/logout')
def logout():
    session.pop('loggedin', None)
    session.pop('id', None)
    session.pop('username', None)
    return redirect(url_for('login'))
"""
if __name__ == '__main__':
    app.run(port=5001)
