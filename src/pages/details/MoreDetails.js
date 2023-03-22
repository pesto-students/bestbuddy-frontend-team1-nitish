import { Container, Row } from "react-bootstrap";

const MoreDetails = ({ data = "" }) => {
  return (
    <>
      {data && (
        <div className="property-details-more-container">
          <Row className="property-more-details-header">Details</Row>
          <Row className="property-more-details-para">{data}</Row>
        </div>
      )}
    </>
  );
};

export default MoreDetails;
