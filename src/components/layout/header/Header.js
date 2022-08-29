import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import style from "./Header.module.css";

const Header = () => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <span className={style.logo}>WEBLY</span>
      </div>
      <nav className={style.headerRight}>
        <ul className={style.navLinks}>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            SERVICES
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            ABOUT US
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            CONTACT
          </li>
          {ctx.isLoggedIn ? (
            <li
              className={[style.loginOutBtn]}
              onClick={() => {
                ctx.onLogout();
              }}
            >
              LOGOUT
            </li>
          ) : (
            <li
              className={[style.loginOutBtn]}
              onClick={() => {
                navigate("/login");
              }}
            >
              LOGIN
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
