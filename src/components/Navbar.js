import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";
import { navItems } from "../utils/navItems";

const Navbar = ({ setIsFormOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="main-nav">
        <Link to="/" className="navbar-logo">
          ZENSPACE
        </Link>
        <div className={`nav-link ${isOpen ? "active" : ""}`} id="nav-link">
          <ul className="nav-items">
            {navItems.map((item) => {
              if (item.title === "Tattoo Category") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                  >
                    <Link
                      to={item.path}
                      spy={true}
                      smooth={true}
                      offset={100}
                      duration={500}
                    >
                      {item.title}{" "}
                      <i className="fa-sharp fa-solid fa-caret-down"></i>
                    </Link>
                    {dropdown && <CategoryDropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link
                    to={item.path}
                    spy={true}
                    smooth={true}
                    offset={100}
                    duration={500}
                    onClick={handleNavClick}
                    className={
                      location.pathname === item.path
                        ? "nav-link-item active-link"
                        : "nav-link-item"
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <button
                className="btn"
                id="nav-btn"
                href="#"
                onClick={() => {
                  setIsFormOpen(true);
                  setIsOpen(false);
                }}
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
