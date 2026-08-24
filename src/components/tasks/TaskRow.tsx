import { ClipboardList, FileCheck2, PencilLine } from 'lucide-react'
import type { Task } from '../../types'
import { useLocale } from '../../i18n/LocaleProvider'
import { IconTile } from '../ui/IconTile'

const icons = {
  assignment: ClipboardList,
  quiz: PencilLine,
  review: FileCheck2,
} as const

/** صف مهمة واحد — يُستخدم في لوحة الطالب وفي تبويب الواجبات داخل المقرر. */
export function TaskRow({ task }: { task: Task }) {
  const { tx } = useLocale()
  const Icon = icons[task.icon]

  return (
    <li className="flex items-center gap-3 rounded-2xl border border-slate-200/70 p-3 transition-colors hover:bg-brand-50/40">
      <IconTile tone={task.tone} soft>
        <Icon size={18} />
      </IconTile>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-bold text-ink-900">{tx(task.title)}</p>
        <p className="mt-0.5 text-xs text-slate-400">{tx(task.dueLabel)}</p>
      </div>
    </li>
  )
}
