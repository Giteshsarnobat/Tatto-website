import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookAppointment from "./components/BookAppointment";
import SmallCategory from "./components/SmallCategory";
import ReligiousCategory from "./components/ReligiousCategory";
import Preloader from "./components/Preloader";
import GotoTop from "./components/GotoTop";
import About from "./components/About";
import Artist from "./components/Artist";
import Contact from "./components/Contact";
import "../src/style.css";
import "../src/locomotive-scroll.css";
import WhatsAppButton from "./components/WhatsAppButton";
import TravelCategory from "./components/TravelCategory";
import CoverupCategory from "./components/CoverupCategory";
import Portfolio1 from "./components/Portfolio1";
import Portfolio2 from "./components/Portfolio2";
import CallButton from "./components/CallButton";
import Terms from "./components/Terms";
import PrivacyPolicy from "./components/PrivacyPolicy";

function AppContent() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const hasLoadedOnce = useRef(false); // Detect first page load

  // Routes to skip loader completely
  const skipLoadingRoutes = [
    "/portfolio_avinash_kumar",
    "/portfolio_suren_kumar",
  ];

  useEffect(() => {
    const shouldSkip = skipLoadingRoutes.some((route) =>
      location.pathname.startsWith(route)
    );

    // Skip loader for portfolio routes
    if (shouldSkip) {
      setLoading(false);
      return;
    }

    // 🧠 First page load (show loader for 3s)
    if (!hasLoadedOnce.current) {
      hasLoadedOnce.current = true;
      setLoading(true);
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    // 🧠 For later route changes (short loader)
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second loader for internal navigation

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {/* Preloader with smooth fade transition */}
      <div className={`preloader-wrapper ${loading ? "visible" : "hidden"}`}>
        {loading && <Preloader />}
      </div>

      {!loading && (
        <>
          <Navbar setIsFormOpen={setIsFormOpen} />
          {isFormOpen && <BookAppointment setIsFormOpen={setIsFormOpen} />}

          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/smallCategory" element={<SmallCategory />} />
            <Route path="/religiousCategory" element={<ReligiousCategory />} />
            <Route path="/travelCategory" element={<TravelCategory />} />
            <Route path="/coverupCategory" element={<CoverupCategory />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/portfolio_avinash_kumar/:id"
              element={<Portfolio1 />}
            />
            <Route path="/portfolio_suren_kumar/:id" element={<Portfolio2 />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>

          <GotoTop />
          <WhatsAppButton />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
