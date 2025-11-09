import { motion } from "framer-motion";
import { ARTISTCARD } from "../utils/artistsMockData";
import { IKContext, IKImage } from "imagekitio-react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const urlEndpoint = "https://ik.imagekit.io/zenspace121/";

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
      <IKContext urlEndpoint={urlEndpoint}>
        {" "}
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
              <IKImage
                className="teamcard-img"
                path={artist.imgPath}
                transformation={[{ q: 100 }]}
                alt={artist.Name}
                loading="lazy"
                lqip={{ active: true }}
              />
              <h2>{artist.Name}</h2>
              <Link to={`/portfolio_${artist.pathName}/${artist.id}`} className="portfolio-btn">
              PORTFOLIO <FaArrowRight />
              </Link>
              {/* <a
                href={`/portfolio_${artist.pathName}/${artist.id}`}
                className="portfolio-btn"
              >
                PORTFOLIO <FaArrowRight />
              </a> */}
            </motion.div>
          ))}
        </div>
      </IKContext>
    </div>
  );
};

export default TeamCard;
