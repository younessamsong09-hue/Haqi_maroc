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
    # أخبار ترفع المعنويات وتؤكد الحقوق
    news = "🔔 جديد: إطلاق محرك العدالة لرفع التظلمات رقمياً | 📜 المادة 54: الحق في الوصول للمعلومة مضمون | ⚖️ تاوريرت تقود التغيير الرقمي"
    return jsonify({"news": news})

if __name__ == '__main__':
    app.run(debug=True)
