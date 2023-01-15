import React from "react";
import Navbar from "../components/Primary/Navbar";
import Footer from "../components/Primary/Footer";
import Heading from '../components/HomePage/Heading'
import AllJob from "../components/Experience/AllJob";
function experience() {
  return (
    <div>
      <Navbar />
      <Heading/>
      <AllJob/>
      <Footer />
    </div>
  );
}

export default experience;
