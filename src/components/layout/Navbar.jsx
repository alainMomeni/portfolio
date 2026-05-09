import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../data/Nav_links";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu au changement de route
  useEffect(() => setMenuOpen(false), [location]);

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    if (href === "/about") return location.pathname === "/about";
    return false;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#060c1a]/95 backdrop-blur-sm shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-10">
          <span className="text-blue-400 font-bold text-lg font-mono">&lt;/&gt;</span>
          <span className="text-white font-semibold text-lg">
            Alain<span className="text-blue-400">Momeni</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className={`group relative text-sm font-medium transition-colors duration-200
                ${isActive(href) ? "text-white" : "text-gray-300 hover:text-white"}`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400
                            origin-right transition-transform duration-300 ease-out
                            ${isActive(href)
                              ? "scale-x-100"
                              : "scale-x-0 group-hover:scale-x-100"
                            }`}
              />
            </Link>
          ))}
          <Link
            to="/contact"
            className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200"
          >
            Contact Me
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden z-10 flex flex-col justify-center items-center w-9 h-9 gap-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#060c1a]/98 border-t border-[#0f1e3a] px-6 pb-6 pt-2 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`py-3 text-sm font-medium border-b border-[#0f1e3a] transition-colors duration-200
                ${isActive(href) ? "text-white" : "text-gray-400 hover:text-white"}`}
            >
              {label}
            </a>
          ))}

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-blue-600 hover:bg-blue-500 text-white px-5 py-3 rounded-md text-sm font-semibold text-center transition-colors duration-200"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}