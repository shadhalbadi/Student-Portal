import { Play } from 'lucide-react'
import type { GuideTool } from '../../types'
import { Skeleton } from '../ui/Skeleton'

/** بلاطة ملوّنة بتدرّج — أيقونة تشغيل أعلى، إيموجي، ثم العنوان والرقم. */
export function GuideToolCard({ tool }: { tool: GuideTool }) {
  return (
    <button
      type="button"
      className={`group flex flex-col items-center justify-between gap-4 rounded-card bg-gradient-to-b ${tool.gradient} p-4 text-center text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 sm:p-5`}
    >
      <span className="grid size-9 place-items-center rounded-full bg-white/25 transition-colors group-hover:bg-white/35">
        <Play size={15} className="translate-x-px fill-white" />
      </span>
      <span className="text-3xl leading-none" aria-hidden>
        {tool.emoji}
      </span>
      <span>
        <span className="block text-sm font-bold">{tool.title}</span>
        <span className="ltr mt-1 block text-xs font-bold text-white/80">{tool.metric}</span>
      </span>
    </button>
  )
}

export function GuideToolCardSkeleton() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-card bg-slate-100 p-5">
      <Skeleton className="size-9 rounded-full" />
      <Skeleton className="size-8 rounded-lg" />
      <Skeleton className="h-4 w-20" />
      <Skeleton className="h-3 w-10" />
    </div>
  )
}
