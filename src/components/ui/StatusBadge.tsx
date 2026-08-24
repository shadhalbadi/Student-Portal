import { Check, Lock, Play } from 'lucide-react'
import type { ItemStatus } from '../../types'
import type { TranslationKey } from '../../i18n/ar'
import { useLocale } from '../../i18n/LocaleProvider'

const config: Record<ItemStatus, { labelKey: TranslationKey; className: string; Icon: typeof Check }> = {
  completed: { labelKey: 'status.completed', className: 'bg-green-50 text-green-700', Icon: Check },
  available: { labelKey: 'status.available', className: 'bg-brand-50 text-brand-700', Icon: Play },
  locked: { labelKey: 'status.locked', className: 'bg-slate-100 text-slate-500', Icon: Lock },
}

export function StatusBadge({ status }: { status: ItemStatus }) {
  const { t } = useLocale()
  const { labelKey, className, Icon } = config[status]
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${className}`}
    >
      <Icon size={13} strokeWidth={2.5} />
      {t(labelKey)}
    </span>
  )
}
