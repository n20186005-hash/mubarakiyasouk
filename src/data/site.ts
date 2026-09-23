// Central, language-neutral facts about the attraction.
// Edited here only — pages and JSON-LD read from this file.

export const ATTRACTION = {
  fullName: 'Souk Al-Mubarakiya',
  fullNameAr: 'سوق المباركية',
  shortName: 'Al-Mubarakiya',
  city: 'Kuwait City',
  cityAr: 'مدينة الكويت',
  region: 'Al-Asimah Governorate',
  regionAr: 'محافظة العاصمة',
  country: 'State of Kuwait',
  countryAr: 'دولة الكويت',
  // Coordinates of the souk (Gharabally Souq St, Plus Code 9XFF+G5).
  latitude: 29.374588243816994,
  longitude: 47.973118089148905,
  mapsShareUrl: 'https://maps.app.goo.gl/Unad47yFEGSrn79r6',
  ratingValue: '4.4',
  ratingCount: '26505',
  openingHours: 'Mo-Su 08:00-22:00'
} as const;

// SEO site name in the form "Attraction + City + Visitor Guide".
export const SITE_NAME = 'Souk Al-Mubarakiya Kuwait City — Visitor Guide';
export const SITE_NAME_AR = 'دليل سوق المباركية مدينة الكويت';

// Append the site name to a page-specific title (used on sub-pages).
export function withSiteName(suffix: string, lang: 'ar' | 'en' = 'en'): string {
  const base = lang === 'ar' ? SITE_NAME_AR : SITE_NAME;
  return suffix ? `${suffix} | ${base}` : base;
}
