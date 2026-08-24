import type { TranslationKey } from './i18n/ar'
import type { Localized } from './i18n/locale'

/**
 * الموديل المشترك.
 * قاعدة: النصوص التي يكتبها "النظام" (تسميات الواجهة) تُخزَّن كمفتاح ترجمة
 * `TranslationKey`، والنصوص التي تمثّل "محتوى" (اسم مقرر، نص رسالة) تُخزَّن
 * كـ`Localized` أي نسخة لكل لغة.
 */

export type Tone = 'blue' | 'violet' | 'orange' | 'pink' | 'green' | 'teal'

export type ItemStatus = 'completed' | 'available' | 'locked'

export interface Student {
  name: Localized
  fullName: Localized
  role: Localized
  avatarInitial: Localized
  studentId: string
  email: string
  college: Localized
  major: Localized
  level: Localized
  advisor: Localized
  joinedAt: Localized
}

export interface Stat {
  id: string
  labelKey: TranslationKey
  value: string
}

export interface UnitItem {
  id: string
  /** الوسم فوق العنوان — "مؤشر" / "الأنشطة" / "اختبار" */
  kicker: Localized
  title: Localized
  status: ItemStatus
  tone: Tone
  icon: 'video' | 'quiz' | 'activity' | 'reading' | 'star'
}

export interface Unit {
  id: string
  order: number
  title: Localized
  status: ItemStatus
  /** يظهر بجانب عنوان الوحدة المقفلة */
  lockNote?: Localized
  items: UnitItem[]
}

export interface Course {
  id: string
  code: string
  /** الاسم اللاتيني الرسمي للمقرر — لا يُترجم */
  titleLatin: string
  title: Localized
  description: Localized
  instructor: Localized
  instructorTitle: Localized
  progress: number
  /** متطلبات إكمال المقرر */
  completionThreshold: number
  completionNote: Localized
  tone: Tone
  lessonsDone: number
  lessonsTotal: number
  units: Unit[]
}

export interface Task {
  id: string
  title: Localized
  dueLabel: Localized
  courseId: string
  icon: 'assignment' | 'quiz' | 'review'
  tone: Tone
}

export interface ContinueLearning {
  courseId: string
  /** الاسم اللاتيني — يُعرض كما هو في اللغتين */
  courseTitle: string
  unitLabel: Localized
  progress: number
}

export interface DashboardData {
  student: Student
  stats: Stat[]
  continueLearning: ContinueLearning | null
  tasks: Task[]
}

/** سطر معلومة في الملف الشخصي. */
export interface ProfileField {
  id: string
  labelKey: TranslationKey
  value: Localized
}

/* ── الدليل التفاعلي ─────────────────────────────────────────────────── */
export interface GuideTool {
  id: string
  title: Localized
  metric: string
  emoji: string
  /** تدرّج الخلفية كما في الفيقما */
  gradient: string
}

/* ── المساعد الذكي ───────────────────────────────────────────────────── */
export type ChatAuthor = 'bot' | 'student'

/** رسالة معروضة — نصها بعد الترجمة (أو ما كتبه الطالب). */
export interface ChatMessage {
  id: string
  author: ChatAuthor
  text: string
  time: string
}

/** رسالة في الـmock data قبل اختيار اللغة. */
export interface ChatSeed {
  id: string
  author: ChatAuthor
  text: Localized
  time: string
}

/* ── سجل النشاط ──────────────────────────────────────────────────────── */
export type ActivityKind = 'watched' | 'chat' | 'quiz' | 'attempt' | 'progress' | 'badge'

export interface ActivityEntry {
  id: string
  kind: ActivityKind
  title: Localized
  subtitle: Localized
  /** رابط داخلي على العنوان الفرعي إن كان يشير لمحتوى */
  href?: string
  score?: Localized
  time: Localized
}

export interface ActivityGroup {
  id: string
  label: Localized
  entries: ActivityEntry[]
}

/* ── الشارات ─────────────────────────────────────────────────────────── */
export interface Badge {
  id: string
  title: Localized
  description: Localized
  emoji: string
  tone: Tone
  earned: boolean
  earnedAt?: Localized
  /** تقدّم الشارة غير المكتسبة */
  progress?: number
}

/* ── الإشعارات ───────────────────────────────────────────────────────── */
export type NotificationKind = 'assignment' | 'grade' | 'announcement' | 'badge'

export interface AppNotification {
  id: string
  kind: NotificationKind
  title: Localized
  body: Localized
  time: Localized
  read: boolean
  /** المسار الذي يفتحه الإشعار */
  href: string
}
