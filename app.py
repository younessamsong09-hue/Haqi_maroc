import os, json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
DATA_PATH = os.path.join(os.path.dirname(__file__), 'national', 'master_data.json')

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
    q = request.json.get('prompt', '').lower().strip()
    if not os.path.exists(DATA_PATH): return jsonify({"found": False, "results": []})
    
    with open(DATA_PATH, 'r', encoding='utf-8') as f:
        all_data = json.load(f)
        matches = [i for i in all_data if q in i.get('title','').lower() or any(q in k for k in i.get('keywords','').split(','))]
        return jsonify({"found": len(matches) > 0, "results": matches})
