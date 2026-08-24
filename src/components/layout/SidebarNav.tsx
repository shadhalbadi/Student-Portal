import { NavLink } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import { navItems } from '../../lib/nav'
import { useLocale } from '../../i18n/LocaleProvider'
import { ProgressBar } from '../ui/ProgressBar'

interface SidebarNavProps {
  /** يُستدعى عند الضغط على رابط — يقفل الدرَج في الموبايل */
  onNavigate?: () => void
}

/** محتوى القائمة الجانبية — مشترك بين سايدبار الديسكتوب ودرَج الموبايل. */
export function SidebarNav({ onNavigate }: SidebarNavProps) {
  const { t } = useLocale()

  return (
    <div className="flex h-full flex-col gap-6 p-4">
      <div className="flex items-center gap-2.5 px-2 pt-1">
        <span className="grid size-9 place-items-center rounded-xl bg-brand-700 text-white">
          <Sparkles size={18} />
        </span>
        <div className="leading-tight">
          <p className="ltr text-sm font-extrabold text-ink-900">{t('app.name')}</p>
          <p className="text-[11px] text-slate-400">{t('app.tagline')}</p>
        </div>
      </div>

      <nav className="flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-700 text-white shadow-sm'
                      : 'text-slate-500 hover:bg-brand-50 hover:text-brand-700'
                  }`
                }
              >
                <item.icon size={18} />
                <span className="flex-1">{t(item.labelKey)}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="rounded-2xl bg-gradient-to-b from-brand-100 to-brand-50 p-4">
        <p className="text-xs font-bold text-ink-900">{t('nav.termProgress')}</p>
        <p className="mt-1 text-2xl font-extrabold text-brand-700">63%</p>
        <ProgressBar value={63} className="mt-2" />
        <p className="mt-2 text-[11px] leading-relaxed text-brand-800/70">
          {t('nav.termProgressNote', { count: 3 })}
        </p>
      </div>
    </div>
  )
}
