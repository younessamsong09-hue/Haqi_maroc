function renderEditor(container) {
    container.innerHTML = `
        <div class="result-item" style="border-right-color: #1e5631;">
            <button onclick="goBack()" style="float:left; background:none; border:none; cursor:pointer;"><i class="fas fa-times"></i></button>
            <h3 style="color:#1e5631;">✍️ محرر الطلبات الخطية (الأمن/التعليم)</h3>
            <input type="text" id="fname" placeholder="الاسم الكامل">
            <input type="text" id="cin" placeholder="رقم البطاقة الوطنية">
            <input type="text" id="address" placeholder="العنوان السكني">
            <select id="target" style="width:100%; padding:10px; margin:10px 0; border-radius:8px;">
                <option value="الأمن الوطني">مباراة الأمن الوطني</option>
                <option value="التعليم">مباراة التعليم</option>
            </select>
            <button class="btn-action" onclick="buildDoc()">توليد الطلب (PDF)</button>
            <div id="preview" style="display:none; margin-top:20px; background:#fff; padding:15px; border:1px solid #ccc; font-size:14px; line-height:1.6;"></div>
        </div>
    `;
}

function buildDoc() {
    const name = document.getElementById('fname').value;
    const target = document.getElementById('target').value;
    const preview = document.getElementById('preview');
    
    preview.style.display = 'block';
    preview.innerText = `لفائدة السيد: ${name}\nإلى السيد: مدير ${target}\n\nالموضوع: طلب اجتياز مباراة...\n\nأتشرف بأن أتقدم لسيادتكم بطلبي هذا...`;
}
