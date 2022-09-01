import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import { Link as Scroll } from "react-scroll";
import burgerMenu from "../../../assets/burger-menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faHandshakeAngle,
  faCircleInfo,
  faAddressBook,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";

const Header = () => {
  const ctx = useContext(UserContext);
  const navigate = useNavigate();

const checkMenu = () => {
  if (window.innerWidth > 930) {
    const menu = document.getElementById("hamMenu");
    menu.style.display = "none";
  } else if (window.innerWidth < 930) {
    const menu = document.getElementById("hamMenu");
    menu.style.display = "block";
  }
}
  
window.addEventListener("resize", checkMenu);

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
          <li>
            <FontAwesomeIcon
              icon={faHandshakeAngle}
              style={{ fontSize: "1.5rem" }}
            />
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
          <li>
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem" }}
              icon={faCircleInfo}
            />
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
          <li>
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem" }}
              icon={faAddressBook}
            />
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
              <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faUser} />
              LOGOUT
            </li>
          ) : (
            <li
              className={[style]}
              onClick={() => {
                navigate("/login");
              }}
            >
              <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={faUser} />
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
          marginTop: ".8rem",
          marginRight: "1.7rem",
          zIndex: "1",
        }}
      />
    </header>
  );
};

export default Header;
