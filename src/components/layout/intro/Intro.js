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
      </div>
    </div>
  );
};

export default Intro;
