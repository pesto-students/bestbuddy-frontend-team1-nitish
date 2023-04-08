import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./viewProfile.scss";

export const ViewProfile = ({}) => {
  const userInfo = useSelector((state) => state?.user?.userInfo);

  return (
    <>
      <div className="viewProfile">
        <div className="field name">
          <h5>Name</h5>
          <p>{userInfo?.name}</p>
        </div>
        <div className="field email">
          <h5>Email Address</h5>
          <p>{userInfo?.email}</p>
        </div>
        <div className="field number">
          <h5>Phone Number</h5>
          <p>{userInfo?.number}</p>
        </div>
        <div className="field gender">
          <h5>Gender</h5>
          <p>{userInfo?.gender}</p>
        </div>
        <Link to={"/profile/edit"}>
          <Button className="editbutton">Edit details</Button>
        </Link>
      </div>
    </>
  );
};
