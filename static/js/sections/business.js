function renderBusinessEditor(area) {
    return `
        <div class="result-item" style="border-right: 6px solid #daa520;">
            <h3 style="color:#daa520;">🏢 محرر رخص الأنشطة التجارية 🇲🇦</h3>
            <p style="font-size:13px;">توليد طلب استغلال الملك العمومي أو رخصة فتح محل تجاري.</p>
            <hr>
            <input type="text" id="b-owner" placeholder="الاسم الكامل لصاحب المشروع">
            <input type="text" id="b-type" placeholder="نوع النشاط (مثلاً: مقهى، حلاقة، جزارة...)">
            <input type="text" id="b-loc" placeholder="عنوان المحل التجاري">
            <button class="btn-action" style="background:#daa520;" onclick="buildBusinessDoc()">توليد طلب الرخصة</button>
            <div id="b-preview" style="display:none; margin-top:20px; background:#fff; padding:15px; border:1px dashed #daa520; white-space: pre-wrap;"></div>
            <button onclick="location.reload()" style="margin-top:10px;">رجوع</button>
        </div>
    `;
}

function buildBusinessDoc() {
    const owner = document.getElementById('b-owner').value;
    const type = document.getElementById('b-type').value;
    const loc = document.getElementById('b-loc').value;
    const preview = document.getElementById('b-preview');
    
    preview.style.display = 'block';
    preview.innerText = `إلى السيد: رئيس المجلس الجماعي لمدينة تاوريرت\n\nالموضوع: طلب الحصول على رخصة فتح ${type}\n\nأتشرف أنا الموقع أسفله، ${owner}، القاطن بـ... أن ألتمس منكم منحي رخصة لمزاولة نشاط ${type} بالمحل الكائن بـ ${loc}...\n\nفي انتظار قراركم، تقبلوا فائق الاحترام.\n\nالتوقيع: ${owner}`;
}
