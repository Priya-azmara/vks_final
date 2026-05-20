import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineArrowRight,
  HiOutlineSparkles,
  HiOutlineHome,
  HiOutlineSun,
  HiOutlineTrophy,
  HiOutlineBuildingLibrary,
  HiOutlineCube,
} from "react-icons/hi2";

// Assets
import GodImg from "../../assets/img1-god.jpg";
import InteriorImg from "../../assets/buddha.jpg";
import ParkImg from "../../assets/park_image.png";
import AnimalImg from "../../assets/peacocok.jpg";
import TempleImg from "../../assets/img2.jpg";
import CustomImg from "../../assets/coustomized_image.jpg";

const services = [
  {
    image: GodImg,
    icon: <HiOutlineSparkles />,
    title: "God Sculptures",
    desc: "Exquisite handcrafted deities following traditional shastras.",
  },
  {
    image: InteriorImg,
    icon: <HiOutlineHome />,
    title: "Interior & Wall Art",
    desc: "Elegant 3D wall murals for modern interiors.",
  },
  {
    image: ParkImg,
    icon: <HiOutlineSun />,
    title: "Park & Garden Art",
    desc: "Durable artistic structures for public spaces.",
  },
  {
    image: AnimalImg,
    icon: <HiOutlineTrophy />,
    title: "Animal Sculptures",
    desc: "Realistic animal designs for landscapes & villas.",
  },
  {
    image: TempleImg,
    icon: <HiOutlineBuildingLibrary />,
    title: "Temple Works",
    desc: "Traditional temple architecture & sculptures.",
  },
  {
    image: CustomImg,
    icon: <HiOutlineCube />,
    title: "Custom Projects",
    desc: "Tailor-made sculptures crafted to your vision.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      role="region"
      aria-labelledby="services-heading"
      className="py-20 lg:py-28 bg-[#FAFAF9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-orange-600 font-bold tracking-[0.3em] text-xs mb-3 uppercase"
            aria-label="Our expertise"
          >
            Our Expertise
          </p>

          <h2
            id="services-heading"
            className="text-3xl sm:text-5xl lg:text-6xl font-berkshire text-slate-900"
            aria-label="Sculpture services offered by VKS Sirpa Kalai Koodam"
          >
            Crafted <span className="text-orange-500">Services</span>
          </h2>
        </div>

        {/* GRID */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="List of sculpture services"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              role="listitem"
              aria-label={`${service.title} - ${service.desc}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="w-full h-90 aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} sculpture by VKS Sirpa Kalai Koodam`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* ICON */}
                <div
                  className="w-11 h-11 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-600 group-hover:text-white transition duration-300"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-berkshire text-slate-900 mb-2 group-hover:text-orange-600 transition">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
