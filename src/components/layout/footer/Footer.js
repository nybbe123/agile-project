import { LinkedIn, Facebook, Instagram, Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style["flex"]}>
      <span className={style["footer-logo"]}>WEBLY</span>
      <ul className={style["footer-link"]}>
        <NavLink className={style["navlink"]} to="/services">
          SERVICES
        </NavLink>
        <NavLink className={style["navlink"]} to="/about">
          ABOUT US
        </NavLink>
        <NavLink className={style["navlink"]} to="/contact">
          CONTACT
        </NavLink>
      </ul>
      <div className={style["footer-bottom"]}>
        <div className={style["language"]}>
          <span>EN</span>
          <div className={style["devider"]} />
          <span>SV</span>
        </div>
        <p> &copy;2022 All rights served</p>
        <div className={style["social-media"]}>
          <Facebook fontSize="large" />
          <Instagram fontSize="large" />
          <LinkedIn fontSize="large" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
