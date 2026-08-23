import type { ReactNode } from 'react'

/** زر حبّة (rounded-full) بحالة نشطة — الوحدة المشتركة لكل شرائط التصفية والتبديل. */
export function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold transition-colors ${
        active ? 'bg-brand-700 text-white' : 'text-slate-500 hover:bg-brand-50 hover:text-brand-700'
      }`}
    >
      {children}
    </button>
  )
}
