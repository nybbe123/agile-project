import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import style from "./LoginBase.module.css";
import Register from "./Register";

const LoginBase = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const navigate = useNavigate();

  function loginHandler(data) {
    setIsLoginPage(data);
  }

  return (
    <div className={style["login-base"]}>
      <div className={style["content-container"]}>
        <div className={style["logo-and-form"]}>
          <div className={style.logo} onClick={() => navigate("/")}>
            WEBLY
          </div>
          <div className={style["login-base-form"]}>
            {isLoginPage ? (
              <Login signUpInHandler={loginHandler} />
            ) : (
              <Register signUpInHandler={loginHandler} />
            )}
          </div>
        </div>

        <div className={style["login-base-background"]} />
      </div>
    </div>
  );
};

export default LoginBase;
