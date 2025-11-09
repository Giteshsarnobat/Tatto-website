import { React, useState } from "react";
import BackgroundVideo from "./BackgroundVideo";
import BookAppointment from "./BookAppointment";
import Features from "./Features";
import Services from "./Services";
import Slider from "./Slider";
import TeamCard from "./TeamCard";
import TattooCategory from "./TattooCategory";
import Hero from "./Hero";
import "../style.css";
import "../mediaQuery.css";
import Testimonial from "./Testimonial";
import TestimonialMarquee from "./TestimonialMarquee";

const Body = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="scroll-container">
      <div className="hero-main-div">
        <Hero setIsFormOpen={setIsFormOpen} />
        {isFormOpen && <BookAppointment setIsFormOpen={setIsFormOpen} />}
      </div>
      <div className="slider-main-div">
        <Slider />
      </div>
      <div className="features-main-div">
        <Features />
      </div>
      <div className="teamcard-main-div">
        <TeamCard />
      </div>
      <div className="TattooCategory-main-div">
        <TattooCategory />
      </div>
      <div className="services-main-div">
        <Services />
      </div>
      {/* <div className="testimonial-main-div">
        <Testimonial />
      </div> */}
      <div>
        <TestimonialMarquee />
      </div>
      <div className="backgroundVideo-main-div">
        <BackgroundVideo setIsFormOpen={setIsFormOpen} />
        {isFormOpen && <BookAppointment setIsFormOpen={setIsFormOpen} />}
      </div>
    </div>
  );
};

export default Body;
