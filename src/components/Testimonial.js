import { useState } from "react";
import TESTIMONIALS from "../utils/testimonialMockData";
import { motion } from "framer-motion";

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIndex((prevIndex) =>
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { name, photo, text, rating } = TESTIMONIALS[index];

  return (
    <section className="testimonial-section container">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 1 }}
        className="title"
      >
        What Our Clients Say
      </motion.h2>

      <div className="testimonial-card">
        <div className="testimonial-header">
          <img src={photo} alt={name} className="client-photo" />

          <div className="client-details">
            <h3 className="client-name">{name}</h3>
            <p className="client-detail-text">
              1 review &nbsp;&nbsp;&nbsp;<span>0 photos</span>
            </p>
          </div>
        </div>
        <div className="stars">
          <p className="stars-rating">{"★".repeat(rating)}</p>
          <p className="rating-text">22 hours ago</p>
        </div>

        <p className="testimonial-text">"{text}"</p>

        <div className="carousel-buttons">
          <button onClick={handlePrev}>&#8592;</button>
          <button onClick={handleNext}>&#8594;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
