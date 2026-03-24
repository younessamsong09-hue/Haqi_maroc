function openEditor(term) {
    const area = document.getElementById('editor-area');
    document.getElementById('quick-cards').style.display = 'none';
    
    // ربط المصطلحات بالملفات البرمجية
    if (term === 'طلب') {
        renderRequestEditor(area); // موجود مسبقاً في الملف
    } else if (term === 'حكرة') {
        area.innerHTML = '<div class="result-item">محرك الشكايات القانونية (الحكرة) قيد التحديث...</div>';
    } else {
        area.innerHTML = '<div class="result-item">هذا القسم سيتم ربطه بملفه المستقل قريباً.</div>';
    }
}
