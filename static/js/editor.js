function openEditor(term) {
    const area = document.getElementById('editor-area');
    document.getElementById('quick-cards').style.display = 'none';
    area.style.display = 'block';

    if (term === 'طلب') {
        renderRequestEditor(area);
    } else if (term === 'حكرة') {
        // استدعاء ملف الحكرة ديناميكياً
        const script = document.createElement('script');
        script.src = '/static/js/sections/hokra.js';
        script.onload = () => renderHokraEditor(area);
        document.body.appendChild(script);
    } else {
        area.innerHTML = '<div class="result-item">هذا القسم سيتم ربطه بملفه المستقل قريباً.</div>';
    }
}
