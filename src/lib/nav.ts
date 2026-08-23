import {
  Award,
  BookOpen,
  Bot,
  History,
  LayoutDashboard,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

interface NavItem {
  to: string
  label: string
  icon: LucideIcon
}

/** مصدر واحد للتنقّل — يستخدمه السايدبار ودرَج الموبايل وعنوان الشريط العلوي. */
export const navItems: NavItem[] = [
  { to: '/', label: 'لوحة الطالب', icon: LayoutDashboard },
  { to: '/subjects', label: 'المقررات', icon: BookOpen },
  { to: '/guide', label: 'الدليل التفاعلي', icon: Sparkles },
  { to: '/assistant', label: 'المساعد الذكي', icon: Bot },
  { to: '/activity', label: 'سجل النشاط', icon: History },
  { to: '/badges', label: 'الشارات', icon: Award },
]
