import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { BadgeCheck, Scale, Search } from 'lucide-react'
import FloatingChatButton from '../components/layout/FloatingChatButton'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'
import LawyerList from '../components/lawyers/LawyerList'
import LawyerSearch from '../components/lawyers/LawyerSearch'
import { lawyers } from '../data/lawyers'

function FindLawyer() {
  const [specialization, setSpecialization] = useState('')
  const [location, setLocation] = useState('')
  const [submittedFilters, setSubmittedFilters] = useState({
    specialization: '',
    location: '',
  })

  const filteredLawyers = useMemo(() => {
    const specializationQuery = submittedFilters.specialization.toLowerCase().trim()
    const locationQuery = submittedFilters.location.toLowerCase().trim()

    return lawyers.filter((lawyer) => {
      const specializationText = [
        lawyer.specialization,
        lawyer.description,
        lawyer.name,
      ]
        .join(' ')
        .toLowerCase()

      const locationText = [lawyer.location, lawyer.court].join(' ').toLowerCase()

      return (
        (!specializationQuery ||
          specializationText.includes(specializationQuery)) &&
        (!locationQuery || locationText.includes(locationQuery))
      )
    })
  }, [submittedFilters])

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedFilters({ specialization, location })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f9ff] text-slate-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_18%_8%,rgba(79,70,229,0.16),transparent_30%),linear-gradient(135deg,rgba(15,23,42,0.06),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />
      <Navbar />

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-14 text-center sm:px-6 md:pt-18 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/75 px-4 py-2 text-sm font-semibold text-indigo-800 shadow-sm backdrop-blur">
              <BadgeCheck size={16} aria-hidden="true" />
              Verified legal support
            </div>
            <h1 className="text-4xl font-bold tracking-[-0.03em] text-slate-950 sm:text-5xl">
              Find the Right Lawyer
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Browse verified lawyers based on your legal needs and location.
            </p>
          </motion.div>

          <div className="mx-auto mt-10 max-w-6xl">
            <LawyerSearch
              specialization={specialization}
              location={location}
              onSpecializationChange={setSpecialization}
              onLocationChange={setLocation}
              onSubmit={handleSubmit}
            />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
                Lawyers
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">
                Available verified lawyers
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur">
              <Search size={16} className="text-indigo-700" aria-hidden="true" />
              {filteredLawyers.length} result
              {filteredLawyers.length === 1 ? '' : 's'}
            </div>
          </div>

          <div className="relative">
            <div className="premium-grid absolute inset-0 -z-10 opacity-30" />
            <LawyerList lawyers={filteredLawyers} />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-8 text-white shadow-2xl shadow-indigo-950/20">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Scale size={24} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold">LawYaar</h2>
                  <p className="mt-2 max-w-2xl leading-7 text-indigo-100">
                    Connect with trusted and verified lawyers based on your legal needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingChatButton />
    </div>
  )
}

export default FindLawyer
