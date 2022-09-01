import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../../context/UserContext";
import style from "./Header.module.css";
import { Link as Scroll, scroller } from "react-scroll";
import burgerMenu from "../../../assets/burger-menu.png";
import LinkContext from "../../../context/LinkContext";

const Header = () => {
  const userCtx = useContext(UserContext);
  const linkCtx = useContext(LinkContext);
  const navigate = useNavigate();

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 500 });
  };

  const scrollToPage = async (target) => {
    linkCtx.onNavigate(false);
    await navigate("/");
    scrollTarget(target);
  };

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
            {linkCtx.isDetail === false ? (
              <Scroll
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                SERVICES
              </Scroll>
            ) : (
              <div
                onClick={() => {
                  scrollToPage("services");
                }}
              >
                SERVICES
              </div>
            )}
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            {linkCtx.isDetail === false ? (
              <Scroll
                to="aboutUs"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                ABOUT US
              </Scroll>
            ) : (
              <div
                onClick={() => {
                  scrollToPage("aboutUs");
                }}
              >
                ABOUT US
              </div>
            )}
          </li>
          <li className={[style.navItems, style.navMarginRight].join(" ")}>
            {linkCtx.isDetail === false ? (
              <Scroll
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                CONTACT
              </Scroll>
            ) : (
              <div
                onClick={() => {
                  scrollToPage("contact");
                }}
              >
                CONTACT
              </div>
            )}
          </li>
          {userCtx.isLoggedIn ? (
            <li
              className={[style.loginOutBtn]}
              onClick={() => {
                userCtx.onLogout();
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
