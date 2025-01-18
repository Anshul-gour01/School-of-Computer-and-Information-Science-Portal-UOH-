import React from "react";
import { Link } from "react-router-dom";
import "./Faculty.css";
const Faculty = () => {
  return (
    <>
      <section className="course1">
        <div className="course1-col">
          <h3>Prof. MA. Saifullah </h3>
          <p>
            D.Phil, University of Allahabad, India Areas of Interest :
            Combinatorial Optimization using Heuristic and Metaheuristic
            technciques
          </p>
          <Link to="/saifullah">
            <button className="link-class">profile</button>
          </Link>
          {/* <Link to="/saifullah">
            <button  className="link-class">homepage</button>
          </Link> */}
        </div>
        <div className="course1-col">
          <h3> Prof. Naveen Nekuri</h3>
          <p>
            Masters in computer Application.Its a 2 year program that allows you
            to learn about the real world computer science applications.
          </p>
          {/* <Link to="/Mca">
            <button>Know More</button>
          </Link> */}
        </div>
      </section>
    </>
  );
};

export default Faculty;
