import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Search, ShieldCheck, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
import heroImage from '../../assets/lawyaar-image.jpg'
import { ROUTES } from '../../constants/routes'
import { homeStats, legalAreas } from '../../data/homeData'
import AnimatedCounter from '../common/AnimatedCounter'

function HeroSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -10
    setTilt({ x, y })
  }

  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 md:grid-cols-[1.02fr_0.98fr] md:pb-24 md:pt-20 lg:px-8">
      <div className="shimmer-line absolute left-1/2 top-0 h-px w-2/3" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-white/75 px-4 py-2 text-sm font-semibold text-indigo-800 shadow-sm backdrop-blur"
        >
          <Sparkles size={16} aria-hidden="true" />
          AI Legal Assistant for Every Indian
        </motion.div>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-5xl lg:text-6xl">
          Empowering You Through <br className="hidden sm:block" /> Legal
          Knowledge
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
          Get instant legal guidance with AI and connect with trusted lawyers
          based on your needs — all in one place.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <motion.div
            whileHover={{ y: -3, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to={ROUTES.chatbot}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-950 via-indigo-900 to-indigo-700 px-6 py-3.5 font-semibold text-white shadow-xl shadow-indigo-950/25 sm:w-auto"
            >
              <span className="absolute inset-y-0 -left-10 w-12 rotate-12 bg-white/20 blur-sm transition duration-700 group-hover:left-full" />
              Ask a Legal Question
              <ArrowRight
                size={18}
                aria-hidden="true"
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -3, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to={ROUTES.findLawyer}
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-indigo-200 bg-white/80 px-6 py-3.5 font-semibold text-slate-950 shadow-sm backdrop-blur transition hover:border-indigo-300 hover:bg-white sm:w-auto"
            >
              <Search size={18} aria-hidden="true" />
              Find a Lawyer
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
          {homeStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/80 bg-white/65 p-4 shadow-sm backdrop-blur"
            >
              <p className="text-2xl font-bold text-blue-950">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="mt-1 text-xs font-medium leading-5 text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="flex justify-center md:justify-end"
      >
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          className="relative w-full max-w-[440px]"
          style={{ perspective: 1000 }}
        >
          <motion.div
            animate={{ rotateX: tilt.y, rotateY: tilt.x }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/65 p-5 shadow-2xl shadow-indigo-950/20 backdrop-blur-xl"
          >
            <div className="premium-grid absolute inset-0 opacity-30" />
            <div className="absolute inset-x-8 top-0 h-20 bg-gradient-to-b from-indigo-200/50 to-transparent" />
            <div className="relative rounded-[1.5rem] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 p-6 text-white shadow-inner">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-200">
                    LawYaar
                  </p>
                  <p className="mt-1 text-lg font-semibold">
                    Legal AI Console
                  </p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Bot size={22} aria-hidden="true" />
                </span>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-2xl">
                <img
                  src={heroImage}
                  alt="LawYaar Logo"
                  className="slow-float mx-auto h-auto w-56 object-contain sm:w-64"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {legalAreas.map((area, index) => (
                  <motion.div
                    key={area.label}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 4.5,
                      delay: index * 0.25,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-3 text-sm font-medium ring-1 ring-white/15 backdrop-blur"
                  >
                    <area.icon size={17} aria-hidden="true" />
                    {area.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -left-3 top-8 hidden rounded-2xl border border-white/70 bg-white/80 px-4 py-3 shadow-xl shadow-indigo-950/10 backdrop-blur sm:flex"
          >
            <ShieldCheck className="mr-2 h-5 w-5 text-indigo-700" />
            <span className="text-sm font-semibold text-slate-700">
              Trusted guidance
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection
