import "./Navbar.css";

import { useRef } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";

import logo from "/images/uoh_logo_white.png";

const Navbar = () => {
  const navLinkRef = useRef();

  const showMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "0";
    }
  };

  const hideMenu = () => {
    if (navLinkRef.current) {
      navLinkRef.current.style.right = "-200px";
    }
  };

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
     

      <div className="nav-links" id="navLinks" ref={navLinkRef}>
        <FontAwesomeIcon icon={faTimes} className="fas" onClick={hideMenu} />

        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/course">COURSE</Link>
          </li>
          <li>
            <Link to="/Research">RESEARCH</Link>
          </li>
          <li>
            <Link to="/Placement">PLACEMENTS </Link>
          </li>
          <li>
            <Link to="/Faculty">FACULTY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/addnoti">Admin</Link>
          </li>
        </ul>
      </div>

      <FontAwesomeIcon icon={faBars} className="fas" onClick={showMenu} />
    </nav>
  );
};

export default Navbar;
