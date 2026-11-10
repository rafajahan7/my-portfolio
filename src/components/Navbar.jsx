
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isResumePage = location.pathname === "/resume";

  // Scroll and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = link.id;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-gray-900 group flex items-center gap-2"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono text-sm shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            RJ
          </span>

          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-600 bg-clip-text text-transparent">
            Rafa Jahan<span className="text-blue-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={`relative group py-1 font-medium text-sm transition-colors duration-200 ${
                    isLinkActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${
                      isLinkActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/resume"
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer shadow-md ${
              isResumePage
                ? "bg-blue-600 text-white ring-2 ring-blue-400 ring-offset-2 shadow-blue-500/30"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35"
            }`}
          >
            <HiDocumentText className="text-lg" />
            <span>Resume</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          className="md:hidden text-2xl text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[500px] py-6 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className={`block py-1.5 text-base font-medium transition ${
                    isLinkActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}

          {/* Mobile Resume Button */}
          <li className="pt-2 border-t border-gray-100">
            <Link
              to="/resume"
              onClick={closeMenu}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold shadow transition ${
                isResumePage
                  ? "bg-blue-600 text-white ring-2 ring-blue-400"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
              }`}
            >
              <HiDocumentText className="text-xl" />
              <span>View Full Resume</span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
