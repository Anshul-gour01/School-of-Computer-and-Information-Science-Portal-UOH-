import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
      <h4>About Us</h4>
      <p>
      AI and SCIS:
A rich and glorious tradition ...

Did you know that SCIS has the first and the longest running M. Tech (AI) program in India?

M. Tech (AI), started in 1986, has graduated more than 800 students
      </p>

      <div className="icons">
        <FontAwesomeIcon icon={faFacebookF} className="fab" />
        <FontAwesomeIcon icon={faTwitter} className="fab" />
        <FontAwesomeIcon icon={faInstagram} className="fab" />
        <FontAwesomeIcon icon={faLinkedinIn} className="fab" />
      </div>

      <p>
       
      </p>
    </section>
  );
};

export default Footer;
