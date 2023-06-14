import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import Amenties from "./../../components/Amenties/Amenties";
import PreferenceGrid from "./../../components/PreferenceGrid/PreferenceGrid";
import { getFormValues, getMappedImages } from "../../utils/formFieldHelpers";
import {
  addProperty,
  editProperty,
  fetchAllProperties,
  fetchPropertyById,
} from "../../store/slice/property/propertySlice";
import { toast } from "react-toastify";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import { filterOptions } from "../../constants/options";
import { CustomButton } from "../../components/CustomComponents";
import { PropertyHeaders } from "../../constants/propertyDetails";
import EditPropertySkeleton from "../../components/Skeleton/EditPropertySkeleton";
import "./AddRoom.scss";

const AddRoom = ({ mode = "add" }) => {
  const [amenties, setAmenties] = useState([]);
  const [preferences, setPreferences] = useState([]);
  const [images, setImages] = useState([]);
  const [btnLoading, setBtnLoading] = useState(false);
  const [formData, setFormData] = useState({});
  const {
    propertyById: propertyDetails,
    isLoading,
    message = "",
  } = useSelector((state) => state?.property);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id = "" } = useParams();

  const getPropertyDetails = useCallback(() => {
    if (id && mode === "edit") {
      dispatch(fetchPropertyById(id));
    }
    // eslint-disable-next-line
  }, [id, mode]);

  const handlePropertyDetails = useCallback(() => {
    if (mode === "edit" && Object.keys(propertyDetails).length > 0) {
      const {
        amenties = [],
        preferences = [],
        image = [],
        ...restPropertyDetails
      } = propertyDetails;
      const mappedImages = getMappedImages(image);
      setFormData(restPropertyDetails);
      setImages(mappedImages);
      setAmenties(amenties);
      setPreferences(preferences);
    }
  }, [propertyDetails, mode]);

  useEffect(() => {
    handlePropertyDetails();
  }, [handlePropertyDetails]);

  useEffect(() => {
    getPropertyDetails();
  }, [getPropertyDetails]);

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (images?.length === 0) {
      return alert(`Please upload atleast 1 image`);
    }
    if (preferences?.length < 3) {
      return alert(`Please select atleast 3 preferences`);
    }
    setBtnLoading(true);
    const formElements = document.querySelector("#property-form");
    const formValues = getFormValues(formElements);
    const mappedImages = images?.map((item) => item?.url);
    const payload = {
      ...formValues,
      amenties,
      preferences: preferences,
      image: mappedImages,
    };
    if (mode === "edit") {
      dispatch(editProperty({ payload, id })).then((res) => {
        if (res?.payload?.status === 200) {
          setBtnLoading(false);
          dispatch(fetchAllProperties());
          toast(message || "Property updated successfully");
          navigate(`/`);
        }
      });
    } else {
      dispatch(addProperty(payload)).then((res) => {
        if (res?.payload?.status === 201) {
          setBtnLoading(false);
          dispatch(fetchAllProperties());
          toast(message || "Property added successfully");
          navigate(`/`);
        }
      });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container add-room">
        <h2 className="addHeading">{PropertyHeaders[mode].title}</h2>
        <h6 className="addHeading2">{PropertyHeaders[mode].subtitle}</h6>
      </div>
      {!btnLoading && isLoading ? (
        <EditPropertySkeleton />
      ) : (
        <form id="property-form" onSubmit={(e) => handleSubmit(e)}>
          <div className="container add-room">
            <div className="inputs-grps-top">
              <div className="input-grp grp1">
                <div className="input-propertyname">
                  <h5>Property name</h5>
                  <input
                    type="text"
                    placeholder="Add property name"
                    name="property-name"
                    defaultValue={formData?.name}
                    id=""
                    required
                  />
                </div>
                <div className="input-location">
                  <h5>Add room location</h5>
                  <select
                    name="location"
                    className="select"
                    defaultValue={formData?.city}
                  >
                    <option disabled value="">
                      Select a location
                    </option>
                    {filterOptions?.[0]?.value?.map((item, index) => (
                      <option value={item} key={`${item}-${index}`}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-rent">
                  <h5>Rent of Room (in ₹)</h5>
                  <input
                    type="text"
                    name="rent"
                    id=""
                    defaultValue={formData?.rent}
                    placeholder="Please input here"
                  />
                </div>
              </div>
              <span className="divider1"></span>
              <div className="input-grp grp2">
                <div className="input-type">
                  <h5>Property type</h5>
                  <select
                    name="property-type"
                    className="select"
                    defaultValue={formData?.category}
                  >
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
                    defaultValue={formData?.phone}
                    id=""
                    placeholder="Please input here"
                  />
                </div>
                <div className="input-gender">
                  <h5>Gender of RoomMate</h5>
                  <select
                    name="gender"
                    className="select"
                    defaultValue={formData?.gender}
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>
            </div>

            <h2 className="addHeading">Select available Amenties</h2>
            <Amenties
              selectable={true}
              setAmenties={setAmenties}
              receivedAmenties={amenties}
            />

            <ImageUploader setImages={setImages} receivedImages={images} />

            <div className="input-grp grp3">
              <div className="input-availability">
                <h5>Earliest availability date</h5>
                <input
                  type="date"
                  name="date"
                  id=""
                  defaultValue={formData?.availableDate}
                  min={new Date().toISOString().split("T")[0]}
                  placeholder="Please input here"
                />
              </div>

              <span className="divider2"></span>

              <div className="input-occupancy">
                <h5>Current Occupancy of Room</h5>
                <div className="buttons">
                  <select
                    name="occupancy"
                    className="select"
                    defaultValue={formData?.typeOfShare}
                  >
                    <option value="single">Single</option>
                    <option value="double">Shared(2)</option>
                    <option value="tripple">Shared(3)</option>
                  </select>
                </div>
              </div>
            </div>

            <h2 className="addHeading">
              Preferences for Room Partner(select 3 atleast)
            </h2>
            <PreferenceGrid
              selectable={true}
              setPreferences={setPreferences}
              receivedPreferences={preferences}
            />
            <div className="input-occupancy input-grp">
              <h5>Additional Information</h5>
              <textarea
                rows={5}
                cols={80}
                name="additional-details"
                minLength={10}
                required
                defaultValue={formData?.details || ""}
                placeholder="Please include any additional information about the property"
              ></textarea>
            </div>
            <CustomButton
              title={mode === "edit" ? "Save Changes" : "Add Property"}
              loading={btnLoading}
            />
          </div>
        </form>
      )}
      <Footer />
    </>
  );
};

export default AddRoom;
