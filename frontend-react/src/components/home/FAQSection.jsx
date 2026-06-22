import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../common/SectionHeading'
import Reveal from '../common/Reveal'
import { faqs } from '../../data/homeData'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-white px-4 py-24 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f7f9ff] to-white" />
      <div className="relative">
        <Reveal>
          <SectionHeading eyebrow="Answers">
            Frequently Asked Questions
          </SectionHeading>
        </Reveal>

        <div className="mx-auto mt-11 max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className={`overflow-hidden rounded-3xl border bg-white shadow-lg transition ${
                  isOpen
                    ? 'border-indigo-200 shadow-indigo-950/10'
                    : 'border-slate-200 shadow-slate-950/5 hover:border-indigo-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 font-semibold text-slate-950">
                    <span className="hidden h-9 w-9 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 sm:flex">
                      <HelpCircle size={18} aria-hidden="true" />
                    </span>
                    {faq.question}
                  </span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                      isOpen
                        ? 'bg-indigo-700 text-white'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <ChevronDown
                      size={19}
                      aria-hidden="true"
                      className={`transition ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ y: -4 }}
                        animate={{ y: 0 }}
                        className="px-5 pb-6 leading-7 text-slate-600 sm:px-6 sm:pl-[4.7rem]"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
