import SMALL_CATEGORY from "../utils/smallCategoryMockData";
import { motion } from "framer-motion";
import { IKContext, IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/zenspace121/";

const SmallCategory = () => {
  return (
    <>
      <div className="smallcategory-main-div">
        <div className="smallcategory-text-div container">
          <h1 className="smallcategory-heading">
            Small Tattoos, Timeless Meaning
          </h1>
          <p className="smallcategory-text">
            Small tattoos are more than just ink; they are personal statements
            etched in time. Whether it’s a delicate floral design, an inspiring
            word, or a tiny symbol that holds a special place in your heart, our
            expert artists ensure every piece is crafted with precision and
            care.
          </p>
        </div>
      </div>

      {/* Wave SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#D2AEF4"
          fillOpacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,245.3C480,256,600,224,720,186.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* Gallery Section */}
      <div>
        <h1 className="smallCate-image-heading container">Our Small Tattoos</h1>
        <div className="category-com-div">
          <IKContext urlEndpoint={urlEndpoint}>
            <div className="tattoocategry-card container">
              {SMALL_CATEGORY.map((c, index) => (
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
                    transformation={[{ height:"300", width: "300", q: 100 }]}
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

export default SmallCategory;
