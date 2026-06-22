import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Bot, ShieldCheck, Sparkles } from 'lucide-react'
import { ROUTES } from '../../constants/routes'

function ChatHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="border-b border-white/50 bg-white/75 px-4 py-4 shadow-sm shadow-slate-950/5 backdrop-blur-xl sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Link
            to={ROUTES.home}
            className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:-translate-x-0.5 hover:text-indigo-700"
            aria-label="Back to home"
          >
            <ArrowLeft size={19} aria-hidden="true" />
          </Link>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-950 via-indigo-900 to-indigo-700 text-white shadow-lg shadow-indigo-950/20">
            <Bot size={24} aria-hidden="true" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-slate-950 sm:text-xl">
                LawYaar Legal Assistant
              </h1>
              <Sparkles className="h-4 w-4 text-indigo-600" aria-hidden="true" />
            </div>
            <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-slate-500 sm:text-sm">
              <ShieldCheck size={14} className="text-emerald-600" aria-hidden="true" />
              AI guidance for legal questions
            </p>
          </div>
        </div>

        <span className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700 sm:inline-flex">
          Online
        </span>
      </div>
    </motion.header>
  )
}

export default ChatHeader
