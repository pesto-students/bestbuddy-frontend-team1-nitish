import { EditProfile } from "./editProfile";
import { ViewProfile } from "./viewProfile";
import NotFound from "../../404/NotFound";

const ProfileDetails = ({ mode = "view" }) => {
  const componentMap = {
    edit: <EditProfile />,
    view: <ViewProfile />,
  };

  return componentMap[mode] || <NotFound />;
};

export default ProfileDetails;
