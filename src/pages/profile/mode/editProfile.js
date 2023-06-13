import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editUserDetails } from "../../../store/slice/users/userSlice";
import { toast } from "react-toastify";
import uploadImgs from "../../../api/imgUploadHandler";
import { CustomButton } from "../../../components/CustomComponents";
import "./editProfile.scss";

export const EditProfile = () => {
  const [loading, setLoading] = useState(false);
  const [isFileChanged, setIsFileChanged] = useState(false);
  const userData = useSelector((state) => state?.user?.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const id = userData?.id;

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (isFileChanged && !data?.profile_pic)
      return toast.warning("Image upload is in progress, please wait...");
    const payload = { data, id };
    setLoading(true);
    dispatch(editUserDetails(payload)).then((res) => {
      if (res?.payload?.status === 200) {
        setLoading(false);
        toast("User Details Updated");
        navigate(`/profile/view`);
      }
    });
  };

  const handleFileChange = async (event) => {
    setIsFileChanged(true);
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "bestbuddy");
    const response = await uploadImgs(formData);
    const url = await response.data.secure_url.toString();
    setData((prev) => ({ ...prev, profile_pic: url }));
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
                defaultValue={userData.name}
                onChange={(e) => setData({ ...data, userName: e.target.value })}
              />
            </div>
            {/* <div className="input-email">
              <h5>Email</h5>
              <input
                type="text"
                name="email"
                id=""
                defaultValue={userData.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div> */}
            <div className="input-city">
              <h5>City</h5>
              <input
                type="text"
                name="city"
                id=""
                defaultValue={userData.city}
                onChange={(e) => setData({ ...data, city: e.target.value })}
              />
            </div>
            <div className="input-profile-pic">
              <h5>Profile Picture</h5>
              <input
                type="file"
                name="profile_pic"
                accept=".jpeg, .jpg"
                onChange={handleFileChange}
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
                defaultValue={userData.number}
                onChange={(e) => setData({ ...data, number: e.target.value })}
              />
            </div>
            <div className="input-number">
              <h5>Age</h5>
              <input
                type="number"
                name="number"
                id=""
                defaultValue={userData.age || ""}
                onChange={(e) => setData({ ...data, age: e.target.value })}
              />
            </div>
            <div className="input-gender">
              <h5>Gender of RoomMate</h5>
              <select
                name="gender"
                className="select"
                defaultValue={userData.gender}
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <CustomButton title="Save Changes" type="submit" loading={loading} />
      </form>
    </div>
  );
};
