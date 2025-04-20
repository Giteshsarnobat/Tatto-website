import { ARTISTCARD } from "../utils/artistsMockData";
import { motion } from "framer-motion";

const textRevealAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Artist = () => {
  return (
    <>
      <div className="artist-div">
        <div className="artist-wrapper container">
          <motion.h2
            className="heading"
            variants={textRevealAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Behind Every Great Tattoo,
            <br />
            There’s A Great Artist
          </motion.h2>
          <motion.p
            variants={textRevealAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            At <span class="highlight">Zenspace Studio</span>, our tattoo
            artists are not just{" "}
            <span class="highlight">skilled with needles</span>, they are{" "}
            <span class="highlight">passionate about creating art</span> that
            stays with you forever.
          </motion.p>

          <motion.p
            variants={textRevealAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            From your <span class="highlight">first idea</span> to the{" "}
            <span class="highlight">final design</span>, our artists work{" "}
            closely with you to make sure your tattoo is{" "}
            <span class="highlight">special</span> and{" "}
            <span class="highlight">meaningful</span>.
          </motion.p>

          <motion.p
            variants={textRevealAnimation}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Whether it’s a <span class="highlight">small design</span> or a{" "}
            <span class="highlight">big detailed piece</span>, our team is here
            to <span class="highlight">guide you</span>,{" "}
            <span class="highlight">understand your thoughts</span>, and{" "}
            <span class="highlight">turn them into beautiful art</span> on your
            skin.
          </motion.p>
        </div>
      </div>
      <div className="artist-card container">
        <div className="artist-card-body">
          {ARTISTCARD.map((artist, index) => {
            return (
              <motion.div
                className="card-wrapper"
                key={artist.id}
                initial={{ opacity: 0, translateX: "-40" }} // Start from right
                whileInView={{ opacity: 1, translateX: "0" }} // Move to original position
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }} // Delay for staggered effect
                viewport={{ once: true }}
              >
                <img className="card-img" src={artist.img} loading="lazy" />
                <h2 className="card-name">{artist.Name}</h2>
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Artist;
