import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="about-main-div">
        <div className="about-div container">
          <motion.h1
            className="about-heading"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Workspace
          </motion.h1>

          <motion.img
            className="about-image"
            src="https://images.squarespace-cdn.com/content/v1/645a279bf6479109759c303a/9d0852f6-9474-4ddd-8eda-aa9ec590fbc4/DSC07594.jpg"
            loading="lazy"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          />
        </div>
      </div>

      <div className="about-wrapper-div container">
        <div className="about-body-div">
          <motion.div
            className="about-image-div"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="https://content3.jdmagicbox.com/v2/comp/navi-mumbai/w2/022pxx22.xx22.230406110415.a3w2/catalogue/inkstain-tattoo-studio-seawoods-navi-mumbai-tattoo-artists-3iju3zhavv.jpg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            className="about-text-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="about-text-heading">About Our Studio</h1>
            <div className="about-text">
              <p>
                Welcome to <span>Zenspace Studios</span>, where art meets
                passion and every tattoo tells a story.
              </p>
              <p>
                We’re not just a tattoo studio — we’re a space where creativity,
                comfort, and individuality come together.{" "}
                <span>
                  Our mission is to turn your ideas, memories, and emotions into
                  timeless art that stays with you forever.
                </span>
              </p>
              <p>
                Whether it’s your first tattoo or adding to your collection, we
                believe every design should be personal, meaningful, and
                uniquely yours.
              </p>
              <p>
                <span>
                  With skilled artists, a friendly vibe, and a focus on hygiene
                  & safety
                </span>{" "}
                we’re here to make your tattoo journey unforgettable.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
