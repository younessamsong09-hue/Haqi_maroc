function openEditor(searchTerm) {
    const area = document.getElementById('editor-area');
    const grid = document.getElementById('quick-cards');
    
    // إخفاء الشبكة الرئيسية لإظهار المحرر
    grid.style.display = 'none';
    area.innerHTML = '<div style="text-align:center; padding:20px;">جاري تحميل المحرر...</div>';

    // استدعاء ملف المحرر الخاص بالبطاقة
    let scriptPath = `/static/js/editors/${searchTerm}.js`;
    
    const script = document.createElement('script');
    script.src = scriptPath;
    script.onload = () => {
        // كل ملف سيحتوي على دالة باسم renderEditor()
        if (typeof renderEditor === "function") {
            renderEditor(area);
        }
    };
    script.onerror = () => {
        area.innerHTML = '<div class="result-item">عذراً، هذا المحرر قيد التطوير حالياً.</div>';
        setTimeout(() => { location.reload(); }, 2000);
    };
    document.body.appendChild(script);
}

function goBack() {
    location.reload(); // أسهل طريقة للعودة للرئيسية حالياً
}
