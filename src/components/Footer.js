import logo from "../Assests/logo.png";
import fb from "../Assests/facbook.png";
import insta from "../Assests/instagram.png";
import twitter from "../Assests/twitter.png";
import linkedin from "../Assests/linkedin.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container flex  footer-contaainer">
          <div className="link-column-logo flex">
            <a href="#" className="company-logo">
              <img className="svg" src={logo} alt="Company Logo" />
            </a>
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
          </div>
          <div className="link-column flex">
            <h4 className="footer-heading">Product</h4>
            <a href="" className="hover-link">
              Overview
            </a>
            <a href="" className="hover-link">
              Pricing
            </a>
            <a href="" className="hover-link">
              Usability Hub
            </a>
            <a href="" className="hover-link">
              Customer Page
            </a>
            <a href="" className="hover-link">
              Status Page
            </a>
          </div>
          <div className="link-column flex">
            <h4 className="footer-heading">Methodology</h4>
            <a href="" className="hover-link">
              Overview
            </a>
            <a href="" className="hover-link">
              Pricing
            </a>
            <a href="" className="hover-link">
              Usability Hub
            </a>
            <a href="" className="hover-link">
              Customer Page
            </a>
            <a href="" className="hover-link">
              Status Page
            </a>
          </div>
        </div>
        <div className="subfooter-div">
          <hr className="subfooter-line container" />
          <p className="subfooter-text">
            {" "}
            All rights reserved &copy; 2025 info Edge(India)Ltd.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
