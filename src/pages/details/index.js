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
import AmentiesDetails from "./AmentiesDetails";
import "./index.scss";
import MoreDetails from "./MoreDetails";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";
import { deleteProperty, fetchPropertyById } from "../../store/slice/property/propertySlice";

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

  return (
    <>
      {/* Navbar */}
      <NavBar />
      {Object?.keys(propertyDetails)?.length > 0 && (
        <Container fluid>
          <Container className="property-details-topbar-container">
            <Row>
              <Col className="mt-2 property-details-breadcrumb-item">
                Home / PG / Details
              </Col>
              <Col>
                <h1 style={{ color: "#152C5B" }}>{propertyDetails?.name}</h1>
                <p className="property-location-details ml-3 mt-3">
                  <Image
                    src={locationIcon}
                    alt={"location"}
                    width={23}
                    height={25}
                  />
                  <span className="ml-3 location-text">
                    {" "}
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
          </Container>
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
          <AmentiesDetails />

          {/* Details Para */}
          <MoreDetails data={moreDetailsPara} />

          <Button onClick={() => {
            dispatch(deleteProperty(id));
          }}>Delete Me </Button>

          {/* Footer  */}
          <Footer />
        </Container>
      )}
    </>
  );
};

export default PropertyDetails;
