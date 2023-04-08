import { useState } from "react";
import { Button } from "react-bootstrap";
import "./editProfile.scss";
import { useDispatch, useSelector } from "react-redux";
import SlickSlider from "../../../components/shared/Slider/Slider";
import { getFormValues } from "../../../utils/formFieldHelpers";
import { editUserDetails } from "../../../store/slice/users/userSlice";
import { toast } from "react-toastify";

export const EditProfile = () => {
  const [data, setData] = useState({
    userName: "",
    number: "",
    email: "",
    gender: "",
  });
  const userInfo = useSelector((state) => state?.user?.userInfo);
  const dispatch = useDispatch();
  const id = userInfo?.id;

  const handleSubmit = (e) => {
    e?.preventDefault();

    const payload = { data, id };
    dispatch(editUserDetails(payload));
    setTimeout(() => {
      toast("Updating User Details");
    }, 3000);
  };

  return (
    <div className="editProfile">
      <h5>Please edit the Profile details below</h5>
      <form id="user-edit-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="inputs-grpstop">
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
        <Button className="submitbutton" type="submit">
          Save Changes
        </Button>
      </form>
      <SlickSlider properties={userInfo?.property} title="User Properties" />
    </div>
  );
};
