import { Col, Image, Row } from "react-bootstrap";
import avtar from "../../assets/images/owner_avtar.svg";
import locationIcon from "../../assets/images/location_icon.svg";
import { IoChatboxSharp, IoCallSharp } from "react-icons/io5";

const OwnerDetails = ({ preferences = [], ownerData = {} }) => {
  return (
    <>
      <div className="owner-details-container">
        {/* Owner image avtar, name and location*/}
        <Row className="owner-profile">
          <Col sm={12} lg={3}>
            <Image className="avatar" src={avtar} alt="profile-pic" />
          </Col>
          <Col sm={12} lg={9} s className="">
            <p className="property-details-owner-name">
              {ownerData?.user_name}
            </p>
            <p className="property-owner-details">
              34 / {ownerData?.gender}
            </p>
            <p className="property-owner-details">
              <Image src={locationIcon} alt={"location"} />
              <span className="property-owner-location ">
                {ownerData?.city}, India
              </span>
            </p>
          </Col>
        </Row>
        {/* Owner Personal Views*/}
        <Row className="owner-details-text-row my-4">
          <p className="owner-details-text">
            Emmelie is a traditional book-worm and has always been from a young
            age. She is a housekeeper mom with two kids and she has a lot of
            time to read and relax. Emmelie tends to casually browse books in a
            bookstore but she usually has a hard time finding the right one and
            spends a lot of time browsing.
          </p>
        </Row>
        {/* Owner conatct options */}
        <Row className="owner-details-text-row">
          <Col sm={6} md={4} lg={3} className="owner-details-contact-col mr-3">
            <IoChatboxSharp style={{ color: "white" }} size={22} />
            <span className="ml-3">Chat</span>
          </Col>
          <Col sm={6} md={4} lg={3} className="owner-details-contact-col">
            <a href={`tel:${ownerData?.phone}`}>
              <IoCallSharp style={{ color: "white" }} size={22} />
              <span className="ml-3" style={{ color: "white" }}>
                Call
              </span>
            </a>
          </Col>
        </Row>
        {/* Preferences of owner */}
        <Row className="owner-habits-row mt-4">
          <h2 className="head">Preferences</h2>
          {preferences?.map((item, index) => (
            <Col xs={5} sm={5} md={3} lg={2} className="owner-habits-container" key={`${index}-${item}`}>
              {item}
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default OwnerDetails;
