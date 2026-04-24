// /home/sandeep/orchidhackx-2026/frontend/src/components/FAQ.tsx
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Are beginners really welcome?',
      a: 'Absolutely! OrchidHackX is designed to be beginner-friendly with mentorship, guidance sessions, and team collaboration support.',
    },
    {
      q: 'Who can participate?',
      a: 'OrchidHackX is open to all students. It is beginner-friendly, so no prior hackathon experience is required.',
    },
    {
      q: 'When and where is the event happening?',
      a: 'The hackathon will be held offline at Orchid College, Kathmandu, from 19th – 21st June 2026, giving you 48 hours of pure creation.',
    },
    {
      q: 'Is there any registration fee?',
      a: 'No, participation is completely free. We provide food, swag, and a full hackathon experience for all selected participants.',
    },
    {
      q: 'What is the team size?',
      a: 'You can participate in teams of 3 to 4 members. Cross-college teams are allowed, and team formation support will be provided at the start.',
    },
    {
      q: 'What facilities will be provided during the hackathon?',
      a: 'We will provide all essential facilities including meals, coffee, and tea throughout the 48 hours. Comfortable sleeping arrangements and sleeping bags will also be available in a secure and supervised environment to ensure a safe and smooth experience for all participants.',
    },
    {
      q: 'What should I bring?',
      a: "Bring your laptop, charger, basic essentials, and creativity. Since it's a 48-hour offline event.",
    },
    {
      q: 'How will projects be evaluated?',
      a: 'Projects will be judged based on innovation, technical implementation, design, and real-world impact by a panel of industry mentors and experts.',
    },
    {
      q: 'What is the submission process?',
      a: 'All teams will present a live demo of their project at the end of the hackathon. Code and demo presentation are required for evaluation.',
    },
    {
      q: 'Will mentors be available?',
      a: 'Yes, experienced mentors will be available throughout the 48 hours to guide teams, answer questions, and provide feedback.',
    },
    {
      q: 'What can I build? Is any tech stack allowed?',
      a: 'You are free to use any tech stack, programming language, or framework. Creativity and problem-solving matter more than tools.',
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-15 px-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-label uppercase tracking-widest text-primary border border-primary/30 bg-primary/5 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Got Questions?
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-syne font-bold mb-4"
        >
          FAQ
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-on-surface-variant text-sm font-label tracking-wide"
        >
          Everything you need to know before you hack.
        </motion.p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.045, duration: 0.4 }}
              className="glass-card rounded-2xl overflow-hidden"
              style={{
                border: isOpen ? '2px solid #2e0037' : '1.5px solid transparent',
                transition: 'border-color 0.3s ease',
              }}
            >
              {/* Question Row */}
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-surface-container-high transition-colors group"
              >
                {/* Index number accent */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <span
                    className="text-xs font-label font-bold tabular-nums shrink-0 opacity-40 group-hover:opacity-70 transition-opacity"
                    aria-hidden
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-syne font-semibold text-lg text-on-surface leading-snug">
                    {faq.q}
                  </span>
                </div>

                {/* Plus / Close icon */}
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="ml-4 shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-primary"
                  style={{
                    background: isOpen ? 'rgba(46,0,55,0.12)' : 'transparent',
                    border: isOpen ? '1px solid #2e0037' : '1px solid transparent',
                    transition: 'background 0.3s, border-color 0.3s',
                  }}
                >
                  <Plus size={18} />
                </motion.div>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    {/* Subtle divider */}
                    <div
                      className="mx-8 h-px"
                      style={{ background: 'rgba(46,0,55,0.18)' }}
                    />
                    <div className="px-8 pt-4 pb-6 text-on-surface-variant leading-relaxed pl-20">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    
    </section>
  );
}