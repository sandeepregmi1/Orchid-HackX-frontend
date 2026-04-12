import { motion } from 'motion/react';
import { Brain, Lightbulb, Shield } from 'lucide-react';

interface Track {
  title: string;
  desc: string;
  icon: React.ComponentType<{ size: number }>;
  color: string;
  ideas: string[];
}

interface TrackCardProps {
  track: Track;
  index: number;
}

function TrackCard({ track, index }: TrackCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Base Card */}
      <div className="glass-card p-10 rounded-[2.5rem] overflow-hidden hover:shadow-[0_0_50px_rgba(199,125,255,0.15)] transition-all duration-500 h-full">
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${track.color}`} />
        
        <div className="w-16 h-16 rounded-2xl bg-surface-container-highest flex items-center justify-center text-primary mb-8 group-hover:rotate-12 transition-transform duration-500">
          <track.icon size={32} />
        </div>

        <h3 className="text-2xl font-syne font-semibold mb-4 text-on-surface group-hover:text-primary transition-colors">
          {track.title}
        </h3>
        <p className="text-on-surface-variant leading-relaxed mb-6">
          {track.desc}
        </p>

        <div className="mt-8 flex items-center gap-2 text-primary font-label text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
          Ideas <span>→</span>
        </div>
      </div>

      {/* Hover Overlay - Ideas */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm rounded-[2.5rem] p-10 flex flex-col justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
        <h4 className="text-lg font-syne font-semibold text-primary mb-2">Project Ideas</h4>
        <ul className="space-y-3">
          {track.ideas.map((idea, i) => (
            <li key={i} className="text-sm text-on-surface flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>{idea}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Tracks() {
  const tracks: Track[] = [
    {
      title: 'AI / ML',
      desc: 'Harness the power of artificial intelligence and machine learning to solve complex problems.',
      icon: Brain,
      color: 'from-primary to-primary-container',
      ideas: [
        'AI-powered health diagnosis system',
        'Predictive analytics dashboard',
        'Smart recommendation engine',
        'Computer vision application',
      ],
    },
    {
      title: 'Open Innovation',
      desc: 'Build solutions that create positive impact and drive meaningful change in communities.',
      icon: Lightbulb,
      color: 'from-secondary to-secondary-dim',
      ideas: [
        'Education accessibility platform',
        'Environmental monitoring system',
        'Community resource hub',
        'Social impact marketplace',
      ],
    },
    {
      title: 'CyberSecurity',
      desc: 'Protect the digital frontier and build robust defense systems against emerging threats.',
      icon: Shield,
      color: 'from-tertiary to-tertiary-dim',
      ideas: [
        'Threat detection system',
        'Password security manager',
        'Network vulnerability scanner',
        'Security awareness platform',
      ],
    },
  ];

  return (
    <section id="tracks" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-syne font-bold mb-6">
          Hackathon <span className="text-primary">Tracks</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
          Choose your path and build something that matters. Hover to explore project ideas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track, index) => (
          <TrackCard key={track.title} track={track} index={index} />
        ))}
      </div>
    </section>
  );
}
