globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { D as renderTemplate, O as maybeRenderHead, S as renderComponent } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
import { t as $$BaseLayout } from "./BaseLayout_uBK9qlOS.mjs";
//#region src/pages/en/terms.astro
var terms_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Terms,
	file: () => $$file,
	url: () => $$url
});
var $$Terms = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Terms of Use | Souk Al-Mubarakiya",
		"description": "Scope of the independent market guide, changing visitor information, separate venue rules and photograph licences.",
		"path": "/en/terms/",
		"lang": "en",
		"data-astro-cid-mdfhdvdf": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="legal section" data-astro-cid-mdfhdvdf><div class="wrap narrow cookie-wrap" data-astro-cid-mdfhdvdf><h1 data-astro-cid-mdfhdvdf>Terms of Use</h1><p class="updated" data-astro-cid-mdfhdvdf>Updated: 23 October 2026</p><p class="lead" data-astro-cid-mdfhdvdf>Independent information for planning a visit to the market as a whole, not a restaurant or official market service.</p><h2 data-astro-cid-mdfhdvdf>Planning and changing information</h2><p data-astro-cid-mdfhdvdf>The Google Maps hours are a dated third-party listing, not a guarantee for each stall, restaurant, museum or holiday. Check important services directly before travelling. Weather is an area forecast, not proof that an activity is operating. Transport, accessibility and suggested itineraries require your own checks on the day.</p><h2 data-astro-cid-mdfhdvdf>Sources and photographs</h2><p data-astro-cid-mdfhdvdf>History is attributed to Kuwait University. Links lead to independent external sources. Photograph authors, sources, dates and licences are linked beside the images; the night photograph is CC BY 4.0 and the daytime photograph has a public-domain release. Resizing and display crops do not imply current conditions.</p><p data-astro-cid-mdfhdvdf><a href="/en/" data-astro-cid-mdfhdvdf>Visitor guide</a> · <a href="/en/privacy/" data-astro-cid-mdfhdvdf>Privacy</a> · <a href="/en/cookies/" data-astro-cid-mdfhdvdf>Cookie Settings</a></p></div></section>` })}`;
}, "/site/src/pages/en/terms.astro", void 0);
var $$file = "/site/src/pages/en/terms.astro";
var $$url = "/en/terms";
//#endregion
//#region \0virtual:astro:page:src/pages/en/terms@_@astro
var page = () => terms_exports;
//#endregion
export { page };
