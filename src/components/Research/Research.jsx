import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./Research.css";
import { MDBAccordion, MDBAccordionItem } from "mdb-react-ui-kit";
const Research = () => {
  return (
    <>
      <div className="container mt-5">
        {/* <h1 className="text-center mb-4">Research Areas</h1> */}

        <MDBAccordion flush>
          <MDBAccordionItem
            collapseId={1}
            className="my-custom-class"
            headerTitle="Research Areas"
          >
            <div>
              <div className="arrow_box">Research Areas</div>
              <p>
                The SCIS has been carrying out advanced research and development
                in many frontier areas of Computing Sciences, Information
                Sciences and Artificial Intelligence and some of the broad areas
                of research are -
              </p>
              <ul>
                <li>Artificial Intelligence</li>
                <li>Bioinformatics</li>
                <li>Cognition</li>
                <li>Computational Intelligence </li>
                <li>Computer Forensics</li>
                <li>Computer Networks</li>
                <li>Computer and Network Security</li>
                <li>Computer Vision</li>
                <li>Cryptology</li>
                <li>Data Base Management Systems</li>
                <li>Data Warehousing and Data Mining</li>
                <li>E-Commerce</li>
                <li>Embedded Systems</li>
                <li>Enterprise Resource Planning</li>
                <li>Expert Systems</li>
                <li>Geographical Information Systems</li>
                <li>Grid and Cloud Computing</li>
                <li>Human Computer Interaction</li>
                <li>Image Processing</li>
                <li>Information Security</li>
                <li>Internet and Web Technologies</li>
                <li>Logic Decision Support Systems</li>
                <li>Machine Learning</li>
                <li>Meta-heuristics</li>
                <li>Mobile Computing and Ad-hoc Networks</li>
                <li>Natural Language Engineering</li>
                <li>Parallel and Distributed Processing</li>
                <li>Pattern Recognition</li>
                <li>Software Engineering</li>
                <li>Speech Processing</li>
              </ul>
              <div className="arrow_box">Funded Projects</div>
              <p>
                The SCIS has attracted research projects from several agencies
                like DST, UGC, etc.
              </p>
              <ul>
                <li>
                  {" "}
                  DST PURSE-I &amp; II has provided financial support for
                  establishing
                  <b>
                    Embedded Systems Lab, Network and Forensics Lab and Computer
                    Vision lab
                  </b>
                </li>
                <li>
                  {" "}
                  DST FIST-I has provided financial support to set up{" "}
                  <b>
                    Software Engineering; Spoken Language Processing; Network
                    and Security; and Wireless Computing Labs.{" "}
                  </b>
                </li>
                <li>
                  {" "}
                  UGC under SAP DRS-1 for thrust areas of{" "}
                  <b>
                    {" "}
                    AI, Distributed Computing, Image Processing, Mobile
                    Computing, Sensor Networks, Soft Computing.
                  </b>
                </li>
              </ul>
              <div className="arrow_box">New Equipments</div>
              <ul>
                <li>5xM40 GPU (NVIDIA)</li>
                <li>Video Conferencing Equipment</li>
                <li>VIdeo Spectral Comprator</li>
                <li>Spectrophotometer</li>
                <li>Cloud Computing Infrastructure</li>
                <li>Hadoop/Aneka Cluster</li>
                <li>8 High end workstations</li>
                <li>Wireless/Sensor Simulator Server/Storage Server</li>
                <li>4 High end Servers as respource for various programmes</li>
                <li>100 desktops with networked printers</li>
                <li>100 KW Solar Power</li>
                <li>3x20 Tons Central AC Plant</li>
              </ul>
            </div>
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={2}
            className="my-custom-class"
            headerTitle="Funded Projects"
          >
            <div>
              {/* <div class="arrow_box">Current Projects</div>

              <div class="arrow_box">Consultancy</div>
              <div class="arrow_box">Past Projects</div> */}

              <div className="arrow_box">
                <b>Current Projects</b>
              </div>
              <li>Indo-EU Project.</li>
              <li>FAE [HEMRL, DRDO]</li>
              <li>
                Mobile and Sensor Network Based Disaster Management System with
                emphasis on Rescue Management. [IBM]
              </li>
              <li>
                A New Framework for Analysis, Generation and Translation in
                Indian Languages (Kannada and Telugu), [MCIT,DeiTy]
              </li>
              <li>
                Development of Effective Wireless Sensor Network System for
                Water Quality and Quantity Monitoring (Aquasense), [ITRA]
              </li>
              <li>
                Implementation of Rainbow table attackt on A5/1 algorithm.
                [DLRL]
              </li>
              <li>Analysis of Algorithms for decoding A5/1 and A5/2. [DLRL]</li>
              <li>
                An Investigation into the capabilities of artificial bee colony
                algorithm for discrete optimization. [DST]
              </li>
              <li>
                Swarm Intelligence based Schemes for resource allocation and
                data routing in Cognitive Radio. [DST]
              </li>
              <li>
                Prototype development of WSN based Adaptive Water Quality
                Monitoring System (Aquamon), [DST]
              </li>
              <li>
                Distributed Software Engineering, Indo-Trento Project. [DST]
              </li>

              <li>
                Development of Robust Document analysis and recognition system
                for printed Indian Scripts, [MCIT,DIT]
              </li>
              <li>
                Investigation on Model Based Intrusion detection approach for
                providing secured assess to University computing resources.
                [UGC]
              </li>

              <div className="arrow_box">
                <b>Consultancy</b>
              </div>
              <li>
                Medho Servo Drives Pvt. Ltd. (Consultance), "Genetic Algorithm
                for Optimum Profile Simulation"
              </li>
              <li>
                Zen Technologies Ltd. (Consultancy), " Simulation of Dynamics of
                Hexapod manipulator"
                <div className="arrow_box">
                  <b>Past Projects</b>
                </div>
                <ul>
                  <li>
                    iGEON-India: International GEON, India: A Knowledge R&amp;D
                    Networked Indo-US Centre. [IUSSTF]
                  </li>
                  <li>
                    Pilot Study of Grid Fabric Middleware for developing
                    framework for MDO applications. [DRDL]
                  </li>

                  <li>
                    Grid fabric/ middleware technologies for developing
                    framework for deploying ocean related applications and
                    Services. [INCOIS]
                  </li>
                  <li>
                    {" "}
                    Development of Software tools for Development of
                    obliterations and erasures On Questioned
                    Documents.[GEQD,MHA]
                  </li>
                  <li>
                    {" "}
                    Resource Centre for Indian Language Technology Solutions
                    (Telugu). [MIT]
                  </li>
                  <li>
                    {" "}
                    National Standard for Digital Geospatial metadata and
                    software development for ToolBox. [ISRO]{" "}
                  </li>
                  <li>
                    {" "}
                    Content based Retrieval of Remotely Sensed Data. [ISRO]{" "}
                  </li>
                  <li>
                    {" "}
                    Development of Grid Middleware for Integration of Dispersed
                    Resources. [DRDL]{" "}
                  </li>
                  <li>
                    {" "}
                    Investigation of Different Neural Network Techniques for
                    Rocket Trajectory Estimation. [ISRO]{" "}
                  </li>
                  <li> Formal Specification Based Object Testing. [ISRO]</li>
                  <li> Number Theoretic Approach to Cryptanalysis. [ISRO]</li>
                  <li>
                    {" "}
                    Research and Development of Data Mining Techniques for Cyber
                    Security. [MIT]{" "}
                  </li>
                  <li>
                    {" "}
                    Investigation of Articulation Efforts for the Development of
                    Speech System for Telugu. [AICTE]
                  </li>
                  <li>
                    {" "}
                    Automated knowledge level software engineering. [TIFR]{" "}
                  </li>
                  <li> Language Engineering Research. [UGC/UPE]</li>
                  <li> Telugu Speech Interface Machine. [UGC/UPE] </li>
                  <li>
                    {" "}
                    To Develop a Multimedia Software Package for Teaching Urdu
                    to Adult Non-Literates. [UGC/UPE]
                  </li>
                  <li> Telugu OCR. [MCIT] </li>
                  <li>
                    {" "}
                    To study upper ocean thermohaline structure of the North
                    Indian ocean on intra-seasonal and inter-annual time scale.
                    [INCOIS]{" "}
                  </li>
                  <li> Particle Swarm Intelligence for optimization. [DST]</li>
                  <li>
                    {" "}
                    Language and Brain Organization in Normative
                    Multilingualism. [DST]
                  </li>
                  <li>
                    {" "}
                    Innovative Tools and Technologies for Language Teaching and
                    Learning in the Context of Telugu. [UPE-II]
                  </li>

                  <li> Compromised Node Identification. [SAG,DRDO]</li>
                </ul>
              </li>
            </div>
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={3}
            className="my-custom-class"
            headerTitle="Publications"
          >
            <div>
              <div>
                <div className="arrow_box">
                  <b>2017-18</b>
                </div>
                <p>Under</p>
                <div className="arrow_box">
                  <b>2016-17</b>
                </div>
                <ul>
                  <li>
                    B.Ravi Kumar. B.Jagadish and P.N.Girija, "USER INTERFACE
                    DESIGN FOR ICEBERG QUERY APPLICATIONS", International
                    Journal ofEngineering Science and Technology Volume 6,Issue
                    No.7,2016
                  </li>

                  <li>
                    {" "}
                    Arun K. Pujari, Venkateswara Rao Kagita, Anubhuti Garg,
                    Vineet Padmanabhan: Efficient computation for probabilistic
                    skyline over uncertain preferences. Information Sciences
                    journal. 324: 146-162 (December 2015)
                  </li>

                  <li>
                    {" "}
                    Abhinash Pujahari, Vineet Padmanabhan A New Grouping Method
                    Based on Social Choice Strategies for Group Recommender
                    System, Proceedings of the International conference o CIDM,
                    Computational Intelligence in Data Mining-Volume 1,
                    Springer, 325-332{" "}
                  </li>

                  <li>
                    N.Praveen Kumar and P.N.Girija, A Website Design for
                    Semester Course Registration System,International Journal of
                    Innovative Research in Computer and
                    Communication,Engineering (IJIRCCE), Volume 4, Issue7, 2016{" "}
                  </li>

                  <li>
                    Rashmita Sahoo, T.Sobha Rani, S.Durga Bhavani,
                    Differentiating Cancer from Normal Protein-Protein
                    Interactions through Network Analysis, Chapter 17 in
                    Emerging Trends in Computational Biology, Bioinformatics and
                    Systems Biology � Systems &amp; Applications Ed: Q-N Tran
                    and H.R. Arabnia, Elsevier, 253-270, 2016{" "}
                  </li>

                  <li>
                    D.Shiva Shankar, S. Durga Bhavani, Consensus Clustering
                    Approach for Discovering Overlapping Nodes in Social
                    Networks, Proceedings of the 3rd IKDD Conference on Data
                    Science, 2016, 21:1 � 21:2, ACM, 2016{" "}
                  </li>

                  <li>
                    Jatharakonda Mallesham, S. Durga Bhavani, Influential Degree
                    Heuristic for RankedReplace Algorithm in Social Networks.
                    Proceedings of ICDCIT 2016: 56-60, Lecture Notes in Computer
                    Science 9581, Springer 2016{" "}
                  </li>

                  <li>
                    {" "}
                    Praveen Kumar Singh, P.S.V.S. Sai Prasad, Scalable Quick
                    Reduct Algorithm: Iterative MapReduce Approach.Proceedings
                    of 3rd IKDD Conference on Data Science, CODS 2016, Pune,
                    India, March 13-16, 2016, pp. 25.1-25.2, ACM 2016{" "}
                  </li>
                </ul>
              </div>
              <div>
                <div className="arrow_box">
                  <b>2015-16</b>
                </div>
                <ul>
                  <li>
                    Raghavendra Kune, Pramodkumar Konugurthi, Arun Agarwal,
                    Raghavendra Rao Chillarige, and Rajkumar Buyya, The Anatomy
                    of Big Data Computing, Software: Practice and Experience
                    (SPE), 46(1):79-105 (2016), ISSN: 0038-0644, Wiley Press,
                    New York, USA.
                  </li>

                  <li>
                    Raghavendra Kune, Pramod Kumar Konugurthi, Arun Agarwal,
                    Raghavendra Rao Chillaregi and Rajkumar Buyya, XHAMI -
                    Extended HDFS and MapReduce Interface for Image Processing
                    Applications, IEEE 4th International Conference on Cloud
                    Computing for Emerging Markets (CCEM 2015), 25th Nov- 27th
                    Nov 2015, Bangalore, India{" "}
                  </li>
                  <li>
                    Manoj Kumar Balwant, Arun Agarwal, C.R. Rao, Online
                    Touchless Palmprint Registration System in a Dynamic
                    Environment, Eleventh International Multi-Conference on
                    Information Processing-2015 (IMCIP-2015), Procedia Computer
                    Science, Elsevier, August 21-23, 2015, Bangalore
                  </li>
                  <li>
                    Mustafa Kaiiali, Rajeev Wankar, C R Rao, Arun Agarwal,
                    Cross-Domain, Single Resource Authorization using HCM, The
                    International Technology Management Conference (ITMC2015),
                    pp 54-59, 2015, ISBN: 978-941968-11-6 @2015 SDIWC
                  </li>
                  <li>
                    K. Narayana Murthy, V V Venkata Ramana, R Bhaskar, Appam
                    Pandaiah Eds, "Computer Science Dictionary (English-Telugu)"
                    Telugu Academy, Hyderabad, 2015
                  </li>
                  <li>
                    Kavi Narayana Murthy, ``On Defining Word'', IJDL, Vol XLIV,
                    No 1,2015, pp 129-161
                  </li>
                  <li>
                    S.N. Chaurasia and A. Singh (2015). "A Hybrid Swarm
                    Intelligence Approach to the Registration Area Planning
                    Problem". Information Sciences 302, 50-69, May 2015,
                    Elsevier{" "}
                  </li>
                  <li>
                    S.N. Chaurasia, Shyam Sundar and A. Singh (2015). "A Hybrid
                    Evolutionary Approach for Set Packing Problem". OPSEARCH 52,
                    271-284, June 2015, Springer-Verlag{" "}
                  </li>
                  <li>
                    S.N. Chaurasia and A. Singh (2015). "A Hybrid Evolutionary
                    Algorithm with Guided Mutation for Minimum Weight Dominating
                    Set". Applied Intelligence 43, 512-519, October 2015,
                    Springer-Verlag
                  </li>
                  <li>
                    S. Sundar and A. Singh (2015). "Metaheuristic Approaches for
                    the Blockmodel Problem". IEEE Systems Journal 9, 1237-1247,
                    December 2015, IEEE{" "}
                  </li>
                  <li>
                    A. Singh and A. Rossi (2015). "Group Scheduling Problems in
                    Directional Sensor Networks". Engineering Optimization 47,
                    1651-1669, December 2015, Taylor &amp; Francis{" "}
                  </li>
                  <li>
                    S.N. Chaurasia and A. Singh(2016). "A Hybrid Heuristic for
                    Dominating Tree problem". Soft Computing 20,377-397, Januray
                    2016, Springer-Verlag{" "}
                  </li>
                  <li>
                    Dileep K P, T Appala Naidu, V.Ch. Venkaiah, Allam Apparao,
                    Sequential Secret Sharing Scheme Based on Level Ordered
                    Access Structure., Int. Journal of Network Security,
                    Vol.18,No.5, PP.874-881,2016{" "}
                  </li>
                  <li>
                    2. T Appala Naidu, Kamakshi Prasad V, V.Ch Venkaiah,
                    Multi-Stage Secret Sharing Schemes Based on Asmuth's bloom
                    sequence, CiiT Int. J. of Networking and Communication
                    Engineering, Vol.8,No.3,2016{" "}
                  </li>
                  <li>
                    T.Appala Naidu, Kamakshi Prasad V, V.Ch Venkaiah, Secret
                    sharing schemes for multipartite access structures, Int. J.
                    of Applied Engineering Research, ISSN 0973-4562 Vol.11,
                    No.7, pp 5244-5249,2016
                  </li>
                  <li>
                    V Ch Venkaiah, Necklaces: Generalizations, Resonance, Vol.
                    20, No. 6, 542-555, 2015{" "}
                  </li>
                  <li>
                    T.A.Naidu, Dileep Kumar P, V.Ch Venkaiah, Allam Apparao,
                    Sequential Secret Sharing for Level Ordered Access Structure
                    , (Accepted in Journal of Network Security (IJNS)),2015{" "}
                  </li>
                  <li>
                    Anjaneyulu Endurthi, Oinam B Chanu, Appala Naidu Tentu and
                    V. Ch Venkaiah, Reusable Multi-Stage Multi-Secret Sharing
                    Schemes based on CRT., Journal of Communications Software
                    and Systems (JCOMSS),Vol.11,No.1, pp.15-24, March 2015
                  </li>
                  <li>
                    Anjaneyulu Endurthi, Appala Naidu Tentu and V.Ch Venkaiah.,
                    Reusable Multi-Stage Multi-Secret Sharing Scheme based on
                    Asmuth-Bloom Sequence. International Journal of Computer
                    Applications IJCA(0975-8887)-Proceedings on International
                    Conference on Communication, Computing and Information
                    Technology ICCCMIT 2014(3):1-6,March 2015{" "}
                  </li>
                  <li>
                    Gopal N. Rai, G. R. Gangadharan, Vineet Padmanabhan:
                    Algebraic Modeling and Verification of Web Service
                    Composition. ANT/SEIT 2015, 6th International Conference on
                    Ambient Systems, Networks and Technologies (ANT 2015), 5th
                    International Conference on Sustainable Energy Information
                    Technology (SEIT-2015), UK, June 2015 : 675-679{" "}
                  </li>
                  <li>
                    Nishma Laitonjam, Vineet Padmanabhan, Arun K. Pujari,
                    Rajendra Prasad Lal: Topic Modelling for Songs. ICIT 2015,
                    2015 International Conference on Information Technology,
                    ICIT 2015, Bhubaneswar, India, December 21-23, 2015. IEEE
                    2015: 130-135
                  </li>
                  <li>
                    Sandeep Kumar Sahu, Arun K. Pujari, Venkateswara Rao Kagita,
                    Vikas Kumar, Vineet Padmanabhan, GP-SVM: Tree Structured
                    Multiclass SVM with Greedy Partitioning. ICIT 2015, 2015
                    International Conference on Information Technology, ICIT
                    2015, Bhubaneswar, India, December 21-23, 2015, IEEE 2015
                    142-147.
                  </li>

                  <li>
                    Abinash Pujahari, Vineet Padmanabhan: Group Recommender
                    Systems: Combining User-User and Item-Item Collaborative
                    Filtering Techniques, ICIT 2015, 2015 International
                    Conference on Information Technology, ICIT 2015,
                    Bhubaneswar, India, December 21-23, 2015, IEEE 2015:
                    148-152.
                  </li>
                  <li>
                    Venkateswara Rao Kagita, Krishna Charan Meka, Vineet
                    Padmanabhan: A Novel Social-Choice Strategy for Group
                    Modeling in Recommender Systems. ICIT 2015, 2015
                    International Conference on Information Technology, ICIT
                    2015, Bhubaneswar, India, December 21-23, 2015. IEEE 2015
                    153-158{" "}
                  </li>
                  <li>
                    Vineet Padmanabhan, Pranay Goud, Arun K.Pujari, Harshit
                    Sethy: Learning in Real-Time Strategy Games. ICIT 2015, 2015
                    International Conference on Information Technology, ICIT
                    2015, Bhubaneswar, India, December 21-23, 2015. IEEE
                    2015165-170{" "}
                  </li>

                  <li>
                    Abhinash Pujahari, Vineet Padmanabhan, S Patel, Nearest
                    Neighbour with Priority Based Recommendation Approach to
                    Group Recommender System, Proceedings of the International
                    conference o CIDM, Computational Intelligence in Data
                    Mining, Volume 2, Springer, 347-354, December 2015{" "}
                  </li>

                  <li>
                    S K Sahu, AK Pujari, V Kumar, VR Kagita, Vineet Padmanabhan,
                    Greedy partitioning based tree structured multiclass SVM for
                    Odia OCR, Fifth National Conference on Computer Vision,
                    Pattern Recognition, Image Processing and Graphics
                    (NCVPRIPG), 16-19 December, 2015{" "}
                  </li>

                  <li>
                    Arun K. Pujari, Venkateswara Rao Kagita, Anubhuti Garg,
                    Vineet Padmanabhan: Efficient computation for probabilistic
                    skyline over uncertain preferences. Information Sciences
                    journal. 324: 146-162 (December 2015)
                  </li>

                  <li>
                    Abhinash Pujahari, Vineet Padmanabhan A New Grouping Method
                    Based on Social Choice Strategies for Group Recommender
                    System, ,Proceedings of the International conference o CIDM,
                    Computational Intelligence in Data Mining-Volume 1,
                    Springer, 325-332
                  </li>
                </ul>
              </div>
            </div>
          </MDBAccordionItem>

          <MDBAccordionItem
            collapseId={4}
            className="my-custom-class"
            headerTitle="Linkages"
          >
            <div>
              <div className="arrow_box">
                <b>Present</b>
              </div>
              <ul>
                <li>C R Rao, AIMSCS.</li>
                <li>Dell.</li>
                <li>IDRBT, Hyderabad.</li>
                <li>IIIT, Hyderabad.</li>
                <li>ISI, Calcutta.</li>
                <li>Hitachi Consulting.</li>
                <li>Mahasarakham University, Thailand.</li>
                <li>Teradata.</li>
                <li>University de Bretagne Sud, France.</li>
              </ul>
              <div className="arrow_box">
                <b>Past</b>
              </div>
              <ul>
                <li>Altair Engineering, India.</li>
                <li>
                  CMC.
                  <b></b>{" "}
                </li>
                <li>IBM, (ISTL).</li>
                <li>National University of Singapore.</li>{" "}
                <li>Sierra Atlantic.</li>
                <li>University of California, San Diego.</li>
                <li>Waseda University, Japan.</li>
              </ul>
            </div>
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
    </>
  );
};

export default Research;
