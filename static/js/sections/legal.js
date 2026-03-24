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
