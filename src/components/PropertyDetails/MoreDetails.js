import { Row } from "react-bootstrap";

const MoreDetails = ({ data = "" }) => {
  return (
    <>
      {data && (
        <div className="property-details-more-container">
          <Row className="header">Details</Row>
          <Row className="para">{data}</Row>
        </div>
      )}
    </>
  );
};

export default MoreDetails;
