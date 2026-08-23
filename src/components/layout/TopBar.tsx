import { Bell, ChevronDown, Menu, Search } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { navItems } from '../../lib/nav'
import { student } from '../../data/mockData'

interface TopBarProps {
  onOpenMenu: () => void
}

/** الشريط الداكن أعلى المحتوى — مطابق للفيقما (حبّات بنفسجية + بحث + إشعارات). */
export function TopBar({ onOpenMenu }: TopBarProps) {
  const { pathname } = useLocation()
  // أطول مسار مطابق حتى تُنسب الصفحات الفرعية (مثل /subjects/:id) لعنصرها الصحيح
  const current =
    [...navItems]
      .filter((item) => item.to !== '/' && pathname.startsWith(item.to))
      .sort((a, b) => b.to.length - a.to.length)[0] ?? navItems[0]

  return (
    <header className="rounded-2xl bg-ink-900 px-3 py-2.5 sm:px-4 sm:py-3">
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          type="button"
          onClick={onOpenMenu}
          className="grid size-9 shrink-0 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10 lg:hidden"
          aria-label="فتح القائمة"
        >
          <Menu size={20} />
        </button>

        <span className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-3 py-2 text-xs font-bold text-white sm:px-4 sm:text-sm">
          <current.icon size={15} />
          <span className="max-sm:hidden">{current.label}</span>
        </span>

        <div className="relative hidden min-w-0 flex-1 sm:block">
          <Search
            size={16}
            className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-white/40"
          />
          <input
            type="search"
            placeholder="ابحث عن مقرر أو درس..."
            className="h-9 w-full rounded-full bg-white/8 pe-9 ps-4 text-sm text-white placeholder:text-white/40 focus:bg-white/12 focus:outline-none"
          />
        </div>

        {/* الموبايل: زر بحث بدل حقل البحث الكامل */}
        <div className="flex flex-1 justify-end sm:hidden">
          <button
            type="button"
            className="grid size-9 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10"
            aria-label="بحث"
          >
            <Search size={18} />
          </button>
        </div>

        <button
          type="button"
          className="relative grid size-9 shrink-0 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10"
          aria-label="الإشعارات"
        >
          <Bell size={18} />
          <span className="absolute start-2 top-2 size-2 rounded-full bg-rose-500 ring-2 ring-ink-900" />
        </button>

        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-2 py-1.5 text-xs font-bold text-white transition-colors hover:bg-brand-700 sm:px-3 sm:py-2 sm:text-sm"
        >
          <span className="grid size-6 place-items-center rounded-full bg-white/25 text-[11px]">
            {student.avatarInitial}
          </span>
          <span className="max-sm:hidden">{student.role}</span>
          <ChevronDown size={14} className="opacity-70" />
        </button>
      </div>
    </header>
  )
}
