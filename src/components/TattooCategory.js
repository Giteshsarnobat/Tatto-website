import { useNavigate } from "react-router-dom";
import CATEGORIES from "../utils/categoryMockData";
import { motion } from "framer-motion";
import { IKContext, IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/gitesh/";

const TattooCategory = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    if (id === 1) {
      navigate("/smallCategory");
    } else if (id === 2) {
      navigate("/religiousCategory");
    } else if (id === 3) {
      navigate("/travelCategory");
    } else if (id === 4) {
      navigate("/religiousCategory");
    } else if (id === 5) {
      navigate("/coverupCategory");
    }
  };

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
        <IKContext urlEndpoint={urlEndpoint}>
          <div className="tattoocategry-card">
            {CATEGORIES.map((c, index) => (
              <motion.div
                className="tattooCategory-card-body"
                key={c.id}
                initial={{ opacity: 0, translateX: "20%" }} // Start from right
                whileInView={{ opacity: 1, translateX: "0%" }} // Move to original position
                transition={{ duration: 0.5, delay: index * 0.1 }} // Delay for staggered effect
                viewport={{ once: true }}
              >
                <IKImage
                  path={c.img}
                  transformation={[{ height: "300", width: "300", q: 100 }]}
                  loading="lazy"
                  lqip={{ active: true }}
                  alt={`Image ${c.id}`}
                  className="tattoocategory-img"
                />
                <button
                  className="tattoocategory-btn"
                  onClick={() => handleNavigate(c.id)}
                >
                  {c.name}
                </button>
              </motion.div>
            ))}
          </div>
        </IKContext>
      </div>
    </>
  );
};

export default TattooCategory;
