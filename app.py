import os
import json
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def load_all_services():
    services = []
    base_path = os.path.join(app.root_path, 'national')
    if os.path.exists(base_path):
        for file in os.listdir(base_path):
            if file.endswith(".json") and file != "quick_cards.json":
                try:
                    with open(os.path.join(base_path, file), 'r', encoding='utf-8') as f:
                        data = json.load(f)
                        if isinstance(data, list):
                            services.extend(data)
                        else:
                            services.append(data)
                except:
                    continue
    return services

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_cards')
def get_cards():
    path = os.path.join(app.root_path, 'national', 'quick_cards.json')
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            return jsonify(json.load(f))
    return jsonify([])

@app.route('/ask', methods=['POST'])
def ask():
    user_query = request.json.get('prompt', '').lower()
    all_data = load_all_services()
    matches = [item for item in all_data if any(key in user_query for key in item.get('keywords', '').split(','))]
    return jsonify({"found": len(matches) > 0, "results": matches})

if __name__ == "__main__":
    app.run(debug=True)
