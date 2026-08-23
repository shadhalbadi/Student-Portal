import type { ReactNode } from 'react'

interface PageHeaderProps {
  title: string
  subtitle: string
  /** عنصر يوضع في الطرف المقابل للعنوان (فلاتر مثلًا) */
  action?: ReactNode
}

/** ترويسة صفحة: عنوان + سطر وصف + عنصر إضافي — مشتركة بين المقررات والشارات. */
export function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="text-xl font-extrabold text-ink-900 sm:text-2xl">{title}</h1>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>
      {action}
    </div>
  )
}
