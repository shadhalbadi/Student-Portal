import {
  Award,
  BookOpen,
  Bot,
  History,
  LayoutDashboard,
  Sparkles,
  UserRound,
  type LucideIcon,
} from 'lucide-react'
import type { TranslationKey } from '../i18n/ar'

interface NavItem {
  to: string
  labelKey: TranslationKey
  icon: LucideIcon
}

/** مصدر واحد للتنقّل — يستخدمه السايدبار ودرَج الموبايل وعنوان الشريط العلوي. */
export const navItems: NavItem[] = [
  { to: '/', labelKey: 'nav.dashboard', icon: LayoutDashboard },
  { to: '/subjects', labelKey: 'nav.subjects', icon: BookOpen },
  { to: '/guide', labelKey: 'nav.guide', icon: Sparkles },
  { to: '/assistant', labelKey: 'nav.assistant', icon: Bot },
  { to: '/activity', labelKey: 'nav.activity', icon: History },
  { to: '/badges', labelKey: 'nav.badges', icon: Award },
  { to: '/profile', labelKey: 'nav.profile', icon: UserRound },
]
