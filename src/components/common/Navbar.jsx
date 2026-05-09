import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll effect (navbar background)
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy (detect active section)
      const sections = document.querySelectorAll("section[id]");
      let current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // NAV LINKS
  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "services", name: "Services" },
    { id: "contact", name: "Contact" },
    { id: "blog", name: "Blog" },
  ];

  // Smooth scroll
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? "bg-white/95 backdrop-blur-xl border-b border-stone-200 py-3 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center relative h-12">
        {/* LOGO */}
        <div className="flex-1 lg:flex-none">
          <button
            onClick={() => handleScroll("home")}
            className="flex flex-col group"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tighter text-brand-primary">
              VKS <span className="text-brand-gold uppercase">Sirpa</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-stone-500 group-hover:text-brand-accent transition-colors">
              Kalai Koodam
            </span>
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className={`relative text-sm font-semibold transition-colors group ${
                    activeSection === link.id
                      ? "text-brand-accent"
                      : "text-brand-primary/80 hover:text-brand-accent"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300 ${
                      activeSection === link.id
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center ml-auto">
          <button
            onClick={() => handleScroll("contact")}
            className="group flex items-center gap-2 px-6 py-2.5 bg-brand-accent text-white text-sm font-bold rounded-saas hover:bg-orange-600 transition-all shadow-lg shadow-orange-200"
          >
            <span>Get a Quote</span>
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 text-brand-primary ml-auto z-50"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-0 bg-white z-40 lg:hidden h-dvh flex flex-col pt-32 px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`text-4xl font-bold text-left ${
                    activeSection === link.id
                      ? "text-brand-accent"
                      : "text-brand-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* MOBILE CTA */}
            <div className="mt-12">
              <button
                onClick={() => handleScroll("contact")}
                className="w-full flex justify-center items-center gap-2 px-6 py-3 bg-brand-accent text-white text-lg font-bold rounded-saas"
              >
                Get a Quote
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
