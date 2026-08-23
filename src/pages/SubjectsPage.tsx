import { useState } from 'react'
import { BookMarked } from 'lucide-react'
import { courses } from '../data/mockData'
import { useMockQuery } from '../hooks/useMockQuery'
import type { Course } from '../types'
import { Card } from '../components/ui/Card'
import { CardGrid } from '../components/ui/CardGrid'
import { EmptyState } from '../components/ui/EmptyState'
import { FilterPills, type FilterOption } from '../components/ui/FilterPills'
import { PageHeader } from '../components/ui/PageHeader'
import { SkeletonBlock } from '../components/ui/Skeleton'
import { SubjectCard, SubjectCardSkeleton } from '../components/subjects/SubjectCard'

type Filter = 'all' | 'active' | 'done'

const filters: readonly FilterOption<Filter>[] = [
  { id: 'all', label: 'الكل' },
  { id: 'active', label: 'قيد الدراسة' },
  { id: 'done', label: 'مكتملة' },
]

const applyFilter = (list: Course[], filter: Filter) =>
  filter === 'all'
    ? list
    : list.filter((c) => (filter === 'done' ? c.progress >= 100 : c.progress < 100))

/** صفحة المقررات: ترويسة + فلاتر + شبكة كروت. */
export function SubjectsPage() {
  const [filter, setFilter] = useState<Filter>('all')
  const { data, isLoading } = useMockQuery<Course[]>(courses, [])

  const visible = data ? applyFilter(data, filter) : []

  return (
    <div className="space-y-4 sm:space-y-5">
      <PageHeader
        title="المقررات"
        subtitle={
          isLoading ? 'جارٍ تحميل مقرراتك...' : `${data?.length ?? 0} مقررات مسجلة هذا الفصل`
        }
        action={<FilterPills options={filters} value={filter} onChange={setFilter} />}
      />

      {isLoading ? (
        <SkeletonBlock label="جارٍ تحميل المقررات">
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
            title={filter === 'all' ? 'لا توجد مقررات مسجلة' : 'ما فيه مقررات بهذا الفلتر'}
            description={
              filter === 'all'
                ? 'ما سُجّلت في أي مقرر بعد. راجع مرشدك الأكاديمي أو انتظر فتح التسجيل للفصل القادم.'
                : 'جرّب فلترًا ثانيًا لعرض بقية المقررات.'
            }
          />
        </Card>
      )}
    </div>
  )
}
