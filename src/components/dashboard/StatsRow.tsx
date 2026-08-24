import { BarChart3 } from 'lucide-react'
import type { Stat } from '../../types'
import { useLocale } from '../../i18n/LocaleProvider'
import { Card } from '../ui/Card'
import { EmptyState } from '../ui/EmptyState'
import { Skeleton } from '../ui/Skeleton'

/** كرت رقم واحد: الرقم أزرق كبير فوق، والوصف رمادي تحته. */
function StatCard({ stat }: { stat: Stat }) {
  const { t } = useLocale()
  return (
    <div className="rounded-2xl border border-slate-200/70 bg-white px-3 py-3 text-center sm:px-4 sm:py-5">
      <p className="ltr text-xl font-extrabold text-accent-600 sm:text-[28px]">{stat.value}</p>
      <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-xs">{t(stat.labelKey)}</p>
    </div>
  )
}

export function StatsRow({ stats }: { stats: Stat[] }) {
  const { t } = useLocale()

  if (stats.length === 0) {
    return (
      <Card className="p-3 sm:p-4">
        <EmptyState
          compact
          icon={BarChart3}
          title={t('stats.emptyTitle')}
          description={t('stats.emptyBody')}
        />
      </Card>
    )
  }

  return (
    <Card className="p-3 sm:p-4">
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </Card>
  )
}

export function StatsRowSkeleton() {
  return (
    <Card className="p-3 sm:p-4">
      <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200/70 px-3 py-5"
          >
            <Skeleton className="h-7 w-12" />
            <Skeleton className="h-3 w-20" />
          </div>
        ))}
      </div>
    </Card>
  )
}
