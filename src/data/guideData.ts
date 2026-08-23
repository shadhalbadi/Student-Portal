import type { GuideTool } from '../types'

export const guideIntro = {
  title: 'الدليل التفاعلي',
  description:
    'اختر أي خيار لتبدء رحلتك في التعلم باستخدام المحتوى التفاعلي والمساعد الذكي والأدوات المتاحة.',
}

export const guideTools: GuideTool[] = [
  {
    id: 'lessons',
    title: 'ملخّصات',
    metric: '9/9',
    emoji: '📊',
    gradient: 'from-[#16a34a] to-[#15803d]',
  },
  {
    id: 'self-test',
    title: 'اختبر نفسك',
    metric: '24',
    emoji: '🧠',
    gradient: 'from-[#7c3aed] to-[#6d28d9]',
  },
  {
    id: 'activities',
    title: 'أنشطة تفاعلية',
    metric: '+12',
    emoji: '📝',
    gradient: 'from-[#e11d48] to-[#be123c]',
  },
  {
    id: 'library',
    title: 'مكتبة الموارد',
    metric: '+120',
    emoji: '📄',
    gradient: 'from-[#4f46e5] to-[#4338ca]',
  },
  {
    id: 'tips',
    title: 'إرشادات سريعة',
    metric: '8/10',
    emoji: '🐣',
    gradient: 'from-[#2563eb] to-[#1d4ed8]',
  },
  {
    id: 'time',
    title: 'التعلم عبر الوقت',
    metric: '4/6',
    emoji: '🗓️',
    gradient: 'from-[#f97316] to-[#ea580c]',
  },
]
