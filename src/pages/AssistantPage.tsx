import { useEffect, useRef, useState } from 'react'
import { Bot, MessageSquarePlus, Minus, Send, X } from 'lucide-react'
import {
  assistantDisclaimer,
  cannedReply,
  chatSuggestions,
  chatThread,
} from '../data/assistantData'
import { useMockQuery } from '../hooks/useMockQuery'
import type { ChatMessage } from '../types'
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
  const { data, isLoading } = useMockQuery<ChatMessage[]>(chatThread, [])
  const [local, setLocal] = useState<ChatMessage[]>([])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  const messages = [...(data ?? []), ...local]

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
      setLocal((prev) => [...prev, { id: nextId(), author: 'bot', text: cannedReply, time: clock() }])
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
          <button type="button" className="text-white/60 hover:text-white" aria-label="تصغير">
            <Minus size={16} />
          </button>
          <button type="button" className="text-white/60 hover:text-white" aria-label="إغلاق">
            <X size={16} />
          </button>
        </div>
      </div>

      {/* المحادثة */}
      <div className="h-[46vh] min-h-[280px] overflow-y-auto p-4 sm:h-[52vh]">
        {isLoading ? (
          <SkeletonBlock label="جارٍ تحميل المحادثة">
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
            title="ابدأ محادثة جديدة"
            description="اسأل عن أي درس أو مفهوم في مقرراتك، واختر أحد الاقتراحات بالأسفل للبدء."
          />
        )}
        <div ref={endRef} />
      </div>

      {/* الاقتراحات */}
      {!isLoading && (
        <div className="flex flex-wrap gap-2 border-t border-slate-200/70 px-4 pt-3">
          {chatSuggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => send(suggestion)}
              className="rounded-xl border border-brand-200 px-3 py-2 text-xs font-bold text-brand-700 transition-colors hover:bg-brand-50"
            >
              {suggestion}
            </button>
          ))}
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
          placeholder="اكتب سؤالك هنا..."
          className="h-11 flex-1 rounded-full border border-slate-200 px-4 text-sm outline-none transition-colors focus:border-brand-400"
        />
        <button
          type="submit"
          disabled={!draft.trim()}
          className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-700 text-white transition-colors hover:bg-brand-800 disabled:opacity-40"
          aria-label="إرسال"
        >
          <Send size={17} className="-scale-x-100" />
        </button>
      </form>
      <p className="pb-4 text-center text-[11px] text-slate-400">{assistantDisclaimer}</p>
    </Card>
  )
}
