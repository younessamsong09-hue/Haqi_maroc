from flask import Flask, render_template, send_from_directory
import os

# إعداد التطبيق ليعرف المسارات الجديدة للمجلدات
app = Flask(__name__, 
            template_folder='templates', 
            static_folder='static')

@app.route('/')
def index():
    # استدعاء الصفحة الرئيسية من مجلد templates الجديد
    return render_template('index.html')

@app.route('/static/<path:path>')
def send_static(path):
    # تأمين الوصول لملفات CSS و JS المنظمة
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True)
