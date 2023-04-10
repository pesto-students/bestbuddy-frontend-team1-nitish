import { Col, Image, Row } from "react-bootstrap";
import avtar from "../../assets/images/owner_avtar.svg";
import locationIcon from "../../assets/images/location_icon.svg";
import { IoChatboxSharp, IoCallSharp } from "react-icons/io5";

const OwnerDetails = ({ preferences = [], ownerData = {} }) => {
  return (
    <>
      <div className="owner-details-container">
        {/* Owner image avtar, name and location*/}
        <Row>
          <Col xs={3}>
            <Image className="avatar" src={avtar} alt="profile-pic" />
          </Col>
          <Col className="ml-5 col2">
            <p className="owner-name">{ownerData?.user_name}</p>
            <p className="owner-details">34 / {ownerData?.gender}</p>
            <p className="owner-details">
              <img
                className="owner-location-icon"
                src={locationIcon}
                alt="location"
              />
              <span>{ownerData?.city}, India</span>
            </p>
          </Col>
        </Row>
        {/* Owner Personal Views*/}
        <Row className="owner-details-text-row">
          <p>
            Emmelie is a traditional book-worm and has always been from a young
            age. She is a housekeeper mom with two kids and she has a lot of
            time to read and relax. Emmelie tends to casually browse books in a
            bookstore but she usually has a hard time finding the right one and
            spends a lot of time browsing.
          </p>
        </Row>
        {/* Owner conatct options */}
        <Row className="owner-details-text-row">
          <div className="owner-details-contact-col">
            <IoChatboxSharp style={{ color: "white" }} size={22} />
            <span className="ml-3">Chat</span>
          </div>
          <div className="owner-details-contact-col">
            <a href={`tel:${ownerData?.phone}`}>
              <IoCallSharp style={{ color: "white" }} size={22} />
              <span className="ml-3" style={{ color: "white" }}>
                Call
              </span>
            </a>
          </div>
        </Row>
        {/* Preferences of owner */}
        <Row className="owner-habits-row">
          <h2 className="head">Preferences</h2>
          {preferences?.map((item, index) => (
            <Col className="owner-habits-container" key={`${index}-${item}`}>
              {item}
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default OwnerDetails;
