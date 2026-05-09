import { useNavigate } from "react-router-dom";
import avatar from "../assets/avatar.png";

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#060c1a]"
    >
      {/* Background décoratif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute right-0 top-0 w-full md:w-[55%] h-full
                        bg-gradient-to-l from-blue-900/20 via-blue-900/5 to-transparent" />
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2
                        w-48 h-48 md:w-80 md:h-80 rounded-full bg-blue-700/10 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full
                      grid grid-cols-1 md:grid-cols-2 gap-8 items-center
                      pt-28 pb-16 md:pt-24 md:pb-0">

        {/* Texte */}
        <div className="space-y-5 z-10 text-center md:text-left order-2 md:order-1">
          <p className="text-blue-400 font-semibold text-base sm:text-lg">Hello, I'm</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Full Stack
            <br />
            <span className="text-3xl sm:text-4xl md:text-5xl text-blue-400">
              Software Engineer
            </span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
            I build scalable, secure, and user-focused web applications and solutions that
            drive business value and deliver exceptional experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">

            {/* Download Resume — télécharge public/resume.pdf */}
            <a
              href="/resume.pdf"
              download="Alain_Momeni_Resume.pdf"
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500
                         text-white px-6 py-3 rounded-md font-semibold text-sm
                         transition-colors duration-200 cursor-pointer w-full sm:w-auto"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M16 12l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>

            {/* Contact Me — redirige vers /contact */}
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center gap-2 border border-gray-500
                         hover:border-gray-300 text-gray-300 hover:text-white
                         px-6 py-3 rounded-md font-semibold text-sm
                         transition-colors duration-200 cursor-pointer w-full sm:w-auto"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </button>

          </div>
        </div>

        {/* Avatar */}
        <div className="relative flex justify-center items-center z-10 order-1 md:order-2">
          <div className="absolute w-56 h-56 sm:w-80 sm:h-80 md:w-[520px] md:h-[520px] rounded-full
                          bg-blue-400/10 blur-[60px] md:blur-[80px] md:-translate-x-14" />
          <div className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-[440px] md:h-[440px] rounded-full
                          bg-blue-400/20 blur-[40px] md:blur-[50px] md:-translate-x-10" />
          <div className="absolute w-44 h-44 sm:w-60 sm:h-60 md:w-[415px] md:h-[415px] rounded-full
                          bg-blue-400/15 blur-[16px] md:blur-[20px] md:-translate-x-7" />
          <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-[360px] md:h-[360px]
                          rounded-full overflow-hidden
                          bg-gradient-to-b from-blue-900/40 to-[#0a1628]
                          border border-blue-400/20">
            <img
              src={avatar}
              alt="Alain Momeni Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}