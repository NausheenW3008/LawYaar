// src/pages/Login.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AuthBackground from "../components/auth/AuthBackground";
import LoginCard from "../components/auth/LoginCard";

export default function Login() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <AuthBackground />

      {/* Top bar */}
      <div className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
            L
          </div>
          <span className="text-xl font-extrabold tracking-tight text-gray-900">
            LAWYAAR
          </span>
        </Link>

        <Link
          to="/"
          className="text-sm font-medium text-gray-500 hover:text-indigo-600 transition-colors"
        >
          ← Back to Home
        </Link>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              ✦ AI Legal Assistant for Every Indian
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
              Welcome Back
            </h1>
            <p className="text-lg text-gray-500 max-w-md">
              Continue your legal journey with LawYaar — instant AI guidance
              and trusted lawyers, all in one place.
            </p>
          </motion.div>

          {/* Mobile heading */}
          <div className="lg:hidden text-center mb-2">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              Welcome Back
            </h1>
            <p className="text-gray-500">
              Continue your legal journey with LawYaar
            </p>
          </div>

          {/* Login card */}
          <div className="flex justify-center lg:justify-end">
            <LoginCard />
          </div>
        </div>
      </div>
    </div>
  );
}
