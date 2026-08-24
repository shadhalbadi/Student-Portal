import type { AppNotification } from '../types'

export const notifications: AppNotification[] = [
  {
    id: 'n-1',
    kind: 'assignment',
    title: {
      ar: 'واجب جديد في Machine Vision',
      en: 'New assignment in Machine Vision',
    },
    body: {
      ar: 'تصنيف الصور — الفصل 4، يُسلَّم غدًا الساعة 11:59 م.',
      en: 'Image classification — Ch. 4, due tomorrow at 11:59 PM.',
    },
    time: { ar: 'قبل 12 دقيقة', en: '12 minutes ago' },
    read: false,
    href: '/subjects/machine-vision',
  },
  {
    id: 'n-2',
    kind: 'grade',
    title: { ar: 'ظهرت درجة الاختبار القصير', en: 'Your quiz grade is out' },
    body: {
      ar: 'الوحدة 2 — اختبار سريع: 9 من 10.',
      en: 'Unit 2 — quick quiz: 9 out of 10.',
    },
    time: { ar: 'قبل 5 ساعات', en: '5 hours ago' },
    read: false,
    href: '/activity',
  },
  {
    id: 'n-3',
    kind: 'badge',
    title: { ar: 'اكتسبت شارة جديدة', en: 'You earned a new badge' },
    body: {
      ar: 'شارة "متعلّم نشط" بعد 7 أيام دخول متتالية.',
      en: '"Active learner" badge after a 7-day streak.',
    },
    time: { ar: 'أمس', en: 'Yesterday' },
    read: false,
    href: '/badges',
  },
  {
    id: 'n-4',
    kind: 'announcement',
    title: { ar: 'إعلان من أستاذ المقرر', en: 'Announcement from your instructor' },
    body: {
      ar: 'محاضرة الأسبوع القادم تُعقد عن بُعد.',
      en: "Next week's lecture will be held online.",
    },
    time: { ar: 'قبل يومين', en: '2 days ago' },
    read: true,
    href: '/subjects/machine-vision',
  },
]
