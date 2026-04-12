import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Sparkles, Zap, Lightbulb, TrendingUp, Users, Star } from 'lucide-react';
import Footer from '../components/Footer';

export default function SelectionCriteria() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary flex flex-col">
      <main className="flex-1 pt-20 pb-24 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">

          {/* Back */}
          <button
            onClick={() => navigate('/')}
            className="mb-10 inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          {/* Hero */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container border border-outline-variant/30 text-sm mb-6">
              <Sparkles size={16} />
              Selection Criteria
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-syne mb-6 leading-tight">
              Built for <span className="text-primary">Beginners</span><br />
              Designed for <span className="text-primary">Builders</span>
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
              You don’t need to be an expert. We’re looking for curious minds,
              creative thinkers, and people ready to build something meaningful in 48 hours.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Zap, title: "Passion", desc: "Excitement to learn & build" },
              { icon: Lightbulb, title: "Creativity", desc: "Fresh and original ideas" },
              { icon: TrendingUp, title: "Growth", desc: "Willingness to improve" },
              { icon: Users, title: "Teamwork", desc: "Collaboration matters" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 hover:border-primary/50 transition-all hover:shadow-lg group"
              >
                <item.icon className="text-primary mb-4 group-hover:scale-110 transition" size={24} />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative border-l border-outline-variant/30 pl-6 space-y-12 mb-20">
            {[
              {
                title: "Passion & Motivation",
                desc: "Tell us why you want to join and what excites you about building."
              },
              {
                title: "Idea & Creativity",
                desc: "You don’t need a perfect idea — just a meaningful or interesting one."
              },
              {
                title: "Learning Attitude",
                desc: "Show us your willingness to learn, explore, and try new things."
              },
              {
                title: "Basic Skills (Flexible)",
                desc: "Any exposure counts — coding, design, or even problem-solving."
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-2xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Highlight */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 mb-20 text-center">
            <h2 className="text-2xl font-bold font-syne mb-4">
              No Experience? No Problem 🚀
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
              You don’t need GitHub, internships, or hackathon wins.
              If you’re curious, motivated, and ready to build — you already qualify.
            </p>
          </div>

          {/* Process */}
          <div className="grid md:grid-cols-2 gap-8">

            <div className="p-8 rounded-2xl border border-outline-variant/20 bg-surface-container">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Star size={18} className="text-primary" />
                How We Select
              </h3>
              <ul className="space-y-3 text-base sm:text-lg leading-relaxed text-on-surface-variant">
                <li>Holistic application review</li>
                <li>Focus on mindset over experience</li>
                <li>Diverse skill-level selection</li>
                <li>Balanced and inclusive teams</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-outline-variant/20 bg-surface-container">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Sparkles size={18} className="text-primary" />
                Important Notes
              </h3>
              <ul className="space-y-3 text-base sm:text-lg leading-relaxed text-on-surface-variant">
                <li>No prior hackathon required</li>
                <li>No advanced coding required</li>
                <li>Beginners strongly encouraged</li>
                <li>Be real — authenticity matters</li>
              </ul>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}