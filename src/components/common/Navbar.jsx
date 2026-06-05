import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // ✅ Fixed: Added 'motion' import here
import Logo from "../../assets/vks logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ Intersection Observer (NO URL HASH UPDATE)
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0.1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // ✅ Navbar scroll background
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Prevent background scroll (mobile menu)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "services", name: "Services" },
    { id: "gallery", name: "Gallery" },
    { id: "blog", name: "Blog" },
    { id: "contact", name: "Contact" },
  ];

  // ✅ Smooth scroll WITHOUT hash
  const handleScroll = (e, id) => {
    if (e) e.preventDefault();

    const section = document.getElementById(id);
    const header = document.querySelector("header");

    if (section && header) {
      const offset = header.offsetHeight;
      const top =
        section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setActiveSection(id);
    }

    setIsOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-white py-3 shadow-md" : "bg-transparent py-3"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-14"
      >
        {/* ✅ LOGO (CLEAN URL) */}
        <a
          href="/"
          onClick={(e) => handleScroll(e, "home")}
          aria-label="Go to homepage"
          className="flex items-center gap-3 z-50 no-underline"
        >
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden">
            <img
              src={Logo}
              alt="VKS Sirpa Kalai Koodam Logo"
              loading="eager"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold text-brand-primary">
              VKS{" "}
              <span className="text-brand-gold uppercase font-berkshire">
                Sirpa
              </span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-black text-stone-500">
              Kalai Koodam
            </span>
          </div>
        </a>

        {/* ✅ DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href="/"
                onClick={(e) => handleScroll(e, link.id)}
                aria-current={activeSection === link.id ? "page" : undefined}
                className={`text-sm font-bold transition-colors ${
                  activeSection === link.id
                    ? "text-brand-accent"
                    : "text-brand-primary/80 hover:text-brand-accent"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* ✅ CTA */}
        <div className="hidden lg:flex">
          <a
            href="/"
            onClick={(e) => handleScroll(e, "contact")}
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-white text-xs font-black rounded-xl"
          >
            Get a Quote <ArrowRight size={14} />
          </a>
        </div>

        {/* ✅ MOBILE BUTTON */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="lg:hidden p-2 z-50"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* ✅ MOBILE MENU (RESPONSIVE PROFESSIONAL VERSION) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-0 bg-white z-40 lg:hidden"
          >
            <div className="flex flex-col h-full px-6">
              {/* TOP HEADER */}
              <div className="pt-20 text-center">
                {/* <h2 className="text-base font-bold text-brand-primary">
                  VKS Menu
                </h2> */}
              </div>

              {/* CENTER NAV LINKS */}
              <div className="flex flex-col justify-center items-center flex-1 gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href="/"
                    onClick={(e) => handleScroll(e, link.id)}
                    className={`text-lg font-semibold transition-all duration-200 ${
                      activeSection === link.id
                        ? "text-brand-accent"
                        : "text-brand-primary/80"
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* BOTTOM CTA */}
              <div className="pb-10">
                <a
                  href="/"
                  onClick={(e) => handleScroll(e, "contact")}
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-brand-accent text-white text-sm font-bold rounded-xl shadow-md"
                >
                  Get a Quote <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>{" "}
    </header>
  );
};

export default Navbar;
