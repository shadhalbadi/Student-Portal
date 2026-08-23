/** Shared domain model. Mock data and components both speak this language. */

export type Tone = 'blue' | 'violet' | 'orange' | 'pink' | 'green' | 'teal'

export type ItemStatus = 'completed' | 'available' | 'locked'

export interface Student {
  name: string
  role: string
  avatarInitial: string
}

export interface Stat {
  id: string
  label: string
  value: string
}

export interface UnitItem {
  id: string
  /** الوسم فوق العنوان — "مؤشر" / "الأنشطة" / "اختبار" */
  kicker: string
  title: string
  status: ItemStatus
  tone: Tone
  icon: 'video' | 'quiz' | 'activity' | 'reading' | 'star'
}

export interface Unit {
  id: string
  order: number
  title: string
  status: ItemStatus
  /** يظهر بجانب عنوان الوحدة المقفلة */
  lockNote?: string
  items: UnitItem[]
}

export interface Course {
  id: string
  code: string
  titleEn: string
  titleAr: string
  description: string
  instructor: string
  instructorTitle: string
  progress: number
  /** متطلبات إكمال المقرر */
  completionThreshold: number
  completionNote: string
  tone: Tone
  lessonsDone: number
  lessonsTotal: number
  units: Unit[]
}

export interface Task {
  id: string
  title: string
  dueLabel: string
  courseId: string
  icon: 'assignment' | 'quiz' | 'review'
  tone: Tone
}

export interface ContinueLearning {
  courseId: string
  courseTitle: string
  unitLabel: string
  progress: number
}

export interface DashboardData {
  student: Student
  stats: Stat[]
  continueLearning: ContinueLearning | null
  tasks: Task[]
}

/* ── الدليل التفاعلي ─────────────────────────────────────────────────── */
export interface GuideTool {
  id: string
  title: string
  metric: string
  emoji: string
  /** تدرّج الخلفية كما في الفيقما */
  gradient: string
}

/* ── المساعد الذكي ───────────────────────────────────────────────────── */
export interface ChatMessage {
  id: string
  author: 'bot' | 'student'
  text: string
  time: string
}

/* ── سجل النشاط ──────────────────────────────────────────────────────── */
export type ActivityKind = 'watched' | 'chat' | 'quiz' | 'attempt' | 'progress' | 'badge'

export interface ActivityEntry {
  id: string
  kind: ActivityKind
  title: string
  subtitle: string
  /** رابط داخلي على العنوان الفرعي إن كان يشير لمحتوى */
  href?: string
  score?: string
  time: string
}

export interface ActivityGroup {
  id: string
  label: string
  entries: ActivityEntry[]
}

/* ── الشارات ─────────────────────────────────────────────────────────── */
export interface Badge {
  id: string
  title: string
  description: string
  emoji: string
  tone: Tone
  earned: boolean
  earnedAt?: string
  /** تقدّم الشارة غير المكتسبة */
  progress?: number
}
