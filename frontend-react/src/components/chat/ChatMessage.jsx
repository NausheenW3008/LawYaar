import { motion } from 'framer-motion'
import { AlertTriangle, Bot, UserRound } from 'lucide-react'

function formatTime(date) {
  return new Intl.DateTimeFormat('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
  }).format(date)
}

function ChatMessage({ message }) {
  const isUser = message.sender === 'user'
  const isError = message.type === 'error'
  const Icon = isError ? AlertTriangle : isUser ? UserRound : Bot

  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      {!isUser && (
        <div
          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl shadow-sm ${
            isError
              ? 'bg-red-50 text-red-700 ring-1 ring-red-100'
              : 'bg-gradient-to-br from-blue-950 to-indigo-700 text-white'
          }`}
        >
          <Icon size={18} aria-hidden="true" />
        </div>
      )}

      <div className={`max-w-[82%] sm:max-w-[70%] ${isUser ? 'items-end' : 'items-start'}`}>
        <div
          className={`rounded-[1.35rem] px-4 py-3 shadow-lg ${
            isUser
              ? 'rounded-tr-md bg-gradient-to-r from-blue-950 via-indigo-900 to-indigo-700 text-white shadow-indigo-950/20'
              : isError
                ? 'rounded-tl-md border border-red-100 bg-red-50 text-red-700 shadow-red-950/5'
                : 'rounded-tl-md border border-white/80 bg-white/90 text-slate-700 shadow-indigo-950/5 backdrop-blur'
          }`}
        >
          <p className="whitespace-pre-wrap text-sm leading-6 sm:text-[15px]">
            {message.text}
          </p>
        </div>
        <p
          className={`mt-1.5 text-[11px] font-medium text-slate-400 ${
            isUser ? 'text-right' : 'text-left'
          }`}
        >
          {formatTime(message.createdAt)}
        </p>
      </div>

      {isUser && (
        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-white text-indigo-700 shadow-sm ring-1 ring-indigo-100">
          <Icon size={18} aria-hidden="true" />
        </div>
      )}
    </motion.div>
  )
}

export default ChatMessage
