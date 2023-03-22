import { Col, Container, Image, Row } from "react-bootstrap";
import avtar from "../../assets/images/owner_avtar.svg";
import locationIcon from "../../assets/images/location_icon.svg";
import { IoChatboxSharp, IoCallSharp } from "react-icons/io5";

const OwnerDetails = ({ preferences = [], ownerData = {} }) => {
  return (
    <>
      <Container
        className="property-details-container owner-details-container mt-5"
        fluid
      >
        {/* Owner image avtar, name and location*/}
        <Row>
          <Col xs={3}>
            <Image src={avtar} alt="profile-pic" />
          </Col>
          <Col>
            <p className=" property-details-owner-name">{ownerData?.user_name}</p>
            <p className="property-owner-details">34 / {ownerData?.gender}</p>
            <p className="property-owner-details">
              <Image src={locationIcon} alt={"location"} />
              <span className="ml-3"> {ownerData?.city}, India</span>
            </p>
          </Col>
        </Row>
        {/* Owner Personal Views*/}
        <Row className="mt-5 owner-details-text-row">
          <p className="owner-details-text">
            Emmelie is a traditional book-worm and has always been from a young
            age. She is a housekeeper mom with two kids and she has a lot of
            time to read and relax. Emmelie tends to casually browse books in a
            bookstore but she usually has a hard time finding the right one and
            spends a lot of time browsing.
          </p>
        </Row>
        {/* Owner conatct options */}
        <Row className="mt-5 owner-details-text-row">
          <div className="owner-details-contact-col mr-5">
            <IoChatboxSharp style={{ color: "white" }} size={22} />
            <span className="ml-3">Chat</span>
          </div>
          <div className="owner-details-contact-col">
          <a href={`tel:${ownerData?.phone}`}>
            <IoCallSharp style={{ color: "white" }} size={22} />
            <span className="ml-3" style={{ color: "white" }}>Call</span>
          </a>
          </div>
        </Row>
        {/* Preferences of owner */}
        <Row className="mt-5 owner-details-text-row owner-habits-row">
          <h2 className="head">Preferences</h2>
          {preferences?.map((item, index) => (
            <Col className="owner-habits-container" key={`${index}-${item}`}>
              {item}
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default OwnerDetails;
