import { useEffect, useRef, useState } from "react";
import { IKContext, IKImage } from "imagekitio-react";
import TESTIMONIALS from "../utils/testimonialMockData";
import { motion } from "framer-motion";

const urlEndpoint = "https://ik.imagekit.io/zenspace121/";

const TestimonialMarquee = () => {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto marquee effect (smooth continuous scroll)
  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationFrame;

    const speed = 2.5; // Adjust speed here

    const scroll = () => {
      if (!isPaused && marquee) {
        marquee.scrollLeft += speed;
        // Reset to start for infinite loop
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    scroll();
    return () => cancelAnimationFrame(animationFrame);
  }, [isPaused]);

  // Pause scrolling briefly when user clicks
  const pauseTemporarily = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 2000); // Resume after 1.5s
  };

  const handleNext = () => {
    const marquee = marqueeRef.current;
    if (marquee) {
      pauseTemporarily();
      marquee.scrollLeft += 350; // move one slide
    }
  };

  const handlePrev = () => {
    const marquee = marqueeRef.current;
    if (marquee) {
      pauseTemporarily();
      marquee.scrollLeft -= 350; // move one slide backward
    }
  };

  return (
    <div className="testimonial-marquee-container">
      <motion.h2
        className="testimonial-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Happy Clients
      </motion.h2>

      <IKContext urlEndpoint={urlEndpoint}>
        <div className="marquee-wrapper" ref={marqueeRef}>
          <div
            className="marquee-track"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Duplicate content for infinite effect */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <div className="testimonial-box" key={t.id}>
                <IKImage
                  className="testimonial-img"
                  path={t.path}
                  transformation={[{ q: 100 }]}
                  loading="lazy"
                  lqip={{ active: true }}
                  alt="Reviews"
                />
              </div>
            ))}
          </div>
        </div>
      </IKContext>

      <div className="testimonial-controls">
        <button onClick={handlePrev} className="testimonial-btn">
          &#10094;
        </button>
        <button onClick={handleNext} className="testimonial-btn">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TestimonialMarquee;
