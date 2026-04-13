import { motion } from 'motion/react';
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
      a: 'Bring your laptop, charger, basic essentials, and creativity. Since it’s a 48-hour offline event.',
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
    }
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-15 px-8 max-w-3xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-syne font-bold mb-6">
          FAQ
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-card rounded-2xl overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-surface-container-high transition-colors"
            >
              <span className="font-syne font-semibold text-lg text-on-surface">
                {faq.q}
              </span>

              <motion.div
                animate={{ rotate: openIdx === idx ? 45 : 0 }}
                className="text-primary"
              >
                <Plus />
              </motion.div>
            </button>

            <motion.div
              initial={false}
              animate={{ height: openIdx === idx ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <div className="px-8 pb-6 text-on-surface-variant leading-relaxed">
                {faq.a}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}