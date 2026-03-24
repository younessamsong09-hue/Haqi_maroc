import os

# 1. إعداد التصميم الجبار (Visual Shock)
css_content = """
:root { --gold: #daa520; --royal-green: #1e5631; --royal-red: #c1272d; }
body { background: #0a0a0a; color: white; font-family: 'Amiri', serif; direction: rtl; margin: 0; }
.hero { 
    background: linear-gradient(45deg, var(--royal-green), var(--royal-red));
    padding: 60px 20px; text-align: center; border-bottom: 5px solid var(--gold);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}
.gold-text { color: var(--gold); font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3); }
.grid { 
    display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); 
    gap: 20px; padding: 30px; 
}
.sector-card {
    background: rgba(255, 255, 255, 0.05); border: 1px solid var(--gold);
    border-radius: 15px; padding: 25px; text-align: center; transition: 0.4s;
}
.sector-card:hover { 
    background: var(--gold); color: black; transform: scale(1.05) rotate(1deg); 
}
.sector-card i { font-size: 40px; margin-bottom: 15px; }
"""

# 2. بناء الواجهة السيادية (HTML)
html_content = """
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/static/css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <title>المملكة المغربية - بوابة حقي</title>
</head>
<body>
    <div class="hero">
        <h1 class="gold-text">🇲🇦 بوابة حقي السيادية</h1>
        <p>الذكاء الاصطناعي في خدمة المواطن المغربي</p>
    </div>
    <div class="grid" id="main-grid">
        <div class="sector-card" onclick="alert('جاري تحليل آلاف الوثائق القانونية...')">
            <i class="fas fa-gavel"></i>
            <div>الدرع القانوني</div>
        </div>
        <div class="sector-card">
            <i class="fas fa-file-invoice-dollar"></i>
            <div>المالية الذكية</div>
        </div>
        <div class="sector-card">
            <i class="fas fa-passport"></i>
            <div>الحقيبة الرقمية</div>
        </div>
        <div class="sector-card">
            <i class="fas fa-hand-holding-heart"></i>
            <div>الرعاية الفائقة</div>
        </div>
    </div>
</body>
</html>
"""

# حفظ الملفات
os.makedirs('static/css', exist_ok=True)
os.makedirs('templates', exist_ok=True)

with open('static/css/style.css', 'w', encoding='utf-8') as f: f.write(css_content)
with open('templates/index.html', 'w', encoding='utf-8') as f: f.write(html_content)

print("🔥 تم استخراج التصميم الجبار بنجاح!")
