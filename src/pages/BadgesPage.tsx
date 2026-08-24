import { Award } from 'lucide-react'
import { badges } from '../data/activityData'
import { useMockQuery } from '../hooks/useMockQuery'
import { useLocale } from '../i18n/LocaleProvider'
import type { Badge } from '../types'
import { Card } from '../components/ui/Card'
import { CardGrid } from '../components/ui/CardGrid'
import { EmptyState } from '../components/ui/EmptyState'
import { PageHeader } from '../components/ui/PageHeader'
import { SkeletonBlock } from '../components/ui/Skeleton'
import { BadgeCard, BadgeCardSkeleton } from '../components/badges/BadgeCard'

/** الشارات — شبكة إنجازات؛ المكتسبة ملوّنة والباقي بشريط تقدم. */
export function BadgesPage() {
  const { t } = useLocale()
  const { data, isLoading } = useMockQuery<Badge[]>(badges, [])
  const earned = data?.filter((badge) => badge.earned).length ?? 0

  return (
    <div className="space-y-4 sm:space-y-5">
      <PageHeader
        title={t('badges.title')}
        subtitle={
          isLoading
            ? t('badges.loadingShort')
            : t('badges.count', { earned, total: data?.length ?? 0 })
        }
      />

      {isLoading ? (
        <SkeletonBlock label={t('badges.loading')}>
          <CardGrid>
            {Array.from({ length: 6 }).map((_, i) => (
              <BadgeCardSkeleton key={i} />
            ))}
          </CardGrid>
        </SkeletonBlock>
      ) : data && data.length > 0 ? (
        <CardGrid>
          {data.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </CardGrid>
      ) : (
        <Card>
          <EmptyState
            icon={Award}
            title={t('badges.emptyTitle')}
            description={t('badges.emptyBody')}
          />
        </Card>
      )}
    </div>
  )
}
