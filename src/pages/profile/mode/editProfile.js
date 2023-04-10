import { useState } from "react";
import { Button } from "react-bootstrap";
import "./editProfile.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUserDetails } from "../../../store/slice/users/userSlice";
import { toast } from "react-toastify";

export const EditProfile = () => {
  const userInfo = useSelector((state) => state?.user?.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const id = userInfo?.id;

  const handleSubmit = (e) => {
    e?.preventDefault();
    const payload = { data, id };
    dispatch(editUserDetails(payload));
    toast("User Details Updated");
    navigate(`/`);
  };

  return (
    <div className="editProfile">
      <form
        id="user-edit-form"
        className="form"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h5>Please edit the Profile details below</h5>
        <div className="inputs-grps">
          <div className="input-grp grp1">
            <div className="input-name">
              <h5>Name</h5>
              <input
                type="text"
                name="name"
                id=""
                defaultValue={userInfo.name}
                onChange={(e) => setData({ ...data, userName: e.target.value })}
              />
            </div>
            <div className="input-email">
              <h5>Email</h5>
              <input
                type="text"
                name="email"
                id=""
                defaultValue={userInfo.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
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
                defaultValue={userInfo.number}
                onChange={(e) => setData({ ...data, number: e.target.value })}
              />
            </div>
            <div className="input-gender">
              <h5>Gender of RoomMate</h5>
              <select
                name="gender"
                className="select"
                defaultValue={userInfo.gender}
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <Button className="editbutton" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
};
