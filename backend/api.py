from flask import Blueprint, jsonify, request
import json
import os

api = Blueprint('api', __name__)

@api.route('/hello/<string:name>/')
def say_hello(name):
    response = { 'msg': "Hello {}".format(name) }
    return jsonify(response)

@api.route('/random')
def random_number():
    response = {
        'randomNumber': 'aeffe'
    }
    return jsonify(response)

@api.route('/get/sephirah')
def get_sephirah():
    sephirah_data = open("./backend/data/sephirah/sephirah.json", 'r',encoding="utf-8")
    data = json.load(sephirah_data)
    return jsonify(data)

@api.route('/get/<name>')
def get_sephirah_detail(name):
    sephirah_data = open("./backend/data/sephirah/sephirah.json", 'r',encoding="utf-8")
    data = json.load(sephirah_data)
    info = data[name]
    return jsonify(info)