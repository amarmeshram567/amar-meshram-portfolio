import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/content.js';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';

const initial = { name: '', email: '', subject: '', message: '' };

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = 'Please enter your name.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = 'Enter a valid email address.';
  if (v.subject.trim().length < 3) e.subject = 'Subject should be at least 3 characters.';
  if (v.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
  return e;
}

function Field({ index, label, error, children }) {
  return (
    <label className="group block">
      <div className="flex items-center justify-between">
        <span className="font-body text-[10px] uppercase tracking-widest2 text-mute transition-colors duration-300 group-focus-within:text-amber">
          <span className="mr-2 text-amber/70">/{index}</span>
          {label}
        </span>
        {error && (
          <span className="font-body text-[10px] uppercase tracking-widest2 text-amber">
            REQUIRED
          </span>
        )}
      </div>

      <div className="relative mt-2">
        {children}
        {/* Animated Amber Focus Underline */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-amber shadow-[0_0_10px_rgba(230,166,83,0.6)] transition-transform duration-500 ease-out group-focus-within:scale-x-100"
        />
      </div>

      <span
        className={`mt-2 block min-h-[1rem] font-body text-xs text-amber transition-opacity duration-300 ${error ? 'opacity-100' : 'opacity-0'
          }`}
        role={error ? 'alert' : undefined}
      >
        {error}
      </span>
    </label>
  );
}

const inputCls =
  'w-full border-b border-bone/15 bg-transparent py-3.5 font-body text-base text-bone placeholder:text-bone/25 focus:border-amber/40 focus:outline-none transition-colors duration-300 aria-[invalid=true]:border-amber';

export default function Contact() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [isSubmitted, setIsSubmitted] = useState(false); // <--- Add this missing state hook

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate form values
    const eo = validate(values);
    setErrors(eo);
    if (Object.keys(eo).length) return;

    setStatus('sending');

    try {
      // Optional simulated delay
      await new Promise((res, rej) =>
        setTimeout(() => (Math.random() > 0.02 ? res() : rej()), 900)
      );

      // 2. Await the EmailJS call properly with subject included
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: values.name,
          email: values.email,
          subject: values.subject, // <--- Ensure subject is passed here
          message: values.message,
          time: new Date().toLocaleString(),
        },
        PUBLIC_KEY
      );


      // 3. Handle success state
      setIsSubmitted(true);
      toast.success("Message sent successfully!");

      setValues(initial);
      setStatus('success');

      setTimeout(() => setIsSubmitted(false), 3000);

    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus('error');
      toast.error("Failed to send message");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-bone/10 bg-ink-900 px-6 py-28 md:px-12 md:py-40"
    >
      {/* Subtle Atmospheric Warm Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-amber/5 blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-amber/[0.04] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1600px]">
        {/* Editorial Section Index Bar */}
        <div className="mb-16 flex items-center justify-between border-b border-bone/10 pb-6 md:mb-24">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-amber shadow-[0_0_8px_rgba(230,166,83,0.7)]" />
            <span className="font-display text-xs uppercase tracking-[0.25em] text-bone/60">
              04 / Initiate &amp; Connect
            </span>
          </div>
          <span className="hidden font-serif text-sm italic text-bone/50 sm:inline-block">
            Direct transmission channel
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Left Column: Monumental Heading + Direct Channels */}
          <div className="lg:col-span-6">
            <h2 className="font-display text-[14vw] font-medium leading-[0.85] tracking-tight text-bone md:text-[8vw]">
              LET&apos;S
              <br />
              BUILD
              <br />
              <span className="font-serif font-normal italic text-amber drop-shadow-[0_0_28px_rgba(230,166,83,0.12)]">
                SOMETHING.
              </span>
            </h2>

            <div className="mt-12 max-w-md border-l-2 border-amber/60 pl-6">
              <span className="mb-2 block font-body text-[10px] uppercase tracking-widest2 text-amber">
                // COLLABORATIONS &amp; INQUIRIES
              </span>
              <p className="font-serif text-2xl leading-snug text-bone/85 md:text-3xl">
                Have an idea, opportunity, or interesting problem?
              </p>
            </div>

            {/* Interactive Direct Channel List */}
            <div className="mt-14 max-w-md">
              <p className="mb-4 font-body text-[10px] uppercase tracking-widest2 text-mute">
                DIRECT CHANNELS
              </p>

              <ul className="divide-y divide-bone/10 border-y border-bone/10 font-body text-[11px] tracking-widest2">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    data-cursor="SEND"
                    className="link-line group flex items-center justify-between py-4 text-bone/90 transition-colors duration-300 hover:text-amber"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bone/15 bg-ink-800 text-amber transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-ink-900">
                        <Mail size={14} />
                      </span>
                      <span>EMAIL ME</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-sm text-amber opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="OPEN"
                    className="link-line group flex items-center justify-between py-4 text-bone/90 transition-colors duration-300 hover:text-amber"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bone/15 bg-ink-800 text-amber transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-ink-900">
                        <Linkedin size={14} />
                      </span>
                      <span>LINKEDIN</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-sm text-amber opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </a>
                </li>

                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="OPEN"
                    className="link-line group flex items-center justify-between py-4 text-bone/90 transition-colors duration-300 hover:text-amber"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-bone/15 bg-ink-800 text-amber transition-all duration-300 group-hover:border-amber group-hover:bg-amber group-hover:text-ink-900">
                        <Github size={14} />
                      </span>
                      <span>GITHUB</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-sm text-amber opacity-60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Architectural Transmission Console Form */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="group/form relative">
              {/* Offset Architectural Wireframe */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2.5 border border-bone/10 transition-transform duration-700 ease-out group-hover/form:translate-x-1 group-hover/form:translate-y-1 group-hover/form:border-amber/25"
              />

              {/* Precision Amber Corner Crosshairs */}
              <span className="pointer-events-none absolute -left-2.5 -top-2.5 z-20 h-3 w-3 border-l-2 border-t-2 border-amber" />
              <span className="pointer-events-none absolute -right-2.5 -top-2.5 z-20 h-3 w-3 border-r-2 border-t-2 border-amber" />
              <span className="pointer-events-none absolute -bottom-2.5 -left-2.5 z-20 h-3 w-3 border-b-2 border-l-2 border-amber" />
              <span className="pointer-events-none absolute -bottom-2.5 -right-2.5 z-20 h-3 w-3 border-b-2 border-r-2 border-amber" />

              <div className="relative border border-bone/15 bg-ink-800/70 p-8 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.85)] backdrop-blur-md md:p-10">
                {/* Console Top HUD Bar */}
                <div className="mb-8 flex items-center justify-between border-b border-bone/10 pb-4">
                  <span className="font-body text-[10px] uppercase tracking-widest2 text-bone/70">
                    TRANSMISSION // FORM
                  </span>
                  <span className="flex items-center gap-2 font-body text-[10px] uppercase tracking-widest2 text-amber">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
                    READY
                  </span>
                </div>

                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="space-y-6"
                  aria-label="Contact form"
                >
                  <Field index="01" label="NAME" error={errors.name}>
                    <input
                      name="name"
                      value={values.name}
                      onChange={onChange}
                      className={inputCls}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      autoComplete="name"
                    />
                  </Field>

                  <Field index="02" label="EMAIL" error={errors.email}>
                    <input
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      className={inputCls}
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      autoComplete="email"
                    />
                  </Field>

                  <Field index="03" label="SUBJECT" error={errors.subject}>
                    <input
                      name="subject"
                      value={values.subject}
                      onChange={onChange}
                      className={inputCls}
                      placeholder="What is this about?"
                      aria-invalid={!!errors.subject}
                    />
                  </Field>

                  <Field index="04" label="MESSAGE" error={errors.message}>
                    <textarea
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={onChange}
                      className={`${inputCls} resize-none`}
                      placeholder="Tell me a little more"
                      aria-invalid={!!errors.message}
                    />
                  </Field>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      data-cursor="SEND"
                      className="group flex w-full items-center justify-between border border-amber/40 bg-amber/10 px-6 py-4 font-display text-lg tracking-tight text-amber transition-all duration-500 hover:border-amber hover:bg-amber hover:text-ink-900 hover:shadow-[0_0_30px_rgba(230,166,83,0.3)] disabled:opacity-50"
                    >
                      <span>
                        {status === 'sending' ? 'SENDING…' : 'SEND MESSAGE'}
                      </span>
                      <ArrowRight
                        size={20}
                        className="transition-transform duration-500 group-hover:translate-x-1.5"
                      />
                    </button>
                  </div>

                  <p
                    role="status"
                    className={`font-body text-xs tracking-wide transition-opacity duration-500 ${status === 'success' || status === 'error'
                      ? 'opacity-100'
                      : 'opacity-0'
                      }`}
                  >
                    {status === 'success' && (
                      <span className="flex items-center gap-2 text-cobalt">
                        <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
                        Thanks, your message has been received.
                      </span>
                    )}
                    {status === 'error' && (
                      <span className="flex items-center gap-2 text-amber">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                        Something went wrong. Please email me directly.
                      </span>
                    )}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}