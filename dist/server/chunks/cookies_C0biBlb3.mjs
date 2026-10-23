globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { D as renderTemplate, O as maybeRenderHead, S as renderComponent } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
import { t as $$BaseLayout } from "./BaseLayout_uBK9qlOS.mjs";
//#region src/pages/en/cookies.astro
var cookies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cookies,
	file: () => $$file,
	url: () => $$url
});
var $$Cookies = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Cookie Settings | Souk Al-Mubarakiya",
		"description": "Enable or withdraw optional Google Analytics, check the effective saved choice and understand the separate hosting beacon.",
		"path": "/en/cookies/",
		"lang": "en",
		"data-astro-cid-ivyvihgz": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="legal section" data-astro-cid-ivyvihgz><div class="wrap narrow cookie-wrap" data-astro-cid-ivyvihgz><h1 data-astro-cid-ivyvihgz>Cookie Settings</h1><p class="updated" data-astro-cid-ivyvihgz>Updated: 23 October 2026</p><p class="lead" data-astro-cid-ivyvihgz>Control the existing Google Analytics option. This does not control the independent Cloudflare hosting beacon or the embedded Google Map.</p><form id="cookie-form" class="settings" data-astro-cid-ivyvihgz><label data-astro-cid-ivyvihgz><input id="analytics" type="checkbox" data-astro-cid-ivyvihgz> Allow Google Analytics</label><p data-astro-cid-ivyvihgz>Choice storage is necessary to remember this setting. No optional interface preferences or advertising tools are currently provided.</p><div class="buttons" data-astro-cid-ivyvihgz><button type="submit" data-astro-cid-ivyvihgz>Save choice</button><button id="reject" type="button" class="outline" data-astro-cid-ivyvihgz>Reject analytics</button></div><p id="save-status" role="status" aria-live="polite" data-astro-cid-ivyvihgz></p></form><p data-astro-cid-ivyvihgz><a href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/" data-astro-cid-ivyvihgz>Cloudflare: data origin and collection</a></p><p data-astro-cid-ivyvihgz><a href="/en/" data-astro-cid-ivyvihgz>Visitor guide</a> · <a href="/en/privacy/" data-astro-cid-ivyvihgz>Privacy</a> · <a href="/en/cookies/" data-astro-cid-ivyvihgz>Cookie Settings</a></p></div></section>` })}<script>
(() => {
 const form=document.getElementById('cookie-form'),box=document.getElementById('analytics'),reject=document.getElementById('reject'),status=document.getElementById('save-status'),api=window.mubarakiyaAnalytics;
 box.checked=api.get();
 const messages=["Saved. Google Analytics is on for this page.", "Saved. Google Analytics is off.", "Could not save permission. Google Analytics remains off on this page.", "Analytics is off on this page, but stored permission could not be cleared. Other pages or tabs may still use an old choice; check browser storage settings."];
 const save=allow=>{const result=api.set(allow);box.checked=result.effective;status.textContent=result.saved?messages[result.effective?0:1]:messages[result.sharedOff?2:3];};
 form.addEventListener('submit',event=>{event.preventDefault();save(box.checked);});
 reject.addEventListener('click',()=>save(false));
 window.addEventListener('storage',event=>{if(event.key==='mubarakiya-cookie-preferences'||event.key===null){box.checked=api.get();status.textContent='';}});
})();
<\/script>`;
}, "/site/src/pages/en/cookies.astro", void 0);
var $$file = "/site/src/pages/en/cookies.astro";
var $$url = "/en/cookies";
//#endregion
//#region \0virtual:astro:page:src/pages/en/cookies@_@astro
var page = () => cookies_exports;
//#endregion
export { page };
