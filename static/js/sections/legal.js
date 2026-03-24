
window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 8px solid #1e5631;">
            <h3 style="color:#1e5631;">🇲🇦 قطاع الحماية القانونية</h3>
            <p>مرحباً بك في قسم الحماية القانونية. هذا الجزء يعمل الآن من ملف مستقل: legal.js</p>
            <button class="btn-action" onclick="location.reload()" style="background:#1e5631; color:white; border:none; padding:10px; width:100%; border-radius:8px;">العودة للرئيسية</button>
        </div>`;
};