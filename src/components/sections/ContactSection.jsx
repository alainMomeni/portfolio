import { useState, useRef, useEffect } from "react";

/* ── Hook IntersectionObserver ── */
function useInView(threshold = 0.8) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Constellation SVG décorative ── */
const ConstellationBg = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    viewBox="0 0 500 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="320" y1="60"  x2="420" y2="130" stroke="#60A5FA" strokeWidth="0.8" opacity="0.5"/>
    <line x1="420" y1="130" x2="460" y2="80"  stroke="#60A5FA" strokeWidth="0.8" opacity="0.5"/>
    <line x1="420" y1="130" x2="390" y2="220" stroke="#60A5FA" strokeWidth="0.8" opacity="0.4"/>
    <line x1="390" y1="220" x2="460" y2="260" stroke="#60A5FA" strokeWidth="0.8" opacity="0.4"/>
    <line x1="390" y1="220" x2="320" y2="280" stroke="#60A5FA" strokeWidth="0.8" opacity="0.3"/>
    <line x1="460" y1="260" x2="480" y2="340" stroke="#60A5FA" strokeWidth="0.8" opacity="0.3"/>
    <line x1="320" y1="60"  x2="370" y2="30"  stroke="#60A5FA" strokeWidth="0.8" opacity="0.4"/>
    <line x1="460" y1="80"  x2="490" y2="50"  stroke="#60A5FA" strokeWidth="0.8" opacity="0.3"/>
    <circle cx="320" cy="60"  r="3.5" fill="#60A5FA" opacity="0.9"/>
    <circle cx="420" cy="130" r="4.5" fill="#60A5FA" opacity="1"/>
    <circle cx="460" cy="80"  r="2.5" fill="#93C5FD" opacity="0.8"/>
    <circle cx="390" cy="220" r="3"   fill="#60A5FA" opacity="0.8"/>
    <circle cx="460" cy="260" r="2.5" fill="#93C5FD" opacity="0.7"/>
    <circle cx="320" cy="280" r="2"   fill="#60A5FA" opacity="0.6"/>
    <circle cx="480" cy="340" r="2"   fill="#60A5FA" opacity="0.5"/>
    <circle cx="370" cy="30"  r="2"   fill="#93C5FD" opacity="0.6"/>
    <circle cx="490" cy="50"  r="1.5" fill="#60A5FA" opacity="0.5"/>
    <circle cx="420" cy="130" r="20"  fill="#60A5FA" opacity="0.06"/>
    <circle cx="420" cy="130" r="40"  fill="#60A5FA" opacity="0.03"/>
  </svg>
);

/* ── Icônes ── */
const MailIcon = ({ size = "w-5 h-5" }) => (
  <svg className={size} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
  </svg>
);

const LockIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
);

const UserIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z"/>
  </svg>
);

const MessageIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
);

/* ── Données contacts ── */
const CONTACT_LINKS = [
  {
    id: "email",
    label: "Email",
    handle: "alainmomeni01@gmail.com",
    href: "mailto:alainmomeni01@gmail.com",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "linkedin.com/in/alain-momeni",
    href: "https://www.linkedin.com/in/alain-momeni-a702442a3/",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    handle: "github.com/alainMomeni",
    href: "https://github.com/alainMomeni",
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
];

/* ── Composant principal ── */
export default function ContactSection() {
  const [form, setForm]         = useState({ name: "", email: "", message: "" });
  const [sent, setSent]         = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [titleRef, titleVisible] = useInView(0.8);

  const handleChange = (e) => {
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur inconnue");

      setSent(true);
    } catch (err) {
      setError(err.message || "Échec de l'envoi. Réessaie plus tard.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#060c1a] min-h-screen py-24 border-t border-[#0f1e3a]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* ── Colonne gauche — Formulaire ── */}
          <div className="bg-[#07101f] border border-[#1a2540] rounded-2xl p-6 sm:p-8">

            {/* En-tête */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-blue-900/40 border border-blue-800/50
                              flex items-center justify-center shrink-0">
                <MailIcon size="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Send Me a Message</h3>
                <p className="text-gray-500 text-sm">
                  Fill out the form below and I'll get back to you.
                </p>
              </div>
            </div>

            {sent ? (
              /* ── Confirmation ── */
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-900/40 border border-blue-500/40
                                flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor"
                       strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h4 className="text-white font-bold text-xl">Message Sent!</h4>
                <p className="text-gray-400 text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium
                             transition-colors duration-200 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="space-y-5">

                {/* Your Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                      <UserIcon />
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-[#0d1e35] border border-[#1a2540] rounded-xl
                                 pl-11 pr-4 py-3.5 text-white text-sm placeholder-gray-600
                                 focus:outline-none focus:border-blue-600
                                 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Your Email */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2">
                      <MailIcon size="w-4 h-4 text-gray-500" />
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      className="w-full bg-[#0d1e35] border border-[#1a2540] rounded-xl
                                 pl-11 pr-4 py-3.5 text-white text-sm placeholder-gray-600
                                 focus:outline-none focus:border-blue-600
                                 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Your Message */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-4">
                      <MessageIcon />
                    </span>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      rows={5}
                      className="w-full bg-[#0d1e35] border border-[#1a2540] rounded-xl
                                 pl-11 pr-4 py-3.5 text-white text-sm placeholder-gray-600
                                 focus:outline-none focus:border-blue-600
                                 transition-colors duration-200 resize-y min-h-[120px]"
                    />
                  </div>
                </div>

                {/* Message d'erreur */}
                {error && (
                  <div className="flex items-center gap-2 bg-red-900/20 border border-red-700/40
                                  rounded-xl px-4 py-3 text-red-400 text-sm">
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor"
                         strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v4M12 16h.01"/>
                    </svg>
                    {error}
                  </div>
                )}

                {/* Bouton Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.name || !form.email || !form.message}
                  className="w-full flex items-center justify-center gap-2
                             bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/50
                             disabled:cursor-not-allowed text-white font-semibold text-sm
                             py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10"
                                stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <SendIcon />
                      Send Message
                    </>
                  )}
                </button>

                {/* Note sécurité */}
                <div className="flex items-center gap-2 text-gray-600 text-xs">
                  <LockIcon />
                  <span>Your information is secure and will never be shared.</span>
                </div>

              </div>
            )}
          </div>

          {/* ── Colonne droite — Infos contact ── */}
          <div className="relative space-y-8">

            {/* Constellation décorative */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              <ConstellationBg />
            </div>

            <div className="relative z-10 space-y-8">

              {/* Titre avec animation underline au scroll */}
              <div ref={titleRef}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                    Get In Touch
                  </p>
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
                  Let's Build
                  <br />
                  Something
                  <br />
                  <span className="text-blue-400">Together</span>
                </h2>
                {/* Ligne animée — identique aux autres sections */}
                <div
                  className={`w-10 h-0.5 bg-blue-500 mt-4 origin-right
                              transition-transform duration-700 ease-out
                              ${titleVisible ? "scale-x-100" : "scale-x-0"}`}
                />
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                I'm currently open to new opportunities and exciting collaborations.
                Let's create impactful solutions that drive real business value.
              </p>

              {/* Cartes contact */}
              <div className="space-y-3">
                {CONTACT_LINKS.map(({ id, label, handle, href, icon }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-[#07101f]/80 border border-[#1a2540]
                               rounded-xl p-4 hover:border-blue-700/60 group
                               transition-colors duration-200 cursor-pointer"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-900/40 border border-blue-800/50
                                    flex items-center justify-center shrink-0">
                      {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-sm font-semibold">{label}</p>
                      <p className="text-gray-500 text-xs truncate">{handle}</p>
                    </div>
                    <span className="text-gray-600 group-hover:text-blue-400
                                     group-hover:translate-x-1 transition-all duration-200 shrink-0">
                      <ArrowIcon />
                    </span>
                  </a>
                ))}
              </div>

              {/* Badge timezone */}
              <div className="inline-flex items-center gap-2.5 bg-[#07101f]/80
                              border border-[#1a2540] rounded-xl px-4 py-3">
                <span className="text-gray-400"><ClockIcon /></span>
                <span className="text-white font-semibold text-xs">GMT+1 Timezone</span>
                <span className="text-gray-600 text-xs">·</span>
                <span className="text-gray-400 text-xs">Usually replies within 24 hours</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}