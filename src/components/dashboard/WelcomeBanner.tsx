import { useLocale } from '../../i18n/LocaleProvider'
import { RobotMascot } from '../illustrations/RobotMascot'
import { Skeleton } from '../ui/Skeleton'

/** بانر الترحيب البنفسجي الفاتح — النص في بداية الاتجاه والروبوت في نهايته. */
export function WelcomeBanner({ name }: { name: string }) {
  const { t } = useLocale()

  return (
    <div className="relative overflow-hidden rounded-card bg-gradient-to-l from-brand-100 via-brand-100/70 to-brand-50 px-5 py-6 sm:px-8 sm:py-8">
      <div className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-xl font-extrabold text-ink-900 sm:text-2xl lg:text-[28px]">
            {t('dashboard.welcome', { name })} <span aria-hidden>👋</span>
          </h1>
          <p className="mt-2 text-sm text-slate-500 sm:text-base">{t('dashboard.welcomeSub')}</p>
        </div>
        <RobotMascot className="h-24 w-auto shrink-0 sm:h-32 lg:h-36" />
      </div>
    </div>
  )
}

export function WelcomeBannerSkeleton() {
  return (
    <div className="rounded-card bg-brand-50/70 px-5 py-6 sm:px-8 sm:py-8">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 space-y-3">
          <Skeleton className="h-7 w-44 sm:h-8 sm:w-56" />
          <Skeleton className="h-4 w-56 sm:w-72" />
        </div>
        <Skeleton className="size-24 rounded-3xl sm:size-32" />
      </div>
    </div>
  )
}
