import fb from "../Assests/facbook.png";
import insta from "../Assests/instagram.png";
import twitter from "../Assests/twitter.png";
import linkedin from "../Assests/linkedin.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container flex  footer-contaainer">
          <motion.div
            className="link-column-logo flex"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* <a href="#" className="company-logo">
              <img className="svg" alt="Company Logo" />
            </a> */}
            <h1 className="company-name">ZENSPACE</h1>
            <p className="footer-address">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Temporibus quisquam omnis harum eligendi autem quas tempore
              aspernatur, voluptatem eveniet ut.
            </p>
            <div className="footer-icon-div">
              <p className="footer-icon-heading">
                <strong>Connect with us</strong>
              </p>

              <a className="footer-icon" href="#" target="_blank">
                <img src={fb} alt="Icon" style={{ width: "30px" }} />
              </a>
              <a className="footer-icon" href="#" target="_blank">
                <img src={insta} alt="Icon" style={{ width: "30px" }} />
              </a>
              <a className="footer-icon" href="#" target="_blank">
                <img src={twitter} alt="Icon" style={{ width: "30px" }} />
              </a>
              <a className="footer-icon" href="#" target="_blank">
                <img src={linkedin} alt="Icon" style={{ width: "30px" }} />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="link-column flex"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="footer-heading">Important Links</h4>
            <Link to="/" className="hover-link">
              Home
            </Link>
            <Link to="/artist" className="hover-link">
              Our Artist
            </Link>
            <Link to="/smallCategory" className="hover-link">
              Our Catagories
            </Link>
            <a href="#" className="hover-link">
              Pricing
            </a>
          </motion.div>
          <motion.div
            className="link-column flex"
            initial={{ opacity: 0, translateX: -50 }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h4 className="footer-heading">Other Links</h4>
            <Link to="/about" className="hover-link">
              About us
            </Link>
            <Link to="/contact" className="hover-link">
              Contact us
            </Link>
            <a href="#" className="hover-link">
              Privacy Policy
            </a>
            <a href="#" className="hover-link">
              Terms & Conditions
            </a>
          </motion.div>
        </div>
        <div className="subfooter-div">
          <hr className="subfooter-line container" />
          <motion.p
            className="subfooter-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            All rights reserved &copy; {new Date().getFullYear()} | Designed by
            Ontrova Solutions
          </motion.p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
