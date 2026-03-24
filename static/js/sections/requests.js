function renderRequestEditor(area) {
    return `
        <div class="result-item" style="border-right: 8px solid #1e5631;">
            <div style="text-align:center;">
                <p style="margin:0; font-weight:bold;">المملكة المغربية</p>
                <p style="margin:0; font-size:12px;">وزارة الداخلية / الجماعة المحلية</p>
            </div>
            <hr>
            <h3 style="color:#1e5631; text-align:center;">✍️ محرر المراسلات الرسمية</h3>
            <input type="text" id="r-name" placeholder="الاسم الكامل للموقع" style="width:100%; padding:10px; margin:10px 0;">
            <input type="text" id="r-city" placeholder="المدينة (مثلاً: تاوريرت)" style="width:100%; padding:10px; margin:5px 0;">
            <textarea id="r-subject" rows="4" placeholder="موضوع الطلب بالتفصيل..." style="width:100%; padding:10px; margin:10px 0;"></textarea>
            
            <button class="btn-action" style="background:#1e5631; color:white; padding:15px; width:100%; border-radius:10px; border:none; cursor:pointer;" onclick="generateOfficialDoc()">توليد الوثيقة بالخاتم المغربي</button>
            
            <div id="r-preview" style="display:none; margin-top:20px; padding:20px; background:#fff; border:1px solid #1e5631; line-height:1.8; font-family: 'Times New Roman', serif;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:10px; padding:10px; border:none; border-radius:10px; cursor:pointer;">رجوع للرئيسية</button>
        </div>
    `;
}

function generateOfficialDoc() {
    const name = document.getElementById('r-name').value;
    const city = document.getElementById('r-city').value;
    const subject = document.getElementById('r-subject').value;
    const preview = document.getElementById('r-preview');
    
    preview.style.display = 'block';
    preview.innerText = `المملكة المغربية\nحرر بـ ${city} في: ${new Date().toLocaleDateString('ar-MA')}\n\nإلى السيد: .................................\n\nالموضوع: ${subject}\n\nسلام تام بوجود مولانا الإمام،\n\nوبعد، يشرفني أن أتقدم لسيادتكم بطلبي هذا المذكور أعلاه...\n(نص الطلب القانوني)... \n\nوفي انتظار ردكم، تفضلوا بقبول أسمى عبارات التقدير والاحترام.\n\nإمضاء: ${name}\n\nالله - الوطن - الملك`;
}
