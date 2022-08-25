import style from "./Intro.module.css";
import IntroBg from "../../../assets/intro-bg.png";

const Intro = () => {
  return (
    <div id={style.root}>
      <img src={IntroBg} alt="background" className={style.background} />

      {/* <div id={style.left}>
        <h6 className={style.label}>Contact Us</h6>

        <h4 className={style.heading}>Get in touch with us today</h4>
      </div> */}
    </div>
  );
};

export default Intro;
