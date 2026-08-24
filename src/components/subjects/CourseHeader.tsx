import type { Course } from '../../types'
import type { TranslationKey } from '../../i18n/ar'
import { useLocale } from '../../i18n/LocaleProvider'

const courseTabs = [
  { id: 'overview', labelKey: 'course.tabOverview' },
  { id: 'content', labelKey: 'course.tabContent' },
  { id: 'assignments', labelKey: 'course.tabAssignments' },
  { id: 'quizzes', labelKey: 'course.tabQuizzes' },
] as const satisfies readonly { id: string; labelKey: TranslationKey }[]

export type CourseTabId = (typeof courseTabs)[number]['id']

interface CourseHeaderProps {
  course: Course
  activeTab: CourseTabId
  onTabChange: (tab: CourseTabId) => void
}

/** ترويسة المقرر + شريط التبويبات (الخط الأزرق تحت التبويب النشط كما في الفيقما). */
export function CourseHeader({ course, activeTab, onTabChange }: CourseHeaderProps) {
  const { t, tx } = useLocale()

  return (
    <div className="border-b border-slate-200/70 pb-0">
      {/* الاسم اللاتيني والرمز في جزيرة LTR واحدة حتى لا تتفكّك عند الالتفاف */}
      <h1 className="text-base font-extrabold leading-snug text-ink-900 sm:text-xl lg:text-[22px]">
        {t('course.prefix')}{' '}
        <span className="ltr">
          {course.titleLatin} ({course.code})
        </span>{' '}
        – {tx(course.title)}
      </h1>
      <p className="mt-2 text-xs text-slate-500 sm:text-sm">{tx(course.description)}</p>

      <div
        role="tablist"
        className="-mb-px mt-4 flex gap-4 overflow-x-auto sm:gap-7 [scrollbar-width:none]"
      >
        {courseTabs.map((tab) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => onTabChange(tab.id)}
              className={`shrink-0 border-b-2 pb-2.5 text-sm font-bold transition-colors ${
                isActive
                  ? 'border-accent-600 text-accent-600'
                  : 'border-transparent text-slate-400 hover:text-slate-600'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          )
        })}
      </div>
    </div>
  )
}
