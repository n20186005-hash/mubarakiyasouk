globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { D as renderTemplate, O as maybeRenderHead, S as renderComponent } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
import { t as $$BaseLayout } from "./BaseLayout_uBK9qlOS.mjs";
//#region src/pages/en/privacy.astro
var privacy_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Privacy,
	file: () => $$file,
	url: () => $$url
});
var $$Privacy = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Privacy Policy | Souk Al-Mubarakiya",
		"description": "Information and choices for this independent visitor guide.",
		"path": "/en/privacy/",
		"lang": "en",
		"data-astro-cid-v3ib3rq4": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="legal section" data-astro-cid-v3ib3rq4><div class="wrap narrow cookie-wrap" data-astro-cid-v3ib3rq4><h1 data-astro-cid-v3ib3rq4>Privacy Policy</h1><p class="updated" data-astro-cid-v3ib3rq4>Updated: 23 October 2026</p><p class="lead" data-astro-cid-v3ib3rq4>This is an independent visitor guide, not the market operator. It has no account, booking or contact form.</p><h2 data-astro-cid-v3ib3rq4>Google Analytics choices</h2><p data-astro-cid-v3ib3rq4>Google Analytics loads only when a saved analytics choice is enabled. Use Cookie Settings to change it. Withdrawal denies the current page runtime immediately and attempts to clear analytics cookies; the page reports if storage cannot confirm the choice. Previously transmitted data is not recalled.</p><h2 data-astro-cid-v3ib3rq4>Cloudflare</h2><p data-astro-cid-v3ib3rq4>Hosting independently includes a Cloudflare performance beacon for page-load timing. The Google Analytics choice does not control this hosting service. A script appearing in a page does not establish that metrics were successfully delivered. <a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/" data-astro-cid-v3ib3rq4>Cloudflare: data origin and collection</a>.</p><h2 data-astro-cid-v3ib3rq4>Other resources and storage</h2><p data-astro-cid-v3ib3rq4>The embedded Google Map contacts Google. Weather is obtained server-side from Open-Meteo for the market area; it does not require your device location. Photos are hosted locally. Local storage records your analytics choice. A service worker caches pages and assets for offline use; browser settings can clear this cache and stored choices. No interface preference feature is currently implemented.</p><p data-astro-cid-v3ib3rq4><a href="/en/" data-astro-cid-v3ib3rq4>Visitor guide</a> · <a href="/en/privacy/" data-astro-cid-v3ib3rq4>Privacy</a> · <a href="/en/cookies/" data-astro-cid-v3ib3rq4>Cookie Settings</a></p></div></section>` })}`;
}, "/site/src/pages/en/privacy.astro", void 0);
var $$file = "/site/src/pages/en/privacy.astro";
var $$url = "/en/privacy";
//#endregion
//#region \0virtual:astro:page:src/pages/en/privacy@_@astro
var page = () => privacy_exports;
//#endregion
export { page };
