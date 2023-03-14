import { Container } from "react-bootstrap";
import Amenties from "../../components/Amenties/Amenties";

const AmentiesDetails = () => {
  return (
    <Container className="property-details-amenties-container">
      <h1>Amenties</h1>
      <Amenties />
    </Container>
  );
};

export default AmentiesDetails;
