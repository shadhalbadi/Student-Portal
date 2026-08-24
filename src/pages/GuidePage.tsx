import { ChevronLeft, ChevronRight, Compass } from 'lucide-react'
import { guideIntro, guideTools } from '../data/guideData'
import { useMockQuery } from '../hooks/useMockQuery'
import { useLocale } from '../i18n/LocaleProvider'
import type { GuideTool } from '../types'
import { Card } from '../components/ui/Card'
import { CardGrid } from '../components/ui/CardGrid'
import { EmptyState } from '../components/ui/EmptyState'
import { TextButton } from '../components/ui/Button'
import { SkeletonBlock } from '../components/ui/Skeleton'
import { GuideToolCard, GuideToolCardSkeleton } from '../components/guide/GuideToolCard'

/** الدليل التفاعلي — كرت داكن للتعريف + شبكة بلاطات ملوّنة (شاشة 3 في الفيقما). */
export function GuidePage() {
  const { data, isLoading } = useMockQuery<GuideTool[]>(guideTools, [])
  const { t, tx, dir } = useLocale()
  const Chevron = dir === 'rtl' ? ChevronLeft : ChevronRight

  return (
    <Card className="space-y-4 p-4 sm:space-y-5 sm:p-5">
      <div className="rounded-card bg-[#2f2f33] px-5 py-7 text-center text-white sm:px-8 sm:py-9">
        <span className="mx-auto grid size-12 place-items-center rounded-xl bg-white/10 text-2xl">
          🧩
        </span>
        <h1 className="mt-4 text-lg font-extrabold sm:text-xl">{tx(guideIntro.title)}</h1>
        <p className="mx-auto mt-2 max-w-xl text-xs leading-relaxed text-white/70 sm:text-sm">
          {tx(guideIntro.description)}
        </p>
      </div>

      {isLoading ? (
        <SkeletonBlock label={t('guide.loading')}>
          <CardGrid layout="tiles">
            {Array.from({ length: 6 }).map((_, i) => (
              <GuideToolCardSkeleton key={i} />
            ))}
          </CardGrid>
        </SkeletonBlock>
      ) : data && data.length > 0 ? (
        <>
          <CardGrid layout="tiles">
            {data.map((tool) => (
              <GuideToolCard key={tool.id} tool={tool} />
            ))}
          </CardGrid>
          <div className="text-center">
            <TextButton>
              {t('guide.viewAll')}
              <Chevron size={15} />
            </TextButton>
          </div>
        </>
      ) : (
        <EmptyState
          icon={Compass}
          title={t('guide.emptyTitle')}
          description={t('guide.emptyBody')}
        />
      )}
    </Card>
  )
}
