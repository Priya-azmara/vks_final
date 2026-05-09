import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";

// Layout & Common Components
import Navbar from "./components/common/Navbar.jsx";
import Footer from "./components/common/Footer.jsx";
import Contact from "./components/common/Contact.jsx";
import Home from "./pages/Home/HomePage.jsx";
import WhatsAppFloat from "./components/common/WhatsappFloat.jsx";
/**
 * ScrollToTop helper:
 * Essential for SPAs to ensure the user starts at the top
 * of the page when navigating.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      {/* Semantic Wrapper */}
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main id="main-content" className="flex-grow pt-20">
          <Suspense
            fallback={
              <div className="flex items-center justify-center h-screen text-cement">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <WhatsAppFloat />

        {/* ✅ GLOBAL TOAST CONTAINER */}
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
                primary: "#ea580c", // orange-600
                secondary: "#fff",
              },
            },

            error: {
              iconTheme: {
                primary: "#dc2626", // red-600
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
