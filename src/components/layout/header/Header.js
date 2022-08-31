import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import style from "./Header.module.css";
import { Link as Scroll } from "react-scroll";
import burgerMenu from "../../../assets/burger-menu.png";

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
            <Scroll
              to="services"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              SERVICES
            </Scroll>
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            <Scroll
              to="aboutUs"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              ABOUT US
            </Scroll>
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            <Scroll
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              CONTACT
            </Scroll>
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
      <img src={burgerMenu} alt="burgerMenu" className={style.burgerMenu} />
    </header>
  );
};

export default Header;
