globalThis.process ??= {};
globalThis.process.env ??= {};
import { d as maybeRenderHead, f as renderHead, i as renderComponent, p as addAttribute, s as renderSlot, u as renderTemplate, v as unescapeHTML, x as createAstro } from "./server_DIjoMyAf.mjs";
import { t as createComponent } from "./compiler_CvVjnDpT.mjs";
//#region src/i18n/ui.ts
var languages = {
	ar: {
		label: "العربية",
		dir: "rtl",
		htmlLang: "ar",
		ogLocale: "ar_KW"
	},
	en: {
		label: "English",
		dir: "ltr",
		htmlLang: "en",
		ogLocale: "en_US"
	}
};
var ui = {
	ar: {
		"skip": "انتقل إلى المحتوى",
		"nav.label": "التنقل الرئيسي",
		"nav.history": "التاريخ",
		"nav.visit": "خطط الزيارة",
		"nav.transport": "الوصول",
		"nav.facilities": "الخدمات",
		"nav.faq": "الأسئلة",
		"header.map": "افتح الخريطة",
		"logo.aria": "العودة إلى الصفحة الرئيسية",
		"logo.title": "دليل المباركية",
		"logo.tagline": "ذاكرة السوق وقلب مدينة الكويت",
		"footer.privacy": "سياسة الخصوصية",
		"footer.terms": "شروط الاستخدام",
		"footer.cookies": "إعدادات ملفات تعريف الارتباط",
		"footer.note1": "هذا الموقع مشروع مستقل غير ربحي لدليل معلومات الزوار، ولا يتبع أي جهة حكومية أو منظمة رسمية.",
		"footer.note2": "تُراجع معلومات سوق المباركية بالرجوع إلى المواد العامة الصادرة عن بلدية الكويت، ووزارة الإعلام، والبوابة الإلكترونية الرسمية لدولة الكويت، ومطار الكويت الدولي، ومصادر أكاديمية من جامعة الكويت. لا يتضمن الموقع توصيات تجارية مدفوعة.",
		"footer.note3": "حقوق الصور: جميع الصور المعروضة تبقى حقوقها وحقوق نشرها للمصورين أو أصحاب التراخيص المبينة في سجل الصور داخل المشروع.",
		"footer.copyright": "© 2026 دليل سوق المباركية في مدينة الكويت. جميع الحقوق محفوظة للمحتوى الأصلي للمشروع."
	},
	en: {
		"skip": "Skip to content",
		"nav.label": "Main navigation",
		"nav.history": "History",
		"nav.visit": "Plan your visit",
		"nav.transport": "Getting there",
		"nav.facilities": "Facilities",
		"nav.faq": "FAQ",
		"header.map": "Open map",
		"logo.aria": "Back to homepage",
		"logo.title": "Mubarakiya Guide",
		"logo.tagline": "The old market and the heart of Kuwait City",
		"footer.privacy": "Privacy Policy",
		"footer.terms": "Terms of Use",
		"footer.cookies": "Cookie Settings",
		"footer.note1": "This website is an independent, non-profit visitor information guide and is not affiliated with any government body or official organization.",
		"footer.note2": "Information about Souk Al-Mubarakiya is reviewed against public materials from the Kuwait Municipality, the Ministry of Information, the official portal of the State of Kuwait, Kuwait International Airport, and academic sources from Kuwait University. The site contains no paid commercial recommendations.",
		"footer.note3": "Photo credits: all displayed photos remain the property of their photographers or license holders as stated in the project's photo credits file.",
		"footer.copyright": "© 2026 Souk Al-Mubarakiya Guide in Kuwait City. All rights reserved for the original project content."
	}
};
function t(lang, key) {
	return ui[lang][key] ?? key;
}
//#endregion
//#region src/components/Logo.astro
createAstro("https://mubarakiyasouk.com");
var $$Logo = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Logo;
	const { compact = false, lang = "ar" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<a class="logo"${addAttribute(lang === "en" ? "/en/" : "/", "href")}${addAttribute(t(lang, "logo.aria"), "aria-label")}${addAttribute(lang, "lang")} data-astro-cid-f7espo7c><svg${addAttribute(compact ? "mark compact" : "mark", "class")} viewBox="0 0 96 96" role="img"${addAttribute(t(lang, "logo.title"), "aria-label")} data-astro-cid-f7espo7c><path d="M18 78V43C18 24 31 11 48 11s30 13 30 32v35" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" data-astro-cid-f7espo7c></path><path d="M26 78h44" stroke="currentColor" stroke-width="8" stroke-linecap="round" data-astro-cid-f7espo7c></path><path d="M48 29v11" stroke="currentColor" stroke-width="5" stroke-linecap="round" data-astro-cid-f7espo7c></path><path d="M38 43h20l-3 19H41l-3-19Z" fill="currentColor" data-astro-cid-f7espo7c></path><circle cx="48" cy="54" r="4" fill="#f2e6d0" data-astro-cid-f7espo7c></circle></svg>${!compact && renderTemplate`<span data-astro-cid-f7espo7c><strong data-astro-cid-f7espo7c>${t(lang, "logo.title")}</strong><small data-astro-cid-f7espo7c>${t(lang, "logo.tagline")}</small></span>`}</a>`;
}, "C:/Users/Administrator/Documents/GitHub/mubarakiyasouk/src/components/Logo.astro", void 0);
//#endregion
//#region src/components/Header.astro
createAstro("https://mubarakiyasouk.com");
var $$Header = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Header;
	const { lang = "ar" } = Astro.props;
	const path = Astro.url.pathname;
	const isEn = path.startsWith("/en");
	const arPath = isEn ? path.slice(3) || "/" : path;
	const enPath = isEn ? path : path === "/" ? "/en/" : "/en" + path;
	const prefix = lang === "en" ? "/en" : "";
	return renderTemplate`${maybeRenderHead($$result)}<header class="site-header" data-astro-cid-nen7h5rs><div class="wrap bar" data-astro-cid-nen7h5rs>${renderComponent($$result, "Logo", $$Logo, {
		"lang": lang,
		"data-astro-cid-nen7h5rs": true
	})}<nav${addAttribute(t(lang, "nav.label"), "aria-label")} data-astro-cid-nen7h5rs>${[
		{
			key: "nav.history",
			href: "#history"
		},
		{
			key: "nav.visit",
			href: "#visit"
		},
		{
			key: "nav.transport",
			href: "#transport"
		},
		{
			key: "nav.facilities",
			href: "#facilities"
		},
		{
			key: "nav.faq",
			href: "#faq"
		}
	].map((item) => renderTemplate`<a${addAttribute(prefix + "/" + item.href, "href")} data-astro-cid-nen7h5rs>${t(lang, item.key)}</a>`)}</nav><div class="lang" aria-label="Language / اللغة" data-astro-cid-nen7h5rs><a${addAttribute(arPath, "href")} lang="ar" hreflang="ar"${addAttribute(lang === "ar" ? "active" : "", "class")}${addAttribute(lang === "ar" ? "true" : void 0, "aria-current")} data-astro-cid-nen7h5rs>العربية</a><span class="dot" aria-hidden="true" data-astro-cid-nen7h5rs></span><a${addAttribute(enPath, "href")} lang="en" hreflang="en"${addAttribute(lang === "en" ? "active" : "", "class")}${addAttribute(lang === "en" ? "true" : void 0, "aria-current")} data-astro-cid-nen7h5rs>English</a></div><a class="map" href="https://maps.app.goo.gl/Unad47yFEGSrn79r6" rel="noopener noreferrer" data-astro-cid-nen7h5rs>${t(lang, "header.map")}</a></div></header>`;
}, "C:/Users/Administrator/Documents/GitHub/mubarakiyasouk/src/components/Header.astro", void 0);
//#endregion
//#region src/components/Footer.astro
createAstro("https://mubarakiyasouk.com");
var $$Footer = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Footer;
	const { lang = "ar" } = Astro.props;
	const prefix = lang === "en" ? "/en" : "";
	return renderTemplate`${maybeRenderHead($$result)}<footer class="footer" data-astro-cid-jo6i4kqk><div class="wrap" data-astro-cid-jo6i4kqk><div class="top" data-astro-cid-jo6i4kqk>${renderComponent($$result, "Logo", $$Logo, {
		"lang": lang,
		"data-astro-cid-jo6i4kqk": true
	})}<div class="links" data-astro-cid-jo6i4kqk><a${addAttribute(prefix + "/privacy/", "href")} data-astro-cid-jo6i4kqk>${t(lang, "footer.privacy")}</a><a${addAttribute(prefix + "/terms/", "href")} data-astro-cid-jo6i4kqk>${t(lang, "footer.terms")}</a><a${addAttribute(prefix + "/cookies/", "href")} data-astro-cid-jo6i4kqk>${t(lang, "footer.cookies")}</a></div></div><div class="rule" data-astro-cid-jo6i4kqk></div><div class="notes" data-astro-cid-jo6i4kqk><p data-astro-cid-jo6i4kqk>${t(lang, "footer.note1")}</p><p data-astro-cid-jo6i4kqk>${t(lang, "footer.note2")}</p><p data-astro-cid-jo6i4kqk>${t(lang, "footer.note3")}</p><p data-astro-cid-jo6i4kqk>${t(lang, "footer.copyright")}</p></div></div></footer>`;
}, "C:/Users/Administrator/Documents/GitHub/mubarakiyasouk/src/components/Footer.astro", void 0);
//#endregion
//#region src/layouts/BaseLayout.astro
createAstro("https://mubarakiyasouk.com");
var $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BaseLayout;
	const { title, description, path = "/", image, imageAlt, noindex = false, jsonLd = [], lang = "ar" } = Astro.props;
	const langConf = languages[lang];
	const site = Astro.site?.toString().replace(/\/$/, "");
	const absolute = (p) => site ? new URL(p, `${site}/`).toString() : void 0;
	const canonical = absolute(path);
	const ogImage = image ? absolute(image) : void 0;
	const arPath = lang === "ar" ? path : path.startsWith("/en") ? path.slice(3) || "/" : path;
	const enPath = lang === "en" ? path : path === "/" ? "/en/" : "/en" + path;
	const arHref = !noindex ? absolute(arPath) : void 0;
	const enHref = !noindex ? absolute(enPath) : void 0;
	return renderTemplate`<html${addAttribute(langConf.htmlLang, "lang")}${addAttribute(langConf.dir, "dir")}><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#3a2418">${canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")}>`}${arHref && renderTemplate`<link rel="alternate" hreflang="ar"${addAttribute(arHref, "href")}>`}${enHref && renderTemplate`<link rel="alternate" hreflang="en"${addAttribute(enHref, "href")}>`}${arHref && renderTemplate`<link rel="alternate" hreflang="x-default"${addAttribute(arHref, "href")}>`}${noindex && renderTemplate`<meta name="robots" content="noindex,follow">`}<meta property="og:type" content="website"><meta property="og:locale"${addAttribute(langConf.ogLocale, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}>${canonical && renderTemplate`<meta property="og:url"${addAttribute(canonical, "content")}>`}${ogImage && renderTemplate`<meta property="og:image"${addAttribute(ogImage, "content")}>`}${ogImage && imageAlt && renderTemplate`<meta property="og:image:alt"${addAttribute(imageAlt, "content")}>`}<meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/icons/favicon.svg" type="image/svg+xml"><link rel="icon" href="/icons/favicon-32.png" sizes="32x32" type="image/png"><link rel="icon" href="/icons/favicon-16.png" sizes="16x16" type="image/png"><link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" sizes="180x180">${jsonLd.map((item) => renderTemplate`<script type="application/ld+json">${unescapeHTML(JSON.stringify(item))}<\/script>`)}<script>
    (() => {
      const GA_ID = 'G-HXM22WWPKP';
      try {
        const saved = JSON.parse(localStorage.getItem('mubarakiya-cookie-preferences') || '{}');
        if (saved.analytics !== true) return;
        window.dataLayer = window.dataLayer || [];
        window.gtag = function(){ window.dataLayer.push(arguments); };
        window.gtag('js', new Date());
        window.gtag('config', GA_ID, { anonymize_ip: true });
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
        document.head.appendChild(script);
      } catch (_) {}
    })();
  <\/script>${renderHead($$result)}</head><body><a class="skip" href="#content">${t(lang, "skip")}</a>${renderComponent($$result, "Header", $$Header, { "lang": lang })}<main id="content">${renderSlot($$result, $$slots["default"])}</main>${renderComponent($$result, "Footer", $$Footer, { "lang": lang })}</body></html>`;
}, "C:/Users/Administrator/Documents/GitHub/mubarakiyasouk/src/layouts/BaseLayout.astro", void 0);
//#endregion
export { $$BaseLayout as t };
