import React from "react";
import "./Preference.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PreferenceGrid from "../../components/PreferenceGrid/PreferenceGrid";
import { Button } from 'react-bootstrap';

const Preference = () => {
  return (
    <div>
      <Navbar />
      <div className="container content-container preferences-container">
        <h3 className="preferences-heading">Preferences</h3>
        <PreferenceGrid />
        <Button className="submitbutton">Continue</Button>
      </div>
      <Footer />
    </div>
  );
};

export default Preference;
