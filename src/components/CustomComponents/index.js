import "./index.scss";

const CustomButton = ({ title = "Click", loading = false, ...props }) => {
  return (
    <button
      className={loading ? "btn-form-submit activeLoading" : "btn-form-submit"}
      {...props}
      disabled={loading}
    >
      {title} <span className="load loading"></span>
    </button>
  );
};

export { CustomButton };
