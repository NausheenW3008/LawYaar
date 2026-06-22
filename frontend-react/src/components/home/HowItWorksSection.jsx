import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { howItWorksSteps } from '../../data/homeData'

function HowItWorksSection() {
  return (
    <section id="how" className="relative overflow-hidden py-20">
      <div className="premium-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/80 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Process">
            How It Works
          </SectionHeading>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent md:block" />
          {howItWorksSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, x: index === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="relative rounded-3xl border border-white/70 bg-white/80 p-7 text-center shadow-xl shadow-indigo-950/5 backdrop-blur"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-800 text-white shadow-xl shadow-indigo-950/20">
                <step.icon size={25} aria-hidden="true" />
              </div>
              <p className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-sm font-bold text-indigo-700 ring-1 ring-indigo-100">
                {index + 1}
              </p>
              <h3 className="text-xl font-semibold text-slate-950">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
