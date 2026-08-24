import { useEffect, useMemo, useRef, useState } from 'react'
import { Bot, MessageSquarePlus, Minus, Send, X } from 'lucide-react'
import {
  assistantDisclaimer,
  cannedReply,
  chatSuggestions,
  chatThread,
} from '../data/assistantData'
import { useMockQuery } from '../hooks/useMockQuery'
import { useLocale } from '../i18n/LocaleProvider'
import type { ChatMessage, ChatSeed } from '../types'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { SkeletonBlock } from '../components/ui/Skeleton'
import { ChatBubble, ChatSkeleton, TypingBubble } from '../components/assistant/ChatBubble'

let messageSeq = 0
const nextId = () => `local-${++messageSeq}`
const clock = () =>
  new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })

/** المساعد الذكي — نافذة محادثة (شاشة AI Chat في الفيقما) بردود mock محلية. */
export function AssistantPage() {
  const { t, tx, dir } = useLocale()
  const { data: seed, isLoading } = useMockQuery<ChatSeed[]>(chatThread, [])
  const [local, setLocal] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  // رسائل الـmock تُترجم عند العرض؛ رسائل الطالب تبقى كما كتبها
  const messages = useMemo<ChatMessage[]>(
    () => [...(seed ?? []).map((item) => ({ ...item, text: tx(item.text) })), ...local],
    [seed, local, tx],
  )

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages.length, typing])

  const send = (text: string) => {
    const value = text.trim()
    if (!value) return
    setLocal((prev) => [...prev, { id: nextId(), author: 'student', text: value, time: clock() }])
    setDraft('')
    setTyping(true)
    setTimeout(() => {
      setLocal((prev) => [
        ...prev,
        { id: nextId(), author: 'bot', text: tx(cannedReply), time: clock() },
      ])
      setTyping(false)
    }, 900)
  }

  return (
    <Card className="overflow-hidden">
      {/* ترويسة النافذة */}
      <div className="flex items-center gap-3 bg-[#241a63] px-4 py-3 text-white">
        <span className="grid size-8 place-items-center rounded-full bg-white/15">
          <Bot size={17} />
        </span>
        <p className="ltr text-sm font-bold">EduMentor AI</p>
        <div className="ms-auto flex items-center gap-3">
          <button
            type="button"
            className="text-white/60 hover:text-white"
            aria-label={t('assistant.minimize')}
          >
            <Minus size={16} />
          </button>
          <button
            type="button"
            className="text-white/60 hover:text-white"
            aria-label={t('assistant.close')}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* المحادثة */}
      <div className="h-[46vh] min-h-[280px] overflow-y-auto p-4 sm:h-[52vh]">
        {isLoading ? (
          <SkeletonBlock label={t('assistant.loading')}>
            <ChatSkeleton />
          </SkeletonBlock>
        ) : messages.length > 0 ? (
          <ul className="space-y-4">
            {messages.map((message) => (
              <ChatBubble key={message.id} message={message} />
            ))}
            {typing && <TypingBubble />}
          </ul>
        ) : (
          <EmptyState
            icon={MessageSquarePlus}
            title={t('assistant.emptyTitle')}
            description={t('assistant.emptyBody')}
          />
        )}
        <div ref={endRef} />
      </div>

      {/* الاقتراحات */}
      {!isLoading && (
        <div className="flex flex-wrap gap-2 border-t border-slate-200/70 px-4 pt-3">
          {chatSuggestions.map((suggestion) => {
            const label = tx(suggestion)
            return (
              <button
                key={label}
                type="button"
                onClick={() => send(label)}
                className="rounded-xl border border-brand-200 px-3 py-2 text-xs font-bold text-brand-700 transition-colors hover:bg-brand-50"
              >
                {label}
              </button>
            )
          })}
        </div>
      )}

      {/* صندوق الإرسال */}
      <form
        onSubmit={(e) => {
          e.preventDefault()
          send(draft)
        }}
        className="flex items-center gap-3 p-4"
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder={t('assistant.inputPlaceholder')}
          className="h-11 flex-1 rounded-full border border-slate-200 px-4 text-sm outline-none transition-colors focus:border-brand-400"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-700 text-white transition-colors hover:bg-brand-800 disabled:opacity-40"
          aria-label={t('assistant.send')}
        >
          {/* أيقونة الطائرة تُقلب في RTL حتى تشير لجهة الإرسال */}
          <Send size={17} className={dir === 'rtl' ? '-scale-x-100' : ''} />
        </button>
      </form>
      <p className="pb-4 text-center text-[11px] text-slate-400">{tx(assistantDisclaimer)}</p>
    </Card>
  )
}
