async function openEditor(term) {
    const area = document.getElementById('editor-area');
    document.getElementById('quick-cards').style.display = 'none';
    area.style.display = 'block';
    area.innerHTML = '<div class="loader">جاري استدعاء القطاع السيادي...</div>';

    const map = {
        'ذكاء': 'intelligence.js',
        'حكرة': 'legal.js',
        'وثائق': 'docs.js',
        'مالية': 'finance.js',
        'جالية': 'expats.js',
        'صحة': 'health.js'
    };

    if (map[term]) {
        const script = document.createElement('script');
        script.src = `/static/js/sections/${map[term]}`;
        script.onload = () => window.renderSection(area);
        document.body.appendChild(script);
    }
}
