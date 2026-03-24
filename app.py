import os
import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# دالة ذكية تقرأ أي ملف JSON تضعه في مجلد national مستقبلاً
def fetch_all_data():
    all_records = []
    base_path = os.path.join(app.root_path, 'national')
    if os.path.exists(base_path):
        for file in os.listdir(base_path):
            if file.endswith(".json"):
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

@app.route('/ask', methods=['POST'])
def ask():
    user_input = request.json.get('prompt', '').lower()
    # نظام الحماية القانونية التلقائي
    all_data = fetch_all_data()
    matches = [item for item in all_data if user_input in str(item).lower()]
    
    if matches:
        return jsonify({"found": True, "results": matches})
    return jsonify({"found": False, "message": "لم نجد نتائج، جرب كلمات مثل: رشوة، حكرة، تعويض."})

if __name__ == '__main__':
    app.run(debug=True)
  
