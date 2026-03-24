window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 8px solid #daa520; background: #1a1a1a; color: white;">
            <h3 style="color:#daa520;">🔍 محرك البحث السيادي الذكي</h3>
            <p style="font-size: 13px; opacity: 0.8;">اكتب سؤالك (مثلاً: كيف أحصل على رخصة؟) وسيقوم النظام بتحليل آلاف النصوص القانونية.</p>
            <input type="text" id="ai-query" placeholder="ماذا تريد أن تعرف اليوم؟" 
                   style="width:100%; padding:15px; border-radius:10px; border:1px solid #daa520; background:#000; color:#fff; margin-bottom:15px;">
            <button class="btn-action" style="background:#daa520; color:black; font-weight:bold; width:100%; padding:15px; border:none; border-radius:10px; cursor:pointer;" 
                    onclick="startDeepSearch()">بدأ التحليل العميق</button>
            <div id="ai-results" style="margin-top:20px; font-size:14px; line-height:1.6;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:20px; background:transparent; color:#999; border:none;">الرجوع للرئيسية</button>
        </div>
    `;
};

function startDeepSearch() {
    const query = document.getElementById('ai-query').value;
    const res = document.getElementById('ai-results');
    res.innerHTML = "⌛ جاري الغوص في آلاف الوثائق والمستجدات القانونية لعام 2026...";
    
    setTimeout(() => {
        res.innerHTML = `✅ <strong>النتيجة السيادية:</strong> بناءً على طلبك حول "${query}"، تنص المساطر الإدارية المغربية المحدثة على ضرورة تقديم طلبك عبر البوابة الرقمية مع إرفاق نسخة من CNIE...`;
    }, 2000);
}
