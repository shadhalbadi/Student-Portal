import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'

interface EmptyStateProps {
  icon: LucideIcon
  title: string
  description: string
  action?: ReactNode
  /** نسخة مضغوطة تُستخدم داخل كرت قسم */
  compact?: boolean
}

/** حالة "لا توجد بيانات" — نفس الهوية البصرية: دائرة بنفسجية فاتحة + نص هادئ. */
export function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  compact = false,
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${
        compact ? 'gap-2 px-4 py-8' : 'gap-3 px-6 py-14'
      }`}
    >
      <span
        className={`inline-flex items-center justify-center rounded-full bg-brand-50 text-brand-500 ${
          compact ? 'size-12' : 'size-16'
        }`}
      >
        <Icon size={compact ? 22 : 28} strokeWidth={1.8} />
      </span>
      <h3 className={`font-bold text-ink-900 ${compact ? 'text-sm' : 'text-lg'}`}>{title}</h3>
      <p className="max-w-sm text-xs leading-relaxed text-slate-500 sm:text-sm">{description}</p>
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
