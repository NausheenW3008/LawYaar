import { motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { features } from '../../data/homeData'

function FeaturesSection() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-1/2 h-64 -translate-y-1/2 bg-gradient-to-r from-transparent via-indigo-100/70 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Platform">
            Our Features
          </SectionHeading>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative overflow-hidden rounded-3xl border border-white/70 bg-white/75 p-7 shadow-xl shadow-indigo-950/5 backdrop-blur transition"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-950 via-indigo-600 to-blue-400 opacity-0 transition group-hover:opacity-100" />
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-950 to-indigo-700 text-white shadow-lg shadow-indigo-900/20 transition group-hover:scale-105">
                <feature.icon size={23} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
