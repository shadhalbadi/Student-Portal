import { BookOpen } from 'lucide-react'
import type { ContinueLearning as ContinueLearningData } from '../../types'
import { useLocale } from '../../i18n/LocaleProvider'
import { Section } from '../ui/Card'
import { ButtonLink } from '../ui/Button'
import { EmptyState } from '../ui/EmptyState'
import { ProgressBar } from '../ui/ProgressBar'
import { Skeleton } from '../ui/Skeleton'

/** "مواصلة التعلم" — اسم المقرر + الوحدة الحالية + شريط تقدم + زر متابعة. */
export function ContinueLearningCard({ data }: { data: ContinueLearningData | null }) {
  const { t, tx } = useLocale()

  return (
    <Section title={t('continue.title')}>
      {data ? (
        <div className="rounded-2xl border border-slate-200/70 p-4">
          {/* الموبايل: العنوان فوق والزر بعرض كامل تحته */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
            <div className="min-w-0">
              <h3 className="text-base font-bold text-ink-900">{data.courseTitle}</h3>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{tx(data.unitLabel)}</p>
            </div>
            <ButtonLink to={`/subjects/${data.courseId}`} className="shrink-0 max-sm:w-full">
              {t('continue.cta')}
            </ButtonLink>
          </div>
          <ProgressBar value={data.progress} showValue className="mt-4" />
        </div>
      ) : (
        <EmptyState
          compact
          icon={BookOpen}
          title={t('continue.emptyTitle')}
          description={t('continue.emptyBody')}
          action={
            <ButtonLink to="/subjects" variant="soft">
              {t('continue.emptyCta')}
            </ButtonLink>
          }
        />
      )}
    </Section>
  )
}

export function ContinueLearningSkeleton() {
  const { t } = useLocale()
  return (
    <Section title={t('continue.title')}>
      <div className="rounded-2xl border border-slate-200/70 p-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-3.5 w-52" />
          </div>
          <Skeleton className="h-10 w-28 rounded-xl" />
        </div>
        <div className="mt-5 flex items-center gap-3">
          <Skeleton className="h-4 w-10" />
          <Skeleton className="h-2 flex-1 rounded-full" />
        </div>
      </div>
    </Section>
  )
}
