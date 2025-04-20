import CATEGORIES from "../utils/categoryMockData";
import { motion } from "framer-motion";

const TattooCategory = () => {
  return (
    <>
      <div className="tattooCategory-div container" id="tattooCategory">
        <motion.h1
          className="tattooCategory-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          Our Tattoo Categories{" "}
        </motion.h1>
        <div className="tattoocategry-card">
          {CATEGORIES.map((c, index) => (
            <motion.div
              className="tattooCategory-card-body"
              key={c.id}
              initial={{ opacity: 0, translateX: "-20%" }} // Start from right
              whileInView={{ opacity: 1, translateX: "0%" }} // Move to original position
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
              viewport={{ once: true }}
            >
              <img className="tattoocategory-img" src={c.img} loading="lazy" />
              <button className="tattoocategory-btn">{c.name}</button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TattooCategory;
