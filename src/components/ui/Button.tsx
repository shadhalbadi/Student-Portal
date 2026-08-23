import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'soft'

const variants: Record<Variant, string> = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800 shadow-sm',
  soft: 'bg-brand-50 text-brand-700 hover:bg-brand-100',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600'

interface ButtonLinkProps {
  to: string
  variant?: Variant
  className?: string
  children: ReactNode
}

export function ButtonLink({
  to,
  variant = 'primary',
  className = '',
  children,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  )
}

const textStyle =
  'inline-flex items-center gap-1 text-sm font-bold text-brand-700 hover:text-brand-800 hover:underline'

/** الرابط النصي البنفسجي أسفل الكروت — "عرض جميع المهام". */
export function TextLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className={textStyle}>
      {children}
    </Link>
  )
}

/** نفس شكل TextLink لكن كزر (لا ينقل لمسار) — "عرض المزيد من النشاط". */
export function TextButton({
  onClick,
  children,
}: {
  onClick?: () => void
  children: ReactNode
}) {
  return (
    <button type="button" onClick={onClick} className={textStyle}>
      {children}
    </button>
  )
}
