import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUserDetails } from "../../store/slice/users/userSlice";
import "./Preference.scss";

import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import PreferenceGrid from "../../components/PreferenceGrid/PreferenceGrid";
import { Button } from "react-bootstrap";

const Preference = () => {
  const [preferences, setPreferences] = useState([]);
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state?.user?.userInfo);
  const id = userInfo?.id;
  const receivedPreferences = userInfo?.preferences;

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (preferences?.length < 3) {
      return alert(`Please select atleast 3 preferences`);
    }
    const data = { preferences: preferences };

    const payload = {
      data,
      id,
    };
    dispatch(editUserDetails(payload));
  };

  return (
    <div>
      <Navbar />
      <div className="container preferences-container">
        <h3 className="preferences-heading">Preferences</h3>
        <PreferenceGrid
          selectable={true}
          setPreferences={setPreferences}
          receivedPreferences={receivedPreferences}
        />
        <Button className="submitbutton" onClick={() => handleSubmit()}>
          Continue
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Preference;
