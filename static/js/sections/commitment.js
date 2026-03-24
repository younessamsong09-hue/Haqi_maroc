function renderCommitment(area) {
    area.innerHTML = `
        <div class="result-item" style="border-right: 6px solid #c1272d;">
            <h3>✍️ محرر الالتزام القانوني 🇲🇦</h3>
            <input type="text" id="name" placeholder="الاسم الكامل">
            <input type="text" id="cin" placeholder="رقم البطاقة الوطنية">
            <textarea id="subject" placeholder="موضوع الالتزام (مثلاً: التزام بالسكن)"></textarea>
            <button class="btn-action" onclick="generateCommitment()">توليد الوثيقة</button>
            <div id="output" style="display:none; margin-top:15px; background:#eee; padding:10px;"></div>
            <button onclick="location.reload()" style="margin-top:10px;">عودة</button>
        </div>`;
}
