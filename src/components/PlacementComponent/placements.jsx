import "./placement.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
const placements = () => {
  return (
    <>
      <div className="container mt-5">
        <MDBAccordion flush>
          <MDBAccordionItem
            collapseId={1}
            className="my-custom-class"
            headerTitle="Information"
          >
            <div>
              <p align="justify">
                SCIS has a vibrant placement programme where mostly product
                based companies with good salary packages come for recruitment.
                The work in such companies is challenging and interesting with a
                brand value on technologies and the company itself.
              </p>
              <p align="justify">
                In the last two years, we have had the following recruitments:
              </p>
              <div className="arrow_box">Year 2023-24</div>
              <ul>
                <li>
                  Two M.Tech. students and four I.M.Tech. students were accepted
                  as interns in{" "}
                  <a href="https://www.ge.com/digital/" target="_blank">
                    <b>GE Digital</b>
                  </a>
                  .
                </li>
                <li>
                  In April 2023,{" "}
                  <a href="https://www.marvell.com/" target="_blank">
                    <b>Marvell</b>
                  </a>{" "}
                  visited the campus and recruited eight students -- 5 I.M.Tech.
                  and 3 M.Tech. -- as interns.
                </li>
                <li>
                  Placement is ongoing for internships and the page will be
                  updated as more companies visit the campus.
                </li>
                <li>
                  <font size="-1" color="#000000">
                    <b>MCA Students</b>
                  </font>
                  : From this year onwards, the final semester project has been
                  converted into an internship to encourage more
                  industry-oriented learning. Students will also do a
                  mini-project in the campus spread over their 2nd and 3rd
                  semesters.
                </li>
              </ul>
              <div className="arrow_box">Year 2022-23</div>
              <ul>
                <li>MCA : 39</li>
                <li>I M.Tech : 14</li>
                <li>M.Tech (CS) : 48</li>
                <li>M.Tech (IT) : 6</li>
                <li>M.Tech (AI) : 23</li>
                <li>M.Tech (IS) : 4</li>
                <li>Min Package: 3.5 LPA</li>
                <li>Max Package: 23 LPA</li>
                <li>
                  <a href="https://www.intel.in" target="_blank">
                    <b>Intel</b>
                  </a>
                  : The mode of recruitment is to first recruit the students as
                  interns for a year. M.Tech. and I.MTech. students are eligible
                  for this as the work done in such corporates is considered as
                  their final year project. Seven students were selected as
                  interns by Intel: 3 from I.M.Tech., 3 from M.Tech.(CS) and 1
                  from M.Tech.(AI).
                </li>
                <li>
                  <a href="https://www.ge.com/in/" target="_blank">
                    <b>GE</b>
                  </a>
                  : 2 students, one each from I.M.Tech. and M.Tech.(CS) were
                  selected.
                </li>
                <li>
                  <a href="https://hexagon.com/" target="_blank">
                    <b>HEXAGON</b>
                  </a>
                  : One I.M.Tech. student was recruited.
                </li>
                <li>
                  <a href="https://www.acldigital.com/" target="_blank">
                    <b>ACL Digital</b>
                  </a>
                  : 3 students, one each from M.Tech(CS), M.Tech(AI) and
                  M.Tech.(IT) were recruited.
                </li>
                <li>
                  <font size="-1" color="#000000">
                    <b>MCA Students</b>
                  </font>
                  : Generally, the final semester project so far has been
                  allowed to be an internship. In 2022, the following companies
                  recruited students as interns:
                  <a href="https://semiconductor.samsung.com/" target="_blank">
                    <b>Samsung semiconductors</b>
                  </a>
                  ,
                  <a href="https://www.crisil.com/" target="_blank">
                    <b>Crisil</b>
                  </a>
                  ,
                  <a href="https://quadratyx.com/" target="_blank">
                    <b>Quadratyx</b>
                  </a>
                  ,
                  <a href="https://www.oneconvergence.com/" target="_blank">
                    <b>Oneconvergence</b>
                  </a>
                  ,
                  <a href="https://www.techsophy.com/" target="_blank">
                    <b>Techsophy</b>
                  </a>
                  ,
                  <a href="https://www.zentreelabs.com/" target="_blank">
                    <b>Zentree labs</b>
                  </a>
                  ,
                  <a href="https://www.latentview.com/" target="_blank">
                    <b>Latentview analytics</b>
                  </a>
                  ,
                  <a href="https://www.factset.com/" target="_blank">
                    <b>Factset</b>
                  </a>
                  .
                </li>
              </ul>
              <div className="arrow_box">Year 2021-22</div>
              <ul>
                <li>MCA : 117</li>
                <li>I M.Tech : 18</li>
                <li>M.Tech (CS) : 26</li>
                <li>M.Tech (IT) : 15</li>
                <li>M.Tech (AI) : 6</li>
                <li>M.Tech (IS) : 13</li>
                <li>Min Package: 3.5 LPA</li>
                <li>Max Package: 15 LPA</li>
              </ul>
            </div>
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={2}
            className="my-custom-class"
            headerTitle="Placement Officers"
          >
            <p>
              <font size="4px" color="#993333">
                <b>Salman Abdul Moiz</b>
              </font>{" "}
              <br />
              Chairman, Placement Guidance and Advisory Bureau
              <br />
              University of Hyderabad
              <br />
              E-Mail :<b>&nbsp;samcs@uohyd.ernet.in</b>
              <br />
              Contact:<b>&nbsp;91-040-23134126</b>
            </p>
            <p>
              <font size="4px" color="#993333">
                <b>N. Rukma Rekha</b>
              </font>{" "}
              <br />
              Placement Coordinator
              <br />
              E-Mail :<b>&nbsp;rukmarekha@uohyd.ac.in</b>
              <br />
              Contact :<b>&nbsp;91-040-23134113</b>
            </p>
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
    </>
  );
};

export default placements;
