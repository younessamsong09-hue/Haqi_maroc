#!/bin/bash

# 1. تهيئة البنية التحتية للموقع
mkdir -p templates static/css static/js/sections national

# 2. توليد قاعدة بيانات القطاعات (الرؤية السيادية)
cat << 'JSON' > national/quick_cards.json
[
  {"title": "الحماية القانونية", "icon": "fa-gavel", "search_term": "حكرة"},
  {"title": "الوثائق الرسمية", "icon": "fa-id-card", "search_term": "وثائق"},
  {"title": "المالية والرسوم", "icon": "fa-coins", "search_term": "مالية"},
  {"title": "مغاربة العالم", "icon": "fa-globe-africa", "search_term": "جالية"},
  {"title": "الرعاية الصحية", "icon": "fa-hospital-user", "search_term": "صحة"}
]
JSON

# 3. استخراج محرك الأجزاء المستقلة (تعدد الملفات)
cat << 'JS' > static/js/editor.js
async function openEditor(term) {
    const area = document.getElementById('editor-area');
    document.getElementById('quick-cards').style.display = 'none';
    area.style.display = 'block';
    area.innerHTML = '<div class="loader">جاري استدعاء القطاع السيادي...</div>';

    const map = {
        'حكرة': 'legal.js',
        'وثائق': 'docs.js',
        'مالية': 'finance.js',
        'جالية': 'expats.js',
        'صحة': 'health.js'
    };

    if (map[term]) {
        const script = document.createElement('script');
        script.src = `/static/js/sections/${map[term]}`;
        script.onload = () => window.renderSection(area);
        document.body.appendChild(script);
    }
}
JS

# 4. توليد "قطاع الحماية القانونية" (مثال للملفات المستقلة)
cat << 'JS' > static/js/sections/legal.js
window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 8px solid #c1272d;">
            <h3 style="color:#c1272d;">⚖️ قطاع الحماية القانونية (ضد الحكرة) 🇲🇦</h3>
            <p>نموذج شكاية رسمية لوكيل الملك بناءً على فصول القانون الجنائي.</p>
            <textarea id="complaint" placeholder="اكتب تفاصيل الواقعة هنا..." style="width:100%; height:100px;"></textarea>
            <button class="btn-action" style="background:#c1272d; color:white; width:100%; padding:15px; border:none; border-radius:10px; cursor:pointer;">توليد الشكاية القانونية</button>
            <button onclick="location.reload()" style="width:100%; margin-top:10px; background:#eee; border:none; padding:10px; border-radius:10px;">رجوع للرئيسية</button>
        </div>`;
};
JS

# 5. بناء الواجهة الوطنية الكبرى (HTML)
cat << 'HTML' > templates/index.html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <title>حقي 🇲🇦 Haqi</title>
</head>
<body>
    <div class="header">
        <h1>المملكة المغربية</h1>
        <h2>بوابة حقي الرقمية (Haqi Maroc)</h2>
        <p>المنصة الذكية للقطاعات السيادية</p>
    </div>
    <div class="cards-grid" id="quick-cards"></div>
    <div id="editor-area" style="max-width:600px; margin:auto; display:none;"></div>
    <script src="/static/js/editor.js"></script>
    <script>
        fetch('/get_cards').then(r => r.json()).then(data => {
            document.getElementById('quick-cards').innerHTML = data.map(c => 
                `<div class="card" onclick="openEditor('${c.search_term}')">
                    <i class="fas ${c.icon}"></i>
                    <div>${c.title}</div>
                </div>`).join('');
        });
    </script>
</body>
</html>
HTML

echo "✅ تم استخراج الموقع بالمواصفات الجبارة بنجاح!"
