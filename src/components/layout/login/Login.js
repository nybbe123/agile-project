import React from "react";
import style from "./Login.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Label from "../../UI/Label";

const Login = (props) => {
  return (
    <form className={style["form-container"]}>
      <div>
        <h2>Welcome to webly</h2>
        <p className={style["form-sub-title"]}>
          Please enter you email & password
        </p>
      </div>
      <div className={style["form-input-container"]}>
        <Label htmlFor="email">Email*</Label>
        <Input type="text" />
      </div>
      <div className={style["form-input-container"]}>
        <Label htmlFor="password">Password*</Label>
        <Input type="password" />
        <ul>
          <li>Forgot password?</li>
        </ul>
      </div>
      <Button>LOGIN</Button>
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
