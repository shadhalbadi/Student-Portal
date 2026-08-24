import { ArrowLeft, ArrowRight, BookOpen, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Course } from '../../types'
import { useLocale } from '../../i18n/LocaleProvider'
import { Card } from '../ui/Card'
import { IconTile } from '../ui/IconTile'
import { ProgressBar } from '../ui/ProgressBar'
import { Skeleton } from '../ui/Skeleton'

/** كرت مقرر في شبكة صفحة المقررات. */
export function SubjectCard({ course }: { course: Course }) {
  const { t, tx, dir } = useLocale()
  const done = course.progress >= 100
  // السهم يتبع اتجاه القراءة
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <Card className="flex flex-col p-4 transition-shadow hover:shadow-[0_8px_24px_rgba(109,40,217,0.10)]">
      <div className="flex items-start justify-between gap-3">
        <IconTile tone={course.tone} size="lg">
          <BookOpen size={20} />
        </IconTile>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${
            done ? 'bg-green-50 text-green-700' : 'bg-brand-50 text-brand-700'
          }`}
        >
          {done ? t('subjects.statusDone') : t('subjects.statusActive')}
        </span>
      </div>

      <h3 className="mt-3 text-sm font-bold leading-snug text-ink-900 sm:mt-3.5 sm:text-base">
        {tx(course.title)}
      </h3>
      {/* الفقرة تبقى باتجاه الصفحة والنص اللاتيني معزول داخل span */}
      <p className="mt-1 text-xs font-semibold text-slate-400">
        <span className="ltr">
          {course.code} · {course.titleLatin}
        </span>
      </p>

      <p className="mt-3 flex items-center gap-1.5 text-xs text-slate-500">
        <GraduationCap size={14} className="shrink-0 text-slate-400" />
        {tx(course.instructor)}
      </p>

      <div className="mt-4 border-t border-slate-200/70 pt-3.5">
        <ProgressBar value={course.progress} tone={course.tone} showValue />
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-[11px] text-slate-400">
            {t('subjects.lessonsOf', { done: course.lessonsDone, total: course.lessonsTotal })}
          </span>
          <Link
            to={`/subjects/${course.id}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:underline"
          >
            {t('subjects.details')}
            <Arrow size={13} />
          </Link>
        </div>
      </div>
    </Card>
  )
}

export function SubjectCardSkeleton() {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <Skeleton className="size-12 rounded-2xl" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
      <Skeleton className="mt-4 h-5 w-3/4" />
      <Skeleton className="mt-2 h-3 w-1/2" />
      <Skeleton className="mt-4 h-3 w-32" />
      <div className="mt-4 space-y-3 border-t border-slate-200/70 pt-4">
        <Skeleton className="h-2 w-full rounded-full" />
        <Skeleton className="h-3 w-24" />
      </div>
    </Card>
  )
}
