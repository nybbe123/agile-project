import style from "./Intro.module.css";
import { Link as Scroll } from "react-scroll";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Intro = () => {
  return (
    <div id={style.root}>
      {/* <img src={IntroBg} alt="background" className={style.background} /> */}

      <div className={style.introContainer}>
        <h1 className={style.introHeadingBold}>
          IN NEED OF A NEW{" "}
          <span className={style.introHeadingRegular}>WEBSITE?</span>
        </h1>
        <h2 className={style.introText}>
          Webly have helped design and develop top quality <br /> websites for
          over 100 companies
        </h2>
        <div className={style.btnContainer}>
          <Scroll
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className={style.serviceBtn}>CONTACT US</button>
          </Scroll>
          <Scroll
            to="services"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <button className={style.contactBtn}>OUR SERVICES</button>
          </Scroll>
        </div>
      </div>
      <div className={style.arrowContainer}>
        <Scroll
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          <ExpandMoreIcon fontSize="large" className={style["arrow"]} />
        </Scroll>
      </div>
    </div>
  );
};

export default Intro;
