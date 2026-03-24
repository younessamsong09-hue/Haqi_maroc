import os, json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def get_data():
    all_data = []
    folder = os.path.join(app.root_path, 'national')
    if os.path.exists(folder):
        for f in os.listdir(folder):
            if f.endswith('.json') and f != 'quick_cards.json':
                with open(os.path.join(folder, f), 'r', encoding='utf-8') as file:
                    content = json.load(file)
                    all_data.extend(content if isinstance(content, list) else [content])
    return all_data

@app.route('/')
def home(): return render_template('index.html')

@app.route('/get_cards')
def cards():
    path = os.path.join(app.root_path, 'national', 'quick_cards.json')
    with open(path, 'r', encoding='utf-8') as f: return jsonify(json.load(f))

@app.route('/ask', methods=['POST'])
def ask():
    q = request.json.get('prompt', '').lower()
    results = [i for i in get_data() if any(k in q for k in i['keywords'].split(','))]
    return jsonify({"found": len(results)>0, "results": results})
    
