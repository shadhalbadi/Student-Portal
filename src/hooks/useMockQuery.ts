import { useEffect, useState } from 'react'
import { useDataState } from './dataState'

/** مدة التحميل المحاكاة (ms). */
const DELAY = 850

interface QueryResult<T> {
  data: T | undefined
  isLoading: boolean
}

/**
 * يحاكي جلب البيانات من API: تحميل قصير ثم النتيجة.
 * يحترم الحالة المختارة من أداة العرض (ready / loading / empty)
 * حتى نقدر نعرض الثلاث حالات بدون باك-إند.
 */
export function useMockQuery<T>(ready: T, empty: T): QueryResult<T> {
  const { mode } = useDataState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    if (mode === 'loading') return
    const timer = setTimeout(() => setIsLoading(false), DELAY)
    return () => clearTimeout(timer)
  }, [mode])

  if (isLoading) return { data: undefined, isLoading: true }
  return { data: mode === 'empty' ? empty : ready, isLoading: false }
}
