import { Container, Row } from "react-bootstrap";

const MoreDetails = ({ data = "" }) => {
  return (
    <>
      {data && (
        <Container className="property-details-more-container">
          <Row className="property-more-details-header">Details</Row>
          <Row className="property-more-details-para">{data}</Row>
        </Container>
      )}
    </>
  );
};

export default MoreDetails;
