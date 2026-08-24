import type { ChatSeed } from '../types'
import type { Localized } from '../i18n/locale'

export const chatSuggestions: Localized[] = [
  { ar: 'اشرح لي التعلم الشخصي', en: 'Explain personalised learning' },
  { ar: 'ما الفرق بين CNN و RNN؟', en: 'What is the difference between CNN and RNN?' },
  { ar: 'حل تمرين PAG السابقة', en: 'Solve the previous PAG exercise' },
  { ar: 'لخّص لي الوحدة 2', en: 'Summarise unit 2 for me' },
]

export const chatThread: ChatSeed[] = [
  {
    id: 'm-1',
    author: 'bot',
    text: {
      ar: 'مرحباً سلطان! 👋 أنا هنا لمساعدتك في فهم المواد وحل مشكلاتك الدراسية.',
      en: "Hi Sultan! 👋 I'm here to help you understand your courses and work through problems.",
    },
    time: '09:12',
  },
  {
    id: 'm-2',
    author: 'student',
    text: {
      ar: 'ما الفرق بين CNN و RNN؟',
      en: 'What is the difference between CNN and RNN?',
    },
    time: '09:13',
  },
  {
    id: 'm-3',
    author: 'bot',
    text: {
      ar: 'الـCNN يمتاز في البيانات ذات البنية المكانية مثل الصور لأنه يستخرج الأنماط المحلية عبر الفلاتر، أما الـRNN فمصمم للبيانات المتسلسلة مثل النصوص والإشارات الزمنية لأنه يحمل حالة داخلية بين الخطوات.',
      en: 'A CNN excels at spatially structured data such as images because it extracts local patterns through filters, while an RNN is built for sequential data like text and time signals because it carries hidden state between steps.',
    },
    time: '09:13',
  },
]

/** رد جاهز يُستخدم عند إرسال رسالة — لا يوجد باك-إند في هذا التاسك. */
export const cannedReply: Localized = {
  ar: 'سؤال ممتاز! راجع الوحدة 2 من مقرر Machine Vision، وفيها مثال عملي يوضّح الفكرة خطوة بخطوة. تحتاج ألخّص لك المثال؟',
  en: 'Great question! Check unit 2 of Machine Vision — it has a worked example that walks through the idea step by step. Want me to summarise it?',
}

export const assistantDisclaimer: Localized = {
  ar: 'قد يخطئ الذكاء الاصطناعي. تحقّق من المعلومات المهمة.',
  en: 'AI can make mistakes. Verify important information.',
}
