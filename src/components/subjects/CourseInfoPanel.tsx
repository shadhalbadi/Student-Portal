import type { Course } from '../../types'
import { useLocale } from '../../i18n/LocaleProvider'
import { Card } from '../ui/Card'
import { TextLink } from '../ui/Button'
import { ProgressBar } from '../ui/ProgressBar'
import { Skeleton } from '../ui/Skeleton'

/** العمود الجانبي في صفحة المقرر: معلومات المقرر، المتطلبات، نسبة الدورة. */
export function CourseInfoPanel({ course }: { course: Course }) {
  const { t, tx } = useLocale()

  return (
    <div className="space-y-3.5">
      <Card className="divide-y divide-slate-200/70">
        <div className="p-4">
          <h2 className="text-sm font-bold text-ink-900">{t('course.infoTitle')}</h2>
          <div className="mt-3.5 flex items-start gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent-600 text-[11px] font-bold text-white">
              {t('course.instructorBadge')}
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold text-accent-600">{tx(course.instructor)}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                {tx(course.instructorTitle)}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-sm font-bold text-ink-900">{t('course.requirementsTitle')}</h2>
          <p className="mt-2 text-lg font-extrabold text-ink-900">
            {course.completionThreshold}%
          </p>
          <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
            {tx(course.completionNote)}
          </p>
          <div className="mt-3">
            <TextLink to={`/subjects/${course.id}`}>{t('course.viewRequirements')}</TextLink>
          </div>
        </div>
      </Card>

      <Card className="p-4">
        <h2 className="text-sm font-bold text-ink-900">{t('course.currentProgress')}</h2>
        <ProgressBar value={course.progress} tone={course.tone} showValue className="mt-3.5" />
        <p className="mt-3 text-[11px] text-slate-400">
          {t('course.completedLessons', {
            done: course.lessonsDone,
            total: course.lessonsTotal,
          })}
        </p>
      </Card>
    </div>
  )
}

export function CourseInfoPanelSkeleton() {
  return (
    <div className="space-y-3.5">
      <Card className="divide-y divide-slate-200/70">
        <div className="space-y-3 p-4">
          <Skeleton className="h-4 w-28" />
          <div className="flex items-start gap-3">
            <Skeleton className="size-11 rounded-full" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-3 w-full" />
            </div>
          </div>
        </div>
        <div className="space-y-3 p-4">
          <Skeleton className="h-4 w-36" />
          <Skeleton className="h-6 w-14" />
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </Card>
      <Card className="space-y-3 p-4">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-2 w-full rounded-full" />
      </Card>
    </div>
  )
}
