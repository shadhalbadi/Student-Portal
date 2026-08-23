import type { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

/** الكرت الأساسي: أبيض، حدود رقيقة، زوايا 20px — نفس كروت الفيقما. */
export function Card({ children, className = '' }: CardProps) {
  return <div className={`card ${className}`}>{children}</div>
}

/**
 * قسم بعنوان داخل كرت (مثل "مواصلة التعلم" و"المهام القادمة").
 * ما يرسم خلفية بنفسه حتى نقدر نضم أكثر من قسم في كرت واحد كما في الفيقما.
 */
export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="mb-3.5 text-base font-bold text-ink-900 sm:text-lg">{title}</h2>
      {children}
    </section>
  )
}
