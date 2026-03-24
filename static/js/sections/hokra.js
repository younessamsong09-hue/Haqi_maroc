function renderHokraEditor(area) {
    area.innerHTML = `
        <div class="result-item" style="border-right: 6px solid #c1272d; background: white; padding: 20px; border-radius: 15px;">
            <h3 style="color:#c1272d; margin-top:0;">⚖️ محامي "حقي" الآلي (ضد الحكرة)</h3>
            <p style="font-size:13px; color:#666;">توليد شكاية رسمية لوكيل الملك بناءً على فصول القانون الجنائي المغربي.</p>
            <hr>
            <input type="text" id="h-name" placeholder="اسمك الكامل (المشتكي)">
            <input type="text" id="h-target" placeholder="الجهة المشتكى بها (مثلاً: قائد، شرطي، إدارة...)">
            <textarea id="h-details" rows="4" placeholder="اشرح ماذا حدث معك بالضبط (التاريخ والمكان)..."></textarea>
            
            <button class="btn-action" onclick="buildHokraDoc()" style="background:#c1272d; color:white; border:none; padding:15px; width:100%; border-radius:8px; font-weight:bold; cursor:pointer;">توليد الشكاية القانونية 📜</button>
            
            <div id="h-preview" style="display:none; margin-top:20px; background:#fff5f5; padding:20px; border:1px solid #c1272d; white-space: pre-wrap; font-size:14px;"></div>
            
            <button onclick="location.reload()" style="background:#eee; border:none; padding:10px; width:100%; border-radius:8px; margin-top:10px; cursor:pointer;">العودة للرئيسية</button>
        </div>
    `;
}

function buildHokraDoc() {
    const name = document.getElementById('h-name').value;
    const target = document.getElementById('h-target').value;
    const details = document.getElementById('h-details').value;
    const preview = document.getElementById('h-preview');
    
    if(!name || !details) { alert('المرجو ملء الخانات الأساسية'); return; }

    preview.style.display = 'block';
    preview.innerText = `إلى السيد: وكيل جلالة الملك لدى المحكمة الابتدائية\n\nالموضوع: شكاية من أجل الشطط في استعمال السلطة والمساس بالحقوق.\n\nلفائدة السيد: ${name}\nضد: ${target}\n\nسلام تام بوجود مولانا الإمام،\n\nأتشرف بعرض ما يلي: أنه بتاريخ المذكور، تعرضت لتعسف من طرف المشتكى به، حيث قام بـ: ${details}.\nوحيث إن هذه الأفعال تشكل خرقاً سافراً للقانون الجنائي المغربي وفصول الدستور التي تضمن كرامة المواطن...\nلذا، ألتمس منكم بكل احترام إعطاء أوامركم للضابطة القضائية قصد فتح بحث في الموضوع.\n\nإمضاء: ${name}`;
}
