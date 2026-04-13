import { motion } from 'motion/react';
import { Users, Lightbulb, GraduationCap, Zap, Sparkles, Calendar } from 'lucide-react';


interface Feature {
    title: string;
    desc: string;
    icon: any;
    color: 'primary' | 'secondary' | 'tertiary';
    delay: number;
}

export default function About() {
    const features: Feature[] = [
        {
            title: 'Collaboration',
            desc: 'Synthesize ideas with diverse teams of developers and designers in an intense environment.',
            icon: Users,
            color: 'primary',
            delay: 0.1,
        },
        {
            title: 'Innovation',
            desc: 'Push the limits of what’s possible with cutting-edge technologies and creative problem-solving.',
            icon: Lightbulb,
            color: 'secondary',
            delay: 0.2,
        },
        {
            title: 'Mentorship',
            desc: 'Gain direct insights from industry leaders who will guide your team from concept to code.',
            icon: GraduationCap,
            color: 'tertiary',
            delay: 0.3,
        },
        {
            title: 'Real Impact',
            desc: 'Build solutions that address critical challenges and have the potential to scale far beyond the event.',
            icon: Zap,
            color: 'primary',
            delay: 0.4,
        },
    ];

    return (
        <section
            id="about"
            className="relative py-15 px-8 overflow-hidden bg-background"
        >
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl aspect-square pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-primary/10 blur-[160px] rounded-full animate-pulse" />
                <div className="absolute inset-20 bg-secondary/5 blur-[120px] rounded-full animate-pulse delay-700" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Keynote Header */}
                <div className="text-center mb-24 lg:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-label tracking-[0.3em] uppercase mb-8"
                    >
                        <Sparkles size={14} className="animate-spin-slow" />
                        <span>About OrchidHackX</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold leading-[0.95] tracking-tight mb-8"
                    >
                        Where <span className="text-secondary glitch-text" data-text="Curiosity">Curiosity</span><br />
                        Meets <span className="text-primary-dim italic">Creation</span>.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-3xl mx-auto text-on-surface-variant text-lg md:text-xl font-dm font-light leading-relaxed"
                    >
                        OrchidHackX is a 48-hour offline synthesis of ideas and engineering. Hosted at Orchid International College, Kathmandu, we provide the ultimate foundation for you to build the extraordinary.
                    </motion.p>
                </div>

                {/* Staggered Feature Cards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.4
                            }
                        }
                    }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {features.map((feature, idx) => (
                        <motion.div
                            key={feature.title}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                            className="group relative glass-card p-8 rounded-[2rem] hover:bg-surface-container-high transition-all duration-500 hover:-translate-y-2 border border-white/5"
                        >
                            {/* Card Accent Glow */}
                            <div className={`absolute -inset-px rounded-[2rem] bg-linear-to-b ${feature.color === 'primary' ? 'from-primary/20' :
                                feature.color === 'secondary' ? 'from-secondary/20' : 'from-tertiary/20'
                                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center transition-all duration-500 ${feature.color === 'primary' ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-on-primary' :
                                feature.color === 'secondary' ? 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-on-secondary' :
                                    'bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-on-tertiary'
                                } shadow-lg shadow-black/20`}>
                                <feature.icon size={28} />
                            </div>

                            <h3 className="text-2xl font-syne font-bold mb-4 text-on-surface group-hover:text-white transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-on-surface-variant leading-relaxed text-sm md:text-base font-dm group-hover:text-on-surface transition-colors">
                                {feature.desc}
                            </p>

                            {/* Decorative bottom line */}
                            <div className={`absolute bottom-8 left-8 right-8 h-px bg-linear-to-r from-transparent ${feature.color === 'primary' ? 'via-primary/30' :
                                feature.color === 'secondary' ? 'via-secondary/30' : 'via-tertiary/30'
                                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Final Keynote Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-24 text-center"
                >
                    {/* <p className="text-white font-label text-xl uppercase tracking-[0.2em] font-medium">
                        Join the Circuit
                        <br />
                        <br />

                        19th – 21st June 2026
                    </p> */}




                    <p className="text-white font-label text-xl uppercase tracking-[0.2em] font-medium space-y-2">
                        <span className="flex items-center gap-2 justify-center">
                            <Zap size={18} />
                            Join the Circuit
                            <Zap size={18} />
                        </span>

                        <span className="flex items-center gap-2 justify-center text-white text-xl/10 tracking-[0.15em]">
                            <Calendar size={18} />
                            19th – 21st June 2026
                        </span>
                    </p>






                </motion.div>
            </div>
        </section>
    );
}