import os, json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def load_data():
    results = []
    path = os.path.join(os.path.dirname(__file__), 'national')
    if os.path.exists(path):
        for f in os.listdir(path):
            if f.endswith('.json') and f != 'quick_cards.json':
                with open(os.path.join(path, f), 'r', encoding='utf-8') as file:
                    data = json.load(file)
                    results.extend(data if isinstance(data, list) else [data])
    return results

@app.route('/')
def index(): return render_template('index.html')

@app.route('/get_cards')
def get_cards():
    p = os.path.join(os.path.dirname(__file__), 'national', 'quick_cards.json')
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f: return jsonify(json.load(f))
    return jsonify([])

@app.route('/ask', methods=['POST'])
def ask():
    q = request.json.get('prompt', '').lower()
    matches = [i for i in load_data() if any(k in q for k in i.get('keywords','').split(','))]
    return jsonify({"found": len(matches) > 0, "results": matches})
