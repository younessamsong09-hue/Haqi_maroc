function openJusticePortal() {
    const area = document.getElementById('service-area');
    document.getElementById('quick-cards').style.display = 'none';
    area.style.display = 'block';
    area.innerHTML = `
        <div style="background:#111; padding:20px; border:2px solid #c1272d; border-radius:15px; color:white;">
            <h2 style="color:#daa520; text-align:center;">⚖️ مولد الشكايات السيادي</h2>
            <p>وصف الظلم الذي تعرضت له (مثلاً: تماطل موظف، طلب رشوة، اعتداء):</p>
            <textarea id="case-desc" style="width:100%; height:150px; background:#000; color:white; border:1px solid #daa520; padding:10px;"></textarea>
            <button onclick="generateComplaint()" style="width:100%; margin-top:15px; padding:15px; background:#daa520; color:black; font-weight:bold; border:none; border-radius:10px; cursor:pointer;">صياغة الشكاية بقوة القانون</button>
            <div id="complaint-result" style="margin-top:20px; white-space: pre-wrap; font-family: 'Courier New', Courier, monospace; background:#fff; color:#000; padding:15px; display:none;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:15px; background:none; color:#666; border:none;">🏠 العودة للرئيسية</button>
        </div>`;
}

function generateComplaint() {
    const desc = document.getElementById('case-desc').value;
    const res = document.getElementById('complaint-result');
    res.style.display = "block";
    res.innerText = `إلى السيد: وكيل الملك لدى المحكمة الابتدائية \nالموضوع: شكاية بخصوص تظلم \n\nسلام تام بوجود مولانا الإمام،\nأنا الموقع أسفله... أتقدم إليكم بهذه الشكاية ضد... حيث أنني تعرضت لـ (${desc})...\nوحيث أن هذا الفعل يعاقب عليه القانون المغربي...\nلذا ألتمس منكم بكل احترام فتح تحقيق في النازلة.\n\nحرر بـ تاوريرت في: ${new Date().toLocaleDateString()}`;
}
