import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { Link as Scroll } from "react-scroll";
import burgerMenu from "../../../assets/burger-menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";

const Header = () => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();

 const menuToggle = () => {
  const menu = document.getElementById('openedMenu');
  const hamMenu = document.getElementById('hamMenu');
  const close = document.getElementById('closeMenu');
  if ( menu.style.display !== 'flex') {
     menu.style.display = 'flex';
     menu.classList.add(style["openMenuStyle"]);
     hamMenu.style.display = 'none';
     close.style.display = 'flex';
  } else {
    menu.style.display = 'none';
    close.style.display = 'none';
    hamMenu.style.display = 'flex';
  }
}

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
      <div id="openedMenu" className={[style.openedMenuClass]}>
        <ul>
          <li>SERVICES</li>
          <li>ABOUT US</li>
          <li>CONTACT</li>
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
              className={[style]}
              onClick={() => {
                navigate("/login");
              }}
            >
              LOGIN
            </li>
          )}
        </ul>
      </div>
      <img
        onClick={menuToggle}
        src={burgerMenu}
        alt="burgerMenu"
        className={style.burgerMenu}
        id="hamMenu"
      />
      <FontAwesomeIcon
        onClick={menuToggle}
        id="closeMenu"
        icon={faXmark}
        style={{
          display: "none",
          fontSize: "1.7rem",
          marginTop: "1rem",
          marginRight: "1rem",
          zIndex: '1',
        }}
      />
    </header>
  );
};

export default Header;
