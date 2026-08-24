interface SkeletonProps {
  className?: string
}

/** مستطيل رمادي متحرك — الوحدة الأساسية لكل حالات التحميل. */
export function Skeleton({ className = '' }: SkeletonProps) {
  return <div className={`skeleton rounded-md ${className}`} aria-hidden />
}

/**
 * سكيلتون صف قائمة (أيقونة + سطرين) — مشترك بين المهام وسجل النشاط
 * وأي قائمة تتبع نفس التخطيط.
 */
export function ListRowSkeleton({ trailing }: { trailing?: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-slate-200/70 p-3">
      <Skeleton className="size-10 rounded-xl" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-24" />
      </div>
      {trailing}
    </li>
  )
}

/** غلاف يعلن للقارئ الصوتي أن المحتوى قيد التحميل. */
export function SkeletonBlock({
  children,
  label,
}: {
  children: React.ReactNode
  /** نص للقارئ الصوتي — يُترجم في الصفحة المستدعية */
  label: string
}) {
  return (
    <div role="status" aria-busy="true" aria-live="polite">
      <span className="sr-only">{label}</span>
      {children}
    </div>
  )
}
