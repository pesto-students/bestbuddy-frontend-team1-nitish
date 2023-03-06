import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./CustomForm.scss";
import { setMessage } from "../../store/slice/users/userSlice";

const CustomForm = ({ title, Inputs, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { message, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const formSubmit = (data) => {
    onSubmit(data);
    setTimeout(() => {
      dispatch(setMessage());
    }, 5000);
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current);
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
              {...register(item.name, {
                required: item.errorMessage,
                pattern: {
                  value: item.validation.pattern,
                  message: item.validation.errMess,
                },
              })}
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
            isActive ? "btn-form-submit activeLoading" : "btn-form-submit"
          }
          onClick={handleClick}
        >
          {title} <span className="load loading"></span>
        </button>
      </section>
      {title === "Sign In" && (
        <section>
          <button className="btn-form-submit">Login with Google</button>
        </section>
      )}
      {title === "Sign In" ? (
        <p>
          Don't have account?{" "}
          <Link to="/signup">
            <span>Sign Up</span>
          </Link>
        </p>
      ) : (
        <p>
          Already have an account ?{" "}
          <Link to="/signin">
            <span>Sign In</span>
          </Link>
        </p>
      )}
    </form>
  );
};

export default CustomForm;
