import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Award, Bell, BellOff, ClipboardList, Megaphone, Star } from 'lucide-react'
import { notifications as source } from '../../data/notificationsData'
import type { NotificationKind, Tone } from '../../types'
import { useLocale } from '../../i18n/LocaleProvider'
import { useDismissable } from '../../hooks/useDismissable'
import { EmptyState } from '../ui/EmptyState'
import { IconTile } from '../ui/IconTile'

const kindStyle: Record<NotificationKind, { Icon: typeof Bell; tone: Tone }> = {
  assignment: { Icon: ClipboardList, tone: 'blue' },
  grade: { Icon: Star, tone: 'green' },
  announcement: { Icon: Megaphone, tone: 'orange' },
  badge: { Icon: Award, tone: 'violet' },
}

/** زر الإشعارات + قائمته. النقطة الحمراء تعبّر عن عدد غير المقروء فعلاً. */
export function NotificationsMenu() {
  const { t, tx } = useLocale()
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(source)
  const ref = useDismissable(open, () => setOpen(false))

  const unread = items.filter((item) => !item.read).length
  const markAllRead = () => setItems((prev) => prev.map((item) => ({ ...item, read: true })))

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={
          unread > 0 ? t('notifications.unreadLabel', { count: unread }) : t('notifications.title')
        }
        className="relative grid size-9 place-items-center rounded-full text-white/80 transition-colors hover:bg-white/10"
      >
        <Bell size={18} />
        {unread > 0 && (
          <span className="absolute start-1.5 top-1 grid min-w-4 place-items-center rounded-full bg-rose-500 px-1 text-[10px] font-bold leading-4 text-white ring-2 ring-ink-900">
            {unread}
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className="absolute end-0 top-full z-50 mt-2 w-[min(20rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-xl"
        >
          <div className="flex items-center justify-between gap-2 border-b border-slate-200/70 px-3 py-2.5">
            <p className="text-sm font-bold text-ink-900">{t('notifications.title')}</p>
            {unread > 0 && (
              <button
                type="button"
                onClick={markAllRead}
                className="text-[11px] font-bold text-brand-700 hover:underline"
              >
                {t('notifications.markAllRead')}
              </button>
            )}
          </div>

          {items.length > 0 ? (
            <ul className="max-h-80 overflow-y-auto p-1.5">
              {items.map((item) => {
                const { Icon, tone } = kindStyle[item.kind]
                return (
                  <li key={item.id}>
                    <Link
                      to={item.href}
                      role="menuitem"
                      className={`flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-brand-50/60 ${
                        item.read ? '' : 'bg-brand-50/40'
                      }`}
                    >
                      <IconTile tone={tone} soft>
                        <Icon size={16} />
                      </IconTile>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-ink-900">{tx(item.title)}</p>
                        <p className="mt-0.5 text-[11px] leading-relaxed text-slate-500">
                          {tx(item.body)}
                        </p>
                        <p className="mt-1 text-[10px] text-slate-400">{tx(item.time)}</p>
                      </div>
                      {!item.read && (
                        <span className="mt-1 size-2 shrink-0 rounded-full bg-brand-600" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          ) : (
            <EmptyState
              compact
              icon={BellOff}
              title={t('notifications.emptyTitle')}
              description={t('notifications.emptyBody')}
            />
          )}
        </div>
      )}
    </div>
  )
}
