function toggleChat() {
    const win = document.getElementById('chat-win');
    win.style.display = win.style.display === 'flex' ? 'none' : 'flex';
}

function sendMsg() {
    const input = document.getElementById('user-msg');
    const box = document.getElementById('msg-box');
    const msg = input.value;
    if(!msg) return;

    box.innerHTML += `<div style="text-align:left; color:#daa520; margin-top:10px;">👤 أنت: ${msg}</div>`;
    input.value = '';

    setTimeout(() => {
        let reply = "سمح ليا، مافهمتش سؤالك مزيان. واش بغيتي تعرف على (الوثائق، القانون، أو المساطر)؟";
        if(msg.includes("وثائق")) reply = "بخصوص الوثائق، واش كتقصد البطاقة الوطنية ولا الباسبور؟";
        if(msg.includes("شكاية")) reply = "إلى بغيتي دير شكاية، خاصك تمشي للدرع القانوني وتختار نوع التظلم.";
        if(msg.includes("تاوريرت")) reply = "مرحباً بيك! حنا هنا باش نسهلو الخدمات على ولاد مدينتنا تاوريرت.";
        
        box.innerHTML += `<div style="text-align:right; color:#fff; margin-top:10px;">🤖 حقي: ${reply}</div>`;
        box.scrollTop = box.scrollHeight;
    }, 1000);
}
function rate(n) {
    const stars = document.querySelectorAll('.stars i');
    const msg = document.getElementById('rate-msg');
    stars.forEach((s, i) => {
        s.classList.toggle('active', i < n);
    });
    msg.innerText = "شكراً لتقييمك! صوتك يساعد في تطوير خدمات تاوريرت.";
}
