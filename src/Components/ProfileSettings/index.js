import ProfileSettingsFormFields from "./FormFields";
import "./index.css";

const ProfileSettings = ({}) => {
  return (
    <>
      <div
        className="container mt-3"
        align="center"
      >
        <p className="h2 profile-settings-header">Profile Settings</p>
        <p className="text-muted">Please edit the profile details below</p>
      </div>
      <ProfileSettingsFormFields/>
    </>
  );
};
export default ProfileSettings;
