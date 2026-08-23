import type { ActivityGroup, Badge } from '../types'

export const activityFilters = [
  { id: 'all', label: 'كل الأنشطة' },
  { id: 'watched', label: 'الدروس التي تمت مشاهدتها' },
  { id: 'chat', label: 'محادثات الذكاء الاصطناعي' },
  { id: 'quiz', label: 'الاختبارات القصيرة' },
  { id: 'attempt', label: 'محاولات الاختبارات' },
  { id: 'progress', label: 'التقدم والإنجازات' },
  { id: 'badge', label: 'الشارات' },
] as const

export type ActivityFilterId = (typeof activityFilters)[number]['id']

export const activityGroups: ActivityGroup[] = [
  {
    id: 'today',
    label: 'اليوم',
    entries: [
      {
        id: 'a-1',
        kind: 'watched',
        title: 'تمت مشاهدة درس',
        subtitle: 'الوحدة 2 – التعلم الشخصي – مقدمة',
        href: '/subjects/machine-vision',
        time: 'قبل 5 دقائق',
      },
      {
        id: 'a-2',
        kind: 'chat',
        title: 'محادثة مع EduMentor AI',
        subtitle: 'سؤال حول الفرق بين CNN و RNN',
        href: '/assistant',
        time: 'قبل 3 ساعات',
      },
      {
        id: 'a-3',
        kind: 'quiz',
        title: 'اختبار قصير مكتمل',
        subtitle: 'الوحدة 2 – اختبار سريع',
        href: '/subjects/machine-vision',
        score: 'درجة 9/10',
        time: 'قبل 5 ساعات',
      },
    ],
  },
  {
    id: 'yesterday',
    label: 'أمس',
    entries: [
      {
        id: 'a-4',
        kind: 'attempt',
        title: 'محاولة اختبار',
        subtitle: 'اختبار منتصف الوحدة 2',
        score: 'درجة 18/20',
        time: '08:40 م',
      },
    ],
  },
  {
    id: 'two-days',
    label: 'قبل يومين',
    entries: [
      {
        id: 'a-5',
        kind: 'progress',
        title: 'تقدّم محقّق',
        subtitle: 'أكملت 70% من الوحدة 2',
        time: '04:15 م',
      },
      {
        id: 'a-6',
        kind: 'badge',
        title: 'شارة مكتسبة',
        subtitle: 'شهادة: متعلّم نشط',
        href: '/badges',
        time: '09:00 ص',
      },
    ],
  },
]

export const badges: Badge[] = [
  {
    id: 'b-1',
    title: 'متعلّم نشط',
    description: 'دخلت المنصة 7 أيام متتالية.',
    emoji: '🔥',
    tone: 'orange',
    earned: true,
    earnedAt: 'قبل يومين',
  },
  {
    id: 'b-2',
    title: 'إجابة كاملة',
    description: 'حصلت على الدرجة الكاملة في اختبار قصير.',
    emoji: '🎯',
    tone: 'green',
    earned: true,
    earnedAt: 'الأسبوع الماضي',
  },
  {
    id: 'b-3',
    title: 'باحث فضولي',
    description: 'سألت المساعد الذكي 25 سؤالًا.',
    emoji: '🧠',
    tone: 'violet',
    earned: true,
    earnedAt: 'قبل 3 أسابيع',
  },
  {
    id: 'b-4',
    title: 'ملتزم بالمواعيد',
    description: 'سلّمت 10 واجبات قبل الموعد النهائي.',
    emoji: '⏱️',
    tone: 'blue',
    earned: false,
    progress: 70,
  },
  {
    id: 'b-5',
    title: 'خبير الرؤية',
    description: 'أكمل جميع وحدات مقرر Machine Vision.',
    emoji: '👁️',
    tone: 'pink',
    earned: false,
    progress: 61,
  },
  {
    id: 'b-6',
    title: 'مسار مكتمل',
    description: 'أكمل مقررًا واحدًا بنسبة 100%.',
    emoji: '🏆',
    tone: 'teal',
    earned: false,
    progress: 55,
  },
]
