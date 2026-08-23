import type { ReactNode } from 'react'
import type { Tone } from '../../types'
import { toneSoft, toneSolid } from '../../lib/tones'

interface IconTileProps {
  tone: Tone
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
  /** الشكل الناعم (خلفية فاتحة) المستخدم في المهام القادمة */
  soft?: boolean
  className?: string
}

const sizes = {
  sm: 'size-8 rounded-lg',
  md: 'size-10 rounded-xl',
  lg: 'size-12 rounded-2xl',
}

/** المربع الملوّن اللي يحمل أيقونة — يتكرر في الوحدات والمهام وكروت المقررات. */
export function IconTile({
  tone,
  children,
  size = 'md',
  soft = false,
  className = '',
}: IconTileProps) {
  const palette = soft ? toneSoft[tone] : toneSolid[tone]
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center ${sizes[size]} ${palette} ${className}`}
    >
      {children}
    </span>
  )
}
