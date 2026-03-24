import json
import os

# مواصفات القطاعات السيادية للموقع المغربي
sections = [
    {"title": "الحماية القانونية", "icon": "fa-gavel", "term": "حكرة", "file": "legal.js"},
    {"title": "الوثائق الرسمية", "icon": "fa-id-card", "term": "وثائق", "file": "docs.js"},
    {"title": "المالية والرسوم", "icon": "fa-coins", "term": "مالية", "file": "finance.js"},
    {"title": "مغاربة العالم", "icon": "fa-globe-africa", "term": "جالية", "file": "expats.js"},
    {"title": "الرعاية الصحية", "icon": "fa-hospital-user", "term": "صحة", "file": "health.js"}
]

# توليد ملف البطاقات الرئيسي
with open('national/quick_cards.json', 'w', encoding='utf-8') as f:
    json.dump([{"title": s['title'], "icon": s['icon'], "search_term": s['term']} for s in sections], f, ensure_ascii=False)

# توليد الملفات المستقلة لكل قطاع (تعدد الملفات)
for s in sections:
    path = f"static/js/sections/{s['file']}"
    content = f"""
window.renderSection = (area) => {{
    area.innerHTML = `
        <div class="result-item" style="border-right: 8px solid #1e5631;">
            <h3 style="color:#1e5631;">🇲🇦 قطاع {s['title']}</h3>
            <p>مرحباً بك في قسم {s['title']}. هذا الجزء يعمل الآن من ملف مستقل: {s['file']}</p>
            <button class="btn-action" onclick="location.reload()" style="background:#1e5631; color:white; border:none; padding:10px; width:100%; border-radius:8px;">العودة للرئيسية</button>
        </div>`;
}};"""
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print("✅ تم استخراج جميع القطاعات السيادية في ملفات مستقلة!")
