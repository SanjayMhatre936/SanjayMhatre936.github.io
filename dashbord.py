from flask import Flask, render_template, request, redirect, url_for, session
from flask_cors import CORS
import re
import json

app = Flask(__name__)
CORS(app)
app.secret_key = 'key1'

# @app.route('/')


@app.route('/user/<username>', methods=['GET', 'POST'])
def login(username):
    return json.loads('{"employeeId": "abc","email": "abc@gmail.com","department": "IT","currentLocation": "Pune","BU": "PU","company": "T-Sytems ICT Pvt. Ltd.","personalInfo": {"firstName": "Sanjay","middleName": "Shashikant","lastName": "Mhatre","DOB": "15-Jul-1989","nationality": "Indian","maritalStatus": "Married"},"contact": {"flatNo": "00","locality": "WA","landmark": "Wakad","city": "Pune","state": "Maharashtra","country": "India","pincode": "402201","mobileNo": "+91 9665324012"}}')


if __name__ == '__main__':
    app.run(port=5002)
