import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, ChevronDown, History, LogOut, Settings, UserRound } from 'lucide-react'
import { student } from '../../data/mockData'
import type { TranslationKey } from '../../i18n/ar'
import { useLocale } from '../../i18n/LocaleProvider'
import { useDismissable } from '../../hooks/useDismissable'

const items: { to: string; labelKey: TranslationKey; icon: typeof UserRound }[] = [
  { to: '/profile', labelKey: 'nav.profile', icon: UserRound },
  { to: '/activity', labelKey: 'nav.activity', icon: History },
  { to: '/badges', labelKey: 'nav.badges', icon: Award },
]

/** حبّة المستخدم في الشريط العلوي + القائمة المنسدلة اللي يوعد بها السهم. */
export function UserMenu() {
  const { t, tx } = useLocale()
  const [open, setOpen] = useState(false)
  const ref = useDismissable(open, () => setOpen(false))

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-2 py-1.5 text-xs font-bold text-white transition-colors hover:bg-brand-700 sm:px-3 sm:py-2 sm:text-sm"
      >
        <span className="grid size-6 place-items-center rounded-full bg-white/25 text-[11px]">
          {tx(student.avatarInitial)}
        </span>
        <span className="max-sm:hidden">{tx(student.role)}</span>
        <ChevronDown
          size={14}
          className={`opacity-70 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute end-0 top-full z-50 mt-2 w-60 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-xl"
        >
          <div className="flex items-center gap-3 border-b border-slate-200/70 p-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-700 text-sm font-bold text-white">
              {tx(student.avatarInitial)}
            </span>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-ink-900">{tx(student.fullName)}</p>
              <p className="ltr truncate text-[11px] text-slate-400">{student.studentId}</p>
            </div>
          </div>

          <ul className="p-1.5">
            {items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  role="menuitem"
                  className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  <item.icon size={16} />
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
            <li>
              <button
                type="button"
                role="menuitem"
                className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                <Settings size={16} />
                {t('user.settings')}
              </button>
            </li>
          </ul>

          <div className="border-t border-slate-200/70 p-1.5">
            <button
              type="button"
              role="menuitem"
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-rose-600 transition-colors hover:bg-rose-50"
            >
              <LogOut size={16} />
              {t('user.logout')}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
