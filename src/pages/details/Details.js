import React from "react";
import { Col, Container, Form, InputGroup, Row, Image, Nav } from "react-bootstrap";
import OwnerDetails from "./OwnerDetails";
import PropertyImages from "./PropertyImages";
import locationIcon from "../../assets/images/location_icon.svg";
import AmentiesDetails from "./AmentiesDetails";
import "./details.css";
import MoreDetails from "./MoreDetails";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Navbar/Navbar";

// To be removed after API Integration
const moreDetailsPara = `
Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better. Design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process. The national agency for design: enabling Singapore to use design for economic growth and to make lives better.`;

const PropertyDetails = () => {
  return (
    <>
    {/* Navbar */}
    <NavBar/>

      <Container fluid>
        <Container className="property-details-topbar-container">
        <Row>
          <Col className="mt-2">Home / PG / Details</Col>
          <Col>
            <h1 style={{ color: "#152C5B" }}>Village Angara</h1>
            <p className="property-location-details ml-3 mt-3">
              <Image
                src={locationIcon}
                alt={"location"}
                width={23}
                height={25}
              />
              <span className="ml-3 location-text"> Chandigarh, India</span>
            </p>
          </Col>
          <Col xs={2}>
            <InputGroup size="sm" className="mt-3">
              <Form.Control
                placeholder="Search Rooms......"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </Col>
        </Row>
        </Container>
        {/* Property Images Section */}
        <PropertyImages />

        {/* Property Owner Details */}
        <OwnerDetails />

        {/* Amenties */}
        <AmentiesDetails />

        {/* Details Para */}
        <MoreDetails data={moreDetailsPara} />

        {/* Footer  */}
        <Footer />
      </Container>
    </>
  );
};

export default PropertyDetails;
