import { motion } from 'motion/react';
import Countdown from './Countdown';
import bgVideo from '../assets/bg.mp4';
export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12 text-center">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,4,15,0.25),rgba(6,4,15,0.86)_72%,rgba(6,4,15,0.95))]" />

      {/* Top Gradient Overlay for Smooth Transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-background via-background/60 to-transparent pointer-events-none z-[1]" />

      {/* Bottom Gradient Overlay for Smooth Transition */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background via-background/80 to-transparent pointer-events-none z-[1]" />

      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-dim/20 glow-orb rounded-full" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 glow-orb rounded-full" />
      <div className="fixed inset-0 noise-overlay z-50" />





      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 mb-[-1rem] md:mb-[-2rem]"
      >
        <img
          alt="OrchidHackX 3D Logo"
          className="h-40 md:h-56 lg:h-80 w-auto mx-auto logo-3d-glow"
          src="/logo.png"
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="max-w-2xl text-white text-lg mb-6 md:text-xl font-dm relative z-10 "
      >
        From ideas to innovation
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-5xl md:text-7xl lg:text-8xl font-syne font-bold tracking-tighter leading-[0.85] mb-4 relative z-10"
      >
        <span>
          <span className="text-amber-50"> Orchid </span>
          <span
            className="glitch-text bg-linear-to-r from-primary-dim via-secondary to-primary-dim bg-clip-text text-transparent"
            data-text="HackX"
          >
            HackX
          </span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="max-w-2xl text-white text-lg mb-6 md:text-xl font-dm relative z-10"
      >
        19th – 21st June 2026 • 48 Hours of Pure Creation
      </motion.p>

      {/* Live Countdown Timer */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10"
      >
        <Countdown />
      </motion.div>
    </section>
  );
}
