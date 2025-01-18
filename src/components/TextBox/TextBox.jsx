import { Link } from "react-router-dom";

import "./TextBox.css";

const TextBox = () => {
  return (
    <div className="text-box">
      <h1>School of Computer and Information Sciences</h1>
      <p>
       Welcome to SCIS !
      </p>
      {/* <Link to="/" className="hero-btn">
        Visit us To Know More
      </Link> */}
    </div>
  );
};

export default TextBox;
