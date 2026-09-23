// Server-side weather helper.
// Data source: Open-Meteo forecast API (fetched and cached here, on the server).
// No API key is required; the cache keeps load off the upstream service.

const LAT = 29.374588243816994;
const LON = 47.973118089148905;
const TTL_MS = 10 * 60 * 1000; // 10 minutes

type Lang = 'ar' | 'en';

interface WmoInfo { ar: string; en: string; icon: string; }
const WMO: Record<number, WmoInfo> = {
  0:  { ar: 'صافٍ', en: 'Clear sky', icon: '☀️' },
  1:  { ar: 'صافٍ ببعض السحب', en: 'Mainly clear', icon: '🌤️' },
  2:  { ar: 'غائم جزئياً', en: 'Partly cloudy', icon: '⛅' },
  3:  { ar: 'غائم', en: 'Overcast', icon: '☁️' },
  45: { ar: 'ضباب', en: 'Fog', icon: '🌫️' },
  48: { ar: 'ضباب متجمد', en: 'Rime fog', icon: '🌫️' },
  51: { ar: 'رذاذ خفيف', en: 'Light drizzle', icon: '🌦️' },
  53: { ar: 'رذاذ', en: 'Drizzle', icon: '🌦️' },
  55: { ar: 'رذاذ كثيف', en: 'Dense drizzle', icon: '🌧️' },
  61: { ar: 'مطر خفيف', en: 'Light rain', icon: '🌦️' },
  63: { ar: 'مطر متوسط', en: 'Rain', icon: '🌧️' },
  65: { ar: 'مطر غزير', en: 'Heavy rain', icon: '🌧️' },
  66: { ar: 'مطر متجمد خفيف', en: 'Light freezing rain', icon: '🌧️' },
  67: { ar: 'مطر متجمد', en: 'Freezing rain', icon: '🌧️' },
  71: { ar: 'ثلج خفيف', en: 'Light snow', icon: '🌨️' },
  73: { ar: 'ثلج', en: 'Snow', icon: '🌨️' },
  75: { ar: 'ثلج كثيف', en: 'Heavy snow', icon: '❄️' },
  77: { ar: 'حبيبات ثلجية', en: 'Snow grains', icon: '🌨️' },
  80: { ar: 'رذاذ عابر', en: 'Rain showers', icon: '🌦️' },
  81: { ar: 'مطر عابر', en: 'Rain showers', icon: '🌧️' },
  82: { ar: 'عواصف مطرية', en: 'Violent rain showers', icon: '⛈️' },
  85: { ar: 'ثلج عابر', en: 'Snow showers', icon: '🌨️' },
  86: { ar: 'عواصف ثلجية', en: 'Heavy snow showers', icon: '❄️' },
  95: { ar: 'عاصفة رعدية', en: 'Thunderstorm', icon: '⛈️' },
  96: { ar: 'رعد مع برد خفيف', en: 'Thunderstorm with hail', icon: '⛈️' },
  99: { ar: 'رعد مع برد', en: 'Thunderstorm with heavy hail', icon: '⛈️' }
};

function describe(code: number, lang: Lang): WmoInfo {
  return WMO[code] ?? (lang === 'ar' ? { ar: 'حالة جوية متغيرة', en: 'Variable', icon: '🌡️' } : { ar: '', en: 'Variable', icon: '🌡️' });
}

function beaufort(kmh: number): number {
  const steps = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  let level = 0;
  for (const s of steps) { if (kmh >= s) level++; else break; }
  return level;
}

export interface Txt { ar: string; en: string; }
export interface Advice {
  risk: Txt | null;   // severe safety reminder, shown only when triggered
  outfit: Txt[];      // what to wear
  plan: Txt[];        // how to plan the visit
  items: Txt[];       // what to bring
}

export interface Day {
  date: string;
  code: number;
  icon: string;
  descAr: string;
  descEn: string;
  tmax: number;
  tmin: number;
  precip: number;
  uv: number;
}

export interface WeatherData {
  lang: Lang;
  current: {
    temp: number;
    feels: number;
    humidity: number;
    windKmh: number;
    windLevel: number;
    precipProb: number;
    code: number;
    icon: string;
    descAr: string;
    descEn: string;
    observedAt: string;
    uv: number;
  };
  days: Day[];
  advice: Advice;
}

let cache: { ts: number; data: WeatherData } | null = null;

const RAIN_LIGHT = new Set([51, 53, 55, 61, 63, 66, 67, 80, 81]);
const RAIN_HEAVY = new Set([65, 82]);
const THUNDER = new Set([95, 96, 99]);
const FOG = new Set([45, 48]);
const CLEAR = new Set([0, 1, 2]);
const CLOUDY = new Set([3]);

// Returns structured, condition-triggered advice. Each item is bilingual and
// only present when its condition matches, so the UI hides inapplicable tips.
function buildAdvice(d: WeatherData): Advice {
  const c = d.current;
  const today = d.days[0];
  const tmax = today ? today.tmax : c.temp;
  const tmin = today ? today.tmin : c.temp;
  const precip = today ? today.precip : c.precipProb;
  const uv = today ? today.uv : c.uv;

  const outfit = new Map<string, Txt>();
  const plan = new Map<string, Txt>();
  const items = new Map<string, Txt>();
  const add = (cat: 'outfit' | 'plan' | 'items', key: string, txt: Txt) => {
    (cat === 'outfit' ? outfit : cat === 'plan' ? plan : items).set(key, txt);
  };

  let risk: Txt | null = null;
  const setRisk = (txt: Txt) => { if (!risk) risk = txt; };

  // --- Precipitation / rain ---
  if (precip >= 60) {
    add('outfit', 'rain-gear', { ar: 'أحضر معك مطراً أو مظلة حتى لا يقطع المطر زيارتك.', en: 'Carry rain gear or an umbrella so a shower does not cut your visit short.' });
    add('plan', 'rain-indoor', { ar: 'ابدأ بالأنشطة المكشوفة أولاً واحتفظ بالخيارات المغطاة احتياطاً.', en: 'Do the open-air browsing first and keep covered options in reserve.' });
    add('items', 'umbrella', { ar: 'مظلة أو مطر خفيف.', en: 'Umbrella or a light raincoat.' });
  }
  if (RAIN_LIGHT.has(c.code)) {
    add('plan', 'wet-floor', { ar: 'الأرضيات قد تكون زلقة — انتبه أثناء المشي.', en: 'Pavements can be slippery — mind your step.' });
    add('items', 'fold', { ar: 'مظلة قابلة للطي.', en: 'A foldable umbrella.' });
  }
  if (RAIN_HEAVY.has(c.code)) {
    setRisk({ ar: 'مطر غزير: تجنّب المناطق المكشوفة المنخفضة وتوجّه للأروقة المغطاة.', en: 'Heavy rain: avoid open low spots and head for the covered arcades.' });
    add('plan', 'heavy-rain', { ar: 'لا يُنصح بالتجول الطويل في الخارج؛ الأروقة المغطاة أكثر راحة.', en: 'Long outdoor wandering is not advised; the covered arcades are more comfortable.' });
    add('items', 'raincoat', { ar: 'مطر (لا مظلة طويلة مع الرياح).', en: 'Raincoat (skip the long umbrella in wind).' });
  }
  if (THUNDER.has(c.code)) {
    setRisk({ ar: 'عاصفة رعدية: ادخل منطقة مغطاة فوراً، ولا تبقَ في الساحات المفتوحة أو تحت الأشجار.', en: 'Thunderstorm: move under cover at once; do not stay in open squares or shelter under trees.' });
  }

  // --- Heat & UV (Kuwait is hot/arid, so these matter most) ---
  if (tmax >= 33 || c.temp >= 33) {
    add('outfit', 'light', { ar: 'ملابس خفيفة ومريحة تسمح بالتهوية.', en: 'Light, breathable clothing.' });
    add('plan', 'heat-noon', { ar: 'اختر الساعات الألطف وتجنّب ذروة الظهيرة قدر الإمكان.', en: 'Pick the cooler hours and avoid the midday peak where you can.' });
    add('items', 'water', { ar: 'مياه للشرب بانتظام.', en: 'Water to drink regularly.' });
  }
  if (tmax >= 38 || c.temp >= 38) {
    add('items', 'heat', { ar: 'مستلزمات وقاية من الحر (واقٍ شمسي وكثير من الماء).', en: 'Heat protection (sunscreen and plenty of water).' });
    add('plan', 'shorten', { ar: 'قلّص وقت التجول في الخارج وارح بين الحين والآخر.', en: 'Shorten outdoor wandering and rest now and then.' });
  }
  if (uv >= 5) {
    add('items', 'uv', { ar: 'واقٍ شمسي ونظارة شمسية وقبعة.', en: 'Sunscreen, sunglasses and a hat.' });
    add('plan', 'uv-plan', { ar: 'الشمس قوية — كرّر وضع الواقي الشمسي خلال اليوم.', en: 'The sun is strong — reapply sunscreen through the day.' });
  }

  // --- Cold / temperature swing ---
  if (tmax - tmin > 8) {
    add('outfit', 'layer', { ar: 'فارق كبير بين الليل والنهار — احمل طبقة إضافية تخلعها لاحقاً.', en: 'Big day–night swing — bring a layer you can shed later.' });
  }
  if (tmax <= 12) {
    add('outfit', 'warm', { ar: 'طقس بارد نسبياً — معطف دافئ ووشاح مناسبان.', en: 'Fairly cold — a warm coat and scarf fit well.' });
  }

  // --- Wind (Shamal winds are common in Kuwait) ---
  if (c.windLevel >= 5 && c.windLevel <= 6) {
    add('plan', 'wind-plan', { ar: 'رياح نشطة: احذر الأغراض الصغيرة التي قد تطير وتجنّب الملابس الواسعة جداً.', en: 'Breezy: watch small items that may blow away, and avoid very loose clothing.' });
    add('items', 'hat', { ar: 'قبعة ثابتة (قد تطير بسهولة).', en: 'A secure hat (it can blow off easily).' });
  }
  if (c.windLevel >= 7) {
    setRisk({ ar: 'رياح شديدة: تجنّب الأماكن المفتوحة قرب لوحات الإعلانات والتركيبات المؤقتة وانتبه للأجسام المتطايرة.', en: 'Strong wind: avoid open spots near billboards and temporary structures, and watch for flying debris.' });
  }

  // --- Fog ---
  if (FOG.has(c.code)) {
    setRisk({ ar: 'ضباب كثيف: الرؤية محدودة — انتبه لطريقك وتجنّب الرحلات الطويلة.', en: 'Dense fog: visibility is limited — mind your way and avoid long trips.' });
  }

  // --- Clear / cloudy fallback so the visit plan is never empty ---
  if (CLEAR.has(c.code)) {
    add('plan', 'clear', { ar: 'طقس صافٍ ومناسب للتجول والتصوير الخارجي.', en: 'Clear and good for walking and outdoor photos.' });
  } else if (CLOUDY.has(c.code)) {
    add('plan', 'cloudy', { ar: 'إضاءة ناعمة ومريحة — يوم مناسب للتجول الطويل والتصوير.', en: 'Soft, comfortable light — a good day for a long walk and photos.' });
  } else if (!risk && precip < 60 && c.temp < 33 && c.windLevel < 5) {
    add('plan', 'calm', { ar: 'أحوال مستقرة ومناسبة للتجول بهدوء.', en: 'Settled conditions — a relaxed time to wander.' });
  }

  return {
    risk,
    outfit: [...outfit.values()],
    plan: [...plan.values()],
    items: [...items.values()]
  };
}

export async function getWeather(lang: Lang = 'ar'): Promise<WeatherData> {
  if (cache && Date.now() - cache.ts < TTL_MS) return cache.data;

  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', String(LAT));
  url.searchParams.set('longitude', String(LON));
  url.searchParams.set('current', 'temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m');
  url.searchParams.set('daily', 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max');
  url.searchParams.set('timezone', 'Asia/Kuwait');
  url.searchParams.set('forecast_days', '7');
  url.searchParams.set('wind_speed_unit', 'kmh');

  const res = await fetch(url.toString(), { headers: { 'User-Agent': 'mubarakiyasouk-guide/1.0' } });
  if (!res.ok) throw new Error(`weather upstream ${res.status}`);
  const j = await res.json() as any;

  const cur = j.current;
  const curInfo = describe(cur.weather_code, lang);
  const days: Day[] = (j.daily.time as string[]).map((date: string, i: number) => {
    const code = j.daily.weather_code[i] as number;
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

  const data: WeatherData = {
    lang,
    current: {
      temp: Math.round(cur.temperature_2m),
      feels: Math.round(cur.apparent_temperature),
      humidity: Math.round(cur.relative_humidity_2m),
      windKmh: Math.round(cur.wind_speed_10m),
      windLevel: beaufort(cur.wind_speed_10m),
      precipProb: Math.round(cur.precipitation_probability ?? 0),
      code: cur.weather_code,
      icon: curInfo.icon,
      descAr: curInfo.ar,
      descEn: curInfo.en,
      observedAt: cur.time,
      uv: days[0]?.uv ?? 0
    },
    days,
    advice: { risk: null, outfit: [], plan: [], items: [] }
  };
  data.advice = buildAdvice(data);

  cache = { ts: Date.now(), data };
  return data;
}
