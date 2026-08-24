import { CalendarCheck } from 'lucide-react'
import type { Task } from '../../types'
import { useLocale } from '../../i18n/LocaleProvider'
import { Section } from '../ui/Card'
import { TextLink } from '../ui/Button'
import { EmptyState } from '../ui/EmptyState'
import { ListRowSkeleton } from '../ui/Skeleton'
import { TaskRow } from '../tasks/TaskRow'

export function UpcomingTasks({ tasks }: { tasks: Task[] }) {
  const { t } = useLocale()

  return (
    <Section title={t('tasks.title')}>
      {tasks.length > 0 ? (
        <>
          <ul className="space-y-2.5">
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </ul>
          <div className="mt-4 text-center">
            <TextLink to="/subjects">{t('tasks.viewAll')}</TextLink>
          </div>
        </>
      ) : (
        <EmptyState
          compact
          icon={CalendarCheck}
          title={t('tasks.emptyTitle')}
          description={t('tasks.emptyBody')}
        />
      )}
    </Section>
  )
}

export function UpcomingTasksSkeleton() {
  const { t } = useLocale()
  return (
    <Section title={t('tasks.title')}>
      <ul className="space-y-2.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <ListRowSkeleton key={i} />
        ))}
      </ul>
    </Section>
  )
}
