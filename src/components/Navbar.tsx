import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  onRegisterClick: () => void;
  onHomeClick: () => void;
}

export default function Navbar({ onRegisterClick, onHomeClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;

    e.preventDefault();
    const target = document.querySelector(href);

    if (!target) {
      window.location.hash = href;
      return;
    }

    const navbarOffset = 96;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top: Math.max(0, targetTop),
      behavior: 'smooth',
    });

    history.replaceState(null, '', href);
  };

  const navLinks = [
    { name: 'Home', action: () => { onHomeClick(); setIsMenuOpen(false); } },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Selection Criteria', action: () => { navigate('/selection-criteria'); setIsMenuOpen(false); } },
    { name: 'Code of Conduct', action: () => { navigate('/code-of-conduct'); setIsMenuOpen(false); } },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#130f28]/60 backdrop-blur-xl shadow-[0_0_40px_rgba(199,125,255,0.1)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onHomeClick}>
          <img
            alt="OrchidHackX Logo"
            className="h-25 w-auto object-contain"
            src="/logo.png"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-syne font-semibold tracking-tight text-sm">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.href ? (
                <a
                  href={link.href}
                  onClick={(e) => handleNavScroll(e, link.href)}
                  className="text-on-surface hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  onClick={link.action}
                  className="text-on-surface hover:text-primary transition-colors"
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.a
            href="https://discord.gg/orchidcommunity"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:inline-flex border border-primary/40 text-primary font-syne font-semibold px-6 py-2.5 rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300"
          >
            Join Discord
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRegisterClick}
            className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-syne font-semibold px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(199,125,255,0.4)] transition-all duration-300"
          >
            Register Now
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-container-high border-b border-outline-variant/20 px-8 py-6 flex flex-col gap-4 font-syne font-semibold"
        >
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.href ? (
                <a
                  href={link.href}
                  onClick={(e) => {
                    handleNavScroll(e, link.href);
                    setIsMenuOpen(false);
                  }}
                  className="text-on-surface hover:text-primary transition-colors block"
                >
                  {link.name}
                </a>
              ) : (
                <button
                  onClick={link.action}
                  className="text-on-surface hover:text-primary transition-colors text-left w-full"
                >
                  {link.name}
                </button>
              )}
            </div>
          ))}
          <a
            href="https://discord.gg/NAD2dFR5P"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dim transition-colors block pt-2 border-t border-outline-variant/20"
          >
            Join Discord
          </a>
        </motion.div>
      )}
    </nav>
  );
}
