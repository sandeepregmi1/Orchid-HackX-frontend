import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Shield,
  Users,
  AlertTriangle,
  FileCheck,
  Gavel,
  HeartHandshake,
} from 'lucide-react';

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

            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-surface-container border border-outline-variant/40 shadow-sm mb-6">
              {/* <Shield size={90} className="text-red-700" /> */}
              <span className="text-3xl sm:text-5xl font-bold tracking-wide text-primary">
                Code of Conduct, Data Usage & Participant Consent
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold font-syne mb-6">
              Building a <span className="text-primary">Safe & Inclusive</span> Hackathon
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
              OrchidHackX is committed to providing a welcoming, respectful,
              inclusive, and harassment-free environment for everyone.
              By participating, you agree to uphold these standards and consent
              to the responsible use of registration and participation data for
              hackathon operations, sponsorship programs, professional
              opportunities, and community engagement initiatives.
            </p>

          </div>

          {/* Core Values */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">

            {[
              {
                icon: Users,
                title: 'Respect',
                desc: 'Treat everyone with dignity and professionalism.',
              },
              {
                icon: HeartHandshake,
                title: 'Inclusion',
                desc: 'Everyone is welcome regardless of background.',
              },
              {
                icon: Shield,
                title: 'Safety',
                desc: 'Zero tolerance for harmful or abusive behavior.',
              },
              {
                icon: FileCheck,
                title: 'Integrity',
                desc: 'Be honest, ethical, and fair throughout the event.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-surface-container border border-outline-variant/20 hover:border-primary/50 transition"
              >
                <item.icon size={24} className="text-primary mb-3" />

                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>

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
              <h2 className="text-2xl font-bold font-syne mb-4">
                Scope
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl">
                This Code of Conduct applies to all participants, mentors,
                judges, organizers, volunteers, sponsors, partners, and
                attendees across all OrchidHackX platforms — including
                in-person venues, digital platforms, online communications,
                and social interactions related to the event.
              </p>
            </section>

            {/* Inclusion */}
            <section>
              <h2 className="text-2xl font-bold font-syne mb-4">
                Inclusion & Respect
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mb-4">
                We are committed to creating an inclusive environment for
                people of all backgrounds and experience levels.
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
                Respectful communication, collaboration, and professionalism
                are expected at all times.
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
                <li>Offensive, hateful, or abusive language</li>
                <li>Unwanted physical contact or advances</li>
                <li>Sharing explicit or inappropriate content</li>
                <li>Disruptive behavior during sessions or judging</li>
                <li>Recording individuals without consent</li>
                <li>Possession or use of illegal substances</li>
              </ul>

            </section>

            {/* Project Integrity */}
            <section>

              <h2 className="text-2xl font-bold font-syne mb-4">
                Project Integrity
              </h2>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Projects must be primarily developed during the hackathon</li>
                <li>Pre-existing code or assets must be disclosed</li>
                <li>Plagiarism or undisclosed reuse may result in disqualification</li>
                <li>Teams may be asked to explain their development process</li>
              </ul>

            </section>

            {/* Participation */}
            <section>

              <h2 className="text-2xl font-bold font-syne mb-4">
                Participation Guidelines
              </h2>

              <div className="mb-6 p-5 rounded-xl bg-primary/10 border border-primary/20">

                <p className="text-base sm:text-lg leading-relaxed text-on-surface flex items-center gap-3">

                  <Shield size={20} className="text-primary shrink-0" />

                  <span>
                    <strong>Eligibility:</strong> College students
                    <strong> (Ages 18–25)</strong> only.
                    Non-compliance may result in
                    <strong> disqualification.</strong>
                  </span>

                </p>

              </div>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Must be enrolled in an undergraduate or graduate program</li>
                <li>Valid student verification may be requested</li>
                <li>Participants must follow all timelines and event rules</li>
                <li>Core organizers and judging members cannot compete</li>
              </ul>

            </section>

            {/* Teams */}
            <section>

              <h2 className="text-2xl font-bold font-syne mb-4">
                Team Guidelines
              </h2>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Teams typically consist of 3–4 members</li>
                <li>Diverse and collaborative teams are encouraged</li>
                <li>Team modifications require organizer approval</li>
              </ul>

            </section>

            {/* Development */}
            <section>

              <h2 className="text-2xl font-bold font-syne mb-4">
                Development Rules
              </h2>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Coding begins only after the official kickoff</li>
                <li>Planning and brainstorming may happen beforehand</li>
                <li>Use of open-source libraries and APIs is allowed</li>
                <li>Projects must not promote harmful or unethical content</li>
              </ul>

            </section>

            {/* Submission */}
            <section>

              <h2 className="text-2xl font-bold font-syne mb-4">
                Submission & Judging
              </h2>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Only registered teams may submit projects</li>
                <li>Submission guidelines must be followed strictly</li>
                <li>At least one team member must present the project</li>
                <li>Judges’ decisions are final and binding</li>
              </ul>

            </section>

            {/* Data Usage */}
            <section className="p-8 rounded-2xl border border-outline-variant/20 bg-surface-container">

              <h2 className="text-2xl font-bold font-syne mb-4 flex items-center gap-2">
                <Shield size={20} className="text-primary" />
                Data Usage & Participant Consent
              </h2>

              <div className="space-y-5 text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-4xl">

                <p>
                  By registering for OrchidHackX, participants consent to
                  the collection, storage, and processing of the information
                  provided during registration and participation in the event.
                </p>

                <p>
                  Collected information may include personal details,
                  academic information, contact details, portfolio links,
                  team information, hackathon experience, project
                  submissions, and other event-related data.
                </p>

                <p>
                  This information may be used for:
                </p>

                <ul className="list-disc list-inside space-y-3">
                  <li>Participant verification and eligibility confirmation</li>
                  <li>Team management and event coordination</li>
                  <li>Hackathon communication and important updates</li>
                  <li>Judging, evaluation, and selection processes</li>
                  <li>Mentorship, networking, and community engagement</li>
                  <li>Internship, recruitment, incubation, or sponsorship opportunities</li>
                  <li>Future hackathons, workshops, and ecosystem programs</li>
                </ul>

                <p>
                  Relevant participant information may be shared with
                  trusted sponsors, hiring partners, incubators,
                  consultancies, community collaborators, and affiliated
                  platforms associated with OrchidHackX for educational,
                  professional, recruitment, or hackathon-related opportunities.
                </p>

                <p>
                  OrchidHackX may also use participant names, college names,
                  photographs, recordings, project demos, and event highlights
                  for promotional, educational, marketing, and community
                  purposes across digital and social media platforms.
                </p>

                <p>
                  Reasonable measures will be taken to protect participant
                  information from unauthorized access, misuse, or disclosure.
                </p>

             

              </div>

            </section>

            {/* Reporting */}
            {/* <section>

              <h2 className="text-2xl font-bold font-syne mb-4">
                Reporting & Support
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mb-3">
                If you experience or witness any violation:
              </p>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Contact event staff immediately</li>
                <li>All reports will be handled confidentially</li>
                <li>Your safety and comfort are our priority</li>
              </ul>

            </section> */}

            {/* Enforcement */}
            <section className="p-8 rounded-2xl border border-outline-variant/20 bg-surface-container">

              <h2 className="text-2xl font-bold font-syne mb-4 flex items-center gap-2">
                <Gavel size={20} className="text-primary" />
                Enforcement & Actions
              </h2>

              <ul className="list-disc list-inside text-base sm:text-lg leading-relaxed text-on-surface-variant space-y-3">
                <li>Warning or temporary suspension</li>
                <li>Disqualification from the hackathon</li>
                <li>Removal from venue or digital platforms</li>
                <li>Restriction from future OrchidHackX events</li>
                <li>Escalation to authorities if necessary</li>
              </ul>

            </section>

          </div>

          {/* Footer */}
          <div className="text-center mt-20">

            <p className="text-base sm:text-lg leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
              OrchidHackX is more than a competition — it is a growing
              innovation community. By following these guidelines, you help
              create a space where everyone can learn, collaborate, build,
              and thrive together.
            </p>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}