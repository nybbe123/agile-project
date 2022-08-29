import React, { useContext } from "react";
import style from "./Login.module.css";
import Button from "../../UI/Button";
import { useFormik } from "formik";
import UserContext from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be atleast 6 characters";
  }

  return errors;
};

const Login = (props) => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      localStorage.setItem("user", JSON.stringify(values));
      ctx.onLogIn();
      navigate("/");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={style["form-container"]}>
      <div>
        <h2>Welcome to webly</h2>
        <p className={style["form-sub-title"]}>
          Please enter you email & password
        </p>
      </div>
      <div className={style["form-input-container"]}>
        <label htmlFor="email">Email*</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className={style["error-container"]}>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className={style["form-input-container"]}>
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={style["error-container"]}>
            {formik.errors.password}
          </div>
        ) : null}
        <ul>
          <li>Forgot password?</li>
        </ul>
      </div>
      <Button
        type={"submit"}
        disabled={!formik.isValid || formik.values === formik.initialValues}
      >
        LOGIN
      </Button>
      <div className={style["sign-up-in"]}>
        <p>
          Dont have an account?{" "}
          <span
            onClick={() => {
              props.signUpInHandler(false);
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
