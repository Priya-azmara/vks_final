import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// 1. DATA OBJECT DEFINED LOCALLY
const blogsData = {
  "sirpam-art": {
    title:
      "Preserving Heritage Through Cement Sculptures: The Evolution of Sirpa Kalai",
    category: "Featured Article",
    date: "Aug 05, 2026",
    image:
      "https://i.pinimg.com/736x/65/08/7e/65087e138faa8d0adfcdc5f256357695.jpg",
    content: `Traditional Tamil sculpture, or Sirpa Kalai, has filled our landscapes with sacred stone narratives for thousands of years. Today, modern master artisans are gracefully transitioning this heritage into a new era using specialized architectural cement compounds. 

    While ancient temples relied exclusively on granite, high-grade structural cement provides contemporary Sthapathis with incredible fluid design flexibility. This modern medium allows for deep, intricate undercut reliefs that solidify into near-indestructible iconography. By blending ancient mathematical proportions with rugged masonry techniques, we ensure that spiritual art and cultural legacies remain vibrant, durable, and highly resilient against intense seasonal weathering for generations to come.`,
  },
  "cement-artworks": {
    title: "Modern Cement Artworks: Elevating Luxury Outdoor Landscapes",
    category: "Cement Art",
    date: "Aug 18, 2026",
    image:
      "https://i.pinimg.com/736x/3d/34/ec/3d34ec7ba72e3ef48e1bc01f966ffff9.jpg",
    content: `From raw, textured relief accent walls to completely custom, monolithic standalone figures, premium cement artistry is rapidly becoming the crowning jewel of luxury architectural spaces. Contemporary outdoor designs are heavily embracing cement works for their crisp geometric capabilities and adaptable, organic finishing textures. 

    Integrating hand-sculpted masonry installations seamlessly shifts open courtyards, upscale residential properties, and corporate spaces into immersive, high-end private galleries. When treated with specialized protective sealants, these structural installations develop a timeless, elegant patina, proving that robust engineering and artistic refinement can live together in perfect harmony.`,
  },
  "park-art-designs": {
    title:
      "Creative Park Sculptures: Transforming Public Spaces into Open-Air Galleries",
    category: "Art Works",
    date: "Sep 10, 2026",
    image:
      "https://i.pinimg.com/736x/f4/2e/d3/f42ed32fac25fa16c102e3df2b18b0be.jpg",
    content: `Public parks are much more than simple patches of greenery—they are shared spaces meant to inspire. By introducing interactive, custom cement sculptures and thoughtfully engineered rock formations, we transform ordinary recreational grounds into regional landmarks. 

    Artistic concrete benches, decorative step-pathways, and thematic public installations invite human connection while quietly celebrating a region's storytelling heritage. Crafting these installations from reinforced cement guarantees that they remain visually captivating, structurally safe, and fully resistant to heavy public interaction and environmental wear over decades of communal use.`,
  },
  "temple-idol-craft": {
    title:
      "Temple Idol Sculpting: Where Sacred Devotion Meets Lifelong Craftsmanship",
    category: "Temple Art",
    date: "Oct 02, 2026",
    image:
      "https://i.pinimg.com/736x/b7/c3/1b/b7c31b376da3bd3633d95ac113f872a7.jpg",
    content: `The divine art of sculpting temple idols demands far more than raw technical precision; it requires a lifelong submission to the sacred guidelines of the Shilpa Shastras. Every singular line, specific hand gesture (Mudra), posture, and layered ornamentation details a precise, intentional cosmological narrative. 

    Our workshop honors these historical geometric ratios, breathing tangible life into raw materials to anchor community devotion. Whether hand-carving traditional medium blocks or shaping specialized, enduring cement statues, our artisans channel centuries of inherited lineage to create timeless focal pieces that radiate spiritual depth.`,
  },
};

// 2. ARRAY EXPORT FOR YOUR HOME PAGE GRID TO READ
export const blogsList = Object.entries(blogsData).map(([id, value]) => ({
  id,
  ...value,
  desc: value.content.substring(0, 120) + "...",
}));

// 3. CORE VIEW COMPONENT
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogsData[id];

  // Instantly reset scroll position to top when page mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Handle fallback for broken or typed incorrect URLs safely
  if (!blog) {
    return (
      <div className="bg-[#1C1917] text-white min-h-screen flex flex-col items-center justify-center px-6 font-outfit">
        <h2 className="text-xl font-bold mb-4 text-stone-400">
          Article Not Found
        </h2>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-[#D4AF37] font-bold border border-[#D4AF37]/20 bg-[#D4AF37]/5 px-4 py-2 rounded-xl transition-all hover:bg-[#D4AF37]/10"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </button>
      </div>
    );
  }

  return (
    <section className="bg-[#1C1917] text-stone-300 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-16 font-outfit">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-400 hover:text-[#D4AF37] transition-colors font-bold text-xs uppercase tracking-widest mb-10 group focus:outline-none"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span>Go Back</span>
        </button>

        {/* Category Tag & Date */}
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest mb-6">
          <span className="text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/20 px-3 py-1 rounded-xl">
            {blog.category}
          </span>
          <span className="text-stone-500">{blog.date}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-10 font-berkshire">
          {blog.title}
        </h1>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-12 shadow-2xl border border-stone-800 bg-stone-900"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Full Article Content */}
        <div className="text-stone-400 text-base sm:text-xl leading-relaxed text-justify space-y-6">
          <p className="whitespace-pre-line leading-relaxed">{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
