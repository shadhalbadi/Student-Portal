import { useState } from 'react'
import { History } from 'lucide-react'
import { activityGroups, type ActivityFilterId } from '../data/activityData'
import { useMockQuery } from '../hooks/useMockQuery'
import { useLocale } from '../i18n/LocaleProvider'
import type { ActivityGroup } from '../types'
import { Card } from '../components/ui/Card'
import { TextButton } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { ListRowSkeleton, Skeleton, SkeletonBlock } from '../components/ui/Skeleton'
import { ActivityRow } from '../components/activity/ActivityRow'
import {
  ActivityFilterChips,
  ActivityFilterPanel,
} from '../components/activity/ActivityFilters'

const filterGroups = (groups: ActivityGroup[], filter: ActivityFilterId): ActivityGroup[] =>
  filter === 'all'
    ? groups
    : groups
        .map((group) => ({ ...group, entries: group.entries.filter((e) => e.kind === filter) }))
        .filter((group) => group.entries.length > 0)

/**
 * سجل النشاط — خط زمني مجمّع باليوم (شاشة 9 في الفيقما).
 * التصفية: لوحة جانبية على الديسكتوب، وشريط حبّات فوق السجل على الموبايل.
 */
export function ActivityPage() {
  const { t, tx } = useLocale()
  const [filter, setFilter] = useState<ActivityFilterId>('all')
  const { data, isLoading } = useMockQuery<ActivityGroup[]>(activityGroups, [])

  const groups = data ? filterGroups(data, filter) : []

  return (
    <div className="grid gap-3.5 lg:grid-cols-[1fr_240px]">
      <ActivityFilterChips value={filter} onChange={setFilter} />

      {/* الخط الزمني */}
      <Card className="min-w-0 p-4 sm:p-5">
        <div className="text-center">
          <h1 className="text-lg font-extrabold text-ink-900 sm:text-xl">{t('activity.title')}</h1>
          <p className="mt-1 text-xs text-slate-400 sm:text-sm">
            {t('activity.subtitle')}
          </p>
        </div>

        <div className="mt-5">
          {isLoading ? (
            <SkeletonBlock label={t('activity.loading')}>
              <div className="space-y-5">
                {Array.from({ length: 2 }).map((_, g) => (
                  <div key={g}>
                    <Skeleton className="mb-3 h-4 w-16" />
                    <ul className="space-y-2.5">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <ListRowSkeleton key={i} trailing={<Skeleton className="h-3 w-16 max-sm:hidden" />} />
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </SkeletonBlock>
          ) : groups.length > 0 ? (
            <>
              <div className="space-y-5">
                {groups.map((group) => (
                  <section key={group.id}>
                    <h2 className="mb-2.5 text-xs font-bold text-slate-400">{tx(group.label)}</h2>
                    <ul className="space-y-2.5">
                      {group.entries.map((entry) => (
                        <ActivityRow key={entry.id} entry={entry} />
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
              <div className="mt-5 text-center">
                <TextButton>{t('activity.viewMore')}</TextButton>
              </div>
            </>
          ) : (
            <EmptyState
              icon={History}
              title={
                filter === 'all' ? t('activity.emptyTitle') : t('activity.filterEmptyTitle')
              }
              description={
                filter === 'all' ? t('activity.emptyBody') : t('activity.filterEmptyBody')
              }
            />
          )}
        </div>
      </Card>

      <ActivityFilterPanel value={filter} onChange={setFilter} />
    </div>
  )
}
