async function openEditor(term) {
    const area = document.getElementById('editor-area');
    const cards = document.getElementById('quick-cards');
    
    cards.style.display = 'none';
    area.style.display = 'block';
    area.innerHTML = '<div style="color:#daa520; text-align:center; padding:50px;">⌛ جاري استدعاء البيانات السيادية...</div>';

    const fileMap = {
        'حكرة': 'legal.js',
        'وثائق': 'docs.js',
        'مالية': 'finance.js',
        'جالية': 'expats.js',
        'صحة': 'health.js'
    };

    if (fileMap[term]) {
        // حذف أي سكربت قديم لتجنب التداخل
        const oldScript = document.getElementById('section-script');
        if (oldScript) oldScript.remove();

        const script = document.createElement('script');
        script.id = 'section-script';
        script.src = `/static/js/sections/${fileMap[term]}?v=${Date.now()}`; // كسر التخزين المؤقت
        script.onload = () => {
            if (window.renderSection) window.renderSection(area);
        };
        document.body.appendChild(script);
    }
}
