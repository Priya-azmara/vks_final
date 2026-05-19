import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiFileText } from "react-icons/fi";

const TermsOfService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#1C1917] text-stone-300 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-16 font-outfit">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-400 hover:text-[#D4AF37] transition-colors font-bold text-xs uppercase tracking-widest mb-10 group"
        >
          <FiArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span>Go Back</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-600/10 text-orange-500 rounded-2xl border border-orange-600/10">
            <FiFileText size={24} />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white font-berkshire tracking-wide">
            Terms of Service
          </h1>
        </div>

        <p className="text-stone-500 text-xs uppercase tracking-wider mb-12">
          Last Updated: May 2026
        </p>

        <div className="space-y-8 text-stone-400 text-justify leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              1. Scope of Artistry Work
            </h2>
            <p>
              VKS Sirpa Kalai Koodam provides specialized architectural
              sculpting, traditional Sirpa Kalai iconography, and reinforced
              cement structural statue installations. Each project is engineered
              based on specific physical site blueprints agreed upon during
              project contracts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              2. Intellectual & Handcrafted Rights
            </h2>
            <p>
              All original visual layouts, scale models, manual sketches, and
              custom structural molds developed inside our workshop remain the
              creative intellectual property of VKS Sirpa Kalai Koodam, unless
              explicit transfer parameters are executed within individual
              corporate or temple committee contracts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">
              3. Structural Maintenance Liability
            </h2>
            <p>
              While our specialized architectural concrete formulations are
              engineered to achieve incredible durability and survive changing
              weather conditions, long-term maintenance obligations shift
              completely to the site management or temple committee following
              final structure installation sign-offs.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default TermsOfService;
