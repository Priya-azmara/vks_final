import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

// Components
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/Home/HomePage.jsx";
import BlogDetails from "./components/common/BlogDetails.jsx";
import PrivacyPolicy from "./pages/Legal/PrivacyPolicy.jsx";
import TermsOfService from "./pages/Legal/TermsOfService.jsx";
import WhatsAppFloat from "./components/common/WhatsappFloat.jsx";

/**
 * ✅ ScrollToTop (SEO + UX)
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* ✅ GLOBAL SEO (DEFAULT FALLBACK) */}
      <Helmet>
        <title>
          VKS Sirpa Kalai Koodam | Temple Sculpture & Statue Makers in Tamil
          Nadu
        </title>

        <meta
          name="description"
          content="VKS Sirpa Kalai Koodam offers temple sculpture, stone carving, and custom statue services in Karur, Trichy, and Namakkal."
        />

        <meta name="robots" content="index, follow" />

        {/* ✅ CANONICAL URL */}
        <link rel="canonical" href="https://www.vkssirpakalaikoodam.com/" />

        {/* ✅ OPEN GRAPH (SOCIAL SEO) */}
        <meta property="og:title" content="VKS Sirpa Kalai Koodam" />
        <meta
          property="og:description"
          content="Temple sculpture, stone carving & custom statues in Tamil Nadu."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.vkssirpakalaikoodam.com/"
        />
        <meta property="og:image" content="/og-image.jpg" />

        {/* ✅ TWITTER SEO */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* ✅ SCHEMA MARKUP */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "VKS Sirpa Kalai Koodam",
            image: "https://www.vkssirpakalaikoodam.com/logo.png",
            "@id": "https://www.vkssirpakalaikoodam.com/",
            url: "https://www.vkssirpakalaikoodam.com/",
            telephone: "+91-XXXXXXXXXX",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Street Name",
              addressLocality: "Karur",
              addressRegion: "Tamil Nadu",
              postalCode: "639XXX",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "10.9601",
              longitude: "78.0766",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
              ],
              opens: "09:00",
              closes: "18:00",
            },
            sameAs: ["https://www.facebook.com/", "https://www.instagram.com/"],
          })}
        </script>
      </Helmet>
      {/* ✅ SKIP LINK (Accessibility + SEO) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-black px-3 py-1 rounded"
      >
        Skip to main content
      </a>

      <div className="flex flex-col min-h-screen">
        {/* ✅ HEADER */}
        <header role="banner">
          <Navbar />
        </header>

        {/* ✅ MAIN CONTENT */}
        <main
          id="main-content"
          role="main"
          className="grow pt-20"
          aria-label="Main content"
        >
          <Suspense
            fallback={
              <div
                className="flex items-center justify-center h-screen text-cement"
                role="status"
                aria-live="polite"
              >
                Loading content...
              </div>
            }
          >
            <Routes>
              {/* ✅ HOME */}
              <Route path="/" element={<Home />} />

              {/* ✅ BLOG */}
              <Route path="/blog/:id" element={<BlogDetails />} />

              {/* ✅ LEGAL */}
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />

              {/* ✅ 404 FALLBACK */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* ✅ FOOTER */}
        <footer role="contentinfo">
          <Footer />
        </footer>

        {/* ✅ FLOATING CTA */}
        <WhatsAppFloat aria-label="Chat on WhatsApp" />

        {/* ✅ TOASTER (NON-BLOCKING UI) */}
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={12}
          containerStyle={{
            top: 20,
            right: 20,
          }}
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: "14px",
              background: "#ffffff",
              color: "#1e293b",
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              padding: "12px 16px",
              fontSize: "14px",
            },
            success: {
              iconTheme: {
                primary: "#ea580c",
                secondary: "#fff",
              },
            },
            error: {
              iconTheme: {
                primary: "#dc2626",
                secondary: "#fff",
              },
            },
          }}
        />
      </div>
    </Router>
  );
};

export default App;
