import React, { useEffect } from "react";
import { Col, Form, InputGroup, Row, Image, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import OwnerDetails from "./OwnerDetails";
import PropertyImages from "./PropertyImages";
import locationIcon from "../../assets/images/location_icon.svg";
import "./index.scss";
import MoreDetails from "./MoreDetails";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import {
  deleteProperty,
  fetchPropertyById,
} from "../../store/slice/property/propertySlice";
import Amenties from "../../components/Amenties/Amenties";
import { toast } from "react-toastify";

// To be removed after API Integration
const moreDetailsPara = `
Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better. Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.`;

const PropertyDetails = () => {
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const navigate = useNavigate();
  const propertyDetails = useSelector((state) => state?.property?.propertyById);
  console.log("🚀 ~ file: index.js:28 ~ PropertyDetails ~ propertyDetails:", propertyDetails)

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyById(id));
    }
  }, [id]);

  return (
    <>
      <NavBar />
      {Object?.keys(propertyDetails)?.length > 0 && (
        <div className="container detailspage">
          <div className="property-details-topbar-container">
            <div className="breadcrumb">
              Home / {propertyDetails?.category} / Details
            </div>
            <div className="property-location">
              <h1>{propertyDetails?.name}</h1>
              <p className="location-p">
                <img
                  src={locationIcon}
                  alt={"location"}
                  width={23}
                  height={25}
                />
                <span className="location-text">
                  {propertyDetails?.city}, India
                </span>
              </p>
            </div>
            <div className="property-details-search-input">
              <input
                className="search-input"
                type="text"
                placeholder="Search Rooms......"
              />
            </div>
          </div>

          {/* Property Images Section */}
          <PropertyImages images={propertyDetails?.image} />

          {/* Property Owner Details */}
          <OwnerDetails
            preferences={propertyDetails?.perfrences}
            ownerData={propertyDetails}
          />

          {/* Amenties */}
          <h1 className="amentiesh">Amenties</h1>
          <Amenties receivedAmenties={propertyDetails?.amenties}/>

          {/* Details Para */}
          <MoreDetails data={moreDetailsPara} />

          <Button
            className="deleteButton"
            onClick={() => {
              dispatch(deleteProperty(id)).then((response) => {
                toast(response.payload.data.message);
                navigate(`/`);
              });
            }}
          >
            Delete Me
          </Button>
        </div>
      )}
      {/* Footer  */}
      <Footer />
    </>
  );
};

export default PropertyDetails;
