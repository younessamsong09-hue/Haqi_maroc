window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 8px solid #daa520; background: #0a0a0a; color: white;">
            <h3 style="color:#daa520;">🔍 محرك التحليل القانوني 2026</h3>
            <input type="text" id="ai-query" placeholder="ابحث عن (بناء، شركة، شكاية...)" 
                   style="width:100%; padding:15px; border-radius:10px; border:1px solid #daa520; background:#000; color:#fff; margin-bottom:15px;">
            <button class="btn-action" style="background:#daa520; color:black; font-weight:bold; width:100%; padding:15px; border:none; border-radius:10px; cursor:pointer;" 
                    onclick="deepAnalyze()">بدأ التحليل السيادي</button>
            <div id="ai-results" style="margin-top:20px; font-size:15px; border-top:1px solid #333; padding-top:15px;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:20px; background:transparent; color:#daa520; border:none; cursor:pointer;">🏠 العودة للرئيسية</button>
        </div>
    `;
};

async function deepAnalyze() {
    const q = document.getElementById('ai-query').value;
    const res = document.getElementById('ai-results');
    res.innerHTML = "⏳ جاري فحص النصوص القانونية في قاعدة بيانات تاوريرت هوب...";
    
    // محاكاة استخراج البيانات من قاعدة البيانات
    const db = {
        "بناء": "وفقاً للقانون 12-90، يجب وضع الملف لدى الجماعة المحلية، ويتطلب تصميماً هندسياً وشهادة ملكية.",
        "شركة": "المسطرة تتطلب سحب الشهادة السلبية، ثم تحرير النظام الأساسي والمصادقة عليه وتعيين المقر الاجتماعي.",
        "شكاية": "يتم توجيه الشكاية مباشرة لوكيل الملك، مع ذكر الوقائع والأدلة، بناءً على مقتضيات المسطرة الجنائية.",
        "بطاقة": "المستجدات تتطلب حجز موعد مسبق عبر البوابة الإلكترونية مع إحضار شهادة السكنى ورسوم التمبر."
    };

    setTimeout(() => {
        let found = "❌ لم نجد نصاً مباشراً، جرب كلمات مثل (بناء، شكاية، شركة).";
        for (let key in db) {
            if (q.includes(key)) found = `✅ <strong>مستجدات 2026:</strong> <br>${db[key]}`;
        }
        res.innerHTML = found;
    }, 1500);
}
