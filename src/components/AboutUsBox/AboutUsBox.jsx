import { Link } from "react-router-dom";

import "./AboutUsBox.css";

const AboutUsBox = () => {
  return (
    <section className="about-us">
      <div className="row">
        <div className="about-col">
          <h1>About SCIS</h1>
          <p>
            Why SCIS@UOH? The answer is "the best value for your money!" Look at
            our distinguished faculty, the flexible curriculum, the focus on
            learning, placement history and alumni profiles, a spectacular
            campus, a truly premier university with specialisations ranging from
            hard sciences to fine and performing arts - where else can you get
            all these and what more do you want?! ... And then, our fees: around
            Rs. 60,000 a year should tell you the truth. No other institution
            can beat us, however hard they may try.
          </p>
          {/* <Link to="#" className="hero-btn red-btn">
            EXPLORE NOW
          </Link> */}
        </div>
        <div className="about-col">
          <img src="dean.jpg" alt="" height="400px" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsBox;
