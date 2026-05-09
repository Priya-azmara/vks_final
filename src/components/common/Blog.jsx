import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Blog Data
const blogs = [
  {
    id: "cement-artworks",
    title: "Modern Cement Artworks for Luxury Outdoor Spaces",
    desc: "From textured walls to custom sculptures, cement art is redefining outdoor aesthetics with durability and bold design.",
    category: "Cement Art",
    date: "Aug 18, 2025",
    image:
      "https://i.pinimg.com/736x/3d/34/ec/3d34ec7ba72e3ef48e1bc01f966ffff9.jpg",
  },
  {
    id: "park-art-designs",
    title: "Creative Park Art Works That Transform Public Spaces",
    desc: "Art benches, pathways, and artistic rock structures bring character and usability to modern parks.",
    category: "Art Works",
    date: "Sep 10, 2025",
    image:
      "https://i.pinimg.com/736x/f4/2e/d3/f42ed32fac25fa16c102e3df2b18b0be.jpg",
  },
  {
    id: "temple-idol-craft",
    title: "Temple Idol Sculpting: Where Devotion Meets Craftsmanship",
    desc: "Every idol tells a story — crafted with precision, tradition, and spiritual depth by skilled artisans.",
    category: "Temple Art",
    date: "Oct 02, 2025",
    image:
      "https://i.pinimg.com/736x/b7/c3/1b/b7c31b376da3bd3633d95ac113f872a7.jpg",
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section
      id="blog"
      className="bg-[#1C1917] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-16"
    >
      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-14 sm:mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6"
        >
          Insights & Inspirations
        </motion.h1>

        <p className="text-stone-400 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          Explore the world of traditional sirpam, modern sculptures, and
          artistic cement creations.
        </p>
      </div>

      {/* FEATURED BLOG */}
      <div className="max-w-6xl mx-auto mb-14 sm:mb-20">
        <div
          onClick={() => navigate("/blog/sirpam-art")}
          className="cursor-pointer bg-gradient-to-r from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 rounded-3xl p-5 sm:p-8 md:p-12 flex flex-col md:flex-row gap-6 sm:gap-10 items-center hover:scale-[1.01] transition-all"
        >
          {/* TEXT */}
          <div className="flex-1 text-center md:text-left">
            <span className="text-[#D4AF37] text-xs sm:text-sm uppercase tracking-widest">
              Featured Article
            </span>

            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mt-3 sm:mt-4 mb-3 sm:mb-4">
              Preserving Heritage Through Cement Sculptures
            </h2>

            <p className="text-stone-400 text-sm sm:text-base mb-4 sm:mb-6">
              Cement sculptures are not just structures — they are a legacy.
              Learn how traditional artisans preserve culture through detailed
              craftsmanship.
            </p>

            <div className="flex justify-center md:justify-start items-center gap-2 text-[#D4AF37] font-semibold">
              Read More <ArrowRight size={16} />
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex-1 w-full h-52 sm:h-64 md:h-80 rounded-2xl overflow-hidden">
            <img
              src="https://i.pinimg.com/736x/65/08/7e/65087e138faa8d0adfcdc5f256357695.jpg"
              alt="Featured Blog"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ y: -6 }}
            onClick={() => navigate(`/blog/${blog.id}`)}
            className="cursor-pointer bg-[#26221B] rounded-2xl overflow-hidden border border-stone-800 hover:border-[#D4AF37]/30 transition-all"
          >
            {/* IMAGE */}
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              className="w-full h-56 sm:h-80 md:h-72 object-cover"
            />

            {/* CONTENT */}
            <div className="p-4 sm:p-5">
              <span className="text-[10px] sm:text-xs text-orange-400 uppercase tracking-widest">
                {blog.category}
              </span>

              <p className="text-base sm:text-lg font-bold mt-2 mb-2">
                {blog.title}
              </p>

              <span className="text-xs sm:text-sm text-stone-400 mb-3 sm:mb-4">
                {blog.desc}
              </span>

              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs text-stone-500">
                  {blog.date}
                </span>

                <div className="flex items-center gap-1 text-xs sm:text-sm text-orange-400">
                  Read <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
