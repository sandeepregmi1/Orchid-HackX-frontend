import { motion, animate, useScroll, useTransform } from 'motion/react';
import { Trophy, Medal, Gift, ThumbsUp, Mic, Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  target: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

interface Reward {
  title: string;
  amount: string;
  prefix?: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  accent: string;
  ring: string;
  bg: string;
  glow: string;
}

function CountUp({ target, prefix = '', suffix = '', duration = 1.8 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isNumber = !isNaN(Number(target.replace(/,/g, '')));

  useEffect(() => {
    if (!isNumber) return;
    const numeric = Number(target.replace(/,/g, ''));
    const controls = animate(0, numeric, {
      duration,
      ease: 'easeOut',
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent =
            prefix + Math.round(value).toLocaleString() + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [target, prefix, suffix, duration, isNumber]);

  if (!isNumber) return <span ref={ref}>{prefix}{target}{suffix}</span>;
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const rewards: Reward[] = [
  {
    title: 'Grand Prize',
    amount: '80,000',
    prefix: 'Rs. ',
    subtitle: 'to overall winner',
    description: 'The ultimate reward for the most outstanding and innovative project overall.',
    icon: Trophy,
    accent: 'text-violet-400',
    ring: 'border-violet-400/35',
    bg: 'bg-violet-500/10',
    glow: 'shadow-[0_0_40px_rgba(139,92,246,0.25)]',
  },
  {
    title: 'Track Winner',
    amount: '10,000',
    prefix: 'Rs. ',
    subtitle: 'per track',
    description: 'Awarded to the top-performing team in each specialized track.',
    icon: Medal,
    accent: 'text-cyan-300',
    ring: 'border-cyan-400/35',
    bg: 'bg-cyan-500/10',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.2)]',
  },
  {
    title: 'Best Presenter',
    amount: '5,000',
    prefix: 'Rs. ',
    subtitle: 'individual effort',
    description: 'Awarded to the most charismatic and effective communicator.',
    icon: Mic,
    accent: 'text-emerald-400',
    ring: 'border-emerald-400/35',
    bg: 'bg-emerald-500/10',
    glow: 'shadow-[0_0_30px_rgba(52,211,153,0.15)]',
  },
  {
    title: 'Swags & Freebies',
    amount: 'Everyone',
    subtitle: 'all participants',
    description: 'Exclusive kits, goodies, and branded merchandise for everyone.',
    icon: ThumbsUp,
    accent: 'text-fuchsia-300',
    ring: 'border-fuchsia-400/35',
    bg: 'bg-fuchsia-500/10',
    glow: 'shadow-[0_0_30px_rgba(240,171,252,0.15)]',
  },
  {
    title: 'Gifts & Merch',
    amount: 'Tons!',
    subtitle: 'bonus rewards',
    description: 'Special branded collectibles and surprise gifts during the event.',
    icon: Star,
    accent: 'text-amber-300',
    ring: 'border-amber-400/35',
    bg: 'bg-amber-500/10',
    glow: 'shadow-[0_0_30px_rgba(252,211,77,0.15)]',
  },
];

const floatVariants: any = {
  animate: (i: number) => ({
    y: [0, -8, 0],
    transition: {
      duration: 4.5 + i * 0.7,
      repeat: Infinity,
      ease: 'easeInOut',
      delay: i * 0.4,
    },
  }),
};

const shineVariants: any = {
  rest: { x: '-100%', opacity: 0 },
  hover: {
    x: '200%',
    opacity: 1,
    transition: { duration: 0.55, ease: 'easeInOut' },
  },
};

export default function Prizes() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [26, -16]);
  const headingScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.97, 1, 0.98]);
  const gridY = useTransform(scrollYProgress, [0, 1], [32, -20]);

  const grand = rewards[0];
  const primaryPrizes = rewards.slice(1, 3);
  const secondaryPrizes = rewards.slice(3);

  return (
    <section
      id="prizes"
      ref={sectionRef}
      className="py-28 px-6 md:px-8 max-w-7xl mx-auto relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 rounded-[2.5rem] bg-linear-to-br from-[#030712] via-[#0b1731] to-[#180d2e]" />
        <div className="absolute inset-0 rounded-[2.5rem] opacity-30 noise-overlay" />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 left-[15%] w-64 h-64 rounded-full bg-violet-400/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-16 right-[10%] w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-10 left-[40%] w-56 h-56 rounded-full bg-fuchsia-400/15 blur-3xl"
        />
      </div>

      <div className="relative z-10 p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          style={{ y: headingY, scale: headingScale }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-7xl font-syne font-bold mb-4 text-white">
            Prizes <span className="text-violet-400">& Rewards</span>
          </h2>
          <p className="text-cyan-50 text-lg max-w-2xl mx-auto font-medium">
            Amazing prizes await the most innovative teams.
          </p>
        </motion.div>

        <motion.div style={{ y: gridY }} className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {/* Main Grand Prize Column */}
          <motion.article
            custom={0}
            variants={floatVariants}
            animate="animate"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            whileHover="hover"
            className={`relative rounded-3xl overflow-hidden border border-violet-400/35 ${grand.glow} bg-linear-to-br from-violet-600/30 via-[#0d1033] to-amber-500/20 flex flex-col justify-between min-h-95 md:min-h-120`}
          >
            <motion.div
              variants={shineVariants}
              className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/8 to-transparent skew-x-[-20deg] pointer-events-none z-10"
            />

            <motion.div
              animate={{ scale: [1, 1.6, 1], opacity: [0.7, 0, 0.7] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="absolute top-4 right-4 w-3 h-3 rounded-full bg-violet-400"
            />

            <div className="p-7 pb-0">
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 rounded-2xl border ${grand.ring} ${grand.bg} flex items-center justify-center ${grand.accent} mb-6`}
              >
                <grand.icon size={30} />
              </motion.div>
              <p className="text-xs uppercase tracking-[0.18em] text-violet-200 font-label font-bold mb-1">
                Overall Winner
              </p>
              <h3 className="font-syne text-3xl font-bold text-white mb-2">{grand.title}</h3>
            </div>

            <div className="p-7 pt-0 mt-auto">
              <div className="absolute bottom-16 right-6 text-[80px] opacity-[0.07] pointer-events-none select-none">🌿</div>
              <p className="font-syne text-5xl md:text-6xl font-bold text-white leading-tight">
                <CountUp target={grand.amount} prefix={grand.prefix} duration={2} />
              </p>
              <p className="text-sm text-violet-100 mt-1 italic font-medium">{grand.subtitle}</p>
            </div>
          </motion.article>

          {/* Secondary Column: Tiered Grid */}
          <div className="flex flex-col gap-5">
            {/* Tier 1 Primary Rewards (Track Winner, Best Presenter) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {primaryPrizes.map((reward, i) => (
                <motion.article
                  key={reward.title}
                  custom={i + 1}
                  variants={floatVariants}
                  animate="animate"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  whileHover="hover"
                  className={`relative rounded-3xl overflow-hidden border ${reward.ring} ${reward.glow} bg-[#0b1228]/90 backdrop-blur-xl p-6 flex flex-col`}
                >
                  <motion.div variants={shineVariants} className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/8 to-transparent skew-x-[-20deg] pointer-events-none z-10" />
                  
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      whileHover={{ rotate: [0, -8, 8, 0] }}
                      transition={{ duration: 0.4 }}
                      className={`w-12 h-12 rounded-xl border ${reward.ring} ${reward.bg} flex items-center justify-center ${reward.accent}`}
                    >
                      <reward.icon size={22} />
                    </motion.div>
                  </div>

                  <p className="text-xs uppercase tracking-[0.15em] text-on-surface-variant/80 mb-1 font-bold">{reward.subtitle}</p>
                  <h3 className="font-syne text-xl font-bold text-white mb-1">{reward.title}</h3>
                  <p className={`font-syne text-3xl font-bold ${reward.accent}`}>
                    <CountUp target={reward.amount} prefix={reward.prefix} duration={1.8} />
                  </p>
                </motion.article>
              ))}
            </div>

            {/* Tier 2 Secondary Rewards (Swag, Gifts) */}
            <div className="grid grid-cols-2 gap-5 flex-1">
              {secondaryPrizes.map((reward, i) => (
                <motion.article
                  key={reward.title}
                  custom={i + 3}
                  variants={floatVariants}
                  animate="animate"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  whileHover="hover"
                  className={`relative rounded-3xl overflow-hidden border ${reward.ring} ${reward.glow} bg-[#0b1228]/80 backdrop-blur-xl p-5`}
                >
                  <motion.div variants={shineVariants} className="absolute inset-0 w-1/2 bg-linear-to-r from-transparent via-white/8 to-transparent skew-x-[-20deg] pointer-events-none z-10" />

                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                    className={`w-10 h-10 rounded-xl border ${reward.ring} ${reward.bg} flex items-center justify-center ${reward.accent} mb-3`}
                  >
                    <reward.icon size={18} />
                  </motion.div>

                  <h3 className={`font-syne text-base font-bold mb-1 ${reward.accent}`}>
                    {reward.title}
                  </h3>
                  <p className="font-syne text-xl font-bold text-white mb-2">
                    {reward.amount}
                  </p>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed font-medium">{reward.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
