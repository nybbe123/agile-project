import { LinkedIn, Facebook, Instagram, Email } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className={style["flex"]}>
      <span className={style["footer-logo"]}>WEBLY</span>
      <ul className={style["footer-link"]}>
        <Scroll
          className={style["navlink"]}
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          SERVICES
        </Scroll>
        <Scroll
          className={style["navlink"]}
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          ABOUT US
        </Scroll>
        <Scroll
          className={style["navlink"]}
          to="contact"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          CONTACT
        </Scroll>
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
