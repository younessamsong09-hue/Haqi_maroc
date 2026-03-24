export function render() {
    return `
        <div class="result-item" style="border-right: 6px solid #1e5631;">
            <h3>✍️ محرر طلبات المباريات 🇲🇦</h3>
            <input type="text" id="req-name" placeholder="الاسم الكامل">
            <select id="req-type">
                <option value="الأمن الوطني">الأمن الوطني</option>
                <option value="التعليم">قطاع التعليم</option>
            </select>
            <button class="btn-action" onclick="generateReq()">توليد الطلب</button>
        </div>`;
}
