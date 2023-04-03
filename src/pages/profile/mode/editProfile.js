import { Button } from "react-bootstrap";

export const EditProfile = () => {
  return (
    <>
      <h5>Please edit the Profile details below</h5>
      <div className="inputs-grpstop">
        <div className="input-grp grp1">
          <div className="input-first">
            <h5>First Name</h5>
            <input
              type="text"
              name="location"
              id=""
              placeholder="Please input here"
            />
          </div>
          <div className="input-last">
            <h5>Last Name</h5>
            <input
              type="text"
              name="rent"
              id=""
              placeholder="Please input here"
            />
          </div>
          <div className="input-email">
            <h5>Email</h5>
            <input
              type="text"
              name="location"
              id=""
              placeholder="Please input here"
            />
          </div>
        </div>
        <span className="divider1"></span>
        <div className="input-grp grp2">
          <div className="input-number">
            <h5>Phone Number</h5>
            <input
              type="text"
              name="number"
              id=""
              placeholder="Please input here"
            />
          </div>
          <div className="input-gender">
            <h5>Gender of RoomMate</h5>
            <div className="buttons">
              <button>Male</button>
              <button>Female</button>
            </div>
          </div>
        </div>
      </div>
      <Button className="submitbutton">Save Changes</Button>
    </>
  );
};
