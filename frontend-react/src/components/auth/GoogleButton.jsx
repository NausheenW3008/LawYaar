// src/components/auth/GoogleButton.jsx
import { motion } from "framer-motion";

export default function GoogleButton({ onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-gray-700 font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
    >
      <svg width="20" height="20" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.9 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20c0-1.3-.1-2.7-.4-3.5z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.6 0-14.1 4.3-17.7 10.7z" />
        <path fill="#4CAF50" d="M24 44c5.4 0 10.3-2 14-5.4l-6.5-5.4c-2 1.4-4.6 2.3-7.5 2.3-5.3 0-9.7-3.1-11.3-7.6l-6.6 5.1C9.8 39.6 16.3 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 2.9-2.9 5.3-5.3 6.9l6.5 5.4C39.9 37.4 44 31.8 44 24c0-1.3-.1-2.7-.4-3.5z" />
      </svg>
      Continue with Google
    </motion.button>
  );
}
