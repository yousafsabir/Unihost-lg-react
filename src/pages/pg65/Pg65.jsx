import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Pg65form from "../../components/pg65form/Pg65form";

import "./Pg65.css";
function Pg65() {
  return (
    <div>
      <Navbar />
      <Pg65form />
      <Footer />
    </div>
  );
}

export default Pg65;
