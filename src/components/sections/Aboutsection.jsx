import { useRef, useEffect, useState } from "react";
import Tag from "../atoms/Tag";
import SectionTitle from "../atoms/SectionTitle";

function useInView(threshold = 0.2) {
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

const TechIllustration = () => (
  <svg viewBox="0 0 420 400" fill="none" xmlns="http://www.w3.org/2000/svg"
       className="w-full max-w-xs sm:max-w-sm md:max-w-lg opacity-90">
    <line x1="210" y1="82"  x2="210" y2="138" stroke="#1a3a6a" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="210" y1="262" x2="210" y2="318" stroke="#1a3a6a" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="82"  y1="200" x2="138" y2="200" stroke="#1a3a6a" strokeWidth="1.5" strokeDasharray="4 3"/>
    <line x1="282" y1="200" x2="338" y2="200" stroke="#1a3a6a" strokeWidth="1.5" strokeDasharray="4 3"/>
    <circle cx="210" cy="110" r="4" fill="#60A5FA" opacity="0.8"/>
    <circle cx="210" cy="290" r="4" fill="#60A5FA" opacity="0.8"/>
    <circle cx="112" cy="200" r="4" fill="#60A5FA" opacity="0.8"/>
    <circle cx="308" cy="200" r="4" fill="#60A5FA" opacity="0.8"/>
    <rect x="150" y="18" width="120" height="70" rx="8" fill="#07101f" stroke="#1a3a6a" strokeWidth="1.5"/>
    <line x1="168" y1="43"  x2="262" y2="43"  stroke="#60A5FA" strokeWidth="1.2" opacity="0.6"/>
    <line x1="168" y1="56"  x2="238" y2="56"  stroke="#1a3a6a" strokeWidth="1.2"/>
    <line x1="168" y1="67"  x2="218" y2="67"  stroke="#1a3a6a" strokeWidth="1.2" opacity="0.5"/>
    <rect x="150" y="312" width="120" height="70" rx="8" fill="#07101f" stroke="#1a3a6a" strokeWidth="1.5"/>
    <ellipse cx="210" cy="330" rx="32" ry="9"  fill="none" stroke="#60A5FA" strokeWidth="1.2" opacity="0.7"/>
    <line x1="178" y1="330" x2="178" y2="358" stroke="#60A5FA" strokeWidth="1.2" opacity="0.7"/>
    <line x1="242" y1="330" x2="242" y2="358" stroke="#60A5FA" strokeWidth="1.2" opacity="0.7"/>
    <ellipse cx="210" cy="358" rx="32" ry="9"  fill="none" stroke="#60A5FA" strokeWidth="1.2" opacity="0.7"/>
    <rect x="18" y="150" width="110" height="100" rx="8" fill="#07101f" stroke="#1a3a6a" strokeWidth="1.5"/>
    <rect x="30" y="162" width="86" height="52" rx="4" fill="#0d1e35" stroke="#1a3a6a" strokeWidth="1"/>
    <line x1="38" y1="176" x2="92" y2="176" stroke="#60A5FA" strokeWidth="1.2" opacity="0.6"/>
    <line x1="38" y1="186" x2="82" y2="186" stroke="#1a3a6a" strokeWidth="1"/>
    <line x1="38" y1="196" x2="76" y2="196" stroke="#1a3a6a" strokeWidth="1" opacity="0.6"/>
    <circle cx="40" cy="232" r="3" fill="#1a3a6a"/>
    <circle cx="51" cy="232" r="3" fill="#1a3a6a"/>
    <circle cx="62" cy="232" r="3" fill="#1a3a6a"/>
    <rect x="292" y="150" width="110" height="100" rx="8" fill="#07101f" stroke="#1a3a6a" strokeWidth="1.5"/>
    <circle cx="347" cy="178" r="14" fill="none" stroke="#60A5FA" strokeWidth="1.2" opacity="0.7"/>
    <circle cx="315" cy="215" r="8"  fill="none" stroke="#1a3a6a" strokeWidth="1"/>
    <circle cx="347" cy="215" r="8"  fill="none" stroke="#1a3a6a" strokeWidth="1"/>
    <circle cx="379" cy="215" r="8"  fill="none" stroke="#1a3a6a" strokeWidth="1"/>
    <line x1="323" y1="215" x2="339" y2="215" stroke="#1a3a6a" strokeWidth="1"/>
    <line x1="355" y1="215" x2="371" y2="215" stroke="#1a3a6a" strokeWidth="1"/>
    <line x1="347" y1="192" x2="347" y2="207" stroke="#1a3a6a" strokeWidth="1"/>
    <rect x="140" y="140" width="140" height="120" rx="10" fill="#07101f" stroke="#60A5FA" strokeWidth="1.5"/>
    <rect x="140" y="140" width="140" height="120" rx="10" fill="#60A5FA" fillOpacity="0.04"/>
    <circle cx="150" cy="150" r="3" fill="#60A5FA" opacity="0.6"/>
    <circle cx="270" cy="150" r="3" fill="#60A5FA" opacity="0.6"/>
    <circle cx="150" cy="250" r="3" fill="#60A5FA" opacity="0.6"/>
    <circle cx="270" cy="250" r="3" fill="#60A5FA" opacity="0.6"/>
    <text x="210" y="215" textAnchor="middle" fill="#60A5FA" fontSize="28"
          fontFamily="monospace" fontWeight="bold" opacity="0.95">&lt;/&gt;</text>
    <circle cx="128" cy="88"  r="2" fill="#60A5FA" opacity="0.35"/>
    <circle cx="298" cy="312" r="2" fill="#60A5FA" opacity="0.35"/>
    <circle cx="385" cy="118" r="2" fill="#60A5FA" opacity="0.25"/>
    <circle cx="38"  cy="282" r="2" fill="#60A5FA" opacity="0.25"/>
  </svg>
);

const JOURNEY = [
  {
    id: "protege",
    period: "2025 – Present",
    role: "Technical & Security Consultant",
    company: "PROTEGE QV",
    description:
      "Led the complete overhaul and hardening of the IT infrastructure for the organization's 30th anniversary. Implemented a resilient 3-2-1 backup policy, secured all communications via Signal and VPN, and delivered cybersecurity awareness sessions covering phishing and brute-force threats. Ensured secure technical management of international webinars including JIF 2026 – Kigali Declaration.",
    tags: [
      { label: "Cybersecurity", color: "blue"  },
      { label: "IT Audit",      color: "blue"  },
      { label: "VPN",           color: "dark"  },
      { label: "RBAC",          color: "dark"  },
      { label: "Training",      color: "green" },
    ],
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#60A5FA" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    id: "neema",
    period: "2020 – 2025",
    role: "Fullstack Software Engineer & Power Platform Consultant",
    company: "NEEMA & CRM ASSETS CONSULTING",
    description:
      "Built a production SaaS platform (React, TypeScript, Node.js, PostgreSQL) for OLA fuel station management — covering real-time stock tracking, invoicing, and JWT-secured authentication. Designed and deployed a custom ERP with Microsoft Power Platform as a Low-Code alternative to Odoo, automating procurement with RBAC enforcement. Delivered interactive Power BI dashboards enabling real-time decision-making.",
    tags: [
      { label: "React",          color: "blue"  },
      { label: "TypeScript",     color: "blue"  },
      { label: "Node.js",        color: "green" },
      { label: "PostgreSQL",     color: "green" },
      { label: "Power Platform", color: "dark"  },
      { label: "Power BI",       color: "dark"  },
    ],
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#60A5FA" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    ),
  },
  {
    id: "iai",
    period: "2017 – 2020",
    role: "Engineering Degree in Computer Science",
    company: "Institut Africain d'Informatique (IAI-Cameroun)",
    description:
      "Graduated with a BAC+3 in Software Engineering, building solid foundations in algorithms, system architecture, relational databases, and agile methodologies. Developed end-to-end projects bridging theoretical computer science with hands-on engineering practice.",
    tags: [
      { label: "Software Engineering", color: "blue"  },
      { label: "Algorithms",           color: "dark"  },
      { label: "Databases",            color: "dark"  },
      { label: "Agile",                color: "green" },
    ],
    icon: (
      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="#60A5FA" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3.33 1.67 8.67 1.67 12 0v-5"/>
      </svg>
    ),
  },
];

export default function AboutSection() {
  const [aboutTitleRef, aboutTitleVisible] = useInView(0.8);
  const [journeyRef, journeyVisible] = useInView(0.05);

  return (
    <>
      {/* About Me */}
      <section id="about" className="bg-[#060c1a] py-24 border-t border-[#0f1e3a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Gauche — texte (remonté légèrement) */}
            <div className="space-y-6 -mt-0 md:-mt-10 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase">
                  Get To Know Me
                </p>
              </div>

              <div ref={aboutTitleRef}>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">About Me</h2>
                <div className={`w-10 h-0.5 bg-blue-500 origin-right mx-auto md:mx-0
                                 transition-transform duration-700 ease-out
                                 ${aboutTitleVisible ? "scale-x-100" : "scale-x-0"}`} />
              </div>

              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>
                  I'm a Full Stack Software Engineer & Digitalization Consultant with 5+ years
                  of experience designing and deploying secure, scalable web applications and enterprise
                  digital solutions. I specialize in bridging custom code and Low-Code platforms to
                  generate real, measurable business impact.
                </p>
                <p>
                  My expertise spans the full product lifecycle — from architecting React/TypeScript
                  frontends and Node.js APIs to building ERP systems and automating complex business
                  workflows with Microsoft Power Platform. I thrive at the intersection of engineering
                  rigor and business strategy, turning complexity into clarity.
                </p>
                <p>
                  When I'm not building, I'm deepening my cybersecurity knowledge, contributing to the
                  developer community, or mentoring the next generation of engineers navigating their
                  path into the industry.
                </p>
              </div>
            </div>

            {/* Droite — illustration (centrée sur mobile) */}
            <div className="flex justify-center items-center">
              <TechIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="bg-[#060c1a] py-16 sm:py-20 border-t border-[#0f1e3a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          <SectionTitle>Professional Journey</SectionTitle>

          <div ref={journeyRef} className="relative">
            {/* Ligne verticale timeline */}
            <div className="absolute left-[27px] top-2 bottom-2 w-px bg-[#1a2540]" />

            <div className="space-y-6 sm:space-y-8">
              {JOURNEY.map(({ id, period, role, company, description, tags, icon }, i) => (
                <div
                  key={id}
                  className={`relative flex gap-3 sm:gap-6 transition-all duration-700 ease-out ${
                    journeyVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {/* Dot timeline */}
                  <div className="flex-shrink-0 flex flex-col items-center pt-7 z-10">
                    <div className="w-[14px] h-[14px] rounded-full bg-blue-500
                                    border-2 border-[#060c1a] shadow-[0_0_8px_2px_rgba(96,165,250,0.4)]" />
                  </div>

                  {/* Card */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 flex-1
                                  bg-[#07101f] border border-[#1a2540]
                                  rounded-xl p-4 sm:p-6
                                  hover:border-blue-800/60 transition-colors duration-300">
                    {/* Icône */}
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl
                                    bg-blue-900/30 border border-blue-800/40
                                    flex items-center justify-center self-start">
                      {icon}
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 space-y-2 min-w-0">
                      <p className="text-blue-400 text-xs sm:text-sm font-semibold">{period}</p>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-snug">{role}</h3>
                      <p className="text-blue-300 text-xs sm:text-sm font-medium">{company}</p>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{description}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                        {tags.map((tag) => (
                          <Tag key={tag.label} label={tag.label} color={tag.color} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}