import { motion } from "framer-motion";

const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      straggerChildren: 0.2,
      duration: 1,
    },
  },
};

const Hero = ({ setIsFormOpen }) => {
  return (
    <div className="hero-section-div" id="hero">
      <div className="hero-div container">
        <motion.div
          className="hero-text-div"
          initial="hidden"
          animate="show"
          variants={fadeInUpAnimation}
        >
          <motion.h1 className="hero-text-h1" variants={fadeInUpAnimation}>
            A Tattoo for Every Chapter of Your Life, Crafted with Passion for
            You.
          </motion.h1>
          <motion.p className="hero-text-para" variants={fadeInUpAnimation}>
            When you get a tattoo that reflects your soul, your passions, your
            strength, and your individuality, it resonates deeply, making you
            feel empowered and complete.
          </motion.p>
          <motion.button
            className="hero-sec-btn"
            onClick={() => setIsFormOpen(true)}
            variants={fadeInUpAnimation}
          >
            BOOK A CONSULTATIONS
          </motion.button>
        </motion.div>
        <div className="hero-shape"></div>
      </div>
    </div>
  );
};

export default Hero;
