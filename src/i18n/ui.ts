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
    'footer.note1': 'هذا الموقع مشروع مستقل غير ربحي لدليل معلومات الزوار، ولا يتبع أي جهة حكومية أو منظمة رسمية.',
    'footer.note2': 'تُراجع معلومات سوق المباركية بالرجوع إلى المواد العامة الصادرة عن بلدية الكويت، ووزارة الإعلام، والبوابة الإلكترونية الرسمية لدولة الكويت، ومطار الكويت الدولي، ومصادر أكاديمية من جامعة الكويت. لا يتضمن الموقع توصيات تجارية مدفوعة.',
    'footer.note3': 'حقوق الصور: جميع الصور المعروضة تبقى حقوقها وحقوق نشرها للمصورين أو أصحاب التراخيص المبينة في سجل الصور داخل المشروع.',
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
    'footer.note1': 'This website is an independent, non-profit visitor information guide and is not affiliated with any government body or official organization.',
    'footer.note2': 'Information about Souk Al-Mubarakiya is reviewed against public materials from the Kuwait Municipality, the Ministry of Information, the official portal of the State of Kuwait, Kuwait International Airport, and academic sources from Kuwait University. The site contains no paid commercial recommendations.',
    'footer.note3': "Photo credits: all displayed photos remain the property of their photographers or license holders as stated in the project's photo credits file.",
    'footer.copyright': '© 2026 Souk Al-Mubarakiya Guide in Kuwait City. All rights reserved for the original project content.'
  }
} as const;

export function t(lang: Lang, key: string): string {
  return (ui[lang] as Record<string, string>)[key] ?? key;
}
