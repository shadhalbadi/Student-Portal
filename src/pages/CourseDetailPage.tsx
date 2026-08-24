import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ClipboardList, FileQuestion, Layers, SearchX } from 'lucide-react'
import { findCourse, tasks as allTasks } from '../data/mockData'
import { useMockQuery } from '../hooks/useMockQuery'
import { useLocale } from '../i18n/LocaleProvider'
import type { Course } from '../types'
import { Card } from '../components/ui/Card'
import { ButtonLink } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { TaskRow } from '../components/tasks/TaskRow'
import { Skeleton, SkeletonBlock } from '../components/ui/Skeleton'
import { CourseHeader, type CourseTabId } from '../components/subjects/CourseHeader'
import { UnitCard, UnitCardSkeleton } from '../components/subjects/UnitCard'
import { CourseInfoPanel, CourseInfoPanelSkeleton } from '../components/subjects/CourseInfoPanel'

/** صفحة تفاصيل المقرر — مطابقة لشاشة Course في الفيقما (وحدات + عمود معلومات). */
export function CourseDetailPage() {
  const { courseId = '' } = useParams()
  const [tab, setTab] = useState<CourseTabId>('overview')
  const { t, dir } = useLocale()

  const source = findCourse(courseId)
  // نسخة "فاضية" من نفس المقرر: الترويسة موجودة والوحدات لا — لعرض Empty State
  const { data: course, isLoading } = useMockQuery(source, source && { ...source, units: [] })

  // معرّف مقرر غير موجود — ما يحتاج تحميل
  if (!source) return <NotFound />

  if (isLoading || !course) return <CourseDetailSkeleton />

  const courseTasks = allTasks.filter((task) => task.courseId === course.id)
  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft

  return (
    <div className="space-y-4 sm:space-y-5">
      <Link
        to="/subjects"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-700"
      >
        <BackArrow size={14} />
        {t('course.backToAll')}
      </Link>

      <Card className="p-4 sm:p-5">
        <CourseHeader course={course} activeTab={tab} onTabChange={setTab} />

        <div className="pt-4">
          {tab === 'overview' && (
            // min-w-0 على أعمدة الشبكة: بدونه يمدّ محتوى الصفوف (truncate) العمود
            // فيتجاوز عرض الشاشة على الأجهزة الضيقة
            <div className="grid gap-3.5 lg:grid-cols-3">
              <div className="min-w-0 space-y-3.5 lg:col-span-2">
                <UnitList course={course} />
              </div>
              <div className="min-w-0">
                <CourseInfoPanel course={course} />
              </div>
            </div>
          )}

          {tab === 'content' && <UnitList course={course} />}

          {tab === 'assignments' &&
            (courseTasks.length > 0 ? (
              <ul className="space-y-2.5">
                {courseTasks.map((task) => (
                  <TaskRow key={task.id} task={task} />
                ))}
              </ul>
            ) : (
              <EmptyState
                icon={ClipboardList}
                title={t('course.assignmentsEmptyTitle')}
                description={t('course.assignmentsEmptyBody')}
              />
            ))}

          {tab === 'quizzes' && (
            <EmptyState
              icon={FileQuestion}
              title={t('course.quizzesEmptyTitle')}
              description={t('course.quizzesEmptyBody')}
            />
          )}
        </div>
      </Card>
    </div>
  )
}

function UnitList({ course }: { course: Course }) {
  const { t } = useLocale()

  if (course.units.length === 0) {
    return (
      <EmptyState
        icon={Layers}
        title={t('course.unitsEmptyTitle')}
        description={t('course.unitsEmptyBody')}
      />
    )
  }
  return (
    <div className="space-y-3.5">
      {course.units.map((unit) => (
        <UnitCard key={unit.id} unit={unit} />
      ))}
    </div>
  )
}

function CourseDetailSkeleton() {
  const { t } = useLocale()
  return (
    <SkeletonBlock label={t('course.loading')}>
      <div className="space-y-4 sm:space-y-5">
        <Skeleton className="h-4 w-24" />
        <Card className="p-4 sm:p-5">
          <div className="space-y-3 border-b border-slate-200/70 pb-4">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-3.5 w-1/2" />
            <div className="flex gap-4 overflow-hidden pt-2 sm:gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-14 shrink-0 sm:w-16" />
              ))}
            </div>
          </div>
          <div className="grid gap-3.5 pt-4 lg:grid-cols-3">
            <div className="min-w-0 space-y-3.5 lg:col-span-2">
              <UnitCardSkeleton />
              <UnitCardSkeleton />
            </div>
            <div className="min-w-0">
              <CourseInfoPanelSkeleton />
            </div>
          </div>
        </Card>
      </div>
    </SkeletonBlock>
  )
}

function NotFound() {
  const { t } = useLocale()
  return (
    <Card>
      <EmptyState
        icon={SearchX}
        title={t('course.notFoundTitle')}
        description={t('course.notFoundBody')}
        action={<ButtonLink to="/subjects">{t('course.notFoundCta')}</ButtonLink>}
      />
    </Card>
  )
}
