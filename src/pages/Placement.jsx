import React from "react";
import Subheader from "../components/Subheader/Subheader";
import Placements from "../components/PlacementComponent/placements";
import Footer from "../components/Footer/Footer";
const Placement = () => {
  return (
    <>
      <Subheader header="Placements" />
      <Placements />
      <Footer />
    </>
  );
};

export default Placement;
