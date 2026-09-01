globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { d as maybeRenderHead, i as renderComponent, u as renderTemplate } from "./server_DIjoMyAf.mjs";
import { t as createComponent } from "./compiler_CvVjnDpT.mjs";
import { t as $$BaseLayout } from "./BaseLayout_BEyIrLlK.mjs";
//#region src/pages/en/cookies.astro
var cookies_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Cookies,
	file: () => $$file,
	url: () => $$url
});
var $$Cookies = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "Cookie Settings | Souk Al-Mubarakiya Guide",
		"description": "Manage cookie preferences and analytics for the Souk Al-Mubarakiya guide.",
		"path": "/en/cookies/",
		"lang": "en",
		"data-astro-cid-ivyvihgz": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="section" data-astro-cid-ivyvihgz><div class="wrap cookie-wrap" data-astro-cid-ivyvihgz><p class="eyebrow" data-astro-cid-ivyvihgz>Clear control</p><h1 data-astro-cid-ivyvihgz>Cookie Settings</h1><p class="updated" data-astro-cid-ivyvihgz>Last updated: August 2026</p><p class="lead" data-astro-cid-ivyvihgz>We use the minimum storage required. You can choose analytics and preferences; we currently do not use personalised advertising cookies.</p><form id="cookie-form" class="settings" aria-describedby="save-status" data-astro-cid-ivyvihgz><article class="card" data-astro-cid-ivyvihgz><div data-astro-cid-ivyvihgz><h2 data-astro-cid-ivyvihgz>Necessary cookies</h2><p data-astro-cid-ivyvihgz>Required to store your privacy choice and run the basic functions of the site. They cannot be disabled from this page.</p></div><label data-astro-cid-ivyvihgz><input type="checkbox" checked disabled data-astro-cid-ivyvihgz> <span data-astro-cid-ivyvihgz>Always active</span></label></article><article class="card" data-astro-cid-ivyvihgz><div data-astro-cid-ivyvihgz><h2 data-astro-cid-ivyvihgz>Analytics cookies</h2><p data-astro-cid-ivyvihgz>Enable Google Analytics to collect aggregated usage information that helps us understand which pages are most useful. Analytics is not loaded before consent.</p></div><label data-astro-cid-ivyvihgz><input id="analytics" type="checkbox" data-astro-cid-ivyvihgz> <span data-astro-cid-ivyvihgz>Allow analytics</span></label></article><article class="card" data-astro-cid-ivyvihgz><div data-astro-cid-ivyvihgz><h2 data-astro-cid-ivyvihgz>Preference cookies</h2><p data-astro-cid-ivyvihgz>Allow saving interface settings that we may add in the future, without building an advertising profile.</p></div><label data-astro-cid-ivyvihgz><input id="preferences" type="checkbox" data-astro-cid-ivyvihgz> <span data-astro-cid-ivyvihgz>Save preferences</span></label></article><article class="card muted" data-astro-cid-ivyvihgz><div data-astro-cid-ivyvihgz><h2 data-astro-cid-ivyvihgz>Marketing cookies</h2><p data-astro-cid-ivyvihgz>This non-profit project currently does not run personalised ads or marketing tools that track visitor behaviour.</p></div><label data-astro-cid-ivyvihgz><input type="checkbox" disabled data-astro-cid-ivyvihgz> <span data-astro-cid-ivyvihgz>Off</span></label></article><div class="buttons" data-astro-cid-ivyvihgz><button type="submit" data-astro-cid-ivyvihgz>Save preferences</button><button id="reject" type="button" class="outline" data-astro-cid-ivyvihgz>Reject non-essential</button></div><p id="save-status" class="status" role="status" aria-live="polite" data-astro-cid-ivyvihgz></p></form><h2 class="consent" data-astro-cid-ivyvihgz>Managing consent</h2><p data-astro-cid-ivyvihgz>You can return to this page at any time to change your choices. Disabling some future options may prevent interface preferences from being saved, but it does not block access to the core content.</p></div></section>` })}<script>
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
    status.textContent = 'Your choices have been saved. The analytics change will be applied in full when you open a new page or reload.';
  };
  form.addEventListener('submit', (event) => { event.preventDefault(); save(analytics.checked, preferences.checked); });
  reject.addEventListener('click', () => { analytics.checked=false; preferences.checked=false; save(false,false); });
})();
<\/script>`;
}, "C:/Users/Administrator/Documents/GitHub/mubarakiyasouk/src/pages/en/cookies.astro", void 0);
var $$file = "C:/Users/Administrator/Documents/GitHub/mubarakiyasouk/src/pages/en/cookies.astro";
var $$url = "/en/cookies";
//#endregion
//#region \0virtual:astro:page:src/pages/en/cookies@_@astro
var page = () => cookies_exports;
//#endregion
export { page };
