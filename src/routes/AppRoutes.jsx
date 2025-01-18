import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
// import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Course from "../pages/Course";
import Placement from "../pages/Placement";
import Research from "../pages/Reasearches";
import Mca from "../pages/Mca.jsx";
import Mtech from "../pages/Mtech.jsx";
import Imtech from "../pages/Imtech.jsx";
import Faculty from "../pages/FacultyInfo.jsx";
import Saifullah from "../components/Faculty/P_Saifullah.jsx"
import Phd from "../pages/Phd.jsx"
import Notifications from "../pages/New_Event.jsx";
import AddNotification from "../components/AddNotification.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/blog" element={<Blog />} /> */}
      <Route path="/contact" element={<Contact />} />
      <Route path="/course" element={<Course />} />
      <Route path="/research" element={<Research />} />
      <Route path="/Placement" element={<Placement />} />
      <Route path="/Mca" element={<Mca />} />
      <Route path="/Mtech" element={<Mtech />} />
      <Route path="/Imtech" element={<Imtech />} />
      <Route path="/Faculty" element={<Faculty />} />
      <Route path="/saifullah" element={<Saifullah />} />
      <Route path="/phd" element={<Phd />} />
      <Route path="/notification" element={<Notifications />} />
      <Route path="/addnoti" element={<AddNotification />} />
      
    </Routes>
  );
};

export default AppRoutes;
