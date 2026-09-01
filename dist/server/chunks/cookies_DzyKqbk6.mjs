globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_DIjoMyAf.mjs";
import { t as createComponent } from "./compiler_CvVjnDpT.mjs";
import { t as $$BaseLayout } from "./BaseLayout_BEyIrLlK.mjs";
//#region src/pages/cookies.astro
var cookies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cookies,
	file: () => $$file,
	url: () => $$url
});
var $$Cookies = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "إعدادات ملفات تعريف الارتباط | دليل سوق المباركية",
		"description": "إدارة تفضيلات ملفات تعريف الارتباط والقياس الإحصائي في دليل سوق المباركية.",
		"path": "/cookies/",
		"data-astro-cid-gp47bozz": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section" data-astro-cid-gp47bozz><div class="wrap cookie-wrap" data-astro-cid-gp47bozz><p class="eyebrow" data-astro-cid-gp47bozz>تحكم واضح</p><h1 data-astro-cid-gp47bozz>إعدادات ملفات تعريف الارتباط</h1><p class="updated" data-astro-cid-gp47bozz>آخر تحديث: أغسطس 2026</p><p class="lead" data-astro-cid-gp47bozz>نستخدم الحد الأدنى من التخزين اللازم. يمكنك اختيار القياس الإحصائي والتفضيلات، ولا نستخدم حاليًا ملفات إعلانات مخصصة.</p><form id="cookie-form" class="settings" aria-describedby="save-status" data-astro-cid-gp47bozz><article class="card" data-astro-cid-gp47bozz><div data-astro-cid-gp47bozz><h2 data-astro-cid-gp47bozz>ملفات ضرورية</h2><p data-astro-cid-gp47bozz>ضرورية لحفظ اختيار الخصوصية وتشغيل الوظائف الأساسية. لا يمكن تعطيلها من هذه الصفحة.</p></div><label data-astro-cid-gp47bozz><input type="checkbox" checked disabled data-astro-cid-gp47bozz> <span data-astro-cid-gp47bozz>نشطة دائمًا</span></label></article><article class="card" data-astro-cid-gp47bozz><div data-astro-cid-gp47bozz><h2 data-astro-cid-gp47bozz>ملفات القياس</h2><p data-astro-cid-gp47bozz>تسمح بتفعيل إحصاءات غوغل لجمع معلومات استخدام مجمّعة تساعدنا على فهم الصفحات الأكثر فائدة. لا يُحمّل القياس قبل الموافقة.</p></div><label data-astro-cid-gp47bozz><input id="analytics" type="checkbox" data-astro-cid-gp47bozz> <span data-astro-cid-gp47bozz>السماح بالقياس</span></label></article><article class="card" data-astro-cid-gp47bozz><div data-astro-cid-gp47bozz><h2 data-astro-cid-gp47bozz>ملفات التفضيلات</h2><p data-astro-cid-gp47bozz>تسمح بحفظ إعدادات واجهة المستخدم التي قد نضيفها مستقبلًا، من دون إنشاء ملف تعريف إعلاني.</p></div><label data-astro-cid-gp47bozz><input id="preferences" type="checkbox" data-astro-cid-gp47bozz> <span data-astro-cid-gp47bozz>حفظ التفضيلات</span></label></article><article class="card muted" data-astro-cid-gp47bozz><div data-astro-cid-gp47bozz><h2 data-astro-cid-gp47bozz>ملفات التسويق</h2><p data-astro-cid-gp47bozz>لا يشغّل هذا المشروع غير الربحي حاليًا إعلانات مخصصة أو أدوات تسويق تتبع سلوك الزائر.</p></div><label data-astro-cid-gp47bozz><input type="checkbox" disabled data-astro-cid-gp47bozz> <span data-astro-cid-gp47bozz>متوقفة</span></label></article><div class="buttons" data-astro-cid-gp47bozz><button type="submit" data-astro-cid-gp47bozz>حفظ التفضيلات</button><button id="reject" type="button" class="outline" data-astro-cid-gp47bozz>رفض غير الضروري</button></div><p id="save-status" class="status" role="status" aria-live="polite" data-astro-cid-gp47bozz></p></form><h2 class="consent" data-astro-cid-gp47bozz>إدارة الموافقة</h2><p data-astro-cid-gp47bozz>يمكنك العودة إلى هذه الصفحة في أي وقت لتغيير اختياراتك. قد يؤدي تعطيل بعض الخيارات المستقبلية إلى عدم حفظ تفضيلات الواجهة، لكنه لا يمنع الوصول إلى المحتوى الأساسي.</p></div></section>` })}<script>
(() => {
  const key = 'mubarakiya-cookie-preferences';
  const form = document.getElementById('cookie-form');
  const analytics = document.getElementById('analytics');
  const preferences = document.getElementById('preferences');
  const reject = document.getElementById('reject');
  const status = document.getElementById('save-status');
  try {
    const saved = JSON.parse(localStorage.getItem(key) || '{}');
    analytics.checked = saved.analytics === true;
    preferences.checked = saved.preferences === true;
  } catch (_) {}
  const save = (a, p) => {
    localStorage.setItem(key, JSON.stringify({ necessary:true, analytics:a, preferences:p, marketing:false }));
    status.textContent = 'تم حفظ اختياراتك. سيُطبّق تغيير القياس بالكامل عند فتح صفحة جديدة أو إعادة تحميل الصفحة.';
  };
  form.addEventListener('submit', (event) => { event.preventDefault(); save(analytics.checked, preferences.checked); });
  reject.addEventListener('click', () => { analytics.checked=false; preferences.checked=false; save(false,false); });
})();
<\/script>`;
}, "C:/Users/Administrator/Documents/GitHub/mubarakiyasouk/src/pages/cookies.astro", void 0);
var $$file = "C:/Users/Administrator/Documents/GitHub/mubarakiyasouk/src/pages/cookies.astro";
var $$url = "/cookies";
//#endregion
//#region \0virtual:astro:page:src/pages/cookies@_@astro
var page = () => cookies_exports;
//#endregion
export { page };
