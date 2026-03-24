import os
import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# وظيفة ذكية لجلب البيانات من كافة قطاعات مجلد national
def load_all_services():
    services = []
    base_path = os.path.join(app.root_path, 'national')
    if os.path.exists(base_path):
        for file in os.listdir(base_path):
            # نتجاهل الملفات غير الأساسية ونركز على ملفات القطاعات
            if file.endswith(".json") and file != "quick_cards.json":
                with open(os.path.join(base_path, file), 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    services.extend(data if isinstance(data, list) else [data])
    return services

# 1. الصفحة الرئيسية (الواجهة)
@app.route('/')
def index():
    return render_template('index.html')

# 2. صفحة محرر الشكايات القانونية
@app.route('/generator')
def generator():
    return render_template('generator.html')

# 3. صفحة حاسبة الرسوم المالية
@app.route('/finance')
def finance():
    return render_template('finance.html')

# 4. محرك البحث الذكي (API)
@app.route('/ask', methods=['POST'])
def ask():
    user_query = request.json.get('prompt', '').lower()
    all_data = load_all_services()
    
    # البحث عن كلمات مفتاحية مطابقة
    matches = [
        item for item in all_data 
        if any(key in user_query for key in item.get('keywords', '').split(','))
    ]
    
    return jsonify({
        "found": len(matches) > 0,
        "results": matches
    })

# 5. جلب البطاقات السريعة للواجهة
@app.route('/get_cards')
def get_cards():
    path = os.path.join(app.root_path, 'national', 'quick_cards.json')
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            return jsonify(json.load(f))
    return jsonify([])

if __name__ == '__main__':
    app.run(debug=True)
    
