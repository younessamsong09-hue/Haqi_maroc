function renderRequestEditor(area) {
    return `
        <div class="result-item">
            <h3 style="color:var(--moroccan-green);">✍️ محرر الطلبات الإدارية 🇲🇦</h3>
            <p>صياغة قانونية احترافية تتوافق مع معايير الإدارة المغربية.</p>
            <hr>
            <input type="text" id="name" placeholder="الاسم الكامل" style="width:100%; padding:10px; margin:5px 0;">
            <button class="btn-action" style="background:var(--moroccan-green); color:white; border:none; padding:15px; width:100%; border-radius:10px; cursor:pointer;" onclick="alert('جاري توليد الطلب بعبارات وطنية...')">توليد الطلب الخطي</button>
            <button onclick="location.reload()" style="width:100%; margin-top:10px; background:#eee; border:none; padding:10px; border-radius:10px;">رجوع</button>
        </div>
    `;
}
