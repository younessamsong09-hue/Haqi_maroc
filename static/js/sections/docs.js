window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 5px solid #daa520; background: #111; color: white; padding: 15px;">
            <h3 style="color:#daa520;">📂 الحقيبة الرقمية الشاملة</h3>
            <p>اختر الوثيقة لمعرفة المطلوب بدقة:</p>
            <select id="doc-select" onchange="showDoc()" style="width:100%; padding:10px; background:#000; color:#daa520; border:1px solid #daa520;">
                <option value="">-- اختر الوثيقة --</option>
                <option value="id">البطاقة الوطنية CNIE</option>
                <option value="pass">جواز السفر</option>
                <option value="res">شهادة السكنى</option>
            </select>
            <div id="doc-res" style="margin-top:15px; padding:10px; border-radius:5px;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:15px; background:none; border:none; color:#666;">🏠 رجوع</button>
        </div>`;
};
function showDoc() {
    const v = document.getElementById('doc-select').value;
    const r = document.getElementById('doc-res');
    const m = {
        'id': "🆔 **المطلوب:** صور، 75درهم تمبر، شهادة السكنى (أو وصل الماء/الكهرباء).",
        'pass': "🛂 **المطلوب:** حجز موعد، 500درهم تمبر إلكتروني، نسخة من البطاقة الوطنية.",
        'res': "🏠 **المطلوب:** حضور الشخص، نسخة من عقد الكراء أو ملكية السكن."
    };
    r.innerHTML = m[v] || "";
}
