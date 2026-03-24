#!/bin/bash

# 1. تهيئة المجلدات بنظام تعدد الملفات
mkdir -p templates static/css static/js/sections

# 2. إنشاء الهوية البصرية المغربية (CSS)
cat << 'CSS' > static/css/style.css
:root { --red: #c1272d; --green: #1e5631; }
body { font-family: 'Segoe UI'; direction: rtl; background: #f9f9f9; margin: 0; }
.header { background: var(--green); color: white; padding: 25px; text-align: center; border-radius: 0 0 30px 30px; }
.card { background: white; border-radius: 15px; padding: 20px; text-align: center; box-shadow: 0 4px 10px rgba(0,0,0,0.1); margin: 10px; cursor: pointer; }
CSS

# 3. إنشاء الواجهة الرئيسية بالعلم المغربي
cat << 'HTML' > templates/index.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <link rel="stylesheet" href="/static/css/style.css">
    <title>حقي 🇲🇦 Haqi</title>
</head>
<body>
    <div class="header"><h1>المملكة المغربية 🇲🇦</h1><p>بوابة حقي الرقمية</p></div>
    <div id="quick-cards"></div>
    <div id="editor-area"></div>
    <script src="/static/js/editor.js"></script>
</body>
</html>
HTML

echo "✅ تم استخراج هيكل الموقع بنجاح!"
