import os
import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# دالة لجلب كافة البيانات من مجلد national
def fetch_all_data():
    all_records = []
    base_path = os.path.join(app.root_path, 'national')
    if os.path.exists(base_path):
        for file in sorted(os.listdir(base_path)):
            if file.endswith(".json") and file != "quick_cards.json":
                try:
                    with open(os.path.join(base_path, file), 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        if isinstance(data, list): all_records.extend(data)
                        else: all_records.append(data)
                except: continue
    return all_records

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_cards')
def get_cards():
    cards_path = os.path.join(app.root_path, 'national', 'quick_cards.json')
    if os.path.exists(cards_path):
        with open(cards_path, 'r', encoding='utf-8') as f:
            return jsonify(json.load(f))
    return jsonify([])

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.json.get('prompt', '').lower()
    all_data = fetch_all_data()
    # بحث ذكي يعتمد على الكلمات المفتاحية والعناوين
    matches = [item for item in all_data if user_input in str(item.get('keywords', '')).lower() or user_input in item.get('title', '').lower()]
    
    if matches:
        return jsonify({"found": True, "results": matches})
    return jsonify({"found": False, "message": "لم نجد نتائج دقيقة، جرب كلمات مثل: رشوة، دواء، حكرة."})

if __name__ == '__main__':
    app.run(debug=True)
    
