// src/components/auth/AuthBackground.jsx
import { motion } from "framer-motion";

export default function AuthBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      {/* Large gradient blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-indigo-300/40 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-24 w-[24rem] h-[24rem] rounded-full bg-purple-300/40 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 left-1/4 w-[22rem] h-[22rem] rounded-full bg-blue-300/30 blur-3xl"
        animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating glass shapes */}
      <motion.div
        className="absolute top-24 right-[28%] w-10 h-10 rounded-xl bg-white/60 backdrop-blur-md shadow-lg rotate-12"
        animate={{ y: [0, -16, 0], rotate: [12, 22, 12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-8 h-8 rounded-full bg-indigo-200/70 shadow-md"
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-12 w-6 h-6 rounded-lg bg-purple-200/70 shadow-md rotate-45"
        animate={{ y: [0, -12, 0], rotate: [45, 60, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
