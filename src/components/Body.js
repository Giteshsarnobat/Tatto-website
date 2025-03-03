import { useState } from "react";
import "../style.css";
import "../mediaQuery.css";
import BackgroundVideo from "./BackgroundVideo";
import BookAppointment from "./BookAppointment";
import Features from "./Features";
import Services from "./Services";
import Slider from "./Slider";
import TeamCard from "./TeamCard";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

const Body = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="navbar-main-div">
        <Navbar setIsFormOpen={setIsFormOpen} />
        {isFormOpen && <BookAppointment setIsFormOpen={setIsFormOpen} />}
      </div>
      <div className="header-main-div">
        <Header setIsFormOpen={setIsFormOpen} />
        {isFormOpen && <BookAppointment setIsFormOpen={setIsFormOpen} />}
      </div>
      <div className="slider-main-div">
        <h1 className="slider-text-heading">#Tattoo Gallery</h1>
        <Slider />
      </div>
      <div className="features-main-div">
        <Features />
      </div>
      <div className="teamcard-main-div">
        <TeamCard />
      </div>
      <div className="services-main-div">
        <Services />
      </div>
      <div className="backgroundVideo-main-div">
        <BackgroundVideo setIsFormOpen={setIsFormOpen} />
        {isFormOpen && <BookAppointment setIsFormOpen={setIsFormOpen} />}
      </div>
      <div className="footer-main-div">
        <Footer />
      </div>
    </>
  );
};

export default Body;
