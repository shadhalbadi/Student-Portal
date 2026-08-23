import type { Tone } from '../types'

/** خرائط الألوان المستخرجة من الفيقما — مصدر واحد لكل نغمة لون. */

/** مربّع ملوّن بخلفية صريحة (أيقونات الوحدات وكروت المقررات). */
export const toneSolid: Record<Tone, string> = {
  blue: 'bg-[#2563eb] text-white',
  violet: 'bg-brand-600 text-white',
  orange: 'bg-[#f97316] text-white',
  pink: 'bg-[#db2777] text-white',
  green: 'bg-[#16a34a] text-white',
  teal: 'bg-[#0d9488] text-white',
}

/** النسخة الناعمة (خلفية فاتحة) المستخدمة في المهام وسجل النشاط. */
export const toneSoft: Record<Tone, string> = {
  blue: 'bg-blue-50 text-blue-600',
  violet: 'bg-brand-50 text-brand-600',
  orange: 'bg-orange-50 text-orange-500',
  pink: 'bg-pink-50 text-pink-500',
  green: 'bg-green-50 text-green-600',
  teal: 'bg-teal-50 text-teal-600',
}

/** لون شريط التقدم. */
export const toneBar: Record<Tone, string> = {
  blue: 'bg-[#2563eb]',
  violet: 'bg-brand-600',
  orange: 'bg-[#f97316]',
  pink: 'bg-[#db2777]',
  green: 'bg-[#16a34a]',
  teal: 'bg-[#0d9488]',
}
