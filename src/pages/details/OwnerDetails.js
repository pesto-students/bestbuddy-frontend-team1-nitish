import { Col, Container, Image, Row } from "react-bootstrap";
import avtar from "../../assets/images/owner_avtar.svg";
import locationIcon from "../../assets/images/location_icon.svg";
import { IoChatboxSharp, IoCallSharp } from "react-icons/io5";

const habits = [
  { title: "Student" },
  { title: "Vegan" },
  { title: "Non Alcoholic" },
  { title: "Media Buff" },
  { title: "Student" },
  { title: "Vegan" },
  { title: "Non Alcoholic" },
  { title: "Media Buff" },
];
const OwnerDetails = () => {
  return (
    <>
      <Container
        className="property-details-container owner-details-container"
        fluid
      >
        {/* Owner image avtar, name and location*/}
        <Row className="property-owner-avtar-container" align="center">
          <Col xs={12} lg={3} xl={1}>
            <Image src={avtar} alt="profile-pic" />
          </Col>
          <Col>
            <p className="property-details-owner-name">Jenna Sanders</p>
            <p className="property-owner-details">34 / Female</p>
            <p className="property-owner-details">
              <Image src={locationIcon} alt={"location"} />
              <span className="ml-3"> Chandigarh, India</span>
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
            <IoCallSharp style={{ color: "white" }} size={22} />
            <span className="ml-3">Call</span>
          </div>
        </Row>
        {/* Habits of owner */}
        <Row className="owner-details-text-row owner-habits-row">
          {habits?.map((item, index) => (
            <Col className="owner-habits-container" key={`${index}-${item?.title}`}>{item?.title}</Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default OwnerDetails;
