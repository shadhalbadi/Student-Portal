import { AtSign, IdCard, Pencil, UserRound } from 'lucide-react'
import { academicFields, profileStats, student } from '../data/mockData'
import { badges } from '../data/activityData'
import { useMockQuery } from '../hooks/useMockQuery'
import { useLocale } from '../i18n/LocaleProvider'
import type { Badge, ProfileField, Stat, Student } from '../types'
import { Card, Section } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { StatsRow, StatsRowSkeleton } from '../components/dashboard/StatsRow'
import { Skeleton, SkeletonBlock } from '../components/ui/Skeleton'
import { TextLink } from '../components/ui/Button'

interface ProfileData {
  student: Student
  stats: Stat[]
  fields: ProfileField[]
  badges: Badge[]
}

const ready: ProfileData = {
  student,
  stats: profileStats,
  fields: academicFields,
  badges,
}

/** الحالة الفاضية: الحساب موجود لكن ما تسجّلت أي بيانات أكاديمية بعد. */
const empty: ProfileData = { student, stats: [], fields: [], badges: [] }

/** الملف الشخصي — بطاقة الهوية + إحصائيات أكاديمية + معلومات أكاديمية. */
export function ProfilePage() {
  const { t, tx } = useLocale()
  const { data, isLoading } = useMockQuery(ready, empty)

  if (isLoading || !data) return <ProfileSkeleton />

  const earned = data.badges.filter((badge) => badge.earned)

  return (
    <div className="space-y-4 sm:space-y-5">
      <IdentityCard student={data.student} />

      <StatsRow stats={data.stats} />

      <Card className="space-y-6 p-4 sm:p-5">
        <Section title={t('profile.academicTitle')}>
          {data.fields.length > 0 ? (
            <dl className="grid gap-2.5 sm:grid-cols-2">
              {data.fields.map((field) => (
                <div key={field.id} className="rounded-2xl border border-slate-200/70 px-3.5 py-3">
                  <dt className="text-[11px] font-medium text-slate-400">{t(field.labelKey)}</dt>
                  <dd className="mt-1 text-sm font-bold text-ink-900">{tx(field.value)}</dd>
                </div>
              ))}
            </dl>
          ) : (
            <EmptyState
              compact
              icon={IdCard}
              title={t('profile.academicEmptyTitle')}
              description={t('profile.academicEmptyBody')}
            />
          )}
        </Section>

        <Section title={t('profile.badgesTitle')}>
          {earned.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {earned.map((badge) => (
                <li
                  key={badge.id}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 py-1.5 pe-3 ps-1.5"
                >
                  <span className="grid size-7 place-items-center rounded-full bg-brand-50 text-sm">
                    {badge.emoji}
                  </span>
                  <span className="text-xs font-bold text-ink-900">{tx(badge.title)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState
              compact
              icon={UserRound}
              title={t('profile.badgesEmptyTitle')}
              description={t('profile.badgesEmptyBody')}
            />
          )}
          <div className="mt-4 text-center">
            <TextLink to="/badges">{t('profile.viewAllBadges')}</TextLink>
          </div>
        </Section>
      </Card>
    </div>
  )
}

function IdentityCard({ student: s }: { student: Student }) {
  const { t, tx } = useLocale()

  return (
    <Card className="overflow-hidden">
      <div className="h-20 bg-gradient-to-l from-brand-200 via-brand-100 to-brand-50 sm:h-24" />
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <div className="-mt-10 flex flex-col gap-3 sm:-mt-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-end gap-3">
            <span className="grid size-20 shrink-0 place-items-center rounded-3xl bg-brand-700 text-2xl font-extrabold text-white ring-4 ring-white sm:size-24 sm:text-3xl">
              {tx(s.avatarInitial)}
            </span>
            <div className="min-w-0 pb-1">
              <h1 className="text-lg font-extrabold text-ink-900 sm:text-xl">{tx(s.fullName)}</h1>
              <span className="mt-1 inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-bold text-brand-700">
                {tx(s.role)}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50 max-sm:w-full"
          >
            <Pencil size={15} />
            {t('profile.edit')}
          </button>
        </div>

        <div className="mt-4 grid gap-2.5 border-t border-slate-200/70 pt-4 sm:grid-cols-2">
          <p className="flex items-center gap-2 text-xs text-slate-500">
            <IdCard size={15} className="shrink-0 text-slate-400" />
            {t('profile.studentId')}{' '}
            <span className="ltr font-bold text-ink-900">{s.studentId}</span>
          </p>
          <p className="flex items-center gap-2 text-xs text-slate-500">
            <AtSign size={15} className="shrink-0 text-slate-400" />
            <span className="ltr truncate font-bold text-ink-900">{s.email}</span>
          </p>
        </div>
      </div>
    </Card>
  )
}

function ProfileSkeleton() {
  const { t } = useLocale()
  return (
    <SkeletonBlock label={t('profile.loading')}>
      <div className="space-y-4 sm:space-y-5">
        <Card className="overflow-hidden">
          <div className="h-20 bg-slate-100 sm:h-24" />
          <div className="px-4 pb-4 sm:px-5 sm:pb-5">
            <div className="-mt-10 flex items-end gap-3 sm:-mt-12">
              <Skeleton className="size-20 rounded-3xl sm:size-24" />
              <div className="space-y-2 pb-1">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-4 w-16 rounded-full" />
              </div>
            </div>
            <div className="mt-4 grid gap-2.5 border-t border-slate-200/70 pt-4 sm:grid-cols-2">
              <Skeleton className="h-4 w-44" />
              <Skeleton className="h-4 w-52" />
            </div>
          </div>
        </Card>

        <StatsRowSkeleton />

        <Card className="space-y-4 p-4 sm:p-5">
          <Skeleton className="h-5 w-36" />
          <div className="grid gap-2.5 sm:grid-cols-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="space-y-2 rounded-2xl border border-slate-200/70 px-3.5 py-3">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-4 w-32" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SkeletonBlock>
  )
}
