import { createContext, useContext, useState, type ReactNode } from 'react'

/**
 * حالة عرض البيانات على مستوى التطبيق.
 * `ready`   → بيانات كاملة (الافتراضي)
 * `loading` → تُجمّد كل الشاشات على Skeleton لعرض حالة التحميل
 * `empty`   → تُعاد نفس الاستعلامات ببيانات فاضية لعرض حالة Empty State
 *
 * في تطبيق حقيقي هذه الحالات تجي من طبقة الـAPI (React Query / SWR)؛
 * هنا نتحكم فيها يدويًا لأن الداتا mock.
 */
export type DataMode = 'ready' | 'loading' | 'empty'

interface DataStateValue {
  mode: DataMode
  setMode: (mode: DataMode) => void
}

const DataStateContext = createContext<DataStateValue | null>(null)

export function DataStateProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<DataMode>('ready')
  return (
    <DataStateContext.Provider value={{ mode, setMode }}>{children}</DataStateContext.Provider>
  )
}

export function useDataState(): DataStateValue {
  const ctx = useContext(DataStateContext)
  if (!ctx) throw new Error('useDataState must be used inside <DataStateProvider>')
  return ctx
}
