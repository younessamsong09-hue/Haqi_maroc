window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 8px solid #daa520; background: #0a0a0a; color: white;">
            <h3 style="color:#daa520;">⚖️ الدرع القانوني - دليل المواطن المغربي</h3>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                <button onclick="getLaw('hagra')" style="padding:10px; background:#222; color:#fff; border:1px solid #daa520; border-radius:8px;">⚖️ شكاية الشطط</button>
                <button onclick="getLaw('family')" style="padding:10px; background:#222; color:#fff; border:1px solid #daa520; border-radius:8px;">🏠 مدونة الأسرة</button>
                <button onclick="getLaw('labor')" style="padding:10px; background:#222; color:#fff; border:1px solid #daa520; border-radius:8px;">💼 قانون الشغل</button>
                <button onclick="getLaw('property')" style="padding:10px; background:#222; color:#fff; border:1px solid #daa520; border-radius:8px;">📜 قضايا التحفيظ</button>
            </div>
            <div id="law-output" style="margin-top:20px; padding:15px; background:#111; border-radius:10px; font-size:14px; line-height:1.6;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:20px; color:#daa520; background:none; border:none;">🏠 العودة</button>
        </div>
    `;
};

function getLaw(type) {
    const data = {
        'hagra': "🔹 **شكاية الشطط:** تودع لدى مؤسسة الوسيط أو وكيل الملك. المرجع: الفصل 231 من القانون الجنائي.",
        'family': "🔹 **مدونة الأسرة:** إجراءات الصلح، النفقة، والحضانة وفق آخر تعديلات 2026.",
        'labor': "🔹 **قانون الشغل:** حقوق الطرد التعسفي، ساعات العمل، والحد الأدنى للأجور (SMIG).",
        'property': "🔹 **التحفيظ العقاري:** مسطرة التحديد الإداري والتعرضات وفق قانون 14-07."
    };
    document.getElementById('law-output').innerHTML = data[type] || "جاري البحث...";
}
