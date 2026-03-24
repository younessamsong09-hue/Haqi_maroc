import os, json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
DATA_DIR = os.path.join(os.path.dirname(__file__), 'national')

def get_all_data():
    all_items = []
    if os.path.exists(DATA_DIR):
        for f in os.listdir(DATA_DIR):
            if f.endswith('.json') and f != 'quick_cards.json':
                with open(os.path.join(DATA_DIR, f), 'r', encoding='utf-8') as file:
                    data = json.load(file)
                    all_items.extend(data if isinstance(data, list) else [data])
    return all_items

@app.route('/')
def index(): return render_template('index.html')

@app.route('/get_cards')
def get_cards():
    p = os.path.join(DATA_DIR, 'quick_cards.json')
    if os.path.exists(p):
        with open(p, 'r', encoding='utf-8') as f: return jsonify(json.load(f))
    return jsonify([])

@app.route('/ask', methods=['POST'])
def ask():
    q = request.json.get('prompt', '').lower()
    matches = [i for i in get_all_data() if any(k in q for k in i.get('keywords','').split(','))]
    return jsonify({"found": len(matches) > 0, "results": matches})
