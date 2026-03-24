function openJusticePortal() {
    const area = document.getElementById('service-area');
    document.getElementById('quick-cards').style.display = 'none';
    area.style.display = 'block';
    area.innerHTML = `
        <div style="background:#111; padding:20px; border:2px solid #c1272d; border-radius:15px; color:white;">
            <h2 style="color:#daa520; text-align:center;">⚖️ محرك العدالة - التوثيق الرقمي</h2>
            <p>صف الواقعة بدقة (المكان، الوقت، ونوع الظلم):</p>
            <textarea id="case-desc" style="width:100%; height:120px; background:#000; color:white; border:1px solid #daa520; padding:10px;"></textarea>
            
            <div id="location-box" style="margin:10px 0; padding:10px; background:#222; border-radius:8px; font-size:12px;">
                📍 لم يتم تحديد الموقع بعد...
            </div>
            
            <button onclick="getLocation()" style="width:100%; margin-bottom:10px; padding:10px; background:#1e5631; color:white; border:none; border-radius:8px; cursor:pointer;">🌍 تفعيل البصمة الجغرافية (GPS)</button>
            <button onclick="generateComplaint()" style="width:100%; padding:15px; background:#daa520; color:black; font-weight:bold; border:none; border-radius:10px; cursor:pointer;">صياغة الشكاية السيادية</button>
            
            <div id="complaint-result" style="margin-top:20px; white-space: pre-wrap; font-family: 'Courier New', monospace; background:#fff; color:#000; padding:15px; display:none; border:2px solid #000;"></div>
            <button onclick="location.reload()" style="width:100%; margin-top:15px; background:none; color:#666; border:none;">🏠 رجوع</button>
        </div>`;
}

let userCoords = "غير متوفر";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
            userCoords = `خط العرض: ${pos.coords.latitude}, خط الطول: ${pos.coords.longitude}`;
            document.getElementById('location-box').innerHTML = `✅ تم توثيق الموقع بنجاح: <br>${userCoords}`;
            document.getElementById('location-box').style.color = "#daa520";
        });
    } else {
        alert("المتصفح لا يدعم تحديد الموقع.");
    }
}

function generateComplaint() {
    const desc = document.getElementById('case-desc').value;
    const res = document.getElementById('complaint-result');
    res.style.display = "block";
    res.innerText = `إلى السيد: وكيل الملك لدى المحكمة الابتدائية \nالموضوع: شكاية بتظلم معززة بالتوثيق الرقمي \n\nسلام تام بوجود مولانا الإمام،\nأنا الموقع أسفله... أحيطكم علماً بأنني تعرضت لـ: (${desc}).\n\nتاريخ الواقعة: ${new Date().toLocaleString()}\nالإحداثيات الجغرافية (GPS): ${userCoords}\n\nوحيث أن هذا الفعل يضرب في عمق دولة الحق والقانون، ألتمس منكم التدخل لإنصافي.\n\nتوقيع صاحب الحق: ....................\n(تم التوليد عبر بوابة حقي السيادية)`;
    res.scrollTop = 0;
}

async function searchLaw() {
    const query = document.getElementById('law-search').value.toLowerCase();
    const resDiv = document.getElementById('law-result');
    if(query.length < 2) { resDiv.innerHTML = ""; return; }

    const response = await fetch('/static/data/laws.json');
    const laws = await response.json();
    
    const found = laws.find(l => l.keyword.includes(query) || l.content.includes(query));
    
    if(found) {
        resDiv.innerHTML = `<b style="color:#daa520;">${found.title}:</b><br>${found.content}`;
    } else {
        resDiv.innerHTML = "❌ لم يتم العثور على نص قانوني مباشر. جرب كلمات أخرى.";
    }
}
