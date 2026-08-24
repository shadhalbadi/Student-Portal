import { Languages } from 'lucide-react'
import { useLocale } from '../../i18n/LocaleProvider'
import { locales } from '../../i18n/locale'

/** مبدّل اللغة في الشريط العلوي — يقلب النصوص واتجاه الصفحة معًا. */
export function LocaleToggle() {
  const { locale, setLocale, t } = useLocale()

  return (
    <div
      className="flex shrink-0 items-center gap-0.5 rounded-full bg-white/8 p-0.5"
      role="group"
      aria-label={t('nav.language')}
    >
      <Languages size={14} className="mx-1.5 shrink-0 text-white/40 max-sm:hidden" />
      {locales.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setLocale(item.id)}
          aria-pressed={locale === item.id}
          className={`rounded-full px-2 py-1 text-[11px] font-bold transition-colors sm:px-2.5 ${
            locale === item.id ? 'bg-white text-ink-900' : 'text-white/60 hover:text-white'
          }`}
        >
          {item.id === 'ar' ? 'ع' : 'EN'}
        </button>
      ))}
    </div>
  )
}
