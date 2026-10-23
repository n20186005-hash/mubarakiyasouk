globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { D as renderTemplate, O as maybeRenderHead, S as renderComponent } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
import { t as $$BaseLayout } from "./BaseLayout_uBK9qlOS.mjs";
//#region src/pages/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "شروط الاستخدام | Souk Al-Mubarakiya",
		"description": "نطاق دليل السوق المستقل ومعلومات الزيارة المتغيرة وقواعد المعالم المنفصلة وتراخيص الصور.",
		"path": "/terms/",
		"lang": "ar",
		"data-astro-cid-zcf6dkqz": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="legal section" data-astro-cid-zcf6dkqz><div class="wrap narrow cookie-wrap" data-astro-cid-zcf6dkqz><h1 data-astro-cid-zcf6dkqz>شروط الاستخدام</h1><p class="updated" data-astro-cid-zcf6dkqz>آخر تحديث: 23 أكتوبر 2026</p><p class="lead" data-astro-cid-zcf6dkqz>معلومات مستقلة لتخطيط زيارة السوق ككل، وليست خدمة رسمية للسوق أو لمطعم.</p><h2 data-astro-cid-zcf6dkqz>التخطيط والمعلومات المتغيرة</h2><p data-astro-cid-zcf6dkqz>ساعات خرائط Google لقطة مؤرخة من طرف ثالث، وليست ضمانًا لكل محل أو مطعم أو متحف أو عطلة. تحقق مباشرة من الخدمات المهمة قبل السفر. الطقس توقع للمنطقة ولا يثبت تشغيل نشاط معين. تحقق يوم الزيارة من النقل وسهولة الوصول والمسارات المقترحة.</p><h2 data-astro-cid-zcf6dkqz>المصادر والصور</h2><p data-astro-cid-zcf6dkqz>يُنسب السياق التاريخي إلى جامعة الكويت. تنقلك الروابط إلى مصادر خارجية مستقلة. تظهر أسماء المصورين ومصادر الصور وتواريخها وتراخيصها بجوارها؛ الصورة الليلية بترخيص CC BY 4.0 والنهارية بإهداء للملكية العامة. تغيير الحجم وقص العرض لا يعنيان أن الصور تعرض الوضع الحالي.</p><p data-astro-cid-zcf6dkqz><a href="/" data-astro-cid-zcf6dkqz>دليل الزيارة</a> · <a href="/privacy/" data-astro-cid-zcf6dkqz>الخصوصية</a> · <a href="/cookies/" data-astro-cid-zcf6dkqz>إعدادات التخزين</a></p></div></section>` })}`;
}, "/site/src/pages/terms.astro", void 0);
var $$file = "/site/src/pages/terms.astro";
var $$url = "/terms";
//#endregion
//#region \0virtual:astro:page:src/pages/terms@_@astro
var page = () => terms_exports;
//#endregion
export { page };
