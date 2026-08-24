import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * منطق إغلاق القوائم المنسدلة — مشترك بين قائمة المستخدم والإشعارات:
 * ضغطة خارج العنصر، أو زر Escape، أو الانتقال لصفحة ثانية.
 * يرجّع ref يُربط بالحاوية الخارجية للقائمة.
 */
export function useDismissable(open: boolean, close: () => void) {
  const ref = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    close()
    // eslint-disable-next-line react-hooks/exhaustive-deps -- يُقفل عند تغيير المسار فقط
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && close()
    const onPointer = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) close()
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onPointer)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onPointer)
    }
  }, [open, close])

  return ref
}
