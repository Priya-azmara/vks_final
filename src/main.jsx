import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

/**
 * 🚀 SEO + PERFORMANCE OPTIMIZED ENTRY FILE
 * - HelmetProvider → Dynamic SEO tags (per page)
 * - StrictMode → Dev best practices
 * - Root check → Prevent runtime errors
 */

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
