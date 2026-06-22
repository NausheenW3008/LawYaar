import { motion } from 'framer-motion'
import { MapPin, Search, SlidersHorizontal } from 'lucide-react'

function LawyerSearch({
  specialization,
  location,
  onSpecializationChange,
  onLocationChange,
  onSubmit,
}) {
  return (
    <motion.form
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={onSubmit}
      className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-2xl shadow-indigo-950/10 backdrop-blur-xl sm:p-5"
    >
      <div className="premium-grid absolute inset-0 opacity-25" />
      <div className="relative grid gap-4 md:grid-cols-[1.25fr_0.85fr_auto] md:items-center">
        <label className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-100">
          <Search className="h-5 w-5 text-indigo-700" aria-hidden="true" />
          <input
            type="text"
            value={specialization}
            onChange={(event) => onSpecializationChange(event.target.value)}
            placeholder="Search by specialization (e.g., Criminal, Civil, Family)"
            className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
          />
        </label>

        <label className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-100">
          <MapPin className="h-5 w-5 text-indigo-700" aria-hidden="true" />
          <input
            type="text"
            value={location}
            onChange={(event) => onLocationChange(event.target.value)}
            placeholder="Enter city (e.g., Delhi, Mumbai)"
            className="w-full bg-transparent text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
          />
        </label>

        <motion.button
          type="submit"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-900 to-indigo-700 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-950/20"
        >
          <span className="absolute inset-y-0 -left-10 w-12 rotate-12 bg-white/20 blur-sm transition duration-700 group-hover:left-full" />
          <SlidersHorizontal size={18} aria-hidden="true" />
          Search
        </motion.button>
      </div>
    </motion.form>
  )
}

export default LawyerSearch
