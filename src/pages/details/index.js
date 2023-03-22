import React, { useEffect } from "react";
import {
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Image,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
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

// To be removed after API Integration
const moreDetailsPara = `
Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better. Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.`;

const PropertyDetails = () => {
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const propertyDetails = useSelector((state) => state?.property?.propertyById);

  useEffect(() => {
    if (id) {
      dispatch(fetchPropertyById(id));
    }
  }, [id]);

  // console.log(propertyDetails);

  return (
    <>
      <NavBar />
      {Object?.keys(propertyDetails)?.length > 0 && (
        <div className="detailspage">
          <div className="property-details-topbar-container">
            <Row>
              <Col className="mt-2 property-details-breadcrumb-item">
                Home / {propertyDetails?.category} / Details
              </Col>
              <Col>
                <h1 style={{ color: "var(--darkblue)" }}>
                  {propertyDetails?.name}
                </h1>
                <p className="property-location-details ml-3 mt-3">
                  <Image
                    src={locationIcon}
                    alt={"location"}
                    width={23}
                    height={25}
                  />
                  <span className="ml-3 location-text">
                    {propertyDetails?.city}, India
                  </span>
                </p>
              </Col>
              <Col xs={2} className="property-details-search-input">
                <InputGroup size="sm" className="mt-3">
                  <Form.Control
                    className="input"
                    placeholder="Search Rooms......"
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                  />
                </InputGroup>
              </Col>
            </Row>
          </div>
          {/* Property Images Section */}
          <PropertyImages
            mainImage={propertyDetails?.image[0]}
            secondaryImages={propertyDetails?.image}
          />

          {/* Property Owner Details */}
          <OwnerDetails
            preferences={propertyDetails?.perfrences}
            ownerData={propertyDetails}
          />

          {/* Amenties */}
          <h1 className="head">Amenties</h1>
          <Amenties />

          {/* Details Para */}
          <MoreDetails data={moreDetailsPara} />

          <Button
            className="deleteButton"
            onClick={() => {
              dispatch(deleteProperty(id));
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
