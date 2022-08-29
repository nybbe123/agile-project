import React, { useContext, useState } from "react";
import style from "./Register.module.css";
import Button from "../../UI/Button";
import { useFormik } from "formik";
import UserContext from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  } else if (values.name.length < 2) {
    errors.name = "Must be atleast 2 characters";
  }

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

const Register = (props) => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
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
    <form className={style["form-container"]} onSubmit={formik.handleSubmit}>
      <div>
        <h2>Sign up to Webly</h2>
        <p className={style["form-sub-title"]}>
          Please enter your information.
        </p>
      </div>
      <div className={style["form-input-container"]}>
        <label htmlFor="name">First & Last name*</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className={style["error-container"]}>{formik.errors.name}</div>
        ) : null}
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
        <div className={style["terms-conditions"]}>
          <input type="checkbox" />
          <span>I agree to terms & conditions</span>
        </div>
      </div>
      <Button type={"submit"}>SIGN UP</Button>
      <div className={style["sign-up-in"]}>
        <p>
          Already have an account?{" "}
          <span
            onClick={() => {
              props.signUpInHandler(true);
            }}
          >
            Sign in
          </span>
        </p>
      </div>
    </form>
  );
};

export default Register;
