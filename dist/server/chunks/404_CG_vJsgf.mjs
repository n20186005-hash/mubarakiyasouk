globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { D as renderTemplate, O as maybeRenderHead, R as createAstro, S as renderComponent } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
import { t as $$BaseLayout } from "./BaseLayout_uBK9qlOS.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://mubarakiyasouk.com");
var $$404 = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$404;
	Astro.response.status = 404;
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "الصفحة غير موجودة | دليل سوق المباركية",
		"description": "تعذر العثور على الصفحة المطلوبة.",
		"path": "/404/",
		"noindex": true,
		"data-astro-cid-ibpinaeu": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section" data-astro-cid-ibpinaeu><div class="wrap missing" data-astro-cid-ibpinaeu><p class="eyebrow" data-astro-cid-ibpinaeu>خطأ 404</p><h1 data-astro-cid-ibpinaeu>هذه الصفحة غير موجودة</h1><p data-astro-cid-ibpinaeu>ربما تغير الرابط أو كُتب بشكل غير صحيح. يمكنك العودة إلى الدليل الرئيسي ومتابعة معلومات سوق المباركية.</p><a href="/" data-astro-cid-ibpinaeu>العودة إلى الصفحة الرئيسية</a></div></section>` })}`;
}, "/site/src/pages/404.astro", void 0);
var $$file = "/site/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
