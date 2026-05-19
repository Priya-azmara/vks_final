import { useState, useEffect, useCallback } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/vks logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll effect (navbar background + active section)
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

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

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll when menu open
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
      className={`fixed top-0 w-full z-50  ${
        isScrolled || isOpen ? "bg-white  py-3" : "bg-transparent py-3"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between relative h-14">
        {/* LOGO & BRAND TEXT COMBINED IN A CLEAN FLEX BLOCK */}
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-3 text-left group focus:outline-none z-50"
        >
          {/* Constrained, high-fidelity logo image frame */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl overflow-hidden transition-transform group-hover:scale-105">
            <img
              src={Logo}
              alt="VKS Logo"
              className="w-full h-full object-contain inverted-colors:*:"
            />
          </div>

          {/* Typography grouping */}
          <div className="flex flex-col justify-center">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-brand-primary leading-none mb-1">
              VKS{" "}
              <span className="text-brand-gold uppercase font-berkshire">
                Sirpa
              </span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-black text-stone-500 group-hover:text-brand-accent transition-colors leading-none">
              Kalai Koodam
            </span>
          </div>
        </button>

        {/* DESKTOP NAV CHANNELS */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleScroll(link.id)}
                  className={`relative text-sm font-bold tracking-wide transition-colors py-2 group ${
                    activeSection === link.id
                      ? "text-brand-accent"
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
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CALL TO ACTION WORKFLOW */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={() => handleScroll("contact")}
            className="group flex items-center gap-2 px-5 py-2.5 bg-brand-accent text-white text-xs font-black uppercase tracking-wider rounded-xl hover:bg-orange-600 transition-all shadow-md shadow-orange-500/10 hover:shadow-lg active:scale-98"
          >
            <span>Get a Quote</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </button>
        </div>

        {/* MOBILE INTERACTION TOGGLE */}
        <button
          className="lg:hidden p-2 text-brand-primary z-50 rounded-xl hover:bg-stone-100 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* FULL RESPONSIVE MOBILE DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 lg:hidden h-dvh flex flex-col pt-28 px-6 sm:px-12"
          >
            <div className="flex flex-col gap-5 my-auto">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`text-3xl sm:text-4xl font-black text-left tracking-tight border-b border-stone-100 pb-3 transition-colors ${
                    activeSection === link.id
                      ? "text-brand-accent"
                      : "text-brand-primary"
                  }`}
                >
                  {link.name}
                </button>
              ))}

              {/* MOBILE CALL TO ACTION OVERLAY */}
              <div className="pt-6">
                <button
                  onClick={() => handleScroll("contact")}
                  className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-brand-accent text-white text-base font-bold rounded-xl shadow-lg shadow-orange-500/20"
                >
                  <span>Get a Quote</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
