// src/components/auth/LoginCard.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PasswordInput from "./PasswordInput";
import GoogleButton from "./GoogleButton";
import { fakeLogin } from "../../utils/fakeAuth";

export default function LoginCard() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // UI-only fake login — no backend call.
    // Replace the inside of this timeout with a real API call later.
    setTimeout(() => {
      fakeLogin({ email, remember });
      setLoading(false);
      navigate("/");
    }, 700);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-2xl shadow-indigo-200/50 p-8 sm:p-10"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1.5">
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.01 }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
            className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-200 text-gray-800 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 focus:bg-white"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Forgot password?
            </Link>
          </div>
          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label className="flex items-center gap-2 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-300"
          />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-300/50 hover:shadow-xl hover:shadow-indigo-300/60 transition-all duration-200 disabled:opacity-70"
        >
          {loading ? "Logging in..." : "Login"}
        </motion.button>

        <div className="flex items-center gap-3 pt-1">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <GoogleButton onClick={() => alert("Google login coming soon!")} />

        <p className="text-center text-sm text-gray-500 pt-2">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Create Account
          </Link>
        </p>
      </form>
    </motion.div>
  );
}
