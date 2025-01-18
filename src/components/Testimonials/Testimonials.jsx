import "./Testimonials.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h1>What Our Student Says</h1>
      <p>
        Discover what our students have to say about their transformative
        experiences.
      </p>
      <div className="row">
        <div className="testimonial-col">
          <img src="/images/userN.jpg" alt="" />
          <div>
            <p>
              SCIS@UOH seamlessly blended academic and industrial knowledge,
              courtesy of a diverse and experienced faculty. The intellectually
              stimulating environment, further amplified by my peers and the
              advanced lab facilities, has greatly enriched my academic journey.
              Nirmoy (GPU software architect at Intel Germany)
            </p>
            <h3>Nimisha Jain</h3>
            <div className="stars">
              {[...Array(4)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
              <FontAwesomeIcon icon={faStar} className="empty-star" />
            </div>
          </div>
        </div>

        <div className="testimonial-col">
          <img src="/images/userA.jpg" alt="" />
          <div>
            <p>
              I can confidently say that my time at SCIS was a transformative
              and career-defining experience that surpassed my education in the
              US. The classes were highly engaging (going beyond textbooks),
              state-of-the-art labs, research-focused projects, and passionate
              professors are the pillars of UOH education. Looking back, my only
              regret is that my time at UOH wasn't longer.
            </p>
            <h3>Anshul Gour</h3>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className="filled-star"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
