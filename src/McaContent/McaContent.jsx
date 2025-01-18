// import React from "react";
import "./McaContent.css";
const McaContent = () => {
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
            <h6 className="p-3 mx-4">40</h6>
          </div>
          <div className="card shadow mb-2">
            <div className="arrow_box">
              <b>Fees Per year</b>
            </div>
            <h6 className=" p-3 mx-4">60,000 per year</h6>
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
              Programme aims to prepare graduates in all the major areas of
              computer science, relevant aspects of mathematics and management
              so that they can take up both technical and managerial positions
              in industry. The training is rigorous and involves five semesters
              of course work and one semester of project work. MCA students of
              earlier batches have been offered internships at companies such as
              IBM, GE, Microsoft, CA, CMC, Honeywell etc. and are thus provided
              an opportunity to learn in industry environment during their last
              semester.
            </p>
            <div className="arrow_box">
              <b>Minimum Qualification</b>
            </div>
            <p className=" mx-4">
              "NIMCET score in order of merit, will be the only criteria for
              admission". Mathematics as a main subject and studied as full
              papers in Higher Secondary (10 + 2) level is a mandatory
              prerequisite. First Class Bachelor's degree with at least 60%
              marks in aggregate, in any discipline.
            </p>
            <div className="arrow_box">
              <b>Admission Process</b>
            </div>
            <p className=" mx-4">
              MCA admissions are done based on the scores obtained in NIMCET
              (National Institute of Technology Master of Computer Applications
              Common Entrance Test) 2018 only. NIMCET 2018 scores, in order of
              merit, will be the basis for admission which is done by the
              counselling at the University of Hyderabad. Interested candidates
              need to apply to the University of Hyderabad and separately need
              to provide their NIMCET 2018 scores (when available) as per the
              information provided by Controller of Examination, University of
              Hyderabad.
            </p>
            <div className="arrow_box">
              <b>Foreign Candidates</b>
            </div>
            <p className=" mx-4">
              Foreign nationals seeking admission in MCA programme should have
              the required minimum qualifications. Candidates should have
              ability to communicate in English and should submit a supportive
              document with a good score in TOEFL/IELTS at the time of
              admission. Please also read Section on Admission of Foreign
              Nationals in the Prospectus.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default McaContent;
