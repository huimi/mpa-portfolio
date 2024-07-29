from flask import Flask, request, jsonify
import requests

# create flask instance
app = Flask(__name__, static_folder='dist', static_url_path='')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/bar-chart/')
def chart():
    return app.send_static_file('bar-chart/index.html')

@app.route('/countdown-timer/')
def countdowntimer():
    # app.logger.info('%s', app.root_path)
    return app.send_static_file('countdown-timer/index.html')

@app.route('/url-shortening/')
def urlshorten():
    # app.logger.info('%s', app.root_path)
    return app.send_static_file('url-shortening/index.html')

@app.route('/api/shorten', methods=['POST'])
def shorten():
    r = requests.post('https://cleanuri.com/api/v1/shorten', data=request.json)
    response = r.json()
    app.logger.info(response)
    return jsonify(response)