function openEditor(searchTerm) {
    const area = document.getElementById('editor-area');
    const grid = document.getElementById('quick-cards');
    
    grid.style.display = 'none';
    area.style.display = 'block';

    if (searchTerm === 'طلب') {
        renderRequestEditor(area);
    } else {
        area.innerHTML = `
            <div class="result-item" style="text-align:center;">
                <p>هذا القسم ( ${searchTerm} ) قيد التجهيز بمواد قانونية محينة.</p>
                <button class="btn-action" onclick="location.reload()">العودة للرئيسية</button>
            </div>`;
    }
}

function renderRequestEditor(container) {
    container.innerHTML = `
        <div class="result-item" style="border-right: 6px solid #1e5631; background: white; padding: 20px; border-radius: 15px;">
            <h3 style="color:#1e5631; margin-top:0;">✍️ محرر الطلبات الإدارية 🇲🇦</h3>
            <p style="font-size:13px; color:#666;">يرجى ملء المعلومات لإنشاء طلبك الخطي جاهزاً للطبع</p>
            <hr>
            <input type="text" id="fname" placeholder="الاسم الكامل" style="width:100%; padding:12px; margin:8px 0; border:1px solid #ddd; border-radius:8px;">
            <input type="text" id="cin" placeholder="رقم البطاقة الوطنية (CIN)" style="width:100%; padding:12px; margin:8px 0; border:1px solid #ddd; border-radius:8px;">
            <input type="text" id="city" placeholder="المدينة" style="width:100%; padding:12px; margin:8px 0; border:1px solid #ddd; border-radius:8px;">
            
            <label style="display:block; margin-top:10px; font-weight:bold;">نوع المباراة:</label>
            <select id="target" style="width:100%; padding:12px; margin:8px 0; border:1px solid #ddd; border-radius:8px; background:white;">
                <option value="الأمن الوطني">حراس الأمن (DGSN)</option>
                <option value="التعليم">مباراة التعليم (التعاقد)</option>
                <option value="القوات المساعدة">القوات المساعدة</option>
            </select>

            <button class="btn-action" onclick="buildDoc()" style="background:#1e5631; color:white; border:none; padding:15px; width:100%; border-radius:8px; font-weight:bold; cursor:pointer; margin-top:10px;">توليد نص الطلب 📄</button>
            
            <div id="preview" style="display:none; margin-top:20px; background:#f9f9f9; padding:20px; border:1px dashed #1e5631; white-space: pre-wrap; font-family: 'Courier New', monospace;"></div>
            
            <button onclick="location.reload()" style="background:#ccc; border:none; padding:10px; width:100%; border-radius:8px; margin-top:10px; cursor:pointer;">إلغاء والعودة</button>
        </div>
    `;
}

function buildDoc() {
    const name = document.getElementById('fname').value;
    const cin = document.getElementById('cin').value;
    const city = document.getElementById('city').value;
    const target = document.getElementById('target').value;
    
    if(!name || !cin) { alert('يرجى ملء الاسم ورقم البطاقة'); return; }

    const preview = document.getElementById('preview');
    preview.style.display = 'block';
    preview.innerText = `في ${city} بتاريخ: ${new Date().toLocaleDateString('ar-MA')}\n\nمن السيد: ${name}\nرقم ب.ت.و: ${cin}\nالعنوان: مدينة ${city}\n\nإلى السيد: مدير ${target}\n\nالموضوع: طلب اجتياز مباراة ${target}\n\nسلام تام بوجود مولانا الإمام،\n\nوبعد، يشرفني أن ألتمس من سيادتكم قبول ترشيحي لاجتياز المباراة المذكورة أعلاه. أحيطكم علماً أنني مغربي الجنسية، وحاصل على الشهادة المطلوبة، وتتوفر في كافة الشروط القانونية...\n\nوفي انتظار ردكم، تقبلوا فائق التقدير والاحترام.\n\nالتوقيع:\n${name}`;
}
