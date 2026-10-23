globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { D as renderTemplate, O as maybeRenderHead, S as renderComponent } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
import { t as $$BaseLayout } from "./BaseLayout_uBK9qlOS.mjs";
//#region src/pages/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	url: () => $$url
});
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "سياسة الخصوصية | Souk Al-Mubarakiya",
		"description": "معلومات واختيارات هذا الدليل المستقل للزوار.",
		"path": "/privacy/",
		"lang": "ar",
		"data-astro-cid-u6ohjolg": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="legal section" data-astro-cid-u6ohjolg><div class="wrap narrow cookie-wrap" data-astro-cid-u6ohjolg><h1 data-astro-cid-u6ohjolg>سياسة الخصوصية</h1><p class="updated" data-astro-cid-u6ohjolg>آخر تحديث: 23 أكتوبر 2026</p><p class="lead" data-astro-cid-u6ohjolg>هذا دليل مستقل للزوار، وليس إدارة السوق. لا يتضمن حسابات أو حجزًا أو نموذج اتصال.</p><h2 data-astro-cid-u6ohjolg>اختيار Google Analytics</h2><p data-astro-cid-u6ohjolg>يُحمّل Google Analytics فقط عند تفعيل خيار التحليلات المحفوظ. يمكنك تغييره من إعدادات التخزين. يؤدي السحب إلى إيقاف التحليلات في الصفحة الحالية فورًا ومحاولة حذف ملفاتها؛ وتوضح الصفحة إن تعذر تأكيد حفظ الاختيار. لا يؤدي ذلك إلى استرجاع بيانات أُرسلت سابقًا.</p><h2 data-astro-cid-u6ohjolg>Cloudflare</h2><p data-astro-cid-u6ohjolg>تتضمن الاستضافة خدمة مستقلة من Cloudflare لقياس توقيت تحميل الصفحات. خيار Google Analytics لا يتحكم في خدمة الاستضافة هذه. وجود البرنامج في الصفحة لا يثبت نجاح إرسال القياسات. <a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/" data-astro-cid-u6ohjolg>Cloudflare: data origin and collection</a>.</p><h2 data-astro-cid-u6ohjolg>الموارد الأخرى والتخزين</h2><p data-astro-cid-u6ohjolg>تتصل خريطة Google المضمّنة بخدمة Google. يُطلب الطقس من Open-Meteo على الخادم لمنطقة السوق دون طلب موقع جهازك. الصور مستضافة محليًا. يسجل التخزين المحلي اختيار التحليلات. يخزن عامل الخدمة صفحات وملفات للاستخدام دون اتصال؛ يمكن مسح التخزين والاختيارات من إعدادات المتصفح. لا توجد حاليًا ميزة لحفظ تفضيلات الواجهة.</p><p data-astro-cid-u6ohjolg><a href="/" data-astro-cid-u6ohjolg>دليل الزيارة</a> · <a href="/privacy/" data-astro-cid-u6ohjolg>الخصوصية</a> · <a href="/cookies/" data-astro-cid-u6ohjolg>إعدادات التخزين</a></p></div></section>` })}`;
}, "/site/src/pages/privacy.astro", void 0);
var $$file = "/site/src/pages/privacy.astro";
var $$url = "/privacy";
//#endregion
//#region \0virtual:astro:page:src/pages/privacy@_@astro
var page = () => privacy_exports;
//#endregion
export { page };
