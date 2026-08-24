import { useState } from 'react'
import { BookMarked } from 'lucide-react'
import { courses } from '../data/mockData'
import { useMockQuery } from '../hooks/useMockQuery'
import { useLocale } from '../i18n/LocaleProvider'
import type { Course } from '../types'
import type { TranslationKey } from '../i18n/ar'
import { Card } from '../components/ui/Card'
import { CardGrid } from '../components/ui/CardGrid'
import { EmptyState } from '../components/ui/EmptyState'
import { FilterPills } from '../components/ui/FilterPills'
import { PageHeader } from '../components/ui/PageHeader'
import { SkeletonBlock } from '../components/ui/Skeleton'
import { SubjectCard, SubjectCardSkeleton } from '../components/subjects/SubjectCard'

type Filter = 'all' | 'active' | 'done'

const filters: readonly { id: Filter; labelKey: TranslationKey }[] = [
  { id: 'all', labelKey: 'subjects.filterAll' },
  { id: 'active', labelKey: 'subjects.filterActive' },
  { id: 'done', labelKey: 'subjects.filterDone' },
]

const applyFilter = (list: Course[], filter: Filter) =>
  filter === 'all'
    ? list
    : list.filter((c) => (filter === 'done' ? c.progress >= 100 : c.progress < 100))

/** صفحة المقررات: ترويسة + فلاتر + شبكة كروت. */
export function SubjectsPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const { data, isLoading } = useMockQuery<Course[]>(courses, [])
  const { t } = useLocale()

  const visible = data ? applyFilter(data, filter) : []

  return (
    <div className="space-y-4 sm:space-y-5">
      <PageHeader
        title={t('subjects.title')}
        subtitle={
          isLoading
            ? t('subjects.loading')
            : t('subjects.count', { count: data?.length ?? 0 })
        }
        action={
          <FilterPills
            options={filters.map((item) => ({ id: item.id, label: t(item.labelKey) }))}
            value={filter}
            onChange={setFilter}
          />
        }
      />

      {isLoading ? (
        <SkeletonBlock label={t('subjects.loadingList')}>
          <CardGrid>
            {Array.from({ length: 6 }).map((_, i) => (
              <SubjectCardSkeleton key={i} />
            ))}
          </CardGrid>
        </SkeletonBlock>
      ) : visible.length > 0 ? (
        <CardGrid>
          {visible.map((course) => (
            <SubjectCard key={course.id} course={course} />
          ))}
        </CardGrid>
      ) : (
        <Card>
          <EmptyState
            icon={BookMarked}
            title={filter === 'all' ? t('subjects.emptyTitle') : t('subjects.filterEmptyTitle')}
            description={
              filter === 'all' ? t('subjects.emptyBody') : t('subjects.filterEmptyBody')
            }
          />
        </Card>
      )}
    </div>
  )
}
