import { Award, CheckCircle2, Eye, FileText, MessageSquare, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ActivityEntry, ActivityKind, Tone } from '../../types'
import { IconTile } from '../ui/IconTile'

const kindStyle: Record<ActivityKind, { Icon: typeof Eye; tone: Tone; soft: boolean }> = {
  watched: { Icon: Eye, tone: 'violet', soft: true },
  chat: { Icon: MessageSquare, tone: 'pink', soft: true },
  quiz: { Icon: CheckCircle2, tone: 'green', soft: false },
  attempt: { Icon: FileText, tone: 'pink', soft: false },
  progress: { Icon: TrendingUp, tone: 'teal', soft: true },
  badge: { Icon: Award, tone: 'orange', soft: true },
}

/** الدرجة والوقت — تنزل تحت النص على الموبايل وتبقى في الطرف على الشاشات الأوسع. */
function Meta({ entry }: { entry: ActivityEntry }) {
  return (
    <>
      {entry.score && (
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
          {entry.score}
        </span>
      )}
      <span className="text-[11px] whitespace-nowrap text-slate-400">{entry.time}</span>
    </>
  )
}

export function ActivityRow({ entry }: { entry: ActivityEntry }) {
  const { Icon, tone, soft } = kindStyle[entry.kind]

  return (
    <li className="flex items-start gap-3 rounded-2xl border border-slate-200/70 p-3">
      <IconTile tone={tone} soft={soft}>
        <Icon size={18} />
      </IconTile>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-ink-900">{entry.title}</p>
        {entry.href ? (
          <Link
            to={entry.href}
            className="mt-0.5 block text-xs font-semibold text-accent-600 hover:underline sm:truncate"
          >
            {entry.subtitle}
          </Link>
        ) : (
          <p className="mt-0.5 text-xs text-slate-400 sm:truncate">{entry.subtitle}</p>
        )}

        {/* الموبايل: الدرجة والوقت تحت النص بدل إخفائهما */}
        <div className="mt-2 flex flex-wrap items-center gap-2 sm:hidden">
          <Meta entry={entry} />
        </div>
      </div>

      <div className="hidden shrink-0 items-center gap-2 self-center sm:flex">
        <Meta entry={entry} />
      </div>
    </li>
  )
}
