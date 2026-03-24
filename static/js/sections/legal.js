window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 5px solid #daa520; background: #111; color: white; padding: 15px;">
            <h3 style="color:#daa520;">⚖️ الدرع القانوني السيادي</h3>
            <div style="display:grid; grid-template-columns: 1fr; gap:10px;">
                <button onclick="lawDetail('hagra')" style="padding:15px; background:#222; color:#daa520; border:1px solid #daa520; border-radius:10px; cursor:pointer;">⚠️ مولد شكاية "الحكرة"</button>
                <button onclick="lawDetail('family')" style="padding:15px; background:#222; color:#daa520; border:1px solid #daa520; border-radius:10px; cursor:pointer;">⚖️ مستشار مدونة الأسرة</button>
            </div>
            <div id="law-res" style="margin-top:15px; font-size:14px; background:#000; padding:10px; border-radius:5px;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:15px; background:none; border:none; color:#666;">🏠 رجوع</button>
        </div>`;
};
function lawDetail(t) {
    const d = {
        'hagra': "📝 **نموذج شكاية:** توضع لدى وكيل الملك. المضمون: 'بناء على الفصل 231، أتقدم بصفتي... تظلم ضد...' جاري تجهيز الملف الكامل لك.",
        'family': "📜 **مدونة الأسرة:** أحدث المساطر لعام 2026 بشأن النفقة والصلح والولاية القانونية المحدثة."
    };
    document.getElementById('law-res').innerHTML = d[t];
}
