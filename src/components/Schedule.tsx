import { motion } from 'motion/react';

export default function Schedule() {
  const days = [
    {
      day: '1st Day',
      events: [
        {
          title: 'Check-in & Registration (8:00 AM)',
          desc: 'Participants arrive at Orchid International College, Kathmandu for check-in, registration, and onboarding formalities.',
        },
        {
          title: 'Opening Ceremony',
          desc: 'Event kickoff, introduction to mentors, rules briefing, and overview of judging criteria.',
        },
        {
          title: 'Development Begins',
          desc: 'Teams start brainstorming, planning, and initiating their project development.',
        },
        {
          title: 'Hackathon Environment',
          desc: 'Continuous development supported with food, coffee, tea, and interactive activities throughout the day.',
        },
      ],
    },
    {
      day: '2nd Day',
      events: [
        {
          title: 'Core Development Phase',
          desc: 'Teams continue building their projects with mentor guidance and iterative improvements.',
        },
        {
          title: 'Mentorship & Feedback',
          desc: 'Dedicated support sessions with mentors to refine ideas, UI/UX, and technical implementation.',
        },
        {
          title: 'Hackathon Continuation',
          desc: 'Development continues with breaks, refreshments, and engaging activities.',
        },
        {
          title: 'Team Progress Focus',
          desc: 'Teams work towards feature completion and presentation readiness.',
        },
      ],
    },
    {
      day: '3rd Day',
      events: [
        {
          title: 'Development Ends (8:00 AM)',
          desc: 'Final code freeze. Teams prepare slides and finalize their presentations.',
        },
        {
          title: 'Project Presentations Begin',
          desc: 'All teams present their solutions with live demos and structured slides.',
        },
        {
          title: 'Evaluation & Judging',
          desc: 'Judges evaluate projects based on innovation, execution, and impact.',
        },
        {
          title: 'Closing Ceremony',
          desc: 'Winners announcement, prize distribution, swag handover, and official closing.',
        },
      ],
    },
  ];

  return (
    <section id="schedule" className="py-15 px-8 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-syne font-bold mb-4">
          Event <span className="text-secondary">Schedule</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid lg:grid-cols-3 gap-12">

        {days.map((day) => (
          <div key={day.day} className="relative">

            {/* Day Title */}
            <h3 className="text-xl font-syne font-semibold text-primary mb-8 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary/70" />
              {day.day}
            </h3>

            {/* Vertical Line */}
            <div className="absolute left-[6px] top-10 bottom-0 w-px bg-primary/10" />

            {/* Events */}
            <div className="space-y-6">

              {day.events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-6"
                >

                  {/* Dot */}
                  <span className="absolute left-0 top-4 w-2 h-2 rounded-full bg-primary/40" />

                  {/* Card */}
                  <div className="glass-card p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] hover:bg-surface-container-high">

                    <h4 className="font-syne font-semibold text-on-surface mb-1">
                      {event.title}
                    </h4>

                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {event.desc}
                    </p>

                  </div>
                </motion.div>
              ))}

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}