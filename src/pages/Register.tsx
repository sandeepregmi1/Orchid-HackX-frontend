// /home/sandeep/orchidhackx-2026/frontend/src/pages/Register.tsx
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer';

interface LabelProps {
  children: string;
}

function FieldLabel({ children }: LabelProps) {
  return (
    <label className="text-[11px] font-label uppercase tracking-[0.16em] text-on-surface-variant">
      {children}
    </label>
  );
}



interface InputProps {
  placeholder: string;
  type?: string;
  required?: boolean;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

interface TeamMember {
  name: string;
  github: string;
}

function InputField({ placeholder, type = 'text', required = false, name, value, onChange }: InputProps) {
  return (
    <input
      required={required}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full bg-black/80 border border-outline-variant/40 rounded-lg px-4 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:border-primary transition-colors"
    />
  );
}

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    phoneNumber: '',
    institution: '',
    role: 'Developer',
    githubPortfolio: '',
    linkedin: '',
    teamName: '',
    experience: '',
  });


  const validatePhoneNumber = (phone: string) => /^9\d{9}$/.test(phone);
const [phoneError, setPhoneError] = useState('');


  const [teamSize, setTeamSize] = useState('3');
  const [selectedTrack, setSelectedTrack] = useState('AI / ML');
  const [cocAccepted, setCocAccepted] = useState(false);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { name: '', github: '' },
    { name: '', github: '' },
  ]);

  const navigate = useNavigate();

  const tracks = ['AI / ML', 'Open Innovation', 'CyberSecurity'];
  const teamSizes = ['3', '4'];

const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setFormData(prev => ({ ...prev, [name]: value }));

  if (name === 'phoneNumber') {
    if (value.length === 0) {
      setPhoneError('');
    } else if (!/^9\d{0,9}$/.test(value)) {
      setPhoneError('Phone must start with 9 and contain only digits');
    } else if (value.length === 10 && !validatePhoneNumber(value)) {
      setPhoneError('Phone number must be 10 digits starting with 9');
    } else {
      setPhoneError('');
    }
  }
};

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setIsError(false);

    if (!/^9\d{9}$/.test(formData.phoneNumber)) {
  setIsError(true);
  setErrorMessage('Phone number must be 10 digits starting with 9');
  return;
}

    // Prepare JSON payload for Backend
    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      age: parseInt(formData.age),
      phone_number: formData.phoneNumber,
      institution: formData.institution,
      role: formData.role,
      track: selectedTrack,
      github_portfolio: formData.githubPortfolio,
      linkedin: formData.linkedin,
      team_name: formData.teamName,
      team_size: parseInt(teamSize),
      experience: formData.experience,
      team_members: teamMembers,
      coc_accepted: cocAccepted
    };

    console.log('Submitting Registration Data:', payload);

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || '';
      const response = await fetch(`${baseUrl}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Submission failed');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      console.error(err);
      setIsError(true);
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleBackHome = () => {
    navigate('/');
  };

  const addTeamMember = () => {
    if (teamMembers.length < 3) {
      setTeamMembers((prev) => [...prev, { name: '', github: '' }]);
      setTeamSize('4');
    }
  };

  const updateTeamMember = (
    index: number,
    field: keyof TeamMember,
    value: string,
  ) => {
    setTeamMembers((prev) =>
      prev.map((member, i) =>
        i === index ? { ...member, [field]: value } : member,
      ),
    );
  };

  const removeTeamMember = (index: number) => {
    setTeamMembers((prev) => {
      if (prev.length <= 2) {
        return prev;
      }
      const newMembers = prev.filter((_, i) => i !== index);
      setTeamSize('3');
      return newMembers;
    });
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary overflow-x-hidden flex flex-col relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="noise-overlay absolute inset-0" />
        <div className="glow-orb absolute -top-20 -right-16 w-[28rem] h-[28rem] rounded-full bg-primary/25" />
        <div className="glow-orb absolute top-[35%] -left-24 w-[24rem] h-[24rem] rounded-full bg-secondary/20" />
      </div>

      <main className="relative z-10 flex-1 py-10 md:py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <button
            type="button"
            onClick={handleBackHome}
            className="inline-flex items-center gap-1.5 mb-8 px-3 py-1.5 rounded-md border border-outline-variant/40 text-xs font-label tracking-wide text-on-surface-variant hover:text-on-surface hover:border-primary/50 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Home
          </button>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-tertiary font-label mb-4 border-l-2 border-tertiary pl-3">
              Registration Portal
            </p>
            <h1 className="font-syne text-5xl md:text-8xl leading-[0.92] font-bold text-on-surface max-w-3xl">
              JOIN THE
              <br />
              CIRCUIT.
            </h1>

<div className="mt-6 flex flex-wrap items-center gap-3 text-base md:text-lg font-semibold">
  <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary font-extrabold uppercase tracking-widest shadow-sm">
    Eligibility
  </span>

  <p className="text-on-surface-variant font-medium">
    College students (Ages 18-24) only.{" "}
    <span className="text-red-500 font-extrabold bg-red-500/10 px-3 py-1 rounded-md border border-red-500/40 shadow-sm">
      Non-compliance results in disqualification.
    </span>
  </p>
</div>

            <p className="text-on-surface-variant mt-5 max-w-xl text-base md:text-lg">
              Synthesize your ideas with global innovators. 48 hours of pure creation starts here.
            </p>
          </motion.div>

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-[2rem] border border-primary/30 p-12 text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <CheckCircle2 size={40} />
                </div>
              </div>
              <h2 className="font-syne text-4xl font-bold text-on-surface mb-4">Registration Received!</h2>
              <p className="text-on-surface-variant text-lg max-w-md mx-auto mb-10">
                Your frequency has been synchronized with the circuit. Check your email for verification details.
              </p>
              <button
                onClick={handleBackHome}
                className="rounded-xl bg-primary text-on-primary px-8 py-3.5 font-syne font-semibold shadow-[0_0_20px_rgba(162,84,255,0.4)] hover:shadow-[0_0_30px_rgba(162,84,255,0.6)] transition-all"
              >
                Return to Command Center
              </button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-[2rem] border border-primary/30 p-6 md:p-10 shadow-[0_0_55px_rgba(162,84,255,0.18)]"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
                  <div className="space-y-5">
                    <h2 className="font-syne text-3xl md:text-4xl font-semibold text-on-surface">01. Participant Identity</h2>

                    <div className="space-y-2">
                      <FieldLabel>Full Name</FieldLabel>
                      <InputField
                        placeholder="Your fullname"
                        name="fullName"
                        type='text'
                        
                        value={formData.fullName}
                        onChange={handleChange}
                        required

                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FieldLabel>Email Address</FieldLabel>
                        <InputField

                          placeholder="[EMAIL_ADDRESS]"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <FieldLabel>Age</FieldLabel>
                        <InputField
                          placeholder="18-24"
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

<div className="space-y-2">
  <FieldLabel>Phone Number</FieldLabel>
  <InputField
    placeholder="9XXXXXXXXX"
    name="phoneNumber"
    value={formData.phoneNumber}
    onChange={handleChange}
  />
  {phoneError && (
    <p className="text-red-500 text-xs font-medium">
      {phoneError}
    </p>
  )}
</div>

                    <div className="space-y-2">
                      <FieldLabel>College/Institution</FieldLabel>
                      <InputField
                        placeholder="e.g. Orchid International College"
                        name="institution"
                        value={formData.institution}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <h2 className="font-syne text-3xl md:text-4xl font-semibold text-on-surface">02. Skillset & Focus</h2>

                    <div className="space-y-2">
                      <FieldLabel>Your Role</FieldLabel>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full bg-black/80 border border-outline-variant/40 rounded-lg px-4 py-3.5 text-sm text-on-surface focus:outline-none focus:border-primary transition-colors"
                      >
                        <option>Developer</option>
                        <option>Designer</option>
                        <option>Product Manager</option>
                        <option>Researcher</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <FieldLabel>Track of Interest</FieldLabel>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {tracks.map((track) => (
                          <label
                            key={track}
                            className="flex items-center gap-2.5 text-sm text-on-surface cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="track"
                              checked={selectedTrack === track}
                              onChange={() => setSelectedTrack(track)}
                              className="accent-primary"
                            />
                            {track}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <FieldLabel>GitHub / Portfolio</FieldLabel>
                        <InputField
                          placeholder="github.com/..."
                          name="githubPortfolio"
                          value={formData.githubPortfolio}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <FieldLabel>LinkedIn (Optional)</FieldLabel>
                        <InputField
                          placeholder="linkedin.com/in/..."
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-outline-variant/30" />

                <div className="space-y-5">
                  <h2 className="font-syne text-3xl md:text-4xl font-semibold text-on-surface">03. Squad Dynamics</h2>

                  <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end">
                    <div className="space-y-2">
                      <FieldLabel>Team Name (Optional)</FieldLabel>
                      <InputField
                        placeholder="The Binary Orchids"
                        name="teamName"
                        value={formData.teamName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <FieldLabel>Team Size</FieldLabel>
                      <div className="flex gap-2.5">
                        {teamSizes.map((size) => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setTeamSize(size)}
                            className={`min-w-20 rounded-lg px-4 py-2.5 text-sm font-syne font-semibold border transition-colors ${teamSize === size
                              ? 'border-primary bg-primary/25 text-on-surface'
                              : 'border-outline-variant/40 text-on-surface-variant hover:border-primary/50 hover:text-on-surface'
                              }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <FieldLabel>Any prior hackathon experience?</FieldLabel>
                    <textarea
                      rows={4}
                      required
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="List your previous hackathons or projects..."
                      className="w-full bg-black/80 border border-outline-variant/40 rounded-lg px-4 py-3.5 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <FieldLabel>Additional Team Members (Required)</FieldLabel>
                      <button
                        type="button"
                        onClick={addTeamMember}
                        disabled={teamMembers.length >= 3}
                        className="text-xs font-syne font-semibold px-3 py-1.5 rounded-md border border-primary/40 text-primary hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                      >
                        + Add Member
                      </button>
                    </div>

                    <div className="space-y-3">
                      {teamMembers.map((member, index) => (
                        <div
                          key={`member-${index}`}
                          className="grid md:grid-cols-[1fr_1fr_auto] gap-3 items-center"
                        >
                          <input
                            type="text"
                            required
                            value={member.name}
                            onChange={(e) =>
                              updateTeamMember(index, 'name', e.target.value)
                            }
                            placeholder={`Team Member ${index + 2} Name`}
                            className="w-full bg-black/80 border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:border-primary transition-colors"
                          />
                          <input
                            type="text"
                            value={member.github}
                            onChange={(e) =>
                              updateTeamMember(index, 'github', e.target.value)
                            }
                            placeholder="github.com/username (Optional)"
                            className="w-full bg-black/80 border border-outline-variant/40 rounded-lg px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none focus:border-primary transition-colors"
                          />
                          <button
                            type="button"
                            onClick={() => removeTeamMember(index)}
                            disabled={teamMembers.length <= 2}
                            className="px-3 py-2 rounded-lg border border-outline-variant/40 text-on-surface-variant hover:text-on-surface hover:border-primary/40 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-3 mt-6">
                    <input
                      type="checkbox"
                      id="coc"
                      required
                      checked={cocAccepted}
                      onChange={(e) => setCocAccepted(e.target.checked)}
                      className="mt-1 accent-primary h-4 w-4"
                    />
                    <label htmlFor="coc" className="text-sm text-on-surface-variant cursor-pointer select-none">
                      I have read and agree to the{' '}
                      <Link
                        to="/code-of-conduct" className="text-primary underline hover:text-primary-container transition-colors">
                        Code of Conduct
                      </Link>
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: cocAccepted && !loading ? 1.01 : 1 }}
                    whileTap={{ scale: cocAccepted && !loading ? 0.99 : 1 }}
                    type="submit"
                    disabled={!cocAccepted || loading}
                    className="w-full rounded-xl bg-linear-to-r from-primary to-primary-container text-on-primary-container font-syne font-semibold py-4 shadow-[0_0_25px_rgba(201,129,255,0.45)] disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none relative overflow-hidden"
                  >
                    <span className={loading ? 'opacity-0' : 'opacity-100'}>
                      Finalize Registration
                    </span>
                    {loading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-on-primary-container/30 border-t-on-primary-container rounded-full animate-spin" />
                      </div>
                    )}
                  </motion.button>

                  {isError && (
                    <p className="text-center text-red-400 text-sm font-medium">
                      {errorMessage}
                    </p>
                  )}

                  <p className="text-center text-xs text-on-surface-variant">
                    By registering, you also agree to our Privacy Policy.
                  </p>
                </div>
              </form>
            </motion.div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
