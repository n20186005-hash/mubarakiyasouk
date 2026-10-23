globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { D as renderTemplate, O as maybeRenderHead, S as renderComponent } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
import { t as $$BaseLayout } from "./BaseLayout_uBK9qlOS.mjs";
//#region src/pages/cookies.astro
var cookies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cookies,
	file: () => $$file,
	url: () => $$url
});
var $$Cookies = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "إعدادات التخزين | Souk Al-Mubarakiya",
		"description": "معلومات واختيارات هذا الدليل المستقل للزوار.",
		"path": "/cookies/",
		"lang": "ar",
		"data-astro-cid-gp47bozz": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="legal section" data-astro-cid-gp47bozz><div class="wrap narrow cookie-wrap" data-astro-cid-gp47bozz><h1 data-astro-cid-gp47bozz>إعدادات التخزين</h1><p class="updated" data-astro-cid-gp47bozz>آخر تحديث: 23 أكتوبر 2026</p><p class="lead" data-astro-cid-gp47bozz>تحكم في خيار Google Analytics الحالي. هذا لا يتحكم في قياسات استضافة Cloudflare المستقلة أو خريطة Google المضمّنة.</p><form id="cookie-form" class="settings" data-astro-cid-gp47bozz><label data-astro-cid-gp47bozz><input id="analytics" type="checkbox" data-astro-cid-gp47bozz> السماح بـ Google Analytics</label><p data-astro-cid-gp47bozz>يلزم تخزين الاختيار لتذكر هذا الإعداد. لا تتوفر حاليًا تفضيلات واجهة اختيارية أو أدوات إعلانية.</p><div class="buttons" data-astro-cid-gp47bozz><button type="submit" data-astro-cid-gp47bozz>حفظ الاختيار</button><button id="reject" type="button" class="outline" data-astro-cid-gp47bozz>رفض التحليلات</button></div><p id="save-status" role="status" aria-live="polite" data-astro-cid-gp47bozz></p></form><p data-astro-cid-gp47bozz><a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/" data-astro-cid-gp47bozz>Cloudflare: data origin and collection</a></p><p data-astro-cid-gp47bozz><a href="/" data-astro-cid-gp47bozz>دليل الزيارة</a> · <a href="/privacy/" data-astro-cid-gp47bozz>الخصوصية</a> · <a href="/cookies/" data-astro-cid-gp47bozz>إعدادات التخزين</a></p></div></section>` })}<script>
(() => {
 const form=document.getElementById('cookie-form'),box=document.getElementById('analytics'),reject=document.getElementById('reject'),status=document.getElementById('save-status'),api=window.mubarakiyaAnalytics;
 box.checked=api.get();
 const messages=["حُفظ الاختيار. Google Analytics مفعّل في هذه الصفحة.", "حُفظ الاختيار. Google Analytics متوقف.", "تعذر حفظ السماح. يظل Google Analytics متوقفًا في هذه الصفحة.", "التحليلات متوقفة في هذه الصفحة، لكن تعذر مسح الإذن المحفوظ. قد تستخدم صفحات أو علامات تبويب أخرى اختيارًا سابقًا؛ راجع إعدادات التخزين في المتصفح."];
 const save=allow=>{const result=api.set(allow);box.checked=result.effective;status.textContent=result.saved?messages[result.effective?0:1]:messages[result.sharedOff?2:3];};
 form.addEventListener('submit',event=>{event.preventDefault();save(box.checked);});
 reject.addEventListener('click',()=>save(false));
 window.addEventListener('storage',event=>{if(event.key==='mubarakiya-cookie-preferences'||event.key===null){box.checked=api.get();status.textContent='';}});
})();
<\/script>`;
}, "/site/src/pages/cookies.astro", void 0);
var $$file = "/site/src/pages/cookies.astro";
var $$url = "/cookies";
//#endregion
//#region \0virtual:astro:page:src/pages/cookies@_@astro
var page = () => cookies_exports;
//#endregion
export { page };
