import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import AboutImg from "../../assets/hero2.jpg";

/* COUNTER COMPONENT */
const StatCounter = ({ value, title, suffix = "+" }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count, value]);

  return (
    <div ref={ref} className="flex flex-col items-center lg:items-start">
      <div className="flex items-baseline gap-1">
        <motion.span className="text-3xl md:text-5xl font-berkshire text-slate-900">
          {rounded}
        </motion.span>
        <span className="text-xl md:text-2xl font-bold text-orange-600">
          {suffix}
        </span>
      </div>
      <p className="text-[10px] md:text-xs font-bold text-orange-900/60 uppercase tracking-[0.2em] mt-2">
        {title}
      </p>
    </div>
  );
};

const About = () => {
  /* ✅ SCROLL FUNCTION */
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* LEFT IMAGE */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src={AboutImg}
                alt="VKS Artistry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-6xl font-berkshire text-slate-900 mb-8">
              Honoring Tradition, <br />
              <span className="text-orange-400 font-light">
                Defining Artistry.
              </span>
            </h2>

            <p className="text-zinc-600 text-lg mb-10 max-w-2xl">
              At{" "}
              <span className="text-orange-500 font-medium italic">
                VKS Sirpa Kalai Koodam
              </span>
              , we craft sculptures that preserve heritage and elevate modern
              spaces.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 py-8 border-y border-slate-200 mb-10">
              <StatCounter value={28} title="Years Mastery" />
              <StatCounter value={500} title="Projects" />
              <StatCounter value={100} title="Clients" />
            </div>

            {/* ✅ BUTTON FIXED */}
            <div className="flex justify-center">
              <button
                onClick={() => handleScroll("services")}
                className="group relative flex items-center gap-4 px-7 py-3 bg-slate-900 text-white rounded-2xl font-bold text-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Know More</span>

                <HiOutlineArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-2 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-orange-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
