import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setMessage } from "../../store/slice/users/userSlice";
import uploadImgs from "../../bestbuddyaxios/imgUploadHandler";
import "./CustomForm.scss";
import { toast } from "react-toastify";

const CustomForm = ({ title, Inputs, onSubmit, forSignUp = false }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [profileImg, setProfileImg] = useState("");
  const { message, status } = useSelector((state) => state.user);
  const isLoading = useSelector((state) => state.user.isLoading);
  const dispatch = useDispatch();

  const formSubmit = (data) => {
    if (forSignUp && !profileImg)
      return toast.warning("Image upload is in progress, please wait...");
    if (forSignUp) data.profile_pic = profileImg;
    onSubmit(data);
    setTimeout(() => {
      dispatch(setMessage());
    }, 5000);
  };

  const hanldeInputFileChange = async (event, type) => {
    if (type === "file") {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "bestbuddy");
      const response = await uploadImgs(formData);
      const url = await response.data.secure_url.toString();
      setProfileImg(url);
    }
    return;
  };

  return (
    <form className="custom-form" onSubmit={handleSubmit(formSubmit)}>
      <h2 className="form-title">{title}</h2>
      <p className={`response-message ${status ? "success" : "error"}`}>
        {message}
      </p>
      {Inputs.map((item) => (
        <section key={item.id}>
          <label>{item.label}</label>
          {item.type === "dropdown" ? (
            <select
              className={errors[item.name] ? "input-error" : ""}
              key={item.id}
              name={item.name}
              {...register(item.name, {
                required: item.errorMessage,
                pattern: {
                  value: item.validation.pattern,
                  message: item.validation.errMess,
                },
              })}
            >
              <option disabled>{item.name}</option>
              {item.option.map((opn) => (
                <option value={opn} key={opn}>
                  {opn}
                </option>
              ))}
            </select>
          ) : (
            <input
              className={errors[item.name] ? "input-error" : ""}
              type={item.type}
              placeholder={item.placeholder}
              name={item.name}
              defaultValue={item?.defaultValue || ""}
              accept={item?.type === "file" ? ".jpeg, .jpg" : "*"}
              {...register(item.name, {
                required: item.errorMessage,
                pattern: {
                  value: item.validation.pattern,
                  message: item.validation.errMess,
                },
              })}
              onChange={(event) => hanldeInputFileChange(event, item.type)}
            />
          )}
          {errors[item.name] && (
            <p className="error-message">{errors[item.name].message}</p>
          )}
        </section>
      ))}
      <section>
        <button
          type="submit"
          className={
            isLoading ? "btn-form-submit activeLoading" : "btn-form-submit"
          }
        >
          {title} <span className="load loading"></span>
        </button>
      </section>
      {title === "Sign In" ? (
        <p>
          Don't have account?{" "}
          <Link to="/signup">
            <span className="spanlink">Sign Up</span>
          </Link>
        </p>
      ) : (
        <p>
          Already have an account ?{" "}
          <Link to="/signin">
            <span className="spanlink">Sign In</span>
          </Link>
        </p>
      )}
    </form>
  );
};

export default CustomForm;
