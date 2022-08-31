import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Link as Scroll } from "react-scroll";
import style from "./Footer.module.css";

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
      <div className={style.companyAddress}>
        <h6>Webly AB</h6>
        <p>Anders Personsgatan 18</p>
        <p>416 64 Göteborg</p>
      </div>
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
