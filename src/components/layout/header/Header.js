import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import style from "./Header.module.css";
import { Link } from "react-scroll";

const Header = () => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <Link to="/" className={style.logo}>
          WEBLY
        </Link>
      </div>
      <nav className={style.headerRight}>
        <ul className={style.navLinks}>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              SERVICES
            </Link>
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            <Link
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              ABOUT US
            </Link>
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              CONTACT
            </Link>
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
