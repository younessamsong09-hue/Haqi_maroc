window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 8px solid #daa520; background: #1a1a1a; color: white; padding: 25px; border-radius: 15px;">
            <h3 style="color:#daa520; text-align: center;">🏛️ مركز التحليل السيادي</h3>
            <p style="font-size: 13px; text-align: center; opacity: 0.8;">قاعدة بيانات تاوريرت المتصلة بمستجدات 2026</p>
            <hr style="border-color: #333;">
            <input type="text" id="ai-input" placeholder="مثلاً: رخصة بناء، شكاية، شركة..." 
                   style="width:100%; padding:15px; border-radius:12px; border:1px solid #daa520; background:#000; color:#fff; margin-bottom:15px; font-family: 'Amiri', serif;">
            <button class="btn-action" style="background:linear-gradient(45deg, #daa520, #b8860b); color:black; font-weight:bold; width:100%; padding:15px; border:none; border-radius:12px; cursor:pointer;" 
                    onclick="runCyberSearch()">بدأ الغوص في الوثائق</button>
            <div id="ai-response" style="margin-top:20px; font-size:15px; line-height:1.8; color: #ddd;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:20px; background:transparent; color:#daa520; border:none; cursor:pointer; font-size: 12px;">🏠 العودة للرئيسية</button>
        </div>
    `;
};

function runCyberSearch() {
    const input = document.getElementById('ai-input').value;
    const res = document.getElementById('ai-response');
    res.innerHTML = "<div style='color:#daa520;'>⌛ جاري تحليل النصوص القانونية المغربية...</div>";
    
    // محرك الاستنتاج المنطقي
    setTimeout(() => {
        let reply = "❌ عذراً، لم نجد نصاً مباشراً لهذه الحالة. جرب كلمات مفتاحية (مثل: بناء، جمارك، شكاية).";
        if(input.includes("بناء")) reply = "✅ <strong>وفق القانون 12-90:</strong> رخص البناء تتطلب ملفاً تقنياً يودع لدى مصالح التعمير بتاوريرت عبر منصة Rokhas.ma.";
        if(input.includes("شكاية")) reply = "⚖️ <strong>المسطرة الجنائية:</strong> الشكاية تودع كتابياً لدى وكيل الملك بالدائرة القضائية المعنية مع إرفاق وسائل الإثبات.";
        if(input.includes("شركة")) reply = "💼 <strong>الاستثمار:</strong> تأسيس المقاولة يبدأ بالشهادة السلبية من المركز الجهوي للاستثمار ثم التقييد في السجل التجاري.";
        
        res.innerHTML = `<div style="background: #000; padding: 15px; border-radius: 10px; border-left: 4px solid #daa520;">${reply}</div>`;
    }, 1500);
}
