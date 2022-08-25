import React from "react";
import style from "./Login.module.css";
import Button from "../../UI/Button";

const Login = () => {
  return (
    <form className={style["form-container"]}>
      <div>
        <h2>Welcome to webly</h2>
        <p className={style["form-sub-title"]}>
          Please enter you email & password
        </p>
      </div>
      <div className={style["form-input-container"]}>
        <label htmlFor="email">Email*</label>
        <input type="text" />
      </div>
      <div className={style["form-input-container"]}>
        <label htmlFor="password">Password*</label>
        <input type="password" />
        <ul>
          <li>Forgot password?</li>
        </ul>
      </div>
      <Button>LOGIN</Button>
      <div className={style["sign-up-in"]}>
        <p>
          Dont have an account? <span>Sign up</span>
        </p>
      </div>
    </form>
  );
};

export default Login;
