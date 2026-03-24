function openEditor(term) {
    const area = document.getElementById('editor-area');
    const grid = document.getElementById('quick-cards');
    grid.style.display = 'none';
    area.style.display = 'block';

    let scriptFile = '';
    let renderFunc = '';

    if (term === 'طلب') { scriptFile = 'requests.js'; renderFunc = 'renderRequestEditor'; }
    else if (term === 'حكرة') { scriptFile = 'hokra.js'; renderFunc = 'renderHokraEditor'; }
    else if (term === 'صحة') { scriptFile = 'health.js'; renderFunc = 'renderHealth'; }
    else if (term === 'مالية') { scriptFile = 'finance.js'; renderFunc = 'renderFinance'; }

    if (scriptFile) {
        const script = document.createElement('script');
        script.src = '/static/js/sections/' + scriptFile;
        script.onload = () => { area.innerHTML = window[renderFunc](area); };
        document.body.appendChild(script);
    }
}
