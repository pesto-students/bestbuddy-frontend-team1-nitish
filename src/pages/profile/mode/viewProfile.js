import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ViewProfile = ({}) => {
  const userInfo = useSelector((state) => state?.user?.userInfo);
  return (
    <>
      <Link to={"/profile/edit"}>Edit details</Link>
      <div className="inputs-grpstop">
        <div className="input-grp grp1">
          <div className="input-first">
            <h5>First Name</h5>
            <p>{userInfo?.name}</p>
          </div>
          <div className="input-last">
            <h5>Last Name</h5>
            <p>{userInfo?.name}</p>
          </div>
          <div className="input-email">
            <h5>Email</h5>
            <p>{userInfo?.email}</p>
          </div>
        </div>
        <span className="divider1"></span>
        <div className="input-grp grp2">
          <div className="input-number">
            <h5>Phone Number</h5>
            <p>{userInfo?.number}</p>
          </div>
          <div className="input-gender">
            <h5>Gender of RoomMate</h5>
            <div className="buttons">
              <Button disabled>{userInfo?.gender}</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
