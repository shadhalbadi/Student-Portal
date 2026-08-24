import type { GuideTool } from '../types'
import type { Localized } from '../i18n/locale'

export const guideIntro: { title: Localized; description: Localized } = {
  title: { ar: 'الدليل التفاعلي', en: 'Interactive guide' },
  description: {
    ar: 'اختر أي خيار لتبدء رحلتك في التعلم باستخدام المحتوى التفاعلي والمساعد الذكي والأدوات المتاحة.',
    en: 'Pick any option to start learning with interactive content, the AI assistant and the available tools.',
  },
}

export const guideTools: GuideTool[] = [
  {
    id: 'lessons',
    title: { ar: 'ملخّصات', en: 'Summaries' },
    metric: '9/9',
    emoji: '📊',
    gradient: 'from-[#16a34a] to-[#15803d]',
  },
  {
    id: 'self-test',
    title: { ar: 'اختبر نفسك', en: 'Test yourself' },
    metric: '24',
    emoji: '🧠',
    gradient: 'from-[#7c3aed] to-[#6d28d9]',
  },
  {
    id: 'activities',
    title: { ar: 'أنشطة تفاعلية', en: 'Interactive activities' },
    metric: '+12',
    emoji: '📝',
    gradient: 'from-[#e11d48] to-[#be123c]',
  },
  {
    id: 'library',
    title: { ar: 'مكتبة الموارد', en: 'Resource library' },
    metric: '+120',
    emoji: '📄',
    gradient: 'from-[#4f46e5] to-[#4338ca]',
  },
  {
    id: 'tips',
    title: { ar: 'إرشادات سريعة', en: 'Quick tips' },
    metric: '8/10',
    emoji: '🐣',
    gradient: 'from-[#2563eb] to-[#1d4ed8]',
  },
  {
    id: 'time',
    title: { ar: 'التعلم عبر الوقت', en: 'Learning over time' },
    metric: '4/6',
    emoji: '🗓️',
    gradient: 'from-[#f97316] to-[#ea580c]',
  },
]
