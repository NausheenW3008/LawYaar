import { motion } from 'framer-motion'
import { BriefcaseBusiness, Building2, IndianRupee, UserRoundCheck } from 'lucide-react'

function LawyerCard({ lawyer, index }) {
  const initials = lawyer.name
    .replace('Adv. ', '')
    .split(' ')
    .map((part) => part[0])
    .join('')

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl shadow-indigo-950/5 backdrop-blur"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-950 via-indigo-600 to-blue-400 opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-950 via-indigo-900 to-indigo-700 text-xl font-bold text-white shadow-lg shadow-indigo-950/20">
          {initials}
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-bold text-slate-950">{lawyer.name}</h3>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-slate-600">
            <BriefcaseBusiness size={16} className="text-indigo-700" aria-hidden="true" />
            <span>{lawyer.specialization}</span>
            <span className="text-slate-300">•</span>
            <span>{lawyer.experience}</span>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <Building2 size={16} className="text-indigo-700" aria-hidden="true" />
            {lawyer.court}
          </p>
        </div>
      </div>

      <p className="mt-5 leading-7 text-slate-600">{lawyer.description}</p>

      <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700 ring-1 ring-emerald-100">
          <IndianRupee size={16} aria-hidden="true" />
          Consultation: {lawyer.consultation}
        </span>
        <motion.button
          type="button"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:bg-indigo-900"
        >
          <UserRoundCheck size={17} aria-hidden="true" />
          View Profile
        </motion.button>
      </div>
    </motion.article>
  )
}

export default LawyerCard
