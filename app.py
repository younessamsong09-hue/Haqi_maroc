from flask import Flask, render_template, send_from_directory
import os

app = Flask(__name__, 
            template_folder='templates', 
            static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

# إضافة مسار لجلب الأخبار لضمان عدم تعطل الشريط
@app.route('/get_news')
def get_news():
    return {"news": "🔔 مستجدات 2026: تحديث الخدمات الرقمية بجهة الشرق | 🛂 تبسيط مساطر الجواز | ⚖️ منصة الشكايات الموحدة"}

if __name__ == '__main__':
    app.run(debug=True)
