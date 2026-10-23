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
  // Place point for the market listing, not a map camera or a verified entrance.
  latitude: 29.3738265,
  longitude: 47.9729324,
  mapsShareUrl: 'https://maps.app.goo.gl/Unad47yFEGSrn79r6',
  ratingValue: '4.4',
  ratingCount: '26529',
  listingChecked: '2026-10-23',
  listingHoursNote: 'Google Maps lists 08:00–22:00 daily; individual vendors and holidays vary.'
} as const;

// SEO site name in the form "Attraction + City + Visitor Guide".
export const SITE_NAME = 'Souk Al-Mubarakiya Kuwait City — Visitor Guide';
export const SITE_NAME_AR = 'دليل سوق المباركية مدينة الكويت';

// Append the site name to a page-specific title (used on sub-pages).
export function withSiteName(suffix: string, lang: 'ar' | 'en' = 'en'): string {
  const base = lang === 'ar' ? SITE_NAME_AR : SITE_NAME;
  return suffix ? `${suffix} | ${base}` : base;
}
