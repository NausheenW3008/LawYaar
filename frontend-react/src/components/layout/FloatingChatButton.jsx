import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { ROUTES } from '../../constants/routes'

function FloatingChatButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.45 }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-5 right-5 z-30 sm:bottom-6 sm:right-6"
    >
      <Link
        to={ROUTES.chatbot}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-950 via-indigo-900 to-blue-800 px-5 py-3 text-sm font-semibold text-white shadow-2xl shadow-blue-950/25 transition sm:px-6"
      >
        <span className="absolute inset-y-0 -left-8 w-10 rotate-12 bg-white/20 blur-sm transition duration-700 group-hover:left-full" />
        <MessageCircle size={18} aria-hidden="true" />
        Chat with AI
      </Link>
    </motion.div>
  )
}

export default FloatingChatButton
