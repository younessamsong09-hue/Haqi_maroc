import os, json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)
# تحديد مسار مجلد البيانات بدقة
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(BASE_DIR, 'national')

# قاموس المرادفات المغربية (ذكاء البحث)
SYNOMYMS = {
    "لاكارط": "بطاقة,تعريف,cnie",
    "باسبور": "جواز,سفر,passport",
    "الحبس": "عقوبة,سجن,اعتقال",
    "قهيوة": "رشوة,فساد",
    "الدار": "عقار,تحفيظ,ملك",
    "الخدمة": "شغل,نزاع,طرد"
}

def load_data():
    all_items = []
    if os.path.exists(DATA_DIR):
        for f in os.listdir(DATA_DIR):
            if f.endswith('.json') and f != 'quick_cards.json':
                try:
                    with open(os.path.join(DATA_DIR, f), 'r', encoding='utf-8') as file:
                        data = json.load(file)
                        all_items.extend(data if isinstance(data, list) else [data])
                except: continue
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
    user_query = request.json.get('prompt', '').lower()
    # توسيع البحث ليشمل المرادفات
    for word, replacement in SYNOMYMS.items():
        if word in user_query:
            user_query += f",{replacement}"
            
    all_data = load_data()
    matches = []
    for item in all_data:
        keywords = item.get('keywords', '').lower().split(',')
        if any(k.strip() in user_query for k in keywords if k.strip()):
            matches.append(item)
            
    return jsonify({"found": len(matches) > 0, "results": matches})

if __name__ == "__main__":
    app.run(debug=True)
