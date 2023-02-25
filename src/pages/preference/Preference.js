import React from "react";
import "./Preference.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PreferenceGrid from "../../components/PreferenceGrid/PreferenceGrid";

const Preference = () => {
  return (
    <div>
      <Navbar />
      <div className="content-container">
        <h3 className="preferences-heading">Preferences</h3>
        <PreferenceGrid />
      </div>
      <Footer />
    </div>
  );
};

export default Preference;
