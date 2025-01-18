import Subheader from "../components/Subheader/Subheader";
import React from "react";
import Footer from "../components/Footer/Footer";
import McaContent from "../McaContent/McaContent";
const McaPage = () => {
  return (
    <>
      <Subheader header="Master of Computer Application" />
      <McaContent />
      <Footer />
    </>
  );
};

export default McaPage;
