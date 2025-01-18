// import "./Courses.css";
// import { Link } from "react-router-dom";
// const Courses = () => {
//   return (
//     <section className="course">
      
//       <h1>Courses We Offer</h1>
//       <p>
//         Explore our diverse range of courses designed to enhance your learning
//         experience.
//       </p>
//       <div className="row">
//         <div className="course-col">
//           <h3>MCA</h3>
//           <p>
//             Masters in computer Application.Its a 2 year program that allows you
//             to learn about the real world computer science applications.
//           </p>
//           <Link to="/Mca">
//             <button className="button1">Know More</button>
//           </Link>
//         </div>
//         <div className="course-col">
//           <h3>MTech</h3>
//           <p>
//             Pursue a degree that aligns with your passion and career goals.
//             Unleash your potential and excel in your chosen field.
//           </p>
//           <Link to="/Mtech">
//             <button className="button1">Know More</button>
//           </Link>
//         </div>
//         <div className="course-col">
//           <h3>IMtech</h3>
//           <p>
//             Elevate your academic profile with our 5 Year IMtech program .
//             Embrace advanced knowledge and excel in your chosen discipline.
//           </p>
//           <Link to="/Imtech">
//             <button className="button1">Know More</button>
//           </Link>

//         </div>
//         <div className="course-col">
//           <h3>IMtech</h3>
//           <p>
//             Elevate your academic profile with our 5 Year IMtech program .
//             Embrace advanced knowledge and excel in your chosen discipline.
//           </p>
//           <Link to="/Imtech">
//             <button className="button1">Know More</button>
//           </Link>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Courses;
import "./Courses.css";
import { Link } from "react-router-dom";
const Courses = () => {
  return (
    <section className="course">
      <br/>
      <h1>Courses We Offer</h1>
      <p>
        Explore our diverse range of courses designed to enhance your learning
        experience.
      </p>
      <div className="row">
        <div className="course-col">
          <h3>MCA</h3>
          <p>
            Masters in Computer Application. It's a 2-year program that allows
            you to learn about real-world computer science applications.
          </p>
          <Link to="/Mca">
            <button className="button1">Know More</button>
          </Link>
        </div>
        <div className="course-col">
          <h3>MTech</h3>
          <p>
            Our 2-year MTech program combines advanced coursework and research
            opportunities to build technical expertise and innovation skills.
          </p>
          <Link to="/Mtech">
            <button className="button1">Know More</button>
          </Link>
        </div>
        <div className="course-col">
          <h3>IMtech</h3>
          <p>
            Elevate your academic profile with our 5-year IMtech program.
            Embrace advanced knowledge and excel in your chosen discipline.
          </p>
          <Link to="/Imtech">
            <button className="button1">Know More</button>
          </Link>
        </div>
        <div className="course-col">
          <h3>PHd</h3>
          <p>
            Our PhD program span 3 - 6 years fosters innovation and independent
            research, enabling scholars to advance knowledge in their chosen
            fields.
          </p>
          <Link to="/phd">
            <button className="button1">Know More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Courses;
