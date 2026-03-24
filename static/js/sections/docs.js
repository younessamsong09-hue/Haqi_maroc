window.renderSection = (area) => {
    area.innerHTML = `
        <div class="result-item" style="border-right: 8px solid #0056b3; background: #0a0a0a; color: white;">
            <h3 style="color:#0056b3;">📂 الحقيبة الرقمية للوثائق</h3>
            <ul style="list-style:none; padding:0;">
                <li onclick="alert('المتطلبات: صور، 75درهم تمبر، شهادة السكنى')" style="padding:15px; background:#111; margin-bottom:5px; border-radius:8px;">🆔 البطاقة الوطنية (CNIE)</li>
                <li onclick="alert('المتطلبات: حجز موعد، 500درهم، نسخة الحالة المدنية')" style="padding:15px; background:#111; margin-bottom:5px; border-radius:8px;">🛂 جواز السفر المغربي</li>
                <li onclick="alert('المتطلبات: عقد كراء أو وصل كهرباء + حضور الشخص')" style="padding:15px; background:#111; margin-bottom:5px; border-radius:8px;">🏠 شهادة السكنى</li>
            </ul>
            <button onclick="location.reload()" style="width:100%; margin-top:10px; color:#0056b3; background:none; border:none;">الرجوع</button>
        </div>
    `;
};
