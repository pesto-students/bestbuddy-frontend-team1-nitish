import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Amenties from "./../../components/Amenties/Amenties";
import PreferenceGrid from "./../../components/PreferenceGrid/PreferenceGrid";
import { Button } from "react-bootstrap";
import { getFormValues } from "../../utils/formFieldHelpers";
import "./AddRoom.scss";
import {
  addProperty,
  setMessageEmpty,
  setAddedPropertyStatusFalse,
} from "../../store/slice/property/propertySlice";
import { toast } from "react-toastify";
import ImageUploader from "../../components/ImageUploader/ImageUploader";

const AddRoom = () => {
  const [amenties, setAmenties] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state?.property?.message);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (images?.length === 0) {
      return alert(`Please upload atleast 1 image`);
    }
    if (preferences?.length < 3) {
      return alert(`Please select atleast 3 preferences`);
    }

    const formElements = document.querySelector("#property-form");
    const formValues = getFormValues(formElements);
    const payload = {
      ...formValues,
      amenties,
      perfrences: preferences,
      image: images,
      details: "",
    };
    dispatch(addProperty(payload));
    setTimeout(() => {
      toast("property added successfully");
      navigate(`/addroom`);
    }, 3000);
  };

  return (
    <>
      <NavBar />
      <form className="container" id="property-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="add-room">
          <h2 className="addHeading">Have a Room</h2>
          <h6 className="addHeading2">Please enter the room details below</h6>

          <section className="inputs-grps-top">
            <div className="input-grp grp1">
              <div className="input-propertyname">
                <h5>Property name</h5>
                <input
                  type="text"
                  placeholder="Add property name"
                  name="property-name"
                  id=""
                  required
                />
              </div>
              <div className="input-location">
                <h5>Add room location</h5>
                <select name="location" className="select">
                  <option disabled value="">Select a location</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Hyderabadh">Hyderabadh</option>
                  <option value="Jaipur">Jaipur</option>
                </select>
              </div>
              <div className="input-rent">
                <h5>Rent of Room</h5>
                <input
                  type="text"
                  name="rent"
                  id=""
                  placeholder="Please input here"
                />
              </div>
            </div>
            <span className="divider1"></span>
            <div className="input-grp grp2">
              <div className="input-type">
                <h5>Property type</h5>
                <select name="property-type" className="select">
                  <option disabled value="">Select a category</option>
                  <option value="Flat">Flat</option>
                  <option value="PG">PG</option>
                  <option value="Apartment">Apartment</option>
                </select>
              </div>
              <div className="input-number">
                <h5>Phone Number</h5>
                <input
                  type="text"
                  name="phone"
                  minLength={10}
                  maxLength={10}
                  id=""
                  placeholder="Please input here"
                />
              </div>
              <div className="input-gender">
                <h5>Gender of RoomMate</h5>
                <select name="gender" className="select">
                  <option disabled value="">Select a Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
          </section>

          <h2 className="addHeading">Select available Amenties</h2>
          <Amenties selectable={true} setAmenties={setAmenties} />

          <ImageUploader setImages={setImages} />

          <div className="inputs-grps-top">
            <div className="input-grp grp1">
              <div className="input-availability ">
                <h5>Room is available from</h5>
                <input
                  type="date"
                  name="date"
                  id=""
                  min={new Date().toISOString().split("T")[0]}
                  placeholder="Please input here"
                />
              </div>
            </div>
            <span className="divider2"></span>
            <div className="input-grp grp2">
              <div className="input-occupancy grp2">
                <h5>Current Occupancy of Room</h5>
                <div className="buttons">
                  <select name="occupancy" className="select">
                    <option value="single">Single</option>
                    <option value="double">Shared(2)</option>
                    <option value="tripple">Shared(3)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <h2 className="addHeading">
            Preferences for Room Partner(select 3 atleast)
          </h2>
          <PreferenceGrid selectable={true} setPreferences={setPreferences} />
          <Button className="submitbutton" type="submit">
            Submit
          </Button>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default AddRoom;
