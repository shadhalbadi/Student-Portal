import { dashboardData, emptyDashboardData } from '../data/mockData'
import { useMockQuery } from '../hooks/useMockQuery'
import { Card } from '../components/ui/Card'
import { SkeletonBlock } from '../components/ui/Skeleton'
import { WelcomeBanner, WelcomeBannerSkeleton } from '../components/dashboard/WelcomeBanner'
import { StatsRow, StatsRowSkeleton } from '../components/dashboard/StatsRow'
import {
  ContinueLearningCard,
  ContinueLearningSkeleton,
} from '../components/dashboard/ContinueLearning'
import { UpcomingTasks, UpcomingTasksSkeleton } from '../components/dashboard/UpcomingTasks'

/**
 * لوحة الطالب — عمود واحد كما في الفيقما:
 * بانر الترحيب → الإحصائيات → كرت يجمع "مواصلة التعلم" و"المهام القادمة".
 */
export function DashboardPage() {
  const { data, isLoading } = useMockQuery(dashboardData, emptyDashboardData)

  if (isLoading || !data) {
    return (
      <SkeletonBlock label="جارٍ تحميل لوحة الطالب">
        <div className="space-y-4 sm:space-y-5">
          <WelcomeBannerSkeleton />
          <StatsRowSkeleton />
          <Card className="space-y-6 p-4 sm:p-5">
            <ContinueLearningSkeleton />
            <UpcomingTasksSkeleton />
          </Card>
        </div>
      </SkeletonBlock>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-5">
      <WelcomeBanner name={data.student.name} />
      <StatsRow stats={data.stats} />
      <Card className="space-y-6 p-4 sm:p-5">
        <ContinueLearningCard data={data.continueLearning} />
        <UpcomingTasks tasks={data.tasks} />
      </Card>
    </div>
  )
}
