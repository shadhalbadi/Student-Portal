import type { Tone } from '../../types'
import { toneBar } from '../../lib/tones'

interface ProgressBarProps {
  value: number
  tone?: Tone
  /** تظهر النسبة على يمين الشريط كما في الفيقما */
  showValue?: boolean
  className?: string
}

export function ProgressBar({
  value,
  tone = 'violet',
  showValue = false,
  className = '',
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value))

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {showValue && (
        <span className="min-w-11 text-sm font-bold text-ink-900">{clamped}%</span>
      )}
      <div
        className="h-2 flex-1 overflow-hidden rounded-full bg-slate-200/80"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-500 ${toneBar[tone]}`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  )
}
