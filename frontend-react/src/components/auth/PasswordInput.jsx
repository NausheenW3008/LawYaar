// src/components/auth/PasswordInput.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Password",
}) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="w-full px-4 py-3 pr-12 rounded-xl bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 focus:bg-white"
      />
      <motion.button
        type="button"
        onClick={() => setVisible((v) => !v)}
        whileTap={{ scale: 0.85 }}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors"
        aria-label={visible ? "Hide password" : "Show password"}
      >
        {visible ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M3 3l18 18" strokeLinecap="round" />
            <path d="M10.58 10.58a2 2 0 002.83 2.83" strokeLinecap="round" />
            <path
              d="M9.88 4.62A9.77 9.77 0 0112 4.5c5 0 9 4 10.5 7.5a12.62 12.62 0 01-2.16 3.19M6.1 6.1C3.6 7.8 1.9 10 1.5 12c.86 2.04 2.5 4.04 4.71 5.49A9.77 9.77 0 0012 19.5c1 0 1.96-.13 2.86-.38"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
              d="M1.5 12C3 8.5 7 4.5 12 4.5s9 4 10.5 7.5C21 15.5 17 19.5 12 19.5S3 15.5 1.5 12z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )}
      </motion.button>
    </div>
  );
}
