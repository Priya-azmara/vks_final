import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import Home from "./pages/Home/HomePage.jsx";
import BlogDetails from "./components/common/BlogDetails.jsx";
import WhatsAppFloat from "./components/common/WhatsappFloat.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Helmet>
        {/* ✅ Primary SEO */}
        <title>
          VKS Sirpa Kalai Koodam | Temple Sculpture & Statue Makers in Tamil Nadu
        </title>
        <meta
          name="description"
          content="VKS Sirpa Kalai Koodam offers temple sculpture, stone carving, and custom statue services in Karur, Trichy, and Namakkal."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VKS Sirpa Kalai Koodam" />
        <meta name="theme-color" content="#ffffff" />
        {/* ✅ Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* ✅ Correct Canonical URL */}
        <link rel="canonical" href="https://www.vkssirapakalai.com/" />
        {/* ✅ Open Graph (Social Sharing) */}
        <meta property="og:title" content="VKS Sirpa Kalai Koodam" />
        <meta
          property="og:description"
          content="Temple sculpture, stone carving & custom statues in Tamil Nadu."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vkssirapakalai.com/" />
        <meta
          property="og:image"
          content="https://www.vkssirapakalai.com/og-image.jpg"
        />
        {/* ✅ Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VKS Sirpa Kalai Koodam" />
        <meta
          name="twitter:description"
          content="Temple sculpture, stone carving & custom statues in Tamil Nadu."
        />
        <meta
          name="twitter:image"
          content="https://www.vkssirapakalai.com/og-image.jpg"
        />

        {/* ✅ Performance Boost */}
        <link rel="preconnect" href="https://www.vkssirapakalai.com" />
      </Helmet>

      {/* ✅ Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-white text-black px-3 py-1 rounded"
      >
        Skip to main content
      </a>

      <div className="flex flex-col min-h-screen">
        <header role="banner" aria-label="Website Header">
          <Navbar />
        </header>

        <main
          id="main-content"
          role="main"
          className="grow pt-20"
          aria-label="Main content"
        >
          <Suspense
            fallback={
              <div
                className="flex items-center justify-center h-screen"
                role="status"
                aria-live="polite"
              >
                Loading content...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog/:id" element={<BlogDetails />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <footer role="contentinfo" aria-label="Website Footer">
          <Footer />
        </footer>

        <WhatsAppFloat aria-label="Chat on WhatsApp" />

        <Toaster position="top-center" />
      </div>
    </Router>
  );
};

export default App;