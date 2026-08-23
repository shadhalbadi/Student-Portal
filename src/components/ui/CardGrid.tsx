import type { ReactNode } from 'react'

const layouts = {
  /** كروت واسعة: المقررات والشارات */
  cards: 'grid gap-3.5 sm:grid-cols-2 xl:grid-cols-3',
  /** بلاطات مربّعة أصغر: أدوات الدليل التفاعلي */
  tiles: 'grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4',
}

/** شبكة الكروت الموحّدة — نفس نقاط الفصل في كل الصفحات (والسكيلتون). */
export function CardGrid({
  layout = 'cards',
  children,
}: {
  layout?: keyof typeof layouts
  children: ReactNode
}) {
  return <div className={layouts[layout]}>{children}</div>
}
