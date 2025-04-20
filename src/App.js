import { BrowserRouter, Route, Routes } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookAppointment from "./components/BookAppointment";
import SmallCategory from "./components/SmallCategory";
import Preloader from "./components/Preloader";
import GotoTop from "./components/GotoTop";
import About from "./components/About";
import Artist from "./components/Artist";
import Contact from "./components/Contact";
import "../src/style.css";
import "../src/locomotive-scroll.css";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 3800);
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
            <Route path="/artist" element={<Artist />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <GotoTop />
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
