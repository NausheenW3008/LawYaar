import { useState } from 'react'
import { motion } from 'framer-motion'
import { SendHorizontal } from 'lucide-react'

function ChatInput({ onSend, disabled }) {
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const message = value.trim()
    if (!message || disabled) return

    onSend(message)
    setValue('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-white/60 bg-white/75 px-4 py-4 shadow-[0_-16px_40px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-end gap-3">
        <label className="flex min-h-12 flex-1 items-center rounded-2xl border border-slate-200 bg-white/90 px-4 py-2 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-100">
          <textarea
            value={value}
            onChange={(event) => setValue(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && !event.shiftKey) {
                handleSubmit(event)
              }
            }}
            rows={1}
            placeholder="Type your legal question..."
            className="max-h-32 min-h-8 w-full resize-none bg-transparent py-1 text-sm font-medium leading-6 text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
          />
        </label>

        <motion.button
          type="submit"
          disabled={disabled || !value.trim()}
          whileHover={!disabled && value.trim() ? { y: -2, scale: 1.02 } : undefined}
          whileTap={!disabled && value.trim() ? { scale: 0.97 } : undefined}
          className="group relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-900 to-indigo-700 text-white shadow-xl shadow-indigo-950/20 transition disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto sm:px-5"
          aria-label="Send message"
        >
          <span className="absolute inset-y-0 -left-10 w-12 rotate-12 bg-white/20 blur-sm transition duration-700 group-hover:left-full" />
          <SendHorizontal size={20} aria-hidden="true" />
          <span className="ml-2 hidden text-sm font-semibold sm:inline">Send</span>
        </motion.button>
      </div>
    </form>
  )
}

export default ChatInput
