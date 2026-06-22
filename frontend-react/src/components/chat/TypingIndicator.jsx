import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'

const dotTransition = {
  duration: 0.65,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
}

function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      className="flex items-start gap-3"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-950 to-indigo-700 text-white">
        <Bot size={18} aria-hidden="true" />
      </div>
      <div className="rounded-[1.35rem] rounded-tl-md border border-white/80 bg-white/90 px-4 py-3 shadow-lg shadow-indigo-950/5 backdrop-blur">
        <div className="mb-1 text-xs font-semibold text-slate-500">
          LawYaar is typing
        </div>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((dot) => (
            <motion.span
              key={dot}
              animate={{ y: [0, -4, 0], opacity: [0.45, 1, 0.45] }}
              transition={{ ...dotTransition, delay: dot * 0.12 }}
              className="h-2 w-2 rounded-full bg-indigo-600"
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default TypingIndicator
