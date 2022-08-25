import React from "react";
import style from "./Register.module.css";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Label from "../../UI/Label";

const Register = (props) => {
  return (
    <form className={style["form-container"]}>
      <div>
        <h2>Sign up to Webly</h2>
        <p className={style["form-sub-title"]}>
          Please enter your information.
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
              props.signUpInHandler(true);
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </form>
  );
};

export default Register;
