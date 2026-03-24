import os
import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def load_national_data():
    all_data = []
    base_path = os.path.join(app.root_path, 'national')
    if os.path.exists(base_path):
        for file in os.listdir(base_path):
            # نتجاهل ملف البطاقات لأنه للعرض فقط
            if file.endswith(".json") and file != "quick_cards.json":
                with open(os.path.join(base_path, file), 'r', encoding='utf-8') as f:
                    content = json.load(f)
                    all_data.extend(content if isinstance(content, list) else [content])
    return all_data

@app.route('/')
def index(): return render_template('index.html')

@app.route('/get_cards')
def get_cards():
    path = os.path.join(app.root_path, 'national', 'quick_cards.json')
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f: return jsonify(json.load(f))
    return jsonify([])

@app.route('/ask', methods=['POST'])
def ask():
    query = request.json.get('prompt', '').lower()
    data = load_national_data()
    # نظام بحث مرن يطابق الكلمات المفتاحية
    matches = [i for i in data if any(k in query for k in i.get('keywords', '').split(','))]
    return jsonify({"found": len(matches) > 0, "results": matches})
    
