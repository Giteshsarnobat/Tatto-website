import Lottie from "lottie-react";
import Loader from "../Assests/Preloader.json";
import { motion } from "framer-motion";

const Preloader = () => {
  const style = {
    width: "300px",
  };

  return (
    <>
      <div className="preloader-container">
      <motion.h1
        className="preloader-title glitch"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
       ZENSPACE STUDIO
      </motion.h1>
        <Lottie animationData={Loader} loop={true} className="preloader-animation" />
      </div>
    </>
  );
};

export default Preloader;
