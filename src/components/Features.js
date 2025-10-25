import { motion } from "framer-motion";
import png1 from "../Assests/heart.png";
import art1 from "../Assests/tattoArt1.jpg";
import art2 from "../Assests/tattoArt2.jpg";

const Features = () => {
  return (
    <>
      <div className="feature-div container">
        <motion.div
          className="feature-card"
          initial={{ opacity: 0, translateX: "20%" }}
          whileInView={{ opacity: 1, scale: 1, translateX: "0%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="feature-text-div">
            <div className="feature-text">
              <p className="feature-text-heading">Why Choose ZenSpace ?</p>
              <p className="feature-text-para">
                At ZenSpace, we believe tattoos should be as unique as the
                person wearing them. With over
                <b> 5 years of experience in art and tattooing,</b> our team
                blends creativity, precision, and passion to bring your vision
                to life. Every design is <b> custom-made</b> to reflect your
                personality and story, ensuring you leave with a tattoo that
                truly belongs to you.
              </p>
            </div>
            <div className="feature1-div">
              <img className="heart-png" src={png1} />
              <h3 className="feature-heading">
                5+ Years of Experience in Art & Tattooing
              </h3>
            </div>
            <div className="feature2-div">
              <img className="heart-png" src={png1} />
              <h3 className="feature-heading">Custom, Personalized Designs</h3>
            </div>
            <div className="feature2-div">
              <img className="heart-png" src={png1} />
              <h3 className="feature-heading">Strict Hygiene & Premium Inks</h3>
            </div>
            <div className="feature2-div">
              <img className="heart-png" src={png1} />
              <h3 className="feature-heading">Friendly & Comfortable Studio Environment</h3>
            </div>
          </div>
          <div className="feature-img-div">
            <div className="artImage-div">
              <img className="feature-img1" src={art1} loading="lazy" />
              <img className="feature-img2" src={art2} loading="lazy" />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Features;
