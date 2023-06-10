import { Button, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ImageWrapper from "../../../components/ImageWrapper";
import { fieldRenderer } from "../../../utils/formFieldHelpers";
import "./viewProfile.scss";

const stylesObj = {
  width: "110px",
  height: "105px",
  borderRadius: "50%",
};

const imgStyle = {
  width: "130px",
  height: "105px",
  borderRadius: "50%",
};

export const ViewProfile = () => {
  const { userInfo, isLoading } = useSelector((state) => state?.user);

  return (
    <div className="viewProfile">
      <Row align="center" className="view-profile-pic-row">
        <ImageWrapper
          imgSrc={userInfo?.profile_pic}
          style={stylesObj}
          imgStyle={imgStyle}
        />
      </Row>
      <div className="field name">
        <h5>Name</h5>
        <p>{fieldRenderer(isLoading, "name", userInfo)}</p>
      </div>
      <div className="field email">
        <h5>Email Address</h5>
        <p>{fieldRenderer(isLoading, "email", userInfo)}</p>
      </div>
      <div className="field city">
        <h5>City</h5>
        <p>{fieldRenderer(isLoading, "city", userInfo)}</p>
      </div>
      <div className="field number">
        <h5>Phone Number</h5>
        <p>{fieldRenderer(isLoading, "number", userInfo)}</p>
      </div>
      <div className="field gender">
        <h5>Gender</h5>
        <p>{fieldRenderer(isLoading, "gender", userInfo)}</p>
      </div>
      <Link to={"/profile/edit"}>
        <Button className="editbutton">Edit details</Button>
      </Link>
    </div>
  );
};
