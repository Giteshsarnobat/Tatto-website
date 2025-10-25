import { motion } from "framer-motion";
import { ARTISTCARD } from "../utils/artistsMockData";

const TeamCard = () => {
  return (
    <div className="teamcard-div container" id="OurArtist">
      <p className="teamcard-para">our team</p>

      <motion.h1
        className="teamcard-header"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 1 }}
      >
        Meet Our Awesome Team
      </motion.h1>

      <div className="teamcard">
        {ARTISTCARD.map((artist, index) => (
          <motion.div
            className="teamcard-body"
            key={artist.id}
            initial={{ opacity: 0, translateX: "-20%" }}
            whileInView={{ opacity: 1, translateX: "0%" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Artist Image */}
            <img className="teamcard-img" src={artist.img} alt={artist.Name} loading="lazy" />

            {/* Hover Overlay with Button */}
            <div className="teamcard-overlay">
              <button
                className="teamcard-btn"
                onClick={() => window.open(artist.portfolioLink, "_blank")}
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
