import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Tracks from '../components/Tracks';
import Team from '../components/Team';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import Prizes from '../components/Prizes.tsx';

export default function Home() {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary overflow-x-hidden">
      <Navbar
        onRegisterClick={() => navigate('/register')}
        onHomeClick={scrollToTop}
      />

      <main>
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <Hero />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05 }}>
          <Stats />
        </motion.div>

        {/* About Section */}
        <About />




        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <Tracks />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <Prizes />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <Team />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <Schedule />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <FAQ />
        </motion.div>

        {/* CTA Section */}
        <motion.section initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55 }} className="py-32 px-8">
          <div className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
            <h2 className="text-5xl md:text-7xl font-syne font-bold mb-8 relative z-10">
              Ready to <span className="text-primary">Build?</span>
            </h2>
            <p className="text-on-surface-variant text-xl mb-12 max-w-2xl mx-auto relative z-10">
              Don't miss out on the biggest hackathon of the year. Limited spots available.
            </p>
            <button
              onClick={() => navigate('/register')}
              className="relative z-10 bg-linear-to-r from-primary to-primary-container text-on-primary-container font-syne font-semibold px-12 py-5 rounded-full text-xl hover:shadow-[0_0_50px_rgba(199,125,255,0.5)] transition-all duration-300"
            >
              Register Now
            </button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
