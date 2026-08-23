import { CalendarCheck } from 'lucide-react'
import type { Task } from '../../types'
import { Section } from '../ui/Card'
import { TextLink } from '../ui/Button'
import { EmptyState } from '../ui/EmptyState'
import { ListRowSkeleton } from '../ui/Skeleton'
import { TaskRow } from '../tasks/TaskRow'

export function UpcomingTasks({ tasks }: { tasks: Task[] }) {
  return (
    <Section title="المهام القادمة">
      {tasks.length > 0 ? (
        <>
          <ul className="space-y-2.5">
            {tasks.map((task) => (
              <TaskRow key={task.id} task={task} />
            ))}
          </ul>
          <div className="mt-4 text-center">
            <TextLink to="/subjects">عرض جميع المهام</TextLink>
          </div>
        </>
      ) : (
        <EmptyState
          compact
          icon={CalendarCheck}
          title="لا مهام قادمة"
          description="خلصت كل واجباتك واختباراتك — استمتع بوقتك!"
        />
      )}
    </Section>
  )
}

export function UpcomingTasksSkeleton() {
  return (
    <Section title="المهام القادمة">
      <ul className="space-y-2.5">
        {Array.from({ length: 3 }).map((_, i) => (
          <ListRowSkeleton key={i} />
        ))}
      </ul>
    </Section>
  )
}
