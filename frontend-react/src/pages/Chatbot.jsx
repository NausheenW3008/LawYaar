import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageSquareText, ShieldCheck } from 'lucide-react'
import ChatHeader from '../components/chat/ChatHeader'
import ChatInput from '../components/chat/ChatInput'
import ChatMessage from '../components/chat/ChatMessage'
import TypingIndicator from '../components/chat/TypingIndicator'
import { sendChatMessage } from '../services/chatApi'

const initialMessages = [
  {
    id: 'welcome',
    sender: 'bot',
    text: 'Hello! I am LawYaar, your legal assistant. How can I help you today?',
    createdAt: new Date(),
  },
  {
    id: 'sample-user',
    sender: 'user',
    text: 'I want to know about property disputes.',
    createdAt: new Date(),
  },
]

function Chatbot() {
  const [messages, setMessages] = useState(initialMessages)
  const [isLoading, setIsLoading] = useState(false)
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isLoading])

  const handleSend = async (messageText) => {
    const userMessage = {
      id: crypto.randomUUID(),
      sender: 'user',
      text: messageText,
      createdAt: new Date(),
    }

    setMessages((current) => [...current, userMessage])
    setIsLoading(true)

    try {
      const data = await sendChatMessage(messageText)
      const reply = data?.reply || 'I could not find a response for that question.'

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          sender: 'bot',
          text: reply,
          createdAt: new Date(),
        },
      ])
    } catch (error) {
      console.error(error)
      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          sender: 'bot',
          type: 'error',
          text: 'Server error. Is backend running?',
          createdAt: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex h-screen min-h-[640px] overflow-hidden bg-[#f7f9ff] text-slate-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_18%_8%,rgba(79,70,229,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.06),transparent_55%)]" />
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 flex min-h-0 w-full flex-col">
        <ChatHeader />

        <main className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="mx-auto flex min-h-full max-w-6xl flex-col">
            <motion.section
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-5 text-white shadow-2xl shadow-indigo-950/20 sm:p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                    <Bot size={24} aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-200">
                      AI legal assistant
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">
                      Ask legal questions with clarity
                    </h2>
                    <p className="mt-2 max-w-2xl leading-7 text-indigo-100">
                      Get instant AI guidance while keeping the final legal decision with verified professionals.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm sm:w-72">
                  <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
                    <ShieldCheck className="mb-2 h-5 w-5 text-indigo-200" />
                    Guidance
                  </div>
                  <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/15">
                    <MessageSquareText className="mb-2 h-5 w-5 text-indigo-200" />
                    Live chat
                  </div>
                </div>
              </div>
            </motion.section>

            <section className="flex-1 rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-2xl shadow-indigo-950/10 backdrop-blur-xl sm:p-6">
              {messages.length === 0 ? (
                <div className="flex min-h-80 flex-col items-center justify-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                    <Bot size={28} aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-950">
                    Start a legal conversation
                  </h2>
                  <p className="mt-3 max-w-md leading-7 text-slate-600">
                    Ask LawYaar a legal question and your conversation will appear here.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <AnimatePresence initial={false}>
                    {messages.map((message) => (
                      <ChatMessage key={message.id} message={message} />
                    ))}
                    {isLoading && <TypingIndicator key="typing" />}
                  </AnimatePresence>
                </div>
              )}
              <div ref={endRef} />
            </section>
          </div>
        </main>

        <ChatInput onSend={handleSend} disabled={isLoading} />
      </div>
    </div>
  )
}

export default Chatbot
