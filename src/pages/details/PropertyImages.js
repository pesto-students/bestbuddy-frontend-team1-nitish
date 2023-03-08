import { Col, Container, Image, Row } from "react-bootstrap";
import mainImages from "../../assets/images/property_main_img.svg";
import secondaryImage from "../../assets/images/property_secondary_img.svg";

const PropertyImages = ({ mainImage = "", secondaryImages = [1, 2] }) => {
  return (
    <>
      <Container className="mt-5 property-details-container" fluid>
        <Row className="property-images-container">
          <Col className="propert-main-img-container">
            <Image src={mainImages} alt={"main-img"} className="property-images"/>
          </Col>
          <Col>
            {secondaryImages?.map((item, index) => (
              <Image
                className={index === 1 ? "mt-3 property-images" : "property-images"}
                key={index}
                src={secondaryImage}
                alt={"secondary-img"}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PropertyImages;
