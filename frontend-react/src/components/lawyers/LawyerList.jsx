import { SearchX } from 'lucide-react'
import Reveal from '../common/Reveal'
import LawyerCard from './LawyerCard'

function LawyerList({ lawyers }) {
  if (lawyers.length === 0) {
    return (
      <Reveal>
        <div className="rounded-3xl border border-dashed border-indigo-200 bg-white/75 px-6 py-14 text-center shadow-xl shadow-indigo-950/5 backdrop-blur">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
            <SearchX size={26} aria-hidden="true" />
          </div>
          <h2 className="mt-5 text-2xl font-bold text-slate-950">
            No lawyers found
          </h2>
          <p className="mx-auto mt-3 max-w-md leading-7 text-slate-600">
            Try a different specialization or city to browse the available verified lawyers.
          </p>
        </div>
      </Reveal>
    )
  }

  return (
    <div className="grid gap-7 md:grid-cols-2">
      {lawyers.map((lawyer, index) => (
        <LawyerCard key={lawyer.id} lawyer={lawyer} index={index} />
      ))}
    </div>
  )
}

export default LawyerList
