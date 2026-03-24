from flask import Flask, render_template, jsonify
import requests
from bs4 import BeautifulSoup

app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_news')
def get_news():
    try:
        # محاكاة جلب الأخبار الرسمية (يمكن تطويرها لربطها بـ API حقيقي)
        news_list = [
            "🔔 تحديث: رقمنة شاملة للمساطر الإدارية بجهة الشرق 2026",
            "📜 جديد: تبسيط شروط الاستثمار للمغاربة المقيمين بالخارج",
            "⚖️ قضائي: إطلاق منصة الشكايات الإلكترونية الموحدة",
            "🛂 عاجل: تمديد صلاحية جواز السفر المغربي لعشر سنوات"
        ]
        return jsonify({"news": " | ".join(news_list)})
    except:
        return jsonify({"news": "جاري تحديث الأنباء السيادية..."})

if __name__ == '__main__':
    app.run(debug=True)
