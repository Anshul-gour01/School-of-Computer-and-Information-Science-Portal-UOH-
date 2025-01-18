import "./Facilities.css";

const Facilities = () => {
  return (
    <section className="facilities">
      <h1>Our Facilities</h1>
      <p>Immerse yourself in a world of exceptional amenities and services.</p>
      <div className="row">
        <div className="facilities-col">
          <img src="/images/library.jpg" alt="" width="200px" height={'260px'}/>
          <h3>World Class Library</h3>
          <p>
            Dive into a sea of knowledge with our state-of-the-art library. An
            oasis for intellectual exploration.
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/lab.jpg" alt="" width="200px" height={'260px'}/>
          <h3>5G labs</h3>
          <p>
            deep dive into the technical world and experience technologies in LAB
          </p>
        </div>
        <div className="facilities-col">
          <img src="/images/canteen.jpg" alt="" width="200px" height={'260px'}/>
          <h3>Tasty and Healthy Food</h3>
          <p>
            Indulge your taste buds with our delightful and nutritious cuisine.
            Fuel for both body and mind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
