import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import { SidebarNav } from './SidebarNav'
import { TopBar } from './TopBar'
import { StateSwitcher } from './StateSwitcher'

/**
 * هيكل التطبيق: سايدبار ثابت على الديسكتوب، درَج منسدل على الموبايل،
 * وشريط داكن أعلى المحتوى. الصفحات تُعرض داخل <Outlet />.
 */
export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // يقفل الدرَج عند تغيير الصفحة أو الضغط على Escape
  useEffect(() => setMenuOpen(false), [pathname])
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="min-h-screen lg:flex">
      {/* سايدبار الديسكتوب */}
      <aside className="sticky top-0 hidden h-screen w-[264px] shrink-0 border-e border-slate-200/70 bg-white lg:block">
        <SidebarNav />
      </aside>

      {/* درَج الموبايل */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-ink-900/40 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* الترجمة inline وليست بكلاس: الدرَج يفتح من اليمين (بداية الاتجاه في RTL) */}
        <div
          className="absolute inset-y-0 start-0 w-[280px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300"
          style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(100%)' }}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute end-3 top-3 grid size-8 place-items-center rounded-full text-slate-400 hover:bg-slate-100"
            aria-label="إغلاق القائمة"
          >
            <X size={18} />
          </button>
          <SidebarNav onNavigate={() => setMenuOpen(false)} />
        </div>
      </div>

      {/* المحتوى */}
      <div className="min-w-0 flex-1">
        {/* pb الزائد على الموبايل يمنع أداة الحالة العائمة من تغطية آخر عنصر */}
        <div className="mx-auto max-w-[1180px] space-y-4 p-3 pb-20 sm:space-y-5 sm:p-5 sm:pb-24 lg:p-6">
          <TopBar onOpenMenu={() => setMenuOpen(true)} />
          <main>
            <Outlet />
          </main>
        </div>
      </div>

      <StateSwitcher />
    </div>
  )
}
