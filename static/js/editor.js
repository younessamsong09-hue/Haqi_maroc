async function openEditor(type) {
    const area = document.getElementById('editor-area');
    document.getElementById('quick-cards').style.display = 'none';
    
    let module;
    if (type === 'طلب') {
        module = await import('./modules/requests.js');
    } else if (type === 'حكرة') {
        module = await import('./modules/legal.js');
    }
    
    if (module) {
        area.innerHTML = module.render();
        area.style.display = 'block';
    }
}
