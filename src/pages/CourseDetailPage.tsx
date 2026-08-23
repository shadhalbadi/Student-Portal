import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, ClipboardList, FileQuestion, Layers, SearchX } from 'lucide-react'
import { findCourse, tasks as allTasks } from '../data/mockData'
import { useMockQuery } from '../hooks/useMockQuery'
import type { Course } from '../types'
import { Card } from '../components/ui/Card'
import { ButtonLink } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'
import { TaskRow } from '../components/tasks/TaskRow'
import { SkeletonBlock, Skeleton } from '../components/ui/Skeleton'
import { CourseHeader, type CourseTabId } from '../components/subjects/CourseHeader'
import { UnitCard, UnitCardSkeleton } from '../components/subjects/UnitCard'
import {
  CourseInfoPanel,
  CourseInfoPanelSkeleton,
} from '../components/subjects/CourseInfoPanel'

/** صفحة تفاصيل المقرر — مطابقة لشاشة Course في الفيقما (وحدات + عمود معلومات). */
export function CourseDetailPage() {
  const { courseId = '' } = useParams()
  const [tab, setTab] = useState<CourseTabId>('overview')

  const source = findCourse(courseId)
  // نسخة "فاضية" من نفس المقرر: الترويسة موجودة والوحدات لا — لعرض Empty State
  const { data: course, isLoading } = useMockQuery(
    source,
    source && { ...source, units: [] },
  )

  // معرّف مقرر غير موجود — ما يحتاج تحميل
  if (!source) return <NotFound />

  if (isLoading || !course) return <CourseDetailSkeleton />

  const courseTasks = allTasks.filter((task) => task.courseId === course.id)

  return (
    <div className="space-y-4 sm:space-y-5">
      <Link
        to="/subjects"
        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-700"
      >
        <ArrowRight size={14} />
        كل المقررات
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
                title="لا توجد واجبات"
                description="ما فيه واجبات مطلوبة في هذا المقرر حاليًا."
              />
            ))}

          {tab === 'quizzes' && (
            <EmptyState
              icon={FileQuestion}
              title="لا اختبارات منشورة"
              description="سيظهر هنا كل اختبار يفتحه أستاذ المقرر مع موعده ودرجته."
            />
          )}
        </div>
      </Card>
    </div>
  )
}

function UnitList({ course }: { course: Course }) {
  if (course.units.length === 0) {
    return (
      <EmptyState
        icon={Layers}
        title="ما نُشرت وحدات بعد"
        description="أستاذ المقرر لم يضف محتوى الوحدات حتى الآن. راجع الصفحة لاحقًا."
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
  return (
    <SkeletonBlock label="جارٍ تحميل بيانات المقرر">
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
  return (
    <Card>
      <EmptyState
        icon={SearchX}
        title="المقرر غير موجود"
        description="الرابط الذي فتحته لا يشير إلى مقرر مسجّل باسمك."
        action={<ButtonLink to="/subjects">رجوع إلى المقررات</ButtonLink>}
      />
    </Card>
  )
}
