import { Lock } from 'lucide-react'
import type { Badge } from '../../types'
import { Card } from '../ui/Card'
import { ProgressBar } from '../ui/ProgressBar'
import { Skeleton } from '../ui/Skeleton'

/** كرت شارة: المكتسبة ملوّنة وتاريخها ظاهر، وغير المكتسبة رمادية بشريط تقدّم. */
export function BadgeCard({ badge }: { badge: Badge }) {
  return (
    <Card className={`p-4 ${badge.earned ? '' : 'opacity-80'}`}>
      <div className="flex items-start gap-3">
        <span
          className={`grid size-12 shrink-0 place-items-center rounded-2xl text-2xl ${
            badge.earned ? 'bg-brand-50' : 'bg-slate-100 grayscale'
          }`}
          aria-hidden
        >
          {badge.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-bold text-ink-900">{badge.title}</h3>
            {!badge.earned && <Lock size={12} className="shrink-0 text-slate-400" />}
          </div>
          <p className="mt-1 text-xs leading-relaxed text-slate-500">{badge.description}</p>
        </div>
      </div>

      <div className="mt-3.5 border-t border-slate-200/70 pt-3">
        {badge.earned ? (
          <p className="text-[11px] font-bold text-green-600">مكتسبة · {badge.earnedAt}</p>
        ) : (
          <ProgressBar value={badge.progress ?? 0} tone={badge.tone} showValue />
        )}
      </div>
    </Card>
  )
}

export function BadgeCardSkeleton() {
  return (
    <Card className="p-4">
      <div className="flex gap-3">
        <Skeleton className="size-12 rounded-2xl" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-full" />
        </div>
      </div>
      <div className="mt-3.5 border-t border-slate-200/70 pt-3">
        <Skeleton className="h-2 w-full rounded-full" />
      </div>
    </Card>
  )
}
