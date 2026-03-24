from flask import Flask, render_template, jsonify
import os

app = Flask(__name__, 
            template_folder='templates', 
            static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_news')
def get_news():
    return jsonify({"news": "🔔 بوابة حقي: جاري تحديث الأنباء السيادية لعام 2026... | 🇲🇦 خدمة المواطن أولويتنا"})

if __name__ == '__main__':
    app.run(debug=True)
