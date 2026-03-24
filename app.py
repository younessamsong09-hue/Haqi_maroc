import os, json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'national')

def load_data():
    items = []
    if os.path.exists(DATA_DIR):
        for f in os.listdir(DATA_DIR):
            if f.endswith('.json') and f != 'quick_cards.json':
                try:
                    with open(os.path.join(DATA_DIR, f), 'r', encoding='utf-8') as file:
                        data = json.load(file)
                        items.extend(data if isinstance(data, list) else [data])
                except: continue
    return items

@app.route('/')
def index(): return render_template('index.html')

@app.route('/get_cards'):
def get_cards():
    p = os.path.join(DATA_DIR, 'quick_cards.json')
    return jsonify(json.load(open(p, 'r', encoding='utf-8'))) if os.path.exists(p) else jsonify([])

@app.route('/ask', methods=['POST'])
def ask():
    q = request.json.get('prompt', '').lower()
    all_data = load_data()
    # بحث ذكي يبحث في العناوين والكلمات المفتاحية
    matches = [i for i in all_data if q in i.get('title','').lower() or any(q in k for k in i.get('keywords','').split(','))]
    return jsonify({"found": len(matches) > 0, "results": matches})
