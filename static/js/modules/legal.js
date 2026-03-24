export function render() {
    return `
        <div class="result-item" style="border-right: 6px solid #c1272d;">
            <h3>⚖️ محامي "حقي" (ضد الحكرة)</h3>
            <textarea id="complaint-text" placeholder="اكتب تفاصيل الظلم الذي تعرضت له..."></textarea>
            <button class="btn-action" style="background:#c1272d;" onclick="generateLegal()">إصدار الشكاية</button>
        </div>`;
}
