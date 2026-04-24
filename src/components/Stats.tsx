import { motion } from 'motion/react';
import { Users, Code, Trophy, MapPin } from 'lucide-react';

export default function Stats() {
  const stats = [
    { label: 'Participants', value: '100+', icon: Users },
    { label: 'Hours', value: '48', icon: Code },
    { label: 'Prizes', value: 'NRs 95K', icon: Trophy },
    { label: 'Location', value: 'KTM', icon: MapPin },
  ];

  return (
    <section className="py-15 px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:bg-surface-container-high transition-all duration-500"
            style={{ border: '2.5px solid #2e0037' }}
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <stat.icon size={24} />
            </div>
            <span className="text-4xl md:text-5xl font-syne font-bold text-on-surface mb-1">
              {stat.value}
            </span>
            <span className="text-sm font-label uppercase text-on-surface-variant tracking-widest">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}