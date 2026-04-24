import logo from '../assets/hack x logo.png'
import { Link } from 'react-router-dom';

export default function Footer() {
  const sections = [
    {
      title: 'Event',
      links: [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Tracks', href: '#tracks' },
        { name: 'Prizes', href: '#prizes' },
        { name: 'Schedule', href: '#schedule' },
      ],
    },
    {
      title: 'Community',
      links: [
        { name: 'Discord', href: 'https://discord.gg/NAD2dFR5P' },
        { name: 'Instagram', href: 'https://www.instagram.com/orchid_hackx?igsh=MWJiNTVldm43aDRzeQ%3D%3D' },
        { name: 'TikTok', href: 'https://www.tiktok.com/@hackx_oic' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQ', href: '#faq' },
        { name: 'Rules', href: '/code-of-conduct' },
        { name: 'Selection Criteria', href: '/selection-criteria' },
      ],
    },
    {
      title: 'Contact Us',
      links: [
        { name: 'orchidhackx@oic.edu.np', href: 'mailto:orchidhackx@oic.edu.np' },
        { name: '+977-9767413293', href: 'tel:+9779767413293'  },
        { name: '+977-9804902635', href: 'tel:+9779804902635' },
      ],
    },
  ];

 return (
    <footer className="bg-[#0f0c19] w-full border-t border-primary/20">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 px-12 py-16 max-w-7xl mx-auto">
        
        <div className="col-span-2 md:col-span-1">
          <img
            alt="OrchidHackX Logo"
            className="h-30 w-auto mb-4"
            src={logo}
            referrerPolicy="no-referrer"
          />
          <p className="font-dm text-base text-on-surface/90 leading-relaxed">
            © 2026 OrchidHackX. <br />
            From ideas to innovation.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <span className="font-syne font-semibold text-primary uppercase text-base tracking-widest mb-2">
              {section.title}
            </span>

            {section.links.map((link) =>
              link.href.startsWith('/') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-on-surface/90 hover:text-primary transition-colors text-base font-medium"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-on-surface/90 hover:text-primary transition-colors text-base font-medium"
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}