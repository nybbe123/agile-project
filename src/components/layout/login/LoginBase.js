import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import style from "./LoginBase.module.css";
import { useNavigate } from "react-router-dom";

const LoginBase = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const navigate = useNavigate();

  function loginHandler(data) {
    setIsLoginPage(data);
  }

  return (
    <div className={style["login-base"]}>
      <span
        className={style.logo}
        onClick={() => {
          navigate("/");
        }}
      >
        WEBLY
      </span>
      <div className={style["login-base-form"]}>
        {isLoginPage ? (
          <Login signUpInHandler={loginHandler} />
        ) : (
          <Register signUpInHandler={loginHandler} />
        )}
      </div>
      <div className={style["login-base-background"]}></div>
    </div>
  );
};

export default LoginBase;
