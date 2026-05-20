import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/vks logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ✅ 1. Intersection Observer updates active status & URL hash without jarring jump
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            // Update URL hash without causing a page jump
            if (window.location.hash !== `#${id}`) {
              window.history.replaceState(null, "", `#${id}`);
            }
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

  // ✅ 2. Handle initial page load if URL has an existing hash (e.g., user reloads on #services)
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      // Small timeout allows the DOM to fully render before trying to scroll
      setTimeout(() => {
        handleScroll(null, id);
      }, 100);
    }
  }, []);

  // Navbar background scroll
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll
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

  // ✅ 3. Fixed smooth scroll handling actual anchor click events
  const handleScroll = (e, id) => {
    if (e) e.preventDefault(); // Prevent native instant browser jump

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

      // Update the hash in history
      window.history.pushState(null, "", `#${id}`);
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
        className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between relative h-14"
      >
        {/* LOGO - Now an anchor tag for SEO linking to root/home */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "home")}
          aria-label="VKS Sirpa Kalai Koodam - Go to homepage"
          className="flex items-center gap-3 text-left group focus:outline-none z-50 no-underline"
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl overflow-hidden">
            <img
              src={Logo}
              alt="VKS Sirpa Kalai Koodam Logo"
              loading="eager"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-brand-primary leading-none mb-1">
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

        {/* DESKTOP NAV - Changed elements from buttons to real anchor links */}
        <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                aria-current={activeSection === link.id ? "page" : undefined}
                className={`relative text-sm font-bold tracking-wide py-2 block transition-colors dynamic-link ${
                  activeSection === link.id
                    ? "text-brand-accent font-extrabold"
                    : "text-brand-primary/80 hover:text-brand-accent"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                    activeSection === link.id
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="group flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-white text-xs font-black uppercase rounded-xl no-underline hover:opacity-90 transition-opacity"
          >
            <span>Get a Quote</span>
            <ArrowRight size={14} />
          </a>
        </div>

        {/* MOBILE TRIGGER BUTTON */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          className="lg:hidden p-2 text-brand-primary z-50 rounded-xl focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 lg:hidden h-dvh flex flex-col pt-28 px-6"
          >
            <div className="flex flex-col gap-5 my-auto">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScroll(e, link.id)}
                  className={`text-3xl font-black text-left border-b pb-3 no-underline ${
                    activeSection === link.id
                      ? "text-brand-accent"
                      : "text-brand-primary"
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
