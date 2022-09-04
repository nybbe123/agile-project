import {
  faAddressBook,
  faCircleInfo,
  faHandshakeAngle,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as Scroll, scroller } from "react-scroll";
import burgerMenu from "../../../assets/burger-menu.png";
import LinkContext from "../../../context/LinkContext";
import UserContext from "../../../context/UserContext";
import style from "./Header.module.css";

const Header = () => {
  const userCtx = useContext(UserContext);
  const linkCtx = useContext(LinkContext);
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [showHamMenu, setShowHamMenu] = useState();

  useEffect(() => {
    window.innerWidth < 930 ? setShowHamMenu(true) : setShowHamMenu(false);
    const handleWindowResize = () => {
      window.innerWidth < 930 ? setShowHamMenu(true) : setShowHamMenu(false);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const scrollTarget = (target) => {
    scroller.scrollTo(target, { smooth: true, duration: 500 });
  };

  const scrollToPage = async (target) => {
    linkCtx.onNavigate(false);
    await navigate("/");
    scrollTarget(target);
  };

  const menuItems = [
    { title: "services", icon: faHandshakeAngle },
    { title: "about-us", icon: faCircleInfo },
    { title: "contact", icon: faAddressBook },
  ];

  return (
    <header className={style.header}>
      <div className={style.headerLeft}>
        <Link to="/" className={style.logo}>
          WEBLY
        </Link>
      </div>

      {/* header in desktop */}
      <nav className={style.headerRight}>
        <ul className={style.navLinks}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={[style.navItems, style.navMarginRight].join(" ")}
            >
              {linkCtx.isDetail === false ? (
                <Scroll
                  to={item.title}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {item.title.replace("-", " ")}
                </Scroll>
              ) : (
                <div onClick={() => scrollToPage(item.title)}>
                  {item.title.replace("-", " ")}
                </div>
              )}
            </li>
          ))}

          <li
            className={[style.loginOutBtn]}
            onClick={() =>
              userCtx.isLoggedIn ? userCtx.onLogout() : navigate("/login")
            }
          >
            {userCtx.isLoggedIn ? "LOGOUT" : "LOGIN"}
          </li>
        </ul>
      </nav>

      {/* below is the hamburger menu */}
      <div
        style={{ display: openMenu ? "flex" : "none" }}
        className={openMenu ? [style.openMenuStyle] : null}
      >
        <ul>
          {menuItems.map((item, index) =>
            linkCtx.isDetail === false ? (
              <Scroll
                to={item.title}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className={style.scrollLink}
                onClick={() => setOpenMenu(false)}
                key={index}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ fontSize: "1.5rem" }}
                />
                <li>{item.title.replace("-", " ")}</li>
              </Scroll>
            ) : (
              <div
                className={style.scrollLink}
                onClick={() => {
                  setOpenMenu(false);
                  scrollToPage(item.title);
                }}
                key={index}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  style={{ fontSize: "1.5rem" }}
                />
                {item.title.replace("-", " ")}
              </div>
            )
          )}

          <li
            className={[style.loginOutBtn]}
            style={{ marginLeft: 0 }}
            onClick={() => {
              setOpenMenu(false);
              userCtx.isLoggedIn ? userCtx.onLogout() : navigate("/login");
            }}
          >
            <FontAwesomeIcon
              style={{ fontSize: "1.5rem", marginRight: "1rem" }}
              icon={faUser}
            />
            {userCtx.isLoggedIn ? "LOGOUT" : "LOGIN"}
          </li>
        </ul>
      </div>

      {!showHamMenu ? null : !openMenu ? (
        <img
          onClick={() => setOpenMenu(true)}
          src={burgerMenu}
          alt="open menu"
          className={style.burgerMenu}
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => setOpenMenu(false)}
          icon={faXmark}
          style={{
            fontSize: "1.7rem",
            marginTop: ".8rem",
            marginRight: "1.7rem",
            zIndex: "1",
          }}
        />
      )}
    </header>
  );
};

export default Header;
