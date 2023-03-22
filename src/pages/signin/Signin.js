import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Signin.scss";
import CustomForm from "../../components/customForm/CustomForm";
import { signIn } from "../../store/slice/users/userSlice";
import Logo from "./../../assets/Logo.svg";
import TopCircles from "./../../assets/Top-Circles.svg";
import BottomMountains from "./../../assets/Bottom-Mountains.svg";

const formField = [
  {
    id: 1,
    label: "Email",
    name: "email",
    defaultValue: "demo@gmail.com",
    type: "text",
    placeholder: "Enter your registered email",
    errorMessage: "Email is required.",
    validation: {
      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      errMess: "Email is invalid.",
    },
  },
  {
    id: 4,
    label: "Password",
    name: "password",
    type: "password",
    defaultValue: "Demo@123",
    placeholder: "Enter a password",
    errorMessage: "Password is required.",
    validation: {
      pattern: "",
      errMess: "",
    },
  },
];

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  const formSubmit = (data) => {
    dispatch(signIn(data));
    setEmail(data.email);
  };

  return (
    <div className="signin-page">
      <div className="banner-container">
        <img className="logo" src={Logo} alt="Logo" />
        <img
          className="back"
          src="https://res.cloudinary.com/dirosugvb/image/upload/v1676389450/login-banner_nvmi8h.png"
          alt="signin-banner"
        />
      </div>

      {/* mobile headers */}
      <div className="header-container">
        <img className="topcircles" src={TopCircles} alt="TopCircles" />
        <p className="logomobile">
          Best<span>Buddy</span>
        </p>
        <div className="mobile-banner-container">
          <img
            src="https://res.cloudinary.com/dirosugvb/image/upload/v1676557474/mobile-banner_vp7zlj.png"
            alt="signin-banner"
          />
        </div>
      </div>
      {/* mobile headers */}

      <div className="form-container">
        <CustomForm title="Sign In" Inputs={formField} onSubmit={formSubmit} />
      </div>

      {/* mobile footer */}
      <div className="footer-container">
        <img className="bottommountains" src={BottomMountains} alt="footer" />
      </div>
      {/* mobile footer */}
    </div>
  );
};

export default Signin;
