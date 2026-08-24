import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useDataState, type DataMode } from '../../hooks/dataState'
import { useLocale } from '../../i18n/LocaleProvider'
import type { TranslationKey } from '../../i18n/ar'
import { Pill } from '../ui/Pill'

const options: { mode: DataMode; labelKey: TranslationKey }[] = [
  { mode: 'ready', labelKey: 'state.ready' },
  { mode: 'loading', labelKey: 'state.loading' },
  { mode: 'empty', labelKey: 'state.empty' },
]

/**
 * أداة عرض (ليست جزءًا من التصميم): تبدّل بين حالات الواجهة الثلاث
 * حتى يمكن معاينة Loading State و Empty State بدون باك-إند.
 * على الموبايل تبقى مطويّة في حبّة صغيرة حتى لا تغطي المحتوى.
 */
export function StateSwitcher() {
  const { mode, setMode } = useDataState()
  const { t } = useLocale()
  const [open, setOpen] = useState(false)
  const active = options.find((option) => option.mode === mode)

  return (
    <div className="fixed bottom-3 start-3 z-40 sm:bottom-4 sm:start-4">
      <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/95 p-1 shadow-lg backdrop-blur">
        {/* زر الطي — موبايل فقط */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className="flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] font-bold text-slate-500 sm:hidden"
        >
          <SlidersHorizontal size={13} />
          {!open && active && <span>{t(active.labelKey)}</span>}
        </button>

        <span className="hidden px-2 text-[11px] font-bold text-slate-400 sm:inline">
          {t('state.label')}
        </span>

        <div className={`${open ? 'flex' : 'hidden'} items-center gap-1 sm:flex`}>
          {options.map((option) => (
            <Pill
              key={option.mode}
              active={mode === option.mode}
              onClick={() => {
                setMode(option.mode)
                setOpen(false)
              }}
            >
              {t(option.labelKey)}
            </Pill>
          ))}
        </div>
      </div>
    </div>
  )
}
