import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Sparkles, User } from 'lucide-react';
import sandeepImg from '../assets/team/sandeep.jpg';

interface Member {
  name: string;
  role: string;
  image?: string;
  github?: string;
  linkedin?: string;
  email?: string;
}

interface Group {
  title: string;
  members: Member[];
}

const teamData: Group[] = [
  {
    title: 'LEAD',
    members: [
      { name: 'Shaishab Dhakal', role: 'Event Lead', github: '#', linkedin: '#' },
    ],
  },
  {
    title: 'LEAD (OPERATION)',
    members: [
      { name: 'Rohan Bhandari', role: 'Operations Lead', github: '#', linkedin: '#' },
    ],
  },
  {
    title: 'IT Team',
    members: [
      {
        name: 'Sandeep Regmi', role: 'Technical Lead', image: sandeepImg, github: 'https://github.com/sandeepregmi1', linkedin: 'https://www.linkedin.com/in/sandeep-regmi-b77a54212',
      },
      { name: 'Nabin Purbey', role: 'Technical Lead', github: '#', linkedin: '#' },
    ],
  },
  {
    title: 'Designing',
    members: [
      { name: 'Aarshi Karki', role: 'Designer', github: '#', linkedin: '#' },
      { name: 'Sushant Shrestha', role: 'Designer', github: '#', linkedin: '#' },
    ],
  },
  {
    title: 'Documentation',
    members: [
      { name: 'Alij Khati', role: 'Documentation', github: '#', linkedin: '#' },
      { name: 'Pramesh Kandel', role: 'Documentation', github: '#', linkedin: '#' },
    ],
  },
  {
    title: 'Social Media',
    members: [
      { name: 'Anmol Jogi', role: 'Media Strategy', github: '#', linkedin: '#' },
      { name: 'Bidha  Poudel', role: 'Social Lead', github: '#', linkedin: '#' },
    ],
  },
  {
    title: 'Outreach',
    members: [
      { name: 'Sanjana Shrestha', role: 'Community Outreach', github: '#', linkedin: '#' },
      { name: 'Neha Mahto', role: 'Outreach', github: '#', linkedin: '#' },
    ],
  },
  {
    title: 'Sponsors',
    members: [
      { name: 'Bigyan Paudyal', role: 'Sponsorship Lead', github: '#', linkedin: '#' },
      { name: 'Tashi Sherpa', role: 'Sponsor Relations', github: '#', linkedin: '#' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as any } },
};

function MemberCard({ member }: { member: Member }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col items-center p-6 rounded-[2rem] transition-all duration-500 glass-card border border-white/5 hover:border-primary/30"
    >
      {/* Avatar Container */}
      <div className="relative mb-6 w-28 h-28 md:w-32 md:h-32 group-hover:scale-105 transition-transform duration-500">
        {/* Glow Ring */}
        <div className="absolute -inset-2 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-primary-dim" />

        <div className="relative w-full h-full rounded-full overflow-hidden border-2 transition-colors duration-500 border-outline-variant/30 group-hover:border-primary/50 bg-surface-container flex items-center justify-center">
          {member.image ? (
            <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <User size={48} className="text-on-surface-variant group-hover:text-primary transition-colors duration-500" />
          )}

          {/* Social Overlay */}
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0 backdrop-blur-sm">
            {member.github && (
              <a href={member.github} className="p-2 rounded-full bg-surface-container hover:bg-primary hover:text-on-primary transition-all duration-300 hover:scale-110">
                <Github size={18} />
              </a>
            )}
            {member.linkedin && (
              <a href={member.linkedin} className="p-2 rounded-full bg-surface-container hover:bg-primary-dim hover:text-on-primary transition-all duration-300 hover:scale-110">
                <Linkedin size={18} />
              </a>
            )}
            {member.email && (
              <a href={`mailto:${member.email}`} className="p-2 rounded-full bg-surface-container hover:bg-secondary hover:text-on-secondary transition-all duration-300 hover:scale-110">
                <Mail size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h4 className="font-syne font-bold text-on-surface group-hover:text-primary transition-colors duration-300 text-lg">
          {member.name}
        </h4>
      </div>
    </motion.div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative py-15 px-6 overflow-hidden bg-background">
      {/* Background Atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-primary/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] left-[10%] w-[25%] h-[25%] bg-secondary/5 blur-[100px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-label tracking-[0.3em] uppercase mb-8"
          >
            <User size={14} />
            <span>The Organization</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-syne font-bold mb-6"
          >
            Orchid<span className="text-primary-dim italic">HackX</span> <span className="text-secondary">Force</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-on-surface-variant text-lg max-w-2xl mx-auto font-dm font-light"
          >
            Meet the architects of innovation working behind the scenes to engineer an unforgettable experience.
          </motion.p>
        </div>

        {/* Unified Grid (Departments) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
          {teamData.map((group) => (
            <motion.div
              key={group.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 group">
                <span className="font-syne font-bold text-sm tracking-[.3em] uppercase text-on-surface-variant group-hover:text-primary transition-colors duration-300">
                  {group.title}
                </span>
                <div className="h-px flex-1 bg-white/10 group-hover:bg-primary/30 transition-colors duration-300" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {group.members.map((member) => (
                  <MemberCard key={member.name} member={member} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}