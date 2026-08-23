import { FileText, Lock, PenLine, PlayCircle, Star, Sparkles } from 'lucide-react'
import type { Unit, UnitItem } from '../../types'
import { Card } from '../ui/Card'
import { IconTile } from '../ui/IconTile'
import { ListRowSkeleton, Skeleton } from '../ui/Skeleton'
import { StatusBadge } from '../ui/StatusBadge'

const itemIcons = {
  video: PlayCircle,
  quiz: PenLine,
  activity: Sparkles,
  reading: FileText,
  star: Star,
} as const

function UnitItemRow({ item }: { item: UnitItem }) {
  const Icon = itemIcons[item.icon]
  const locked = item.status === 'locked'

  return (
    <li className="flex items-center gap-3 rounded-2xl border border-slate-200/70 p-3">
      <IconTile tone={item.tone} className={locked ? 'opacity-60' : ''}>
        <Icon size={18} />
      </IconTile>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-medium text-slate-400">{item.kicker}</p>
        <p
          className={`truncate text-sm font-bold ${
            locked ? 'text-slate-400' : 'text-accent-600'
          }`}
        >
          {item.title}
        </p>
      </div>
      <StatusBadge status={item.status} />
    </li>
  )
}

/** وحدة دراسية: ترويسة فيها رقم الوحدة واسمها، وتحتها عناصرها. */
export function UnitCard({ unit }: { unit: Unit }) {
  const locked = unit.status === 'locked'

  return (
    <Card className="p-4">
      <div className="mb-3.5 flex items-center gap-2.5">
        <IconTile
          tone={locked ? 'blue' : unit.status === 'completed' ? 'green' : 'violet'}
          size="sm"
          soft={locked}
        >
          {locked ? <Lock size={14} /> : <span className="text-xs font-bold">{unit.order}</span>}
        </IconTile>
        <h3
          className={`flex-1 text-sm font-bold sm:text-base ${
            locked ? 'text-slate-400' : 'text-ink-900'
          }`}
        >
          الوحدة {unit.order} – {unit.title}
        </h3>
        {unit.lockNote && (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400">
            <Lock size={11} />
            {unit.lockNote}
          </span>
        )}
      </div>

      {unit.items.length > 0 ? (
        <ul className="space-y-2.5">
          {unit.items.map((item) => (
            <UnitItemRow key={item.id} item={item} />
          ))}
        </ul>
      ) : (
        <p className="rounded-2xl bg-slate-50 px-3 py-4 text-center text-xs text-slate-400">
          محتوى هذه الوحدة يُفتح بعد إكمال الوحدات السابقة.
        </p>
      )}
    </Card>
  )
}

export function UnitCardSkeleton() {
  return (
    <Card className="p-4">
      <div className="mb-4 flex items-center gap-2.5">
        <Skeleton className="size-8 rounded-lg" />
        <Skeleton className="h-4 w-48" />
      </div>
      <ul className="space-y-2.5">
        {Array.from({ length: 2 }).map((_, i) => (
          <ListRowSkeleton
            key={i}
            trailing={<Skeleton className="h-6 w-16 rounded-full" />}
          />
        ))}
      </ul>
    </Card>
  )
}
