import style from "./Intro.module.css";
import IntroBg from "../../../assets/intro-bg.png";

const Intro = () => {
  return (
    <div id={style.root}>
      <img src={IntroBg} alt="background" className={style.background} />

      <div className={style.introContainer}>
        <h1 className={style.introHeadingBold}>
          IN NEED OF A NEW{" "}
          <span className={style.introHeadingRegular}>WEBSITE?</span>
        </h1>
        <h2 className={style.introText}>
          Webly have helped designing and developing <br /> top quality websites
          for over 100 companies
        </h2>
        <div className={style.btnContainer}>
          <button className={style.serviceBtn}>OUR SERVICES</button>
          <button className={style.contactBtn}>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
