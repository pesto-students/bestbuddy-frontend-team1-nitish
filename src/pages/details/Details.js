import React from "react";
import { Col, Container, Form, InputGroup, Row, Image } from "react-bootstrap";
import LocationSearch from "../../components/Search/LocationSearch/LocationSearch";
import "./details.css";
import OwnerDetails from "./OwnerDetails";
import PropertyImages from "./PropertyImages";
import locationIcon from "../../assets/images/location_icon.svg";

const PropertyDetails = () => {
  return (
    <Container fluid className="">
      <Row>
        <Col className="mt-2">Home / PG / Details</Col>
        <Col>
          <h1 style={{ color: "#152C5B" }}>Village Angara</h1>
          <p className="property-location-details ml-3 mt-3">
            <Image src={locationIcon} alt={"location"} width={23} height={25} />
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
      {/* Property Images Section */}
      <PropertyImages />

      {/* Property Owner Details */}
      <OwnerDetails />
    </Container>
  );
};

export default PropertyDetails;
