import type { ChatMessage } from '../../types'
import { Skeleton } from '../ui/Skeleton'

/** فقاعة رسالة — البوت رمادية على اليمين، الطالب بنفسجية على اليسار. */
export function ChatBubble({ message }: { message: ChatMessage }) {
  const isBot = message.author === 'bot'
  return (
    <li className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}>
      <div className="max-w-[85%] sm:max-w-[70%]">
        <div
          className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
            isBot
              ? 'bg-slate-50 text-ink-800 ring-1 ring-slate-200/70'
              : 'bg-brand-700 text-white'
          }`}
        >
          {message.text}
        </div>
        <p
          className={`mt-1 text-[10px] text-slate-400 ${isBot ? "text-start" : "text-end"}`}
        >
          {message.time}
        </p>
      </div>
    </li>
  )
}

/** مؤشّر "يكتب الآن" أثناء انتظار رد المساعد. */
export function TypingBubble() {
  return (
    <li className="flex justify-start">
      <div className="flex items-center gap-1.5 rounded-2xl bg-slate-50 px-4 py-3.5 ring-1 ring-slate-200/70">
        {[0, 150, 300].map((delay) => (
          <span
            key={delay}
            className="size-1.5 animate-bounce rounded-full bg-brand-400"
            style={{ animationDelay: `${delay}ms` }}
          />
        ))}
      </div>
    </li>
  )
}

export function ChatSkeleton() {
  return (
    <ul className="space-y-4">
      <li className="flex justify-start">
        <Skeleton className="h-16 w-3/5 rounded-2xl" />
      </li>
      <li className="flex justify-end">
        <Skeleton className="h-10 w-2/5 rounded-2xl" />
      </li>
      <li className="flex justify-start">
        <Skeleton className="h-20 w-3/4 rounded-2xl" />
      </li>
    </ul>
  )
}
