import type { ReactNode } from 'react'
import { Pill } from './Pill'

export interface FilterOption<T extends string> {
  id: T
  label: string
}

interface FilterPillsProps<T extends string> {
  options: readonly FilterOption<T>[]
  value: T
  onChange: (id: T) => void
  /** زر إضافي في نهاية الشريط (تصدير مثلًا) */
  trailing?: ReactNode
  className?: string
}

/**
 * شريط حبّات تصفية — مشترك بين صفحة المقررات وسجل النشاط.
 * يتمرّر أفقيًا لوحده إذا زادت الخيارات عن عرض الشاشة.
 */
export function FilterPills<T extends string>({
  options,
  value,
  onChange,
  trailing,
  className = '',
}: FilterPillsProps<T>) {
  return (
    <div
      className={`flex min-w-0 items-center gap-1 overflow-x-auto rounded-full border border-slate-200/70 bg-white p-1 [scrollbar-width:none] ${className}`}
    >
      {options.map((option) => (
        <Pill key={option.id} active={value === option.id} onClick={() => onChange(option.id)}>
          {option.label}
        </Pill>
      ))}
      {trailing}
    </div>
  )
}
