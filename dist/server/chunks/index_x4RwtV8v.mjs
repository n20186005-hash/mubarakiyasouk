globalThis.process ??= {};
globalThis.process.env ??= {};
import { t as __exportAll } from "./rolldown-runtime_D7vh-g_o.mjs";
import { A as addAttribute, D as renderTemplate, O as maybeRenderHead, R as createAstro, S as renderComponent } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
import { t as $$BaseLayout } from "./BaseLayout_uBK9qlOS.mjs";
import { i as $$WeatherSection, n as SITE_NAME_AR, r as $$GuideSections } from "./site_B9nzGmoW.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	prerender: () => false,
	url: () => ""
});
createAstro("https://mubarakiyasouk.com");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const site = Astro.site?.toString().replace(/\/$/, "");
	const pageUrl = site ? `${site}/` : void 0;
	const attractionId = site ? `${site}/#attraction` : "#attraction";
	const websiteId = site ? `${site}/#website` : "#website";
	const heroImage = site ? `${site}/images/souk-al-mubarakiya-night.jpg` : "/images/souk-al-mubarakiya-night.jpg";
	const address = {
		"@type": "PostalAddress",
		streetAddress: "المباركية، شارع سوق الغربللي",
		addressLocality: "مدينة الكويت",
		addressRegion: "محافظة العاصمة",
		addressCountry: "KW"
	};
	const faq = [
		["أين يقع سوق المباركية؟", "يقع سوق المباركية في حي المباركية بمدينة الكويت على شارع سوق الغربللي، في محافظة العاصمة بدولة الكويت. أقرب نقطة مرجعية: نقطة الخريطة 29.373827, 47.972932."],
		["هل توجد خريطة لموقع سوق المباركية وما نقطة الخريطة؟", "نعم، يظهر السوق على خرائط غوغل عند البحث عن «سوق المباركية، شارع سوق الغربللي» في مدينة الكويت. نقطة الخريطة (Map point) هو 29.373827, 47.972932، ويمكن فتح الرابط المباشر للخريطة من زر «الاتجاهات على الخريطة» أعلى الصفحة للوصول سيرًا أو بسيارة أجرة إلى حافة السوق."],
		["هل يحتاج سوق المباركية إلى تذكرة دخول؟", "هذه منطقة أسواق وليست معلمًا واحدًا بتذكرة موحدة. اسأل الجهة المعنية عن أي رسوم قبل استخدام الخدمة؛ المشتريات والطعام منفصلان."],
		["ما الوقت الأنسب لزيارة سوق المباركية؟", "تكون الأجواء ألطف عادة في الأشهر المعتدلة، كما أن فترة ما بعد العصر والمساء مناسبة لمن يريد أجواء السوق النشطة. الزيارة الصباحية أنسب غالبًا لمن يفضّل هدوءًا نسبيًا."],
		["كم تستغرق الزيارة؟", "يمكن تخصيص نحو ساعة ونصف إلى ثلاث ساعات لاستكشاف الممرات والأسواق المتخصصة وتناول وجبة أو مشروب. المدة تقديرية وتختلف حسب الاهتمامات."],
		["كيف أصل من مطار الكويت الدولي؟", "يمكن استخدام سيارة أجرة مرخصة من المطار، أو خطوط النقل العام المتجهة نحو مركز المدينة ثم متابعة الطريق سيرًا أو بسيارة أجرة قصيرة. راجع الجداول الرسمية قبل الانطلاق لأنها قابلة للتغيير."],
		["هل توجد مواقف سيارات؟", "حدد موقفًا يعمل حاليًا قبل الانطلاق، وتحقق من المدخل والأسعار ومسار المشي إلى السوق؛ لا يوثق هذا الدليل مرفقًا بعينه."],
		["ما هي ساعات عمل سوق المباركية ومتى يفتح؟", "تعرض قائمة خرائط Google التي روجعت في 23 أكتوبر 2026 ساعات 08:00–22:00 يوميًا (من الاثنين إلى الأحد) لمنطقة السوق العامة. هذه الساعات إرشادية وقد تختلف بحسب المحل أو الموسم أو المناسبة، لذلك يُستحسن مراجعة اللافتات المحلية أو القنوات الرسمية عند الوصول، خصوصًا في الأعياد والمناسبات."],
		["هل توجد مطاعم وأكلات مشهورة في سوق المباركية؟", "يُعرف السوق بأجواء الأكل الشعبي: المشويات وأطباق الأرز والمأكولات البحرية والحلويات والتمور والقهوة. هذا دليل للسوق كله، وليس لمطعم بعينه. راجع قائمة الطعام والأسعار الحالية لدى البائع قبل الطلب."],
		["هل توجد دورات مياه وخدمات للزوار؟", "اسأل عند الوصول عن أقرب دورة مياه مفتوحة ومسار خالٍ من الدرج. لم يتحقق هذا الدليل من تشغيل المرافق المنفردة أو ساعاتها أو إمكانية الوصول إليها."],
		["هل السوق مناسب لمستخدمي الكراسي المتحركة؟", "بعض الممرات واسعة وممهدة، بينما قد تكون أجزاء السوق التاريخية مزدحمة أو ذات انتقالات غير متساوية. من الأفضل اختيار المداخل الأوسع وتجنب ساعات الذروة عند الحاجة إلى حركة أسهل."],
		["ما الذي يميز سوق المباركية تاريخيًا؟", "المنطقة جزء من شبكة أسواق قديمة في قلب مدينة الكويت، وارتبطت بتجارة الغذاء والعطور والأقمشة والأسلحة والبشوت وغيرها. تصف جامعة الكويت شبكة من الأسواق التاريخية؛ لا ينبغي تعميم تاريخ معلم منفرد على السوق كله."]
	];
	const attractionSchema = {
		"@context": "https://schema.org",
		"@type": "TouristAttraction",
		"@id": attractionId,
		...pageUrl ? { url: pageUrl } : {},
		name: "سوق المباركية",
		alternateName: [
			"Souk Al-Mubarakiya",
			"Al-Mubarakiya Old Souk",
			"Kuwait City Souk Al-Mubarakiya",
			"مطعم شباب المباركية"
		],
		description: "دليل زوار شامل لسوق المباركية في مدينة الكويت، محافظة العاصمة، دولة الكويت: التاريخ، الموقع، أوقات الزيارة، المواصلات، المرافق والمعالم القريبة.",
		image: [heroImage],
		address,
		geo: {
			"@type": "GeoCoordinates",
			latitude: 29.3738265,
			longitude: 47.9729324
		},
		containedInPlace: {
			"@type": "City",
			name: "مدينة الكويت",
			containedInPlace: {
				"@type": "Country",
				name: "دولة الكويت"
			}
		},
		hasMap: "https://maps.app.goo.gl/Unad47yFEGSrn79r6"
	};
	const webPageSchema = {
		"@context": "https://schema.org",
		"@type": "WebPage",
		...pageUrl ? { url: pageUrl } : {},
		name: "دليل سوق المباركية في مدينة الكويت",
		inLanguage: "ar-KW",
		dateModified: "2026-10-23",
		about: { "@id": attractionId },
		mainEntity: { "@id": attractionId },
		isPartOf: {
			"@type": "WebSite",
			"@id": websiteId,
			...pageUrl ? { url: pageUrl } : {},
			name: "دليل سوق المباركية"
		}
	};
	const faqSchema = {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faq.map(([q, a]) => ({
			"@type": "Question",
			name: q,
			acceptedAnswer: {
				"@type": "Answer",
				text: a
			}
		}))
	};
	const photos = [{
		src: "/images/souk-al-mubarakiya-night.jpg",
		alt: "سوق المباركية - منظر رئيسي في مدينة الكويت، الكويت، ليلًا",
		credit: "تصوير: زيرون — ترخيص المشاع الإبداعي نَسب المصنف 4.0"
	}, {
		src: "/images/souk-al-mubarakiya-day.jpg",
		alt: "سوق المباركية - مشهد نهاري من ممرات السوق في مدينة الكويت",
		credit: "تصوير: عزيز1005 — ملكية عامة"
	}];
	const mapsUrl = "https://maps.app.goo.gl/Unad47yFEGSrn79r6";
	const mapsEmbedSrc = "https://www.google.com/maps?q=29.3738265,47.9729324&output=embed";
	return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {
		"title": "سوق المباركية في الكويت | الموقع وأوقات العمل ودليل الزيارة",
		"description": "خطط لزيارة سوق المباركية في مدينة الكويت: خريطة الموقع وساعات مؤرخة، الأسواق التاريخية والطعام وتوقعات الطقس وما ينبغي التحقق منه قبل الذهاب.",
		"path": "/",
		"image": "/images/souk-al-mubarakiya-night.jpg",
		"imageAlt": "سوق المباركية في مدينة الكويت — ممرات السوق التاريخية ليلًا",
		"lang": "ar",
		"siteName": SITE_NAME_AR,
		"jsonLd": [
			attractionSchema,
			webPageSchema,
			faqSchema
		],
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`${maybeRenderHead($$result)}<section class="hero geometric" data-astro-cid-lcdefpme><div class="wrap hero-grid" data-astro-cid-lcdefpme><div class="hero-copy" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>مدينة الكويت · القبلة · قلب الأسواق التاريخية</p><h1 data-astro-cid-lcdefpme>سوق المباركية (مدينة الكويت)</h1><p class="hero-lead" data-astro-cid-lcdefpme>ممرات مظللة، رائحة البهارات والقهوة، واجهات خشبية، وأسواق متخصصة تحفظ صورة من الحياة التجارية القديمة في الكويت.</p><div class="facts" aria-label="معلومات سريعة" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>08:00–22:00</b><small data-astro-cid-lcdefpme>خرائط Google · 23 أكتوبر 2026؛ تختلف المحلات</small></span><span data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>4.4 / 5</b><small data-astro-cid-lcdefpme>خرائط Google: 26,529 مراجعة · 23 أكتوبر 2026</small></span><span data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>29.373827, 47.972932</b><small data-astro-cid-lcdefpme>نقطة الخريطة في مدينة الكويت</small></span></div><div class="actions" data-astro-cid-lcdefpme><a class="primary" href="#visit" data-astro-cid-lcdefpme>خطط زيارتك</a><a class="secondary"${addAttribute(mapsUrl, "href")} rel="noopener noreferrer" data-astro-cid-lcdefpme>الاتجاهات على الخريطة</a></div></div><figure class="arch hero-photo" data-astro-cid-lcdefpme><img${addAttribute(photos[0].src, "src")}${addAttribute(photos[0].alt, "alt")} width="960" height="656" loading="eager" fetchpriority="high" data-astro-cid-lcdefpme><figcaption data-astro-cid-lcdefpme>${photos[0].credit} · <a href="https://commons.wikimedia.org/wiki/File:Kuwait_City_Souq_al-Mubarakeya_at_Night_01.jpg" data-astro-cid-lcdefpme>Wikimedia Commons</a> · <a href="https://creativecommons.org/licenses/by/4.0/" data-astro-cid-lcdefpme>CC BY 4.0</a> · 3 ديسمبر 2022؛ تغيير الحجم وقص العرض.</figcaption></figure></div></section><section class="identity-strip" data-astro-cid-lcdefpme><div class="wrap identity-grid" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><small data-astro-cid-lcdefpme>الاسم</small><strong data-astro-cid-lcdefpme>سوق المباركية</strong></div><div data-astro-cid-lcdefpme><small data-astro-cid-lcdefpme>الموقع</small><strong data-astro-cid-lcdefpme>المباركية، شارع سوق الغربللي، مدينة الكويت</strong></div><div data-astro-cid-lcdefpme><small data-astro-cid-lcdefpme>الإحداثيات</small><strong dir="ltr" data-astro-cid-lcdefpme>29.373827, 47.972932</strong></div><div data-astro-cid-lcdefpme><small data-astro-cid-lcdefpme>الطبيعة</small><strong data-astro-cid-lcdefpme>سوق تراثي ومقصد للزوار</strong></div></div></section>${renderComponent($$result, "WeatherSection", $$WeatherSection, {
		"lang": "ar",
		"data-astro-cid-lcdefpme": true
	}, { "default": ($$result) => renderTemplate`<div class="wrap" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>الطقس الآن</p><h2 class="section-title" data-astro-cid-lcdefpme>الطقس في سوق المباركية</h2></div>` })}<section id="about" class="section" data-astro-cid-lcdefpme><div class="wrap about-grid" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>عن الوجهة</p><h2 class="section-title" data-astro-cid-lcdefpme>عن سوق المباركية</h2><p class="lead" data-astro-cid-lcdefpme>مرحبًا بكم في <strong data-astro-cid-lcdefpme>سوق المباركية</strong>، الذي يُعرف على نطاق واسع بوصفه <strong data-astro-cid-lcdefpme>قلب الأسواق التاريخية في مدينة الكويت</strong>. يقع هذا الوجهة في قلب العاصمة، في <strong data-astro-cid-lcdefpme>محافظة العاصمة</strong>، <strong data-astro-cid-lcdefpme>دولة الكويت</strong>، ويشكّل محورًا رئيسيًا للزوار القادمين إلى المنطقة.</p><div class="crumb" aria-label="التسلسل الجغرافي" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>سوق المباركية</span><i data-astro-cid-lcdefpme>←</i><span data-astro-cid-lcdefpme>مدينة الكويت</span><i data-astro-cid-lcdefpme>←</i><span data-astro-cid-lcdefpme>محافظة العاصمة</span><i data-astro-cid-lcdefpme>←</i><span data-astro-cid-lcdefpme>دولة الكويت</span></div><p class="nearby-lead" data-astro-cid-lcdefpme>عند زيارة <strong data-astro-cid-lcdefpme>سوق المباركية</strong> يمكن للزوار استكشاف معالم تاريخية ومناطق جذب قريبة، منها <strong data-astro-cid-lcdefpme>كشك الشيخ مبارك</strong> و<strong data-astro-cid-lcdefpme>المسجد الكبير</strong>، إضافة إلى قصر السيف ومتحف الكويت الوطني وبيت السدو.</p></div><aside class="card loc-card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>الموقع وساعات الزيارة</h3><dl data-astro-cid-lcdefpme><dt data-astro-cid-lcdefpme>العنوان</dt><dd dir="ltr" data-astro-cid-lcdefpme>Al-Mubarakiya, Gharabally Souq St, Kuwait City</dd><dt data-astro-cid-lcdefpme>ساعات الزيارة</dt><dd data-astro-cid-lcdefpme>08:00–22:00 · خرائط Google، 23 أكتوبر 2026؛ تختلف المحلات والعطلات.</dd><dt data-astro-cid-lcdefpme>نقطة الخريطة</dt><dd dir="ltr" data-astro-cid-lcdefpme>29.373827, 47.972932</dd><dt data-astro-cid-lcdefpme>التقييم</dt><dd dir="ltr" data-astro-cid-lcdefpme>4.4 / 5 (26,529)</dd></dl><a class="loc-link"${addAttribute(mapsUrl, "href")} rel="noopener noreferrer" data-astro-cid-lcdefpme>الاتجاهات على خرائط غوغل ↗</a></aside></div></section><section id="history" class="section" data-astro-cid-lcdefpme><div class="wrap history-grid" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>هوية المكان</p><h2 class="section-title" data-astro-cid-lcdefpme>تاريخ سوق المباركية وأهميته</h2><p class="lead" data-astro-cid-lcdefpme>سوق ليس مبنى واحدًا، بل ذاكرة تجارية متشابكة — تصف المصادر الأكاديمية والرسمية المباركية بوصفها جزءًا من قلب الكويت القديم وشبكة من الأسواق المتخصصة. وتفيد جامعة الكويت بأن أسواق المنطقة تمتد جذورها إلى أكثر من 180 عامًا، مع أكثر من عشرين سوقًا تخصصيًا عُرفت بمهن وسلع مختلفة.</p><div class="timeline" data-astro-cid-lcdefpme><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>قبل العصر النفطي</b><p data-astro-cid-lcdefpme>تشكّلت في المنطقة أسواق للحوم والخضار والحلوى والبشوت والسلاح والمناخ وغيرها، وكانت نقطة تبادل يومية بين أهل المدينة والتجار.</p></article><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>معالم تاريخية</b><p data-astro-cid-lcdefpme>ترتبط المعالم المنفردة بتاريخ منطقة الأسواق الأوسع؛ ولا تؤرخ وحدها نشأة السوق كله.</p></article><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>منطقة الأسواق</b><p data-astro-cid-lcdefpme>تربط جامعة الكويت شيوع اسم المنطقة في فترة متأخرة بانتقال المدرسة المباركية قرب السوق.</p></article><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>نحو 1969–1970</b><p data-astro-cid-lcdefpme>شهدت المنطقة أعمال تنظيم وتطوير حافظت على طابع الأسواق وممراتها التراثية بدل تحويلها إلى مركز تجاري حديث مغلق.</p></article><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>2022 وما بعده</b><p data-astro-cid-lcdefpme>أصاب حريق جزءًا من أقدم النطاقات التاريخية، ثم أعاد النقاش حول الحماية والترميم أهمية توثيق المباني والهوية العمرانية.</p></article></div></div><div data-astro-cid-lcdefpme><figure class="arch side-photo" data-astro-cid-lcdefpme><img${addAttribute(photos[1].src, "src")}${addAttribute(photos[1].alt, "alt")} loading="lazy" width="960" height="720" data-astro-cid-lcdefpme><figcaption data-astro-cid-lcdefpme>${photos[1].credit} · <a href="https://commons.wikimedia.org/wiki/File:Elmubarakiya-market-kuwait.jpg" data-astro-cid-lcdefpme>Wikimedia Commons · 2008</a></figcaption></figure><aside class="source-note card" data-astro-cid-lcdefpme><strong data-astro-cid-lcdefpme>كيف نتحقق من الرواية؟</strong><p data-astro-cid-lcdefpme>نفرّق بين تاريخ المعالم الفردية وتاريخ شبكة الأسواق، ونقارن بين مصادر حكومية وأكاديمية بدل تكرار تواريخ شائعة بلا سياق.</p></aside></div></div></section><section class="section dark" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>قراءة السوق</p><h2 class="section-title" data-astro-cid-lcdefpme>ما الذي ستراه في الممرات؟</h2><div class="market-grid" data-astro-cid-lcdefpme><article data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>01</span><h3 data-astro-cid-lcdefpme>الأسواق المتخصصة</h3><p data-astro-cid-lcdefpme>تاريخيًا عُرفت أجزاء من المباركية بأسماء مرتبطة بالسلع والحرف، مثل أسواق البشوت والحلوى واللحم والخضار والسلاح والمناخ.</p></article><article data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>02</span><h3 data-astro-cid-lcdefpme>الظل والخشب</h3><p data-astro-cid-lcdefpme>الممرات المسقوفة والعناصر الخشبية ليست مجرد ديكور؛ إنها استجابة محلية للشمس والحرارة وتمنح السوق هويته العمرانية.</p></article><article data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>03</span><h3 data-astro-cid-lcdefpme>الغذاء والعطر</h3><p data-astro-cid-lcdefpme>البهارات والتمور والقهوة والعطور والأطعمة المحلية جزء أساسي من التجربة الحسية للمكان، من دون حاجة إلى حصر الزيارة في متجر بعينه.</p></article><article data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>04</span><h3 data-astro-cid-lcdefpme>المعالم المدنية</h3><p data-astro-cid-lcdefpme>قرب الأسواق توجد شواهد على تاريخ الإدارة والتعليم والحياة العامة، وفي مقدمتها كشك الشيخ مبارك وما تبقى من ذاكرة المدينة القديمة.</p></article></div></div></section><section id="visit" class="section" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>خطة عملية</p><h2 class="section-title" data-astro-cid-lcdefpme>قبل أن تذهب</h2><div class="planning-grid" data-astro-cid-lcdefpme><article class="card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>الدخول والتكاليف</h3><p data-astro-cid-lcdefpme>السوق منطقة تضم باعة مستقلين. اسأل عن ثمن الخدمة قبل استخدامها؛ الطعام والمشتريات والمعالم المنفصلة لها ترتيباتها الخاصة.</p></article><article class="card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>أفضل وقت</h3><p data-astro-cid-lcdefpme>تكون الأشهر المعتدلة أكثر راحة للمشي. المساء يمنح أجواء أكثر حيوية وإضاءة، بينما تسمح الزيارة الصباحية عادة باستكشاف أهدأ نسبيًا.</p></article><article class="card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>مدة مقترحة</h3><p data-astro-cid-lcdefpme>خطط لنحو ساعة ونصف إلى ثلاث ساعات. أضف وقتًا إذا كنت مهتمًا بالتاريخ أو الطعام أو المشي إلى المعالم العامة القريبة.</p></article><article class="card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>الملابس والسلوك</h3><p data-astro-cid-lcdefpme>اختر ملابس مريحة ومحتشمة وحذاء مناسبًا للمشي. احترم خصوصية الباعة والزوار عند التصوير، واطلب الإذن عند تصوير أشخاص عن قرب.</p></article></div></div></section><section id="transport" class="section sand" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>تفاصيل الوصول</p><h2 class="section-title" data-astro-cid-lcdefpme>الموقع وطرق الوصول إلى سوق المباركية في مدينة الكويت</h2><p class="lead" data-astro-cid-lcdefpme>من المطار، بالحافلة، بسيارة الأجرة أو بالسيارة — يقع السوق في حي المباركية بوسط مدينة الكويت على شارع سوق الغربللي، ونقطة الخريطة 29.373827, 47.972932.</p><div class="transport-grid" data-astro-cid-lcdefpme><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>01</b><div data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>من مطار الكويت الدولي</h3><p data-astro-cid-lcdefpme>اسأل مكتب النقل في المطار عن خيارات سيارات الأجرة المرخصة والحافلات الحالية إلى وسط مدينة الكويت. أكد السعر والوجهة قبل المغادرة؛ لا يوثق هذا الدليل خدمة مباشرة من المطار إلى السوق.</p></div></article><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>02</b><div data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>الحافلات العامة</h3><p data-astro-cid-lcdefpme>راجع المسار والجدول الحاليين لدى مشغل النقل بحسب نقطة انطلاقك. أكد المحطة ومسار المشي المتبقي قبل الركوب؛ لا نضمن رقم خط معين.</p></div></article><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>03</b><div data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>سيارات الأجرة</h3><p data-astro-cid-lcdefpme>استخدم سيارات الأجرة المرخصة أو نقاط الركوب المعروفة، واطلب تطبيق العداد أو السعر النظامي المعمول به. الوصول إلى حافة منطقة السوق غالبًا أسهل من محاولة الدخول إلى الممرات الداخلية.</p></div></article><article data-astro-cid-lcdefpme><b data-astro-cid-lcdefpme>04</b><div data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>بالسيارة الخاصة</h3><p data-astro-cid-lcdefpme>استهدف مرافق المواقف العامة في نطاق وسط المدينة، ثم أكمل المسافة القصيرة سيرًا. في ساعات المساء والعطلات، اترك هامشًا زمنيًا للبحث عن موقف والخروج من المنطقة.</p></div></article></div><div class="card" style="padding:26px;border-radius:26px;margin-top:18px" data-astro-cid-lcdefpme><h3 style="margin-top:0;color:#3a2418" data-astro-cid-lcdefpme>نصائح عملية للوصول</h3><ul style="margin:0;color:#685647;display:grid;gap:8px;padding-inline-start:1.1rem" data-astro-cid-lcdefpme><li data-astro-cid-lcdefpme>حدّد وجهتك في تطبيق الخرائط باسم «سوق المباركية، شارع سوق الغربللي» لتجنّب الخلط مع أسواق أخرى.</li><li data-astro-cid-lcdefpme>من المطار: توجّه أولًا إلى وسط مدينة الكويت، ثم أكمل سيرًا أو بسيارة أجرة قصيرة إلى حافة السوق.</li><li data-astro-cid-lcdefpme>بالحافلة: أكد المحطة المناسبة ومسار المشي لدى المشغل قبل الركوب.</li><li data-astro-cid-lcdefpme>بسيارة الأجرة: اطلب الإنزال عند مدخل السوق لا داخل الممرات الضيقة.</li><li data-astro-cid-lcdefpme>راجع الجداول والتعرفات الرسمية في يوم الزيارة؛ فقد تتغير.</li></ul></div><div class="map-frame card" data-astro-cid-lcdefpme><iframe${addAttribute(mapsEmbedSrc, "src")} width="600" height="450" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" title="خريطة موقع سوق المباركية في مدينة الكويت" data-astro-cid-lcdefpme></iframe></div></div></section><section id="facilities" class="section" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>احتياجات الزائر</p><h2 class="section-title" data-astro-cid-lcdefpme>الخدمات والمرافق حول السوق</h2><p class="lead" data-astro-cid-lcdefpme>نذكر أنواع الخدمات فقط للحفاظ على حياد الدليل وعدم تحويله إلى صفحة إعلانية. توفر الخدمة وساعاتها قد تتغير، لذلك راجع اللافتات المحلية عند الوصول.</p><div class="facility-grid" data-astro-cid-lcdefpme><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>🚻</i><h3 data-astro-cid-lcdefpme>دورات المياه</h3><p data-astro-cid-lcdefpme>اسأل عن أقرب دورة مياه مفتوحة ومدخل خالٍ من الدرج. لا نوثق مرفقًا منفردًا هنا.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>🅿️</i><h3 data-astro-cid-lcdefpme>مواقف السيارات</h3><p data-astro-cid-lcdefpme>تحقق من مدخل الموقف المختار وساعاته ورسومه ومسار المشاة قبل الاعتماد عليه.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>🍽️</i><h3 data-astro-cid-lcdefpme>الطعام</h3><p data-astro-cid-lcdefpme>مطاعم شعبية، مشويات، أطباق أرز، مأكولات بحرية، خبز، حلويات وتمور ومقاهي وشاي.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>🛏️</i><h3 data-astro-cid-lcdefpme>الإقامة</h3><p data-astro-cid-lcdefpme>اختر الإقامة بحسب معلوماتها الحالية، وتحقق من مسار المشي أو وصلة النقل التي تحتاجها.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>🛒</i><h3 data-astro-cid-lcdefpme>المواد اليومية</h3><p data-astro-cid-lcdefpme>تأكد مباشرة من ساعات المحل إذا كنت تحتاج سلعة أو خدمة أساسية معينة.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>⛽</i><h3 data-astro-cid-lcdefpme>الوقود والشحن</h3><p data-astro-cid-lcdefpme>حدد نقطة وقود أو شحن تعمل حاليًا قبل السفر، وتحقق من توافق المركبة؛ لا يوثق هذا الدليل نقطة بعينها.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>💳</i><h3 data-astro-cid-lcdefpme>الدفع والصراف</h3><p data-astro-cid-lcdefpme>اسأل البائع عن طرق الدفع المقبولة قبل الطلب أو الشراء، ولا تعتمد على توفر جهاز صراف معين.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>🕌</i><h3 data-astro-cid-lcdefpme>أماكن الصلاة</h3><p data-astro-cid-lcdefpme>راجع معلومات دخول المسجد أو المصلى المعني واحترم أوقات الصلاة.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>➕</i><h3 data-astro-cid-lcdefpme>الصيدلية والإسعافات</h3><p data-astro-cid-lcdefpme>إذا احتجت صيدلية أو خدمة طبية، حدد جهة مفتوحة مسبقًا؛ لا يوثق هذا الدليل نقطة إسعاف.</p></article><article data-astro-cid-lcdefpme><i data-astro-cid-lcdefpme>♿</i><h3 data-astro-cid-lcdefpme>سهولة الحركة</h3><p data-astro-cid-lcdefpme>تحقق مسبقًا من المدخل والمسار المناسبين لاحتياجاتك. قد يؤثر الزحام ونوع الأرضية والدرج في الوصول.</p></article></div></div></section><section class="section dark food" data-astro-cid-lcdefpme><div class="wrap split" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>حول المائدة</p><h2 class="section-title" data-astro-cid-lcdefpme>ماذا تأكل من دون قوائم تجارية؟</h2><p class="lead" data-astro-cid-lcdefpme>تعامل مع المباركية كمنطقة نكهات لا كقائمة مطاعم. ابحث عن الأنواع التي تعبّر عن المطبخ المحلي وتناسب ميزانيتك واحتياجاتك الغذائية.</p></div><div class="chips" data-astro-cid-lcdefpme><span data-astro-cid-lcdefpme>أرز ولحوم على الطريقة الكويتية</span><span data-astro-cid-lcdefpme>مشويات</span><span data-astro-cid-lcdefpme>مأكولات بحرية</span><span data-astro-cid-lcdefpme>خبز محلي</span><span data-astro-cid-lcdefpme>حلويات وتمور</span><span data-astro-cid-lcdefpme>قهوة وشاي</span><span data-astro-cid-lcdefpme>بهارات وأعشاب</span></div></div></section>${renderComponent($$result, "GuideSections", $$GuideSections, {
		"lang": "ar",
		"data-astro-cid-lcdefpme": true
	})}<section class="section" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>في المحيط القريب</p><h2 class="section-title" data-astro-cid-lcdefpme>معالم ومناطق جذب حول سوق المباركية</h2><p class="lead" data-astro-cid-lcdefpme>معالم عامة تكمل قراءة وسط مدينة الكويت ويمكن الوصول إليها سيرًا من منطقة الأسواق.</p><div class="nearby-grid" data-astro-cid-lcdefpme><article class="card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>كشك الشيخ مبارك</h3><p data-astro-cid-lcdefpme>معلم تاريخي داخل نطاق المباركية يرتبط بالإدارة والحياة العامة في عهد الشيخ مبارك الصباح، ويُنظر إليه كمعلم منفرد ضمن تاريخ منطقة الأسواق الأوسع.</p></article><article class="card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>المسجد الكبير</h3><p data-astro-cid-lcdefpme>معلم ديني ومعماري بارز في مركز مدينة الكويت. راعِ أوقات الصلاة ومتطلبات الدخول والملابس عند الزيارة.</p></article><article class="card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>قصر السيف ومحيطه</h3><p data-astro-cid-lcdefpme>منطقة ذات أهمية سياسية وعمرانية على الواجهة الحضرية القديمة. بعض الأجزاء ليست مرفقًا سياحيًا مفتوحًا، لذلك تُشاهد من الأماكن العامة المسموح بها.</p></article><article class="card" data-astro-cid-lcdefpme><h3 data-astro-cid-lcdefpme>متحف الكويت الوطني وبيت السدو</h3><p data-astro-cid-lcdefpme>مؤسسات ثقافية تساعد على وضع السوق ضمن سياق أوسع للحياة البحرية والبدوية والحرفية في الكويت. تحقق من ساعات الزيارة الرسمية مسبقًا.</p></article></div></div></section><section id="faq" class="section sand" data-astro-cid-lcdefpme><div class="wrap faq-wrap" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>إجابات سريعة</p><h2 class="section-title" data-astro-cid-lcdefpme>أسئلة شائعة عن سوق المباركية</h2><p class="lead" data-astro-cid-lcdefpme>المعلومات التشغيلية تتغير. عند تعارض هذه الصفحة مع إعلان رسمي حديث، اتبع الإعلان الرسمي.</p></div><div class="faq-list" data-astro-cid-lcdefpme>${faq.map(([q, a], i) => renderTemplate`<details${addAttribute(`faq-${i + 1}`, "id")} data-astro-cid-lcdefpme><summary data-astro-cid-lcdefpme>${q}</summary><p data-astro-cid-lcdefpme>${a}</p></details>`)}</div></div></section><section class="section" data-astro-cid-lcdefpme><div class="wrap" data-astro-cid-lcdefpme><p data-astro-cid-lcdefpme>دليل مستقل للزوار، وليس إدارة السوق أو مطعمًا. روجع موقع السوق ولقطة القائمة في 23 أكتوبر 2026. قد تختلف ساعات الباعة والمعالم والعطلات؛ تأكد مباشرة من الخدمة المهمة قبل السفر.</p></div></section><section class="section sources" data-astro-cid-lcdefpme><div class="wrap source-grid" data-astro-cid-lcdefpme><div data-astro-cid-lcdefpme><p class="eyebrow" data-astro-cid-lcdefpme>منهج التوثيق</p><h2 class="section-title" data-astro-cid-lcdefpme>مصادر عامة وأكاديمية، لا محتوى دعائي</h2><p class="lead" data-astro-cid-lcdefpme>لربط الصفحة بالمكان الحقيقي، تُراجع التسمية والإحداثيات والخريطة مع بيانات الموقع، وتُقارن الرواية التاريخية بمصادر كويتية رسمية وأكاديمية.</p></div><div class="source-links" data-astro-cid-lcdefpme><a href="https://www.ku.edu.kw/ar/media-center/news/kuw246554" rel="noopener noreferrer" data-astro-cid-lcdefpme>جامعة الكويت: توثيق تاريخ المباركية وتطورها العمراني <span data-astro-cid-lcdefpme>↗</span></a></div></div></section>` })}`;
}, "/site/src/pages/index.astro", void 0);
var $$file = "/site/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
