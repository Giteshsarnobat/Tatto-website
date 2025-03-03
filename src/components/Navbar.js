import { useState } from "react";

const Navbar = ({ setIsFormOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="container main-nav flex">
        <a href="#" className="company-logo">
          <h1>Company Logo</h1>
        </a>
        <div className={`nav-link ${isOpen ? "active" : ""}`} id="nav-link">
          <ul className="flex">
            <li>
              <a className="hover-link" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="hover-link" href="#">
                Customer
              </a>
            </li>
            <li>
              <a className="hover-link" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover-link" href="#">
                Resources
              </a>
            </li>
            <li>
              <button
                className="btn"
                id="nav-btn"
                href="#"
                onClick={() => setIsFormOpen(true)}
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
        <a
          href="#"
          id="nav-toggle"
          className="nav-toggle hover-link"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
