window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 5px solid #daa520; background: #111; color: white; padding: 15px;">
            <h3 style="color:#daa520;">💰 الحاسبة المالية السيادية</h3>
            <p>احسب رسوم الخدمات فوراً:</p>
            <input type="number" id="amount" placeholder="أدخل القيمة بالدرهم" style="width:100%; padding:10px; margin-bottom:10px; background:#000; border:1px solid #daa520; color:white;">
            <button onclick="calcTax()" style="width:100%; padding:15px; background:#daa520; color:black; font-weight:bold; border:none; border-radius:10px;">حساب الرسوم</button>
            <div id="tax-res" style="margin-top:15px;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:15px; background:none; border:none; color:#666;">🏠 رجوع</button>
        </div>`;
};
function calcTax() {
    const a = document.getElementById('amount').value;
    const res = document.getElementById('tax-res');
    res.innerHTML = `💵 الرسوم الجمركية المتوقعة (تقدير): ${a * 0.20} درهم <br> 🏦 واجبات التسجيل: ${a * 0.04} درهم`;
}
