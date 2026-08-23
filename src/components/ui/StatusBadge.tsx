import { Check, Lock, Play } from 'lucide-react'
import type { ItemStatus } from '../../types'

const config: Record<ItemStatus, { label: string; className: string; Icon: typeof Check }> = {
  completed: {
    label: 'مكتمل',
    className: 'bg-green-50 text-green-700',
    Icon: Check,
  },
  available: {
    label: 'متاح',
    className: 'bg-brand-50 text-brand-700',
    Icon: Play,
  },
  locked: {
    label: 'مقفل',
    className: 'bg-slate-100 text-slate-500',
    Icon: Lock,
  },
}

export function StatusBadge({ status }: { status: ItemStatus }) {
  const { label, className, Icon } = config[status]
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      <Icon size={13} strokeWidth={2.5} />
      {label}
    </span>
  )
}
