import React from "react";
import { motion } from "framer-motion";

// Assets
import GodImg from "../../assets/god.jpg";
import InteriorImg from "../../assets/home-interior.jpg";
import ParkImg from "../../assets/park_work2.jpg";
import AnimalImg from "../../assets/bear.jpg";
import TempleImg from "../../assets/temple_image.jpg";
import CustomImg from "../../assets/coustomized_image.jpg";

const galleryItems = [
  { image: GodImg, title: "God Sculptures", category: "Sacred Art" },
  { image: InteriorImg, title: "Home Interior", category: "Modern Decor" },
  { image: ParkImg, title: "Park Sculptures", category: "Landscapes" },
  { image: AnimalImg, title: "Animal Art", category: "Wildlife" },
  { image: TempleImg, title: "Temple Works", category: "Heritage" },
  { image: CustomImg, title: "Custom Projects", category: "Bespoke" },
];

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="relative py-20 lg:py-28 bg-[#FAFAF9] overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[5rem] sm:text-[8rem] lg:text-[12rem] font-black text-slate-200/20 pointer-events-none font-berkshire whitespace-nowrap">
        GALLERY
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-orange-600 font-bold tracking-[0.3em] text-xs mb-3 uppercase">
            Our Works
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-berkshire text-slate-900">
            Masterpieces That <span className="text-orange-500">Inspire</span>
          </h2>
        </div>

        {/* GRID LAYOUT (FIXED MOBILE ISSUE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-3xl overflow-hidden shadow-xl"
            >
              {/* Image */}
              <div className="relative w-full h-70 sm:h-80 lg:h-380px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 p-5 w-full text-white">
                <p className="text-[10px] tracking-[0.2em] uppercase text-orange-400 font-bold mb-1">
                  {item.category}
                </p>
                <h3 className="text-xl sm:text-2xl font-berkshire">
                  {item.title}
                </h3>

                {/* Animated underline */}
                <div className="w-6 group-hover:w-full h-0.5 bg-orange-400 mt-3 transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
