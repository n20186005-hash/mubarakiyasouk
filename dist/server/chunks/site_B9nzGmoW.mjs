globalThis.process ??= {};
globalThis.process.env ??= {};
import { D as renderTemplate, O as maybeRenderHead, R as createAstro } from "./sequence_RIOL4Z-o.mjs";
import { t as createComponent } from "./compiler_C0lOyPMK.mjs";
//#region src/lib/weather.ts
var LAT = 29.3738265;
var LON = 47.9729324;
var TTL_MS = 6e5;
var WMO = {
	0: {
		ar: "صافٍ",
		en: "Clear sky",
		icon: "☀️"
	},
	1: {
		ar: "صافٍ ببعض السحب",
		en: "Mainly clear",
		icon: "🌤️"
	},
	2: {
		ar: "غائم جزئياً",
		en: "Partly cloudy",
		icon: "⛅"
	},
	3: {
		ar: "غائم",
		en: "Overcast",
		icon: "☁️"
	},
	45: {
		ar: "ضباب",
		en: "Fog",
		icon: "🌫️"
	},
	48: {
		ar: "ضباب متجمد",
		en: "Rime fog",
		icon: "🌫️"
	},
	51: {
		ar: "رذاذ خفيف",
		en: "Light drizzle",
		icon: "🌦️"
	},
	53: {
		ar: "رذاذ",
		en: "Drizzle",
		icon: "🌦️"
	},
	55: {
		ar: "رذاذ كثيف",
		en: "Dense drizzle",
		icon: "🌧️"
	},
	61: {
		ar: "مطر خفيف",
		en: "Light rain",
		icon: "🌦️"
	},
	63: {
		ar: "مطر متوسط",
		en: "Rain",
		icon: "🌧️"
	},
	65: {
		ar: "مطر غزير",
		en: "Heavy rain",
		icon: "🌧️"
	},
	66: {
		ar: "مطر متجمد خفيف",
		en: "Light freezing rain",
		icon: "🌧️"
	},
	67: {
		ar: "مطر متجمد",
		en: "Freezing rain",
		icon: "🌧️"
	},
	71: {
		ar: "ثلج خفيف",
		en: "Light snow",
		icon: "🌨️"
	},
	73: {
		ar: "ثلج",
		en: "Snow",
		icon: "🌨️"
	},
	75: {
		ar: "ثلج كثيف",
		en: "Heavy snow",
		icon: "❄️"
	},
	77: {
		ar: "حبيبات ثلجية",
		en: "Snow grains",
		icon: "🌨️"
	},
	80: {
		ar: "رذاذ عابر",
		en: "Rain showers",
		icon: "🌦️"
	},
	81: {
		ar: "مطر عابر",
		en: "Rain showers",
		icon: "🌧️"
	},
	82: {
		ar: "عواصف مطرية",
		en: "Violent rain showers",
		icon: "⛈️"
	},
	85: {
		ar: "ثلج عابر",
		en: "Snow showers",
		icon: "🌨️"
	},
	86: {
		ar: "عواصف ثلجية",
		en: "Heavy snow showers",
		icon: "❄️"
	},
	95: {
		ar: "عاصفة رعدية",
		en: "Thunderstorm",
		icon: "⛈️"
	},
	96: {
		ar: "رعد مع برد خفيف",
		en: "Thunderstorm with hail",
		icon: "⛈️"
	},
	99: {
		ar: "رعد مع برد",
		en: "Thunderstorm with heavy hail",
		icon: "⛈️"
	}
};
function describe(code, lang) {
	return WMO[code] ?? (lang === "ar" ? {
		ar: "حالة جوية متغيرة",
		en: "Variable",
		icon: "🌡️"
	} : {
		ar: "",
		en: "Variable",
		icon: "🌡️"
	});
}
function beaufort(kmh) {
	const steps = [
		1,
		6,
		12,
		20,
		29,
		39,
		50,
		62,
		75,
		89,
		103,
		118
	];
	let level = 0;
	for (const s of steps) if (kmh >= s) level++;
	else break;
	return level;
}
var cache = null;
var RAIN_LIGHT = /* @__PURE__ */ new Set([
	51,
	53,
	55,
	61,
	63,
	66,
	67,
	80,
	81
]);
var RAIN_HEAVY = /* @__PURE__ */ new Set([65, 82]);
var THUNDER = /* @__PURE__ */ new Set([
	95,
	96,
	99
]);
var FOG = /* @__PURE__ */ new Set([45, 48]);
var CLEAR = /* @__PURE__ */ new Set([
	0,
	1,
	2
]);
var CLOUDY = /* @__PURE__ */ new Set([3]);
function buildAdvice(d) {
	const c = d.current;
	const today = d.days[0];
	const tmax = today ? today.tmax : c.temp;
	const tmin = today ? today.tmin : c.temp;
	const precip = today ? today.precip : c.precipProb;
	const uv = today ? today.uv : c.uv;
	const outfit = /* @__PURE__ */ new Map();
	const plan = /* @__PURE__ */ new Map();
	const items = /* @__PURE__ */ new Map();
	const add = (cat, key, txt) => {
		(cat === "outfit" ? outfit : cat === "plan" ? plan : items).set(key, txt);
	};
	let risk = null;
	const setRisk = (txt) => {
		if (!risk) risk = txt;
	};
	if (precip >= 60) {
		add("outfit", "rain-gear", {
			ar: "أحضر معك مطراً أو مظلة حتى لا يقطع المطر زيارتك.",
			en: "Carry rain gear or an umbrella so a shower does not cut your visit short."
		});
		add("plan", "rain-indoor", {
			ar: "ابدأ بالأنشطة المكشوفة أولاً واحتفظ بالخيارات المغطاة احتياطاً.",
			en: "Do the open-air browsing first and keep covered options in reserve."
		});
		add("items", "umbrella", {
			ar: "مظلة أو مطر خفيف.",
			en: "Umbrella or a light raincoat."
		});
	}
	if (RAIN_LIGHT.has(c.code)) {
		add("plan", "wet-floor", {
			ar: "الأرضيات قد تكون زلقة — انتبه أثناء المشي.",
			en: "Pavements can be slippery — mind your step."
		});
		add("items", "fold", {
			ar: "مظلة قابلة للطي.",
			en: "A foldable umbrella."
		});
	}
	if (RAIN_HEAVY.has(c.code)) {
		setRisk({
			ar: "مطر غزير: تجنّب المناطق المكشوفة المنخفضة وتوجّه للأروقة المغطاة.",
			en: "Heavy rain: avoid open low spots and head for the covered arcades."
		});
		add("plan", "heavy-rain", {
			ar: "لا يُنصح بالتجول الطويل في الخارج؛ الأروقة المغطاة أكثر راحة.",
			en: "Long outdoor wandering is not advised; the covered arcades are more comfortable."
		});
		add("items", "raincoat", {
			ar: "مطر (لا مظلة طويلة مع الرياح).",
			en: "Raincoat (skip the long umbrella in wind)."
		});
	}
	if (THUNDER.has(c.code)) setRisk({
		ar: "عاصفة رعدية: ادخل منطقة مغطاة فوراً، ولا تبقَ في الساحات المفتوحة أو تحت الأشجار.",
		en: "Thunderstorm: move under cover at once; do not stay in open squares or shelter under trees."
	});
	if (tmax >= 33 || c.temp >= 33) {
		add("outfit", "light", {
			ar: "ملابس خفيفة ومريحة تسمح بالتهوية.",
			en: "Light, breathable clothing."
		});
		add("plan", "heat-noon", {
			ar: "اختر الساعات الألطف وتجنّب ذروة الظهيرة قدر الإمكان.",
			en: "Pick the cooler hours and avoid the midday peak where you can."
		});
		add("items", "water", {
			ar: "مياه للشرب بانتظام.",
			en: "Water to drink regularly."
		});
	}
	if (tmax >= 38 || c.temp >= 38) {
		add("items", "heat", {
			ar: "مستلزمات وقاية من الحر (واقٍ شمسي وكثير من الماء).",
			en: "Heat protection (sunscreen and plenty of water)."
		});
		add("plan", "shorten", {
			ar: "قلّص وقت التجول في الخارج وارح بين الحين والآخر.",
			en: "Shorten outdoor wandering and rest now and then."
		});
	}
	if (uv >= 5) {
		add("items", "uv", {
			ar: "واقٍ شمسي ونظارة شمسية وقبعة.",
			en: "Sunscreen, sunglasses and a hat."
		});
		add("plan", "uv-plan", {
			ar: "الشمس قوية — كرّر وضع الواقي الشمسي خلال اليوم.",
			en: "The sun is strong — reapply sunscreen through the day."
		});
	}
	if (tmax - tmin > 8) add("outfit", "layer", {
		ar: "فارق كبير بين الليل والنهار — احمل طبقة إضافية تخلعها لاحقاً.",
		en: "Big day–night swing — bring a layer you can shed later."
	});
	if (tmax <= 12) add("outfit", "warm", {
		ar: "طقس بارد نسبياً — معطف دافئ ووشاح مناسبان.",
		en: "Fairly cold — a warm coat and scarf fit well."
	});
	if (c.windLevel >= 5 && c.windLevel <= 6) {
		add("plan", "wind-plan", {
			ar: "رياح نشطة: احذر الأغراض الصغيرة التي قد تطير وتجنّب الملابس الواسعة جداً.",
			en: "Breezy: watch small items that may blow away, and avoid very loose clothing."
		});
		add("items", "hat", {
			ar: "قبعة ثابتة (قد تطير بسهولة).",
			en: "A secure hat (it can blow off easily)."
		});
	}
	if (c.windLevel >= 7) setRisk({
		ar: "رياح شديدة: تجنّب الأماكن المفتوحة قرب لوحات الإعلانات والتركيبات المؤقتة وانتبه للأجسام المتطايرة.",
		en: "Strong wind: avoid open spots near billboards and temporary structures, and watch for flying debris."
	});
	if (FOG.has(c.code)) setRisk({
		ar: "ضباب كثيف: الرؤية محدودة — انتبه لطريقك وتجنّب الرحلات الطويلة.",
		en: "Dense fog: visibility is limited — mind your way and avoid long trips."
	});
	if (CLEAR.has(c.code)) add("plan", "clear", {
		ar: "سماء صافية؛ راجع الحرارة والرياح والأشعة فوق البنفسجية قبل تخطيط الجولة.",
		en: "Clear sky; check heat, wind and UV before planning your walk."
	});
	else if (CLOUDY.has(c.code)) add("plan", "cloudy", {
		ar: "سماء غائمة؛ لا يعني الغيم وحده أن الظروف مناسبة للمشي الطويل.",
		en: "Cloudy sky; cloud cover alone does not establish comfortable conditions for a long walk."
	});
	else if (!risk && precip < 60 && c.temp < 33 && c.windLevel < 5) add("plan", "calm", {
		ar: "أحوال مستقرة ومناسبة للتجول بهدوء.",
		en: "Settled conditions — a relaxed time to wander."
	});
	return {
		risk,
		outfit: [...outfit.values()],
		plan: [...plan.values()],
		items: [...items.values()]
	};
}
async function getWeather(lang = "ar") {
	if (cache && cache.data.lang === lang && Date.now() - cache.ts < TTL_MS) return cache.data;
	const url = new URL("https://api.open-meteo.com/v1/forecast");
	url.searchParams.set("latitude", String(LAT));
	url.searchParams.set("longitude", String(LON));
	url.searchParams.set("current", "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m");
	url.searchParams.set("daily", "weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max");
	url.searchParams.set("timezone", "Asia/Kuwait");
	url.searchParams.set("forecast_days", "7");
	url.searchParams.set("wind_speed_unit", "kmh");
	const res = await fetch(url.toString(), {
		signal: AbortSignal.timeout(4500),
		headers: { "User-Agent": "mubarakiyasouk-guide/1.0" }
	});
	if (!res.ok) throw new Error(`weather upstream ${res.status}`);
	const j = await res.json();
	const cur = j.current;
	const numeric = (v) => typeof v === "number" && Number.isFinite(v);
	if (!cur || ![
		"temperature_2m",
		"apparent_temperature",
		"relative_humidity_2m",
		"wind_speed_10m",
		"weather_code"
	].every((k) => numeric(cur[k])) || typeof cur.time !== "string" || !/^\d{4}-\d{2}-\d{2}T/.test(cur.time) || !j.daily || !Array.isArray(j.daily.time) || j.daily.time.length !== 7 || !j.daily.time.every((v) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v)) || ![
		"weather_code",
		"temperature_2m_max",
		"temperature_2m_min",
		"precipitation_probability_max",
		"uv_index_max"
	].every((k) => Array.isArray(j.daily[k]) && j.daily[k].length === 7 && j.daily[k].every(numeric))) throw new Error("Weather data unavailable");
	const curInfo = describe(cur.weather_code, lang);
	const days = j.daily.time.map((date, i) => {
		const code = j.daily.weather_code[i];
		const info = describe(code, lang);
		return {
			date,
			code,
			icon: info.icon,
			descAr: info.ar,
			descEn: info.en,
			tmax: Math.round(j.daily.temperature_2m_max[i]),
			tmin: Math.round(j.daily.temperature_2m_min[i]),
			precip: Math.round(j.daily.precipitation_probability_max[i] ?? 0),
			uv: Math.round(j.daily.uv_index_max[i] ?? 0)
		};
	});
	const data = {
		lang,
		current: {
			temp: Math.round(cur.temperature_2m),
			feels: Math.round(cur.apparent_temperature),
			humidity: Math.round(cur.relative_humidity_2m),
			windKmh: Math.round(cur.wind_speed_10m),
			windLevel: beaufort(cur.wind_speed_10m),
			precipProb: days[0].precip,
			code: cur.weather_code,
			icon: curInfo.icon,
			descAr: curInfo.ar,
			descEn: curInfo.en,
			observedAt: cur.time,
			uv: days[0]?.uv ?? 0
		},
		days,
		advice: {
			risk: null,
			outfit: [],
			plan: [],
			items: []
		}
	};
	data.advice = buildAdvice(data);
	cache = {
		ts: Date.now(),
		data
	};
	return data;
}
//#endregion
//#region src/components/WeatherSection.astro
createAstro("https://mubarakiyasouk.com");
var $$WeatherSection = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$WeatherSection;
	const { lang = "ar" } = Astro.props;
	const w = await getWeather(lang).catch(() => null);
	const WD_AR = [
		"الأحد",
		"الإثنين",
		"الثلاثاء",
		"الأربعاء",
		"الخميس",
		"الجمعة",
		"السبت"
	];
	const WD_EN = [
		"Sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"
	];
	const fmtDay = (iso) => {
		const d = /* @__PURE__ */ new Date(iso + "T00:00:00");
		return {
			name: lang === "ar" ? WD_AR[d.getDay()] : WD_EN[d.getDay()],
			num: d.getDate()
		};
	};
	const t = (ar, en) => lang === "ar" ? ar : en;
	return renderTemplate`${w === null ? renderTemplate`${maybeRenderHead($$result)}<section class="section weather" data-astro-cid-md64tzn2><div class="wrap" data-astro-cid-md64tzn2><p class="eyebrow" data-astro-cid-md64tzn2>${t("الطقس الآن", "Weather right now")}</p><h2 class="section-title" data-astro-cid-md64tzn2>${t("حالة الطقس", "Current conditions")}</h2><p class="lead" data-astro-cid-md64tzn2>${t("يتعذر عرض الطقس في هذه اللحظة. تفقّد لاحقاً أو راجع تطبيق الطقس المحلي قبل الزيارة.", "Weather could not be shown right now. Check back shortly, or consult a local forecast before you visit.")}</p></div></section>` : renderTemplate`<section class="section weather" data-astro-cid-md64tzn2><div class="wrap" data-astro-cid-md64tzn2><p class="eyebrow" data-astro-cid-md64tzn2>${t("الطقس الآن", "Weather right now")}</p><h2 class="section-title" data-astro-cid-md64tzn2>${t("الطقس في سوق المباركية", "Weather at Souk Al-Mubarakiya")}</h2><p class="lead" data-astro-cid-md64tzn2>${t("توقعات Open-Meteo قرب السوق، وليست قياسًا داخل الممرات. وقت البيانات بتوقيت الكويت: ", "Open-Meteo forecast near the market, not a measurement inside its lanes. Data time in Kuwait: ")}<time data-astro-cid-md64tzn2>${w.current.observedAt}</time></p><div class="wx-grid" data-astro-cid-md64tzn2><div class="wx-now card" data-astro-cid-md64tzn2><div class="wx-now-top" data-astro-cid-md64tzn2><span class="wx-icon" data-astro-cid-md64tzn2>${w.current.icon}</span><div data-astro-cid-md64tzn2><div class="wx-temp" data-astro-cid-md64tzn2>${w.current.temp}°</div><div class="wx-desc" data-astro-cid-md64tzn2>${lang === "ar" ? w.current.descAr : w.current.descEn}</div></div></div><dl class="wx-stats" data-astro-cid-md64tzn2><div data-astro-cid-md64tzn2><dt data-astro-cid-md64tzn2>${t("الإحساس", "Feels like")}</dt><dd data-astro-cid-md64tzn2>${w.current.feels}°</dd></div><div data-astro-cid-md64tzn2><dt data-astro-cid-md64tzn2>${t("الرطوبة", "Humidity")}</dt><dd data-astro-cid-md64tzn2>${w.current.humidity}%</dd></div><div data-astro-cid-md64tzn2><dt data-astro-cid-md64tzn2>${t("الرياح", "Wind")}</dt><dd data-astro-cid-md64tzn2>${t(`الدرجة ${w.current.windLevel}`, `level ${w.current.windLevel}`)} · ${w.current.windKmh} km/h</dd></div><div data-astro-cid-md64tzn2><dt data-astro-cid-md64tzn2>${t("احتمال المطر اليوم", "Today’s rain chance")}</dt><dd data-astro-cid-md64tzn2>${w.current.precipProb}%</dd></div><div data-astro-cid-md64tzn2><dt data-astro-cid-md64tzn2>${t("الأشعة فوق البنفسجية", "UV index")}</dt><dd data-astro-cid-md64tzn2>${w.current.uv}</dd></div></dl></div><div class="wx-forecast card" data-astro-cid-md64tzn2><h3 data-astro-cid-md64tzn2>${t("الأيام القادمة", "Coming days")}</h3><ul class="wx-days" data-astro-cid-md64tzn2>${w.days.map((d) => {
		const f = fmtDay(d.date);
		return renderTemplate`<li data-astro-cid-md64tzn2><span class="wx-d-name" data-astro-cid-md64tzn2>${f.name}</span><span class="wx-d-icon" data-astro-cid-md64tzn2>${d.icon}</span><span class="wx-d-desc" data-astro-cid-md64tzn2>${lang === "ar" ? d.descAr : d.descEn}</span><span class="wx-d-temp" data-astro-cid-md64tzn2><b data-astro-cid-md64tzn2>${d.tmax}°</b> / ${d.tmin}°</span><span class="wx-d-precip" data-astro-cid-md64tzn2>${d.precip}%</span></li>`;
	})}</ul></div></div>${w.advice.risk && renderTemplate`<div class="wx-risk" data-astro-cid-md64tzn2><span class="wx-risk-ic" data-astro-cid-md64tzn2>⚠️</span><span data-astro-cid-md64tzn2>${lang === "ar" ? w.advice.risk.ar : w.advice.risk.en}</span></div>`}<div class="wx-advice" data-astro-cid-md64tzn2>${w.advice.outfit.length > 0 && renderTemplate`<div class="wx-adv-card" data-astro-cid-md64tzn2><h4 data-astro-cid-md64tzn2>${t("ما ترتديه", "What to wear")}</h4><ul data-astro-cid-md64tzn2>${w.advice.outfit.map((x) => renderTemplate`<li data-astro-cid-md64tzn2>${lang === "ar" ? x.ar : x.en}</li>`)}</ul></div>`}${w.advice.plan.length > 0 && renderTemplate`<div class="wx-adv-card" data-astro-cid-md64tzn2><h4 data-astro-cid-md64tzn2>${t("ترتيب الزيارة", "How to plan")}</h4><ul data-astro-cid-md64tzn2>${w.advice.plan.map((x) => renderTemplate`<li data-astro-cid-md64tzn2>${lang === "ar" ? x.ar : x.en}</li>`)}</ul></div>`}${w.advice.items.length > 0 && renderTemplate`<div class="wx-adv-card" data-astro-cid-md64tzn2><h4 data-astro-cid-md64tzn2>${t("ما تحمله معك", "What to bring")}</h4><ul data-astro-cid-md64tzn2>${w.advice.items.map((x) => renderTemplate`<li data-astro-cid-md64tzn2>${lang === "ar" ? x.ar : x.en}</li>`)}</ul></div>`}</div></div></section>`}`;
}, "/site/src/components/WeatherSection.astro", void 0);
//#endregion
//#region src/components/GuideSections.astro
createAstro("https://mubarakiyasouk.com");
var $$GuideSections = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$GuideSections;
	const { lang = "ar" } = Astro.props;
	const ar = lang === "ar";
	const seasons = [
		{
			when: ar ? "ديسمبر – فبراير" : "Dec – Feb",
			climate: ar ? "لطيف ومعتدل، معظم الأيام صافية" : "Mild and pleasant, mostly clear days",
			crowd: ar ? "متوسط إلى مرتفع في العطلات" : "Moderate, higher on holidays",
			time: ar ? "النهار كاملًا، خاصة الصباح" : "Throughout the day, mornings best",
			tip: ar ? "الفصل الأنسب للمشي الطويل واستكشاف الممرات بهدوء." : "The most comfortable season for long walks through the lanes."
		},
		{
			when: ar ? "مارس – أبريل" : "Mar – Apr",
			climate: ar ? "دافئ لطيف، تزداد الحرارة تدريجيًا" : "Warm and gentle, heat builds gradually",
			crowd: ar ? "متوسط" : "Moderate",
			time: ar ? "صباحًا وبعد العصر" : "Mornings and late afternoons",
			tip: ar ? "فترة متوازنة قبل حرارة الصيف؛ مناسبة للتصوير النهاري." : "A balanced window before summer heat; good for daytime photography."
		},
		{
			when: ar ? "مايو – سبتمبر" : "May – Sep",
			climate: ar ? "حرارة عالية جدًا ورطوبة مرتفعة ظهرًا" : "Very high heat and midday humidity",
			crowd: ar ? "أخف نهارًا، ينشط ليلًا" : "Quieter by day, livelier at night",
			time: ar ? "بعد المغرب حتى متأخرًا" : "After sunset into the late evening",
			tip: ar ? "تجنّب الذروة الظهيرة، وابدأ الجولة مع انخفاض الحرارة مساءً." : "Avoid the midday peak; start once the heat eases in the evening."
		},
		{
			when: ar ? "أكتوبر – نوفمبر" : "Oct – Nov",
			climate: ar ? "يعود إلى الاعتدال والتهوية المنعشة" : "Returns to mild, fresh air",
			crowd: ar ? "يتزايد تدريجيًا" : "Gradually increasing",
			time: ar ? "نهارًا ومساءً" : "Day and evening",
			tip: ar ? "فصل انتقال مريح يجمع بين الهدوء والطقس اللطيف." : "A comfortable transition blending calm crowds with gentle weather."
		}
	];
	const personas = [
		{
			tag: ar ? "عائلات مع أطفال" : "Families with children",
			lead: ar ? "مسارات هادئة وقريبة، مع فواصل للراحة والطعام." : "Short, close-by routes with breaks for rest and food.",
			items: ar ? [
				"ابدأوا من المدخل الأوسع لتجنّب الزحام",
				"رتّبوا فاصلاً للطعام في منطقة الجلوس",
				"تجنّبوا ساعات الذروة ظهرًا",
				"احملوا ماءً كافيًا لكل الأعمار"
			] : [
				"Start at the wider entrance to avoid crowds",
				"Plan a seating break for a meal",
				"Skip the midday peak",
				"Carry enough water for all ages"
			]
		},
		{
			tag: ar ? "المصورون والطبيعة" : "Photographers & details",
			lead: ar ? "إضاءة ناعمة وخشب وظلال تتغير مع الساعة." : "Soft light, woodwork and shifting shade through the hours.",
			items: ar ? [
				"الساعة الذهبية بعد العصر تعطي ألوانًا دافئة",
				"التقطوا الواجهات الخشبية والممرات المقببة",
				"احترموا خصوصية الباعة عند تصوير الأشخاص",
				"جرّبوا ليل السوق للأجواء المضيئة"
			] : [
				"Golden hour after afternoon gives warm tones",
				"Capture wooden facades and arched lanes",
				"Respect vendors’ privacy when photographing people",
				"Try the souk at night for the lit atmosphere"
			]
		},
		{
			tag: ar ? "حركة مخفّفة / بلا عوائق" : "Low-effort / accessible",
			lead: ar ? "مسارات مسطحة وقصيرة مع راحة متكررة." : "Flat, short routes with frequent rest points.",
			items: ar ? [
				"اختاروا المداخل الواسعة والممرات الممهدة",
				"وزّعوا المسافة على فترات قصيرة",
				"استريحوا في الأماكن المظللة",
				"راجعوا المرافق العامة عند الوصول"
			] : [
				"Use wide entrances and paved lanes",
				"Split the walk into short stretches",
				"Rest in shaded spots",
				"Check public facilities on arrival"
			]
		}
	];
	const routes = [{
		kind: ar ? "جولة نصف يوم" : "Half-day",
		dur: ar ? "نحو 3 ساعات" : "about 3 hours",
		lead: ar ? "لمحة سريعة على روح السوق دون استعجال." : "A quick feel of the souk’s spirit without rushing.",
		steps: ar ? [
			"المدخل الرئيسي وأول الممرات",
			"سوق التوابل والقهوة",
			"كشك الشيخ مبارك",
			"فاصل طعام خفيف",
			"العودة عبر الممر المركزي"
		] : [
			"Main entrance and first lanes",
			"Spice and coffee market",
			"Sheikh Mubarak Kiosk",
			"A light food break",
			"Back through the central lane"
		]
	}, {
		kind: ar ? "جولة يوم كامل" : "Full-day",
		dur: ar ? "نحو 6 ساعات" : "about 6 hours",
		lead: ar ? "تجربة أعمق تضم الأسواق والمعالم المجاورة." : "A deeper experience with the souk and nearby landmarks.",
		steps: ar ? [
			"جولة صباحية في الممرات المتخصصة",
			"زيارة المتحف الوطني وبيت السدو",
			"غداء في محيط وسط المدينة",
			"فترة مسائية في السوق",
			"ختام عند المسجد الكبير أو قصر السيف من الأماكن العامة"
		] : [
			"Morning walk through specialist lanes",
			"Kuwait National Museum and Sadu House",
			"Lunch around central Kuwait City",
			"Evening stroll in the souk",
			"Close near the Grand Mosque or Seif Palace from public areas"
		]
	}];
	const science = [
		{
			h: ar ? "حفظ الذاكرة العمرانية" : "Preserving urban memory",
			p: ar ? "السوق شبكة حية من الأسواق المتخصصة تمتد جذورها لأكثر من 180 عامًا. فهم طبيعة المكان يبدأ من التفريق بين تاريخ المعالم الفردية وتاريخ الشبكة الكاملة." : "The souk is a living network of specialist markets with roots beyond 180 years. Understanding it starts by separating the history of individual landmarks from that of the whole network."
		},
		{
			h: ar ? "تصوير يحترم الخصوصية" : "Photography that respects privacy",
			p: ar ? "الصور توثّق الجمال، لكن يُرجى طلب الإذن عند تصوير الباعة أو الزوار عن قرب، واحترام الأماكن ذات الخصوصية." : "Photos capture beauty, but ask before close-up shots of vendors or visitors, and respect spaces that call for privacy."
		},
		{
			h: ar ? "سلامة الحرارة والصحة" : "Heat & health awareness",
			p: ar ? "في أشهر الحرارة، ابدأوا مع انخفاض الحرارة، واشربوا الماء بانتظام، وابحثوا عن الظل. الأعراف المحلية تحترم أوقات الصلاة والسكينة." : "In the hot months, start when it cools, drink water often, and use the shade. Local norms respect prayer times and calm."
		},
		{
			h: ar ? "دعم محلي بلا تحيز تجاري" : "Local support, no commercial bias",
			p: ar ? "يدعم الدليل المعرفة بأنواع الخدمات لا بأسماء متاجر محددة، حفاظًا على حياده كمشروع مستقل." : "The guide supports knowledge by types of service, not by naming specific shops, keeping it neutral as a independent project."
		},
		{
			h: ar ? "صفر نفايات واحترام المكان" : "Zero waste & respect",
			p: ar ? "خذوا نفاياتكم معكم، ولا تلمسوا المعروضات التراثية أو مقتنيات المتاجر دون إذن. الزيارة المسؤولة تحمي المكان للأجيال القادمة." : "Take your litter with you and do not handle heritage displays or goods without permission. Responsible visits protect the place for the next generations."
		}
	];
	return renderTemplate`${maybeRenderHead($$result)}<section class="section sand guide-season" data-astro-cid-ydsoqjzs><div class="wrap" data-astro-cid-ydsoqjzs><p class="eyebrow" data-astro-cid-ydsoqjzs>${ar ? "استراتيجية الفصول" : "Seasonal strategy"}</p><h2 class="section-title" data-astro-cid-ydsoqjzs>${ar ? "متى تزور حسب الفصول؟" : "When to visit by season"}</h2><p class="lead" data-astro-cid-ydsoqjzs>${ar ? "قراءة عامة مستمدة من المناخ المعتاد للكويت عبر السنوات، لا من أرقام لحظية." : "A general read from Kuwait’s usual climate over the years, not from any single snapshot."}</p><div class="season-table" role="table" data-astro-cid-ydsoqjzs><div class="season-row season-head" role="row" data-astro-cid-ydsoqjzs><span data-astro-cid-ydsoqjzs>${ar ? "الفصل" : "Season"}</span><span data-astro-cid-ydsoqjzs>${ar ? "المناخ" : "Climate"}</span><span data-astro-cid-ydsoqjzs>${ar ? "الزحام" : "Crowds"}</span><span data-astro-cid-ydsoqjzs>${ar ? "أفضل وقت" : "Best time"}</span><span data-astro-cid-ydsoqjzs>${ar ? "تلميح" : "Tip"}</span></div>${seasons.map((s) => renderTemplate`<div class="season-row" role="row" data-astro-cid-ydsoqjzs><span class="season-when" data-astro-cid-ydsoqjzs>${s.when}</span><span data-astro-cid-ydsoqjzs>${s.climate}</span><span data-astro-cid-ydsoqjzs>${s.crowd}</span><span data-astro-cid-ydsoqjzs>${s.time}</span><span data-astro-cid-ydsoqjzs>${s.tip}</span></div>`)}</div></div></section><section class="section" data-astro-cid-ydsoqjzs><div class="wrap" data-astro-cid-ydsoqjzs><p class="eyebrow" data-astro-cid-ydsoqjzs>${ar ? "حسب نوع الزائر" : "By type of visitor"}</p><h2 class="section-title" data-astro-cid-ydsoqjzs>${ar ? "مسارات مخصّصة لكل زائر" : "Routes tailored to you"}</h2><p class="lead" data-astro-cid-ydsoqjzs>${ar ? "ثلاثة توجّهات شائعة، اختر ما يناسب رغبتك ووتيرة مجموعتك." : "Three common approaches — pick the one that fits your group and pace."}</p><div class="persona-grid" data-astro-cid-ydsoqjzs>${personas.map((p) => renderTemplate`<article class="card persona" data-astro-cid-ydsoqjzs><h3 data-astro-cid-ydsoqjzs>${p.tag}</h3><p class="persona-lead" data-astro-cid-ydsoqjzs>${p.lead}</p><ul data-astro-cid-ydsoqjzs>${p.items.map((i) => renderTemplate`<li data-astro-cid-ydsoqjzs>${i}</li>`)}</ul></article>`)}</div></div></section><section class="section dark guide-routes" data-astro-cid-ydsoqjzs><div class="wrap" data-astro-cid-ydsoqjzs><p class="eyebrow" data-astro-cid-ydsoqjzs>${ar ? "خطط زمنية" : "Time plans"}</p><h2 class="section-title" data-astro-cid-ydsoqjzs>${ar ? "مسارات عامة مقترحة" : "Suggested general routes"}</h2><div class="route-grid" data-astro-cid-ydsoqjzs>${routes.map((r) => renderTemplate`<article class="route-card" data-astro-cid-ydsoqjzs><div class="route-head" data-astro-cid-ydsoqjzs><b data-astro-cid-ydsoqjzs>${r.kind}</b><span data-astro-cid-ydsoqjzs>${r.dur}</span></div><p data-astro-cid-ydsoqjzs>${r.lead}</p><ol data-astro-cid-ydsoqjzs>${r.steps.map((s) => renderTemplate`<li data-astro-cid-ydsoqjzs>${s}</li>`)}</ol></article>`)}</div></div></section><section class="section" data-astro-cid-ydsoqjzs><div class="wrap" data-astro-cid-ydsoqjzs><p class="eyebrow" data-astro-cid-ydsoqjzs>${ar ? "معرفة ومسؤولية" : "Knowledge & responsibility"}</p><h2 class="section-title" data-astro-cid-ydsoqjzs>${ar ? "الوعي العلمي ومسؤولية الزائر" : "Science awareness & visitor responsibility"}</h2><p class="lead" data-astro-cid-ydsoqjzs>${ar ? "بصفته مشروعًا مستقل، يقدّم الدليل سياقًا يساعد على فهم المكان واحترامه." : "As a independent project, the guide offers context that helps you understand and respect the place."}</p><div class="science-grid" data-astro-cid-ydsoqjzs>${science.map((s) => renderTemplate`<article class="card sc-card" data-astro-cid-ydsoqjzs><h3 data-astro-cid-ydsoqjzs>${s.h}</h3><p data-astro-cid-ydsoqjzs>${s.p}</p></article>`)}</div></div></section>`;
}, "/site/src/components/GuideSections.astro", void 0);
//#endregion
//#region src/data/site.ts
var SITE_NAME = "Souk Al-Mubarakiya Kuwait City — Visitor Guide";
var SITE_NAME_AR = "دليل سوق المباركية مدينة الكويت";
//#endregion
export { $$WeatherSection as i, SITE_NAME_AR as n, $$GuideSections as r, SITE_NAME as t };
