import type { ActivityGroup, Badge } from '../types'
import type { TranslationKey } from '../i18n/ar'

export const activityFilters: readonly { id: ActivityFilterId; labelKey: TranslationKey }[] = [
  { id: 'all', labelKey: 'activityFilter.all' },
  { id: 'watched', labelKey: 'activityFilter.watched' },
  { id: 'chat', labelKey: 'activityFilter.chat' },
  { id: 'quiz', labelKey: 'activityFilter.quiz' },
  { id: 'attempt', labelKey: 'activityFilter.attempt' },
  { id: 'progress', labelKey: 'activityFilter.progress' },
  { id: 'badge', labelKey: 'activityFilter.badge' },
]

export type ActivityFilterId =
  | 'all'
  | 'watched'
  | 'chat'
  | 'quiz'
  | 'attempt'
  | 'progress'
  | 'badge'

export const activityGroups: ActivityGroup[] = [
  {
    id: 'today',
    label: { ar: 'اليوم', en: 'Today' },
    entries: [
      {
        id: 'a-1',
        kind: 'watched',
        title: { ar: 'تمت مشاهدة درس', en: 'Lesson watched' },
        subtitle: {
          ar: 'الوحدة 2 – التعلم الشخصي – مقدمة',
          en: 'Unit 2 – Personalised learning – Intro',
        },
        href: '/subjects/machine-vision',
        time: { ar: 'قبل 5 دقائق', en: '5 minutes ago' },
      },
      {
        id: 'a-2',
        kind: 'chat',
        title: { ar: 'محادثة مع EduMentor AI', en: 'Chat with EduMentor AI' },
        subtitle: {
          ar: 'سؤال حول الفرق بين CNN و RNN',
          en: 'A question about CNN vs RNN',
        },
        href: '/assistant',
        time: { ar: 'قبل 3 ساعات', en: '3 hours ago' },
      },
      {
        id: 'a-3',
        kind: 'quiz',
        title: { ar: 'اختبار قصير مكتمل', en: 'Short quiz completed' },
        subtitle: { ar: 'الوحدة 2 – اختبار سريع', en: 'Unit 2 – quick quiz' },
        href: '/subjects/machine-vision',
        score: { ar: 'درجة 9/10', en: 'Score 9/10' },
        time: { ar: 'قبل 5 ساعات', en: '5 hours ago' },
      },
    ],
  },
  {
    id: 'yesterday',
    label: { ar: 'أمس', en: 'Yesterday' },
    entries: [
      {
        id: 'a-4',
        kind: 'attempt',
        title: { ar: 'محاولة اختبار', en: 'Quiz attempt' },
        subtitle: { ar: 'اختبار منتصف الوحدة 2', en: 'Unit 2 midterm quiz' },
        score: { ar: 'درجة 18/20', en: 'Score 18/20' },
        time: { ar: '08:40 م', en: '08:40 PM' },
      },
    ],
  },
  {
    id: 'two-days',
    label: { ar: 'قبل يومين', en: '2 days ago' },
    entries: [
      {
        id: 'a-5',
        kind: 'progress',
        title: { ar: 'تقدّم محقّق', en: 'Progress milestone' },
        subtitle: { ar: 'أكملت 70% من الوحدة 2', en: 'You completed 70% of unit 2' },
        time: { ar: '04:15 م', en: '04:15 PM' },
      },
      {
        id: 'a-6',
        kind: 'badge',
        title: { ar: 'شارة مكتسبة', en: 'Badge earned' },
        subtitle: { ar: 'شهادة: متعلّم نشط', en: 'Certificate: Active learner' },
        href: '/badges',
        time: { ar: '09:00 ص', en: '09:00 AM' },
      },
    ],
  },
]

export const badges: Badge[] = [
  {
    id: 'b-1',
    title: { ar: 'متعلّم نشط', en: 'Active learner' },
    description: {
      ar: 'دخلت المنصة 7 أيام متتالية.',
      en: 'Signed in 7 days in a row.',
    },
    emoji: '🔥',
    tone: 'orange',
    earned: true,
    earnedAt: { ar: 'قبل يومين', en: '2 days ago' },
  },
  {
    id: 'b-2',
    title: { ar: 'إجابة كاملة', en: 'Perfect score' },
    description: {
      ar: 'حصلت على الدرجة الكاملة في اختبار قصير.',
      en: 'Scored full marks on a short quiz.',
    },
    emoji: '🎯',
    tone: 'green',
    earned: true,
    earnedAt: { ar: 'الأسبوع الماضي', en: 'Last week' },
  },
  {
    id: 'b-3',
    title: { ar: 'باحث فضولي', en: 'Curious researcher' },
    description: {
      ar: 'سألت المساعد الذكي 25 سؤالًا.',
      en: 'Asked the AI assistant 25 questions.',
    },
    emoji: '🧠',
    tone: 'violet',
    earned: true,
    earnedAt: { ar: 'قبل 3 أسابيع', en: '3 weeks ago' },
  },
  {
    id: 'b-4',
    title: { ar: 'ملتزم بالمواعيد', en: 'Always on time' },
    description: {
      ar: 'سلّمت 10 واجبات قبل الموعد النهائي.',
      en: 'Submitted 10 assignments before the deadline.',
    },
    emoji: '⏱️',
    tone: 'blue',
    earned: false,
    progress: 70,
  },
  {
    id: 'b-5',
    title: { ar: 'خبير الرؤية', en: 'Vision expert' },
    description: {
      ar: 'أكمل جميع وحدات مقرر Machine Vision.',
      en: 'Finish every unit of Machine Vision.',
    },
    emoji: '👁️',
    tone: 'pink',
    earned: false,
    progress: 61,
  },
  {
    id: 'b-6',
    title: { ar: 'مسار مكتمل', en: 'Track complete' },
    description: {
      ar: 'أكمل مقررًا واحدًا بنسبة 100%.',
      en: 'Complete one course at 100%.',
    },
    emoji: '🏆',
    tone: 'teal',
    earned: false,
    progress: 55,
  },
]
