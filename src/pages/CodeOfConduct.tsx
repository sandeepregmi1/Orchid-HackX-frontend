import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Users, AlertTriangle, FileCheck, Gavel, HeartHandshake } from 'lucide-react';
import Footer from '../components/Footer';

export default function CodeOfConduct() {
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
           <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-surface-container border border-outline-variant/40 text-base font-semibold text-on-surface mb-6 shadow-sm">
  <Shield size={50} className="text-red-700" />
  <span className=" text-6xl font-bold tracking-wide text-red-700">Code of Conduct</span>
</div>

            <h1 className="text-4xl sm:text-6xl font-bold font-syne mb-6">
              Building a <span className="text-primary">Safe & Inclusive</span> Hackathon
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
              OrchidHackX is committed to providing a welcoming, respectful, and harassment-free environment for everyone.
              By participating, you agree to uphold these standards.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Users, title: "Respect", desc: "Treat everyone with dignity" },
              { icon: HeartHandshake, title: "Inclusion", desc: "Everyone is welcome" },
              { icon: Shield, title: "Safety", desc: "Zero tolerance for harm" },
              { icon: FileCheck, title: "Integrity", desc: "Be honest and fair" },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 hover:border-primary/50 transition">
                <item.icon size={24} className="text-primary mb-3" />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Sections */}
          <div className="space-y-16">

            {/* Scope */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">Scope</h2>
              <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl">
                This Code of Conduct applies to all participants, mentors, judges, organizers, sponsors,
                and attendees across all OrchidHackX platforms — including in-person venues,
                online communications, and social interactions related to the event.
              </p>
            </section>

            {/* Inclusion */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">Inclusion & Respect</h2>

              <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mb-4">
                We are committed to creating an inclusive environment for people of all backgrounds.
              </p>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Gender identity or expression</li>
                <li>Age or experience level</li>
                <li>Sexual orientation</li>
                <li>Disability or appearance</li>
                <li>Ethnicity or nationality</li>
                <li>Religion or beliefs</li>
                <li>Technical background or skill level</li>
              </ul>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl">
                Respectful communication and collaboration are expected at all times.
              </p>
            </section>

            {/* Prohibited */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4 flex items-center gap-2">
                <AlertTriangle size={20} className="text-primary" />
                Prohibited Behavior
              </h2>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Harassment, intimidation, or discrimination</li>
                <li>Offensive or abusive language</li>
                <li>Unwanted physical contact or advances</li>
                <li>Sharing explicit or inappropriate content</li>
                <li>Disruptive behavior during sessions</li>
                <li>Recording or photographing individuals without consent</li>
                <li>Possession or use of illegal substances at the venue</li>
              </ul>
            </section>

            {/* Project Rules */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">Project Integrity</h2>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Projects must be primarily developed during the hackathon</li>
                <li>Pre-existing code must be disclosed</li>
                <li>Plagiarism or undisclosed reuse will result in disqualification</li>
                <li>Teams may be asked to explain their development process</li>
              </ul>
            </section>

            {/* Participation */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">Participation Guidelines</h2>
              <div className="mb-6 p-5 rounded-xl bg-primary/10 border border-primary/20">
                <p className="text-base sm:text-lg leading-relaxed text-on-surface flex items-center gap-3">
                  <Shield size={20} className="text-primary shrink-0" />
                  <span>
                    <strong>Eligibility:</strong> College students <strong>(Ages 18-24)</strong> only. Non-compliance results in <strong>disqualification</strong>.
                  </span>
                </p>
              </div>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Must be currently enrolled in an undergraduate or graduate program</li>
                <li>Valid Student ID or verification must be provided on request</li>
                <li>Participants must follow all event rules and timelines</li>
                <li>Organizers and core team members cannot compete</li>
              </ul>
            </section>

            {/* Teams */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">Team Guidelines</h2>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Teams typically consist of 3–4 members</li>
                <li>Diverse teams are encouraged</li>
                <li>Team changes require organizer approval</li>
              </ul>
            </section>

            {/* Development */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">Development Rules</h2>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Coding starts only after the official kickoff</li>
                <li>Planning and ideation can be done beforehand</li>
                <li>Use of open-source tools is allowed</li>
                <li>Projects must not promote harmful or unethical content</li>
              </ul>
            </section>

            {/* Submission */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">Submission & Judging</h2>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Only registered teams can submit</li>
                <li>Follow submission format strictly</li>
                <li>At least one member must present</li>
                <li>Judges' decisions are final</li>
              </ul>
            </section>

            {/* Reporting */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">Reporting & Support</h2>
              <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mb-3">
                If you experience or witness any violation:
              </p>
              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Contact event staff immediately</li>
                <li>All reports will be handled confidentially</li>
                <li>Your safety and comfort are our priority</li>
              </ul>
            </section>

            {/* Enforcement */}
            <section className="p-8 rounded-2xl border border-outline-variant/20 bg-surface-container">
              <h2 className="text-2xl font-bold font-syne mb-4 flex items-center gap-2">
                <Gavel size={20} className="text-primary" />
                Enforcement & Actions
              </h2>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Warning or temporary suspension</li>
                <li>Disqualification from the hackathon</li>
                <li>Removal from venue or platform</li>
                <li>Ban from future events</li>
                <li>Escalation to authorities if necessary</li>
              </ul>
            </section>

          </div>

          {/* Footer */}
          <div className="text-center mt-20">
            <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
              OrchidHackX is more than a competition — it's a community.
              By following these guidelines, you help create a space where everyone can innovate, learn, and thrive.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}