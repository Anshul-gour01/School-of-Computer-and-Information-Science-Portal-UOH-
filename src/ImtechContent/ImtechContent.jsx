import React from "react";
import "./ImtechContent.css";
const ImtechContent = () => {
  return (
    <>
      <div className="main">
        <div className="col-lg-4 col-md-12 left">
          <div className="card shadow mb-2">
            <div className="arrow_box">
              <b>Duration</b>
            </div>
            <div className="p-3">
              <h6 className="mx-4">Post Graduation Program</h6>
              <h6 className="mx-4">2 year</h6>
            </div>
          </div>
          <div className="card shadow mb-2">
            <div className="arrow_box">
              <b>Intake</b>
            </div>
            <h6 className="p-3 mx-4">21</h6>
          </div>
          <div className="card shadow mb-2">
            <div className="arrow_box">
              <b>Fees Per year</b>
            </div>
            <h6 className=" p-3 mx-4">50,000 per year</h6>
          </div>
          <div className="card shadow mb-2">
            <div className="arrow_box">
              <b>Fellowship/Scholarship</b>
            </div>
            <h6 className=" p-3 mx-4">
              {" "}
              @ Rs.750/- p.m for a period of 10 months in an academic year.{" "}
            </h6>
          </div>
          <div className="card shadow mb-2">
            <div className="arrow_box">
              <b>Contact </b>
            </div>
            <div className="p-3">
              <h6 className="mx-4">Head of adepartment</h6>
              <h6 className="mx-4">
                School of Computer and Information Sciences
              </h6>
              <h6 className="mx-4">University of Hyderabad</h6>
              <h6 className="mx-4">mail - scis@uohyd.ac.in</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 right">
          <div className="card shadow mb-2">
            <div className="arrow_box">
              <b>Program Overview</b>
            </div>
            <p className=" mx-4">
              The School has introduced a five year Integrated M.Tech. programme
              in Computer Science with effect from the academic year 2014-15.
              The students will be awarded a M.Tech Degree at the end of five
              years but there is no exit point. This is intended to provide a
              high quality computer science education with a curriculum that is
              state-of-the-art. The School boasts of a very low student-teacher
              ratio that allows faculty to give individual attention to
              students.
            </p>
            <div className="arrow_box">
              <b>Minimum Qualification</b>
            </div>
            <p className=" mx-4">
              As per JOSAA/CSAB guidelines. One of the criteria for admission is
              that the candidate should satisfy at least one of these two
              criteria: (i) The candidate is within the category-wise top 20
              percentile of successful candidates in their respective Class XII
              (or equivalent) examination of respective stream and Board. (ii)
              The candidate has secured minimum 75% (for GEN or OBC-NCL) or
              minimum 65 % (for SC, ST or PWD) of aggregate marks in the Class
              XII (or equivalent) examination of respective stream and Board.
            </p>
            <div className="arrow_box">
              <b>Admission Process</b>
            </div>
            <p className=" mx-4">
              The admission to 5-year Integrated M.Tech. in Computer Science
              will be done through JEE(Main) examination conducted in 2018 and
              the counselling for admission will be done by Joint Seat
              Allocation Authority (JOSAA)/Central Seat Allocation Board (CSAB).
            </p>
            <div className="arrow_box">
              <b>Foreign Candidates</b>
            </div>
            <p className=" mx-4">
              Financial assistance under UOH student assistance will be offered
              to Masters &amp; Integrated Masters programme in an academic year
              @ Rs.750/- p.m for a period of 10 months in an academic year. The
              norms relating to sanction of this assistance will be notified
              separately each year.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImtechContent;
