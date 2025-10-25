import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
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

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <Preloader />
        </div>
      ) : (
        <BrowserRouter>
          <Navbar setIsFormOpen={setIsFormOpen} />
          {isFormOpen && <BookAppointment setIsFormOpen={setIsFormOpen} />}
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/smallCategory" element={<SmallCategory />} />
            <Route path="/religiousCategory" element={<ReligiousCategory />} />
            <Route path="/travelCategory" element={<TravelCategory/>}/>
            <Route path="/coverupCategory" element={<CoverupCategory/>}/>
            <Route path="/artist" element={<Artist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <GotoTop />
             <WhatsAppButton />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
