export type Locale = 'ar' | 'en'

/** نص محتوى له نسخة لكل لغة — يُستخدم في الـmock data. */
export type Localized = Record<Locale, string>

export const locales: { id: Locale; label: string; dir: 'rtl' | 'ltr' }[] = [
  { id: 'ar', label: 'العربية', dir: 'rtl' },
  { id: 'en', label: 'English', dir: 'ltr' },
]

export const dirOf = (locale: Locale): 'rtl' | 'ltr' => (locale === 'ar' ? 'rtl' : 'ltr')
