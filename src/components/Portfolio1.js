import fb from "../Assests/facbook.png";
import insta from "../Assests/instagram.png";
import { motion } from "framer-motion";
import { IKContext, IKImage } from "imagekitio-react";
import AVINASH_PORTFOLIO from "../utils/avinashPortfolioMockData";

const urlEndpoint = "https://ik.imagekit.io/zenspace121/";

const Portfolio1 = () => {
  return (
    <>
      <div className="portfolio1-main-div container">
        <IKContext urlEndpoint={urlEndpoint}>
          {" "}
          <div className="portfolio1-img-div">
            <IKImage
              path="Artist/avi.jpg"
              transformation={[{ q: 100 }]}
              alt="Avinash Kumar"
              loading="lazy"
              lqip={{ active: true }}
            />
          </div>
        </IKContext>
        <motion.div
          className="portfolio1-text"
          initial={{ opacity: 0, translateX: "20%" }}
          whileInView={{ opacity: 1, scale: 1, translateX: "0%" }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="portfolio1-name">Avinash Kumar</h1>
          <h2 className="portfolio1-experience">Experience: 12+ Years</h2>
          <h2 className="portfolio1-speciality">
            Speciality: realism, religious, color realism
          </h2>
          <p className="portfolio1-desc">
            Avinash Kumar, founder of Zenspace Tattoos, is a master storyteller
            through his realistic and spiritual tattoos. With 12 years of
            expertise, his jolly demeanor makes every session a memorable
            journey of laughter and enlightenment.
          </p>
          <div>
            <a
              href="https://www.facebook.com/people/Zenspace-art-and-tattoo/100091522204140/"
              target="_blank"
            >
              <img src={fb} alt="Icon" className="social-media-icon" />
            </a>
            <a href="https://www.instagram.com/vina_arts7/?igsh=c3NmcjExdGk1Mnpw&utm_source=qr#" target="_blank">
              <img src={insta} alt="Icon" className="social-media-icon" />
            </a>
          </div>
        </motion.div>
      </div>
      <div>
        <h1 className="smallCate-image-heading container">
          Dive Into Avinash Tattoo Artistry
        </h1>
        <div className="category-com-div">
          <IKContext urlEndpoint={urlEndpoint}>
            <div className="tattoocategry-card container">
              {AVINASH_PORTFOLIO.map((c, index) => (
                <motion.div
                  className="tattooCategory-card-body"
                  key={c.id}
                  initial={{ opacity: 0, translateX: "-20%" }}
                  whileInView={{ opacity: 1, translateX: "0%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <IKImage
                    path={c.path}
                    transformation={[{ height: "300", width: "300", q: 100 }]}
                    loading="lazy"
                    lqip={{ active: true }}
                    alt={`Image ${c.id}`}
                    className="tattoocategory-img"
                  />
                </motion.div>
              ))}
            </div>
          </IKContext>
        </div>
      </div>
    </>
  );
};

export default Portfolio1;
