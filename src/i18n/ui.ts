export const defaultLang = 'ar' as const;

export const languages = {
  ar: { label: 'العربية', dir: 'rtl', htmlLang: 'ar', ogLocale: 'ar_KW' },
  en: { label: 'English', dir: 'ltr', htmlLang: 'en', ogLocale: 'en_US' }
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  ar: {
    'skip': 'انتقل إلى المحتوى',
    'nav.label': 'التنقل الرئيسي',
    'nav.history': 'التاريخ',
    'nav.visit': 'خطط الزيارة',
    'nav.transport': 'الوصول',
    'nav.facilities': 'الخدمات',
    'nav.faq': 'الأسئلة',
    'header.map': 'افتح الخريطة',
    'logo.aria': 'العودة إلى الصفحة الرئيسية',
    'logo.title': 'دليل المباركية',
    'logo.tagline': 'ذاكرة السوق وقلب مدينة الكويت',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الاستخدام',
    'footer.cookies': 'إعدادات ملفات تعريف الارتباط',
    'footer.note1': 'هذا الموقع مشروع مستقل لدليل معلومات الزوار، ولا يتبع أي جهة حكومية أو منظمة رسمية.',
    'footer.note2': 'السياق التاريخي: جامعة الكويت. قائمة السوق: خرائط Google، روجعت في 23 أكتوبر 2026. تحقق مباشرة من الخدمات المنفردة.',
    'footer.note3': 'تظهر أسماء المصورين وروابط المصادر والتراخيص بجوار الصور.',
    'footer.copyright': '© 2026 دليل سوق المباركية في مدينة الكويت. جميع الحقوق محفوظة للمحتوى الأصلي للمشروع.'
  },
  en: {
    'skip': 'Skip to content',
    'nav.label': 'Main navigation',
    'nav.history': 'History',
    'nav.visit': 'Plan your visit',
    'nav.transport': 'Getting there',
    'nav.facilities': 'Facilities',
    'nav.faq': 'FAQ',
    'header.map': 'Open map',
    'logo.aria': 'Back to homepage',
    'logo.title': 'Mubarakiya Guide',
    'logo.tagline': 'The old market and the heart of Kuwait City',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    'footer.cookies': 'Cookie Settings',
    'footer.note1': 'This website is an independent visitor information guide and is not affiliated with any government body or official organization.',
    'footer.note2': 'Historical context: Kuwait University. Market listing: Google Maps, checked 23 October 2026. Confirm individual services directly.',
    'footer.note3': "Photo credits and source/licence links appear beside each photograph.",
    'footer.copyright': '© 2026 Souk Al-Mubarakiya Guide in Kuwait City. All rights reserved for the original project content.'
  }
} as const;

export function t(lang: Lang, key: string): string {
  return (ui[lang] as Record<string, string>)[key] ?? key;
}
