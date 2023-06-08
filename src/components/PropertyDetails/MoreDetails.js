import { Row } from "react-bootstrap";
import { moreDetailsPara } from "../../constants/propertyDetails";

const MoreDetails = ({ data = moreDetailsPara }) => {
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
