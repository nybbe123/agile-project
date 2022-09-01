import {
  faDisplay,
  faLayerGroup,
  faPaintBrush,
  faCode,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import serviceImage from "../../../assets/pexels-christina-morillo-1181263.jpg";
import style from "./frontEnd.module.css";
import { Link } from "react-router-dom";

const FrontEndPage = () => {
  return (
    <div>
      <div className={style["section1"]}>
        <div className={style["backgroundImg"]}>
          <div className={style["navAlign"]}>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={style["home"]}>HOME</p>
            </Link>
            <p className={style["middle"]}>/</p>
            <p className={style["frontEnd"]}>FRONT-END</p>
          </div>
          <h1 className={style["h1"]}>FRONT-END DEVELOPMENT</h1>
          <h2 className={style["h2"]}>Webly + Front-end = true</h2>
        </div>
      </div>
      <div className={style["section2"]}>
        <div className={style["headAlign"]}>
          <p className={style["head1"]}>competence</p>
          <p className={style["head2"]}>we offer wide competence</p>
        </div>

        <div className={style["boxesAlign"]}>
          <div className={style["firstBox"]}>
            <FontAwesomeIcon icon={faCode} className={style["layersIcon"]} />
            <div className={style["backEndAlign"]}>
              <h1 className={style["backEnd"]}>HTML</h1>

              <p className={style["firstTextAlign"]}>
                We use HTML to build the static visual parts of your website.
                HTML is a very popular technology and is used for about 94% of
                all websites.
              </p>
            </div>
          </div>
          <div className={style["firstBox"]}>
            <FontAwesomeIcon icon={faDisplay} className={style["tvIcon"]} />
            <div className={style["frontAlign"]}>
              <h1 className={style["backEnd"]}>CSS</h1>
              <p className={style["firstTextAlign"]}>
                We use CSS to style your website with colors, fonts and
                animations. We also make sure to use CSS to make the website
                responsive for desktop, tablet and mobile devices.
              </p>
            </div>
          </div>
          <div className={style["firstBox"]}>
            <FontAwesomeIcon
              icon={faLaptopCode}
              className={style["brushIcon"]}
            />
            <div className={style["digitalAlign"]}>
              <h1 className={style["backEnd"]}>JAVASCRIPT</h1>
              <p className={style["firstTextAlign"]}>
                We use Javascript to make your website coma alive. It is what we
                use to add functionality to the website. Examples are clickable
                menu, contact form or a map.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style["section3"]}>
        <div className={style["head2Align"]}>
          <p className={style["head1"]}>experience</p>
          <p className={style["head2"]}>our customers</p>
        </div>
        <div className={style["comp1"]}>
          <div className={style["imgAlign"]}>
            <div className={style["box"]}></div>
            <img className={style["image"]} src={serviceImage}></img>
          </div>

          <div className={style["comp1TextAlign"]}>
            <p className={style["head2"]}>GAMEX</p>
            <p className={style["text1"]}>
              Webly created a browser game for the company GAMEX using the P5
              library, HTML and CSS and Typescript. We have a lot of experience
              using Javascript or Typescript in our projects.
            </p>
          </div>
        </div>
        <div className={style["comp1"]}>
          <div className={style["comp1TextAlign"]}>
            <p className={style["head2"]}>RIDDLE</p>
            <p className={style["text1"]}>
              Webly made a calendar and todo application for the company Riddle.
              Using Javascript technologies the calendar is fully functional,
              with day, month, year and time. The todo list is easy to use and
              the user can create a todo for a specific day and mark it as
              accomplished when done. The calendar is also showing how many
              todos the user has during a single day.
            </p>
          </div>

          <div className={style["imgAlign"]}>
            <div className={style["box"]}></div>
            <img className={style["image"]} src={serviceImage}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndPage;
