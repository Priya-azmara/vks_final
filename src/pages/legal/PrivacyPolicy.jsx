import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiShield } from "react-icons/fi";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main
      className="bg-[#1C1917] text-stone-300 min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-16 font-outfit"
      role="main"
      aria-label="Privacy Policy Page"
    >
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          aria-label="Go back to previous page"
          className="flex items-center gap-2 text-stone-400 hover:text-[#D4AF37] transition-colors font-bold text-xs uppercase tracking-widest mb-10 group"
        >
          <FiArrowLeft
            size={16}
            aria-hidden="true"
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          <span>Go Back</span>
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-orange-600/10 text-orange-500 rounded-2xl border border-orange-600/10">
            <FiShield size={24} aria-hidden="true" />
          </div>
          <h1
            className="text-3xl sm:text-4xl font-bold text-white font-berkshire tracking-wide"
            id="privacy-title"
          >
            Privacy Policy
          </h1>
        </div>

        <p className="text-stone-500 text-xs uppercase tracking-wider mb-12">
          Last Updated: May 2026
        </p>

        <div
          className="space-y-8 text-stone-400 text-justify leading-relaxed"
          aria-labelledby="privacy-title"
        >
          <section aria-labelledby="info-collect">
            <h2 id="info-collect" className="text-xl font-bold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              At VKS Sirpa Kalai Koodam, we collect minimal personal information
              necessary to manage project inquiries. This includes your name,
              phone number, email address, and any specific architectural or
              sculpture project details submitted through our contact forms or
              direct inquiry features.
            </p>
          </section>

          <section aria-labelledby="data-use">
            <h2 id="data-use" className="text-xl font-bold text-white mb-3">
              2. How We Use Your Data
            </h2>
            <p>
              Your contact metrics are strictly utilized to respond to project
              estimation requests, provide updates on custom masonry works, or
              finalize service agreements. We do not engage in cold email
              distribution lists or cross-site telemetry advertising tracking.
            </p>
          </section>

          <section aria-labelledby="security">
            <h2 id="security" className="text-xl font-bold text-white mb-3">
              3. Data Preservation & Security
            </h2>
            <p>
              We treat your architectural layouts and business communications
              with high security. Your data is never sold, traded, or leased to
              external third-party marketing companies. Information is preserved
              safely on encrypted systems strictly for local project records.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
