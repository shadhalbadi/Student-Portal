import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react'
import { ar, type TranslationKey } from './ar'
import { en } from './en'
import { dirOf, type Locale, type Localized } from './locale'

const dictionaries: Record<Locale, Record<TranslationKey, string>> = { ar, en }

const STORAGE_KEY = 'edumentor.locale'

type Vars = Record<string, string | number>

interface LocaleValue {
  locale: Locale
  dir: 'rtl' | 'ltr'
  setLocale: (locale: Locale) => void
  /** نص واجهة من القاموس، مع استبدال {الوسوم} */
  t: (key: TranslationKey, vars?: Vars) => string
  /** نص محتوى قادم من الـmock data */
  tx: (value: Localized) => string
}

const LocaleContext = createContext<LocaleValue | null>(null)

const interpolate = (text: string, vars?: Vars) =>
  vars ? text.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`)) : text

const initialLocale = (): Locale => {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved === 'en' || saved === 'ar' ? saved : 'ar'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const dir = dirOf(locale)

  // الاتجاه واللغة على <html> — عليهما تعتمد كل خصائص start/end المنطقية
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    document.title = dictionaries[locale]['app.title']
    localStorage.setItem(STORAGE_KEY, locale)
  }, [locale, dir])

  const t = useCallback(
    (key: TranslationKey, vars?: Vars) => interpolate(dictionaries[locale][key], vars),
    [locale],
  )
  const tx = useCallback((value: Localized) => value[locale], [locale])
  const setLocale = useCallback((next: Locale) => setLocaleState(next), [])

  return (
    <LocaleContext.Provider value={{ locale, dir, setLocale, t, tx }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale(): LocaleValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used inside <LocaleProvider>')
  return ctx
}
