import React from "react";
import SliderComponent from "react-slick";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

// Assets
import SculptureImg from "../../assets/img1.jpg";
import ParkImg from "../../assets/hero1.jpg";
import InteriorImg from "../../assets/hero2.jpg";

const Slider = SliderComponent.default || SliderComponent;

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    fade: true,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
  };

  const backgroundImages = [
    { img: SculptureImg, alt: "Temple sculpture design" },
    { img: ParkImg, alt: "Park artistic sculptures" },
    { img: InteriorImg, alt: "Interior wall art design" },
  ];

  // ✅ Reusable scroll function (same as navbar)
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
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen overflow-hidden bg-[#2C2416]"
    >
      {/* CONTENT */}
      <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
        <div className="w-full max-w-4xl px-6 flex flex-col items-center text-center">
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mb-3 text-3xl md:text-5xl lg:text-6xl font-berkshire text-[#FAFAF9] drop-shadow-xl tracking-tight leading-tight"
          >
            Welcome to VKS Sirpa Kalai Koodam
          </motion.h1>

          {/* TAGLINE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-6 text-orange-400 font-outfit font-semibold tracking-[0.15em] text-xs md:text-sm uppercase"
          >
            Mastering Cement Artistry Since 1985
          </motion.p>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-10 text-[#FAFAF9]/80 font-outfit text-sm md:text-lg leading-relaxed max-w-2xl"
          >
            Experts in temple and park sculpture design, and elegant home
            interiors.
            <br className="hidden md:block" />
            We create customized sculptures tailored to your vision.
          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            {/* EXPLORE PROJECTS → GALLERY PAGE */}
            <button
              onClick={() => navigate("/gallery")}
              className="group flex items-center justify-center gap-2 px-7 py-3 text-sm font-bold text-[#1C1917] bg-orange-400 rounded-xl hover:bg-[#FAFAF9] hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              Explore Projects
              <HiOutlineArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* CONTACT PAGE */}
            <button
              onClick={() => navigate("/contact")}
              className="flex items-center justify-center px-7 py-3 text-sm font-bold text-[#FAFAF9] border border-[#FAFAF9]/20 rounded-xl backdrop-blur-md hover:bg-[#FAFAF9]/10 transition-all"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>

      {/* BACKGROUND SLIDER */}
      <Slider {...settings}>
        {backgroundImages.map((item, index) => (
          <div key={index} className="relative w-full h-screen outline-none">
            <motion.div
              initial={{ scale: 1.05 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6 }}
              className="absolute inset-0"
            >
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover opacity-30"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1C1917]/85 via-transparent to-[#1C1917]/95" />
            </motion.div>
          </div>
        ))}
      </Slider>

      {/* DOTS */}
      <style>{`
        .custom-dots {
          bottom: 40px !important;
        }

        .custom-dots li button {
          width: 8px !important;
          height: 8px !important;
          background: rgba(212, 175, 55, 0.3) !important;
          border-radius: 50% !important;
        }

        .custom-dots li button:before {
          display: none !important;
        }

        .custom-dots li.slick-active button {
          background: #D4AF37 !important;
          transform: scale(1.4);
        }

        @media (max-width: 768px) {
          .h-screen {
            height: 100svh;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
