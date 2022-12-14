import {
  faArrowRight,
  faDisplay,
  faLayerGroup,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import serviceImage from "../../../assets/pexels-christina-morillo-1181263.jpg";
import LinkContext from "../../../context/LinkContext";
import style from "./services.module.css";

const Services = () => {
  const linkCtx = useContext(LinkContext);
  const navigate = useNavigate();

  return (
    <div id="services" className={style["serviceSection"]}>
      <div className={style["align"]}>
        <div className={style["imageContainer"]}>
          <div className={style["imgAlign"]}>
            <div className={style["box"]}></div>
            <img className={style["image"]} src={serviceImage} alt="img"></img>
          </div>
        </div>
        <div className={style["textAlign"]}>
          <p className={style["h1Style"]}>Services</p>
          <div className={style["text2Align"]}>
            <h2 className={style["whtStyle"]}>WE HAVE THE </h2>
            <h2 className={style["expStyle"]}>EXPERIENCE</h2>
          </div>
          <div className={style["infoAlign"]}>
            <p className={style["infoStyle"]}>
              Custom web application development by our expert web-app
              developers. Front-end & design, backend, database, and server
              scale designed to fit your business. We aim to create a
              consistent, safe and sustainable website or app that reflects your
              brand strategy and visual identity of the brand that helps your
              business establish a prominent position on the market.
            </p>
          </div>
        </div>
      </div>

      <div className={style["boxesAlign"]}>
        <div className={style["firstBox"]}>
          <FontAwesomeIcon
            icon={faLayerGroup}
            className={style["layersIcon"]}
          />
          <div className={style["backEndAlign"]}>
            <h1 className={style["backEnd"]}>BACK-END SERVICES</h1>

            <div className={style["firstText2Align"]}>
              <p className={style["firstTextAlign"]}>
                As part of our backend services, we build applications from the
                ground up. We have experienced developers who work closely with
                you to determine the best approach when developing your
                application.
              </p>
            </div>
            <div className={style["iconAlign"]}>
              <li
                style={{ textDecoration: "none" }}
                onClick={() => {
                  linkCtx.onNavigate(true);
                  navigate("/backEnd");
                }}
              >
                <span className={style["learn"]}>LEARN MORE</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={style["icon"]}
                />
              </li>
            </div>
          </div>
        </div>
        <div className={style["firstBox"]}>
          <FontAwesomeIcon icon={faDisplay} className={style["tvIcon"]} />

          <div className={style["frontAlign"]}>
            <h1 className={style["backEnd"]}>FRONT-END DEVELOPMENT</h1>
            <div className={style["firstText2Align"]}>
              <p className={style["secondTextAlign"]}>
                Webly brings a wealth of experience with HTML, CSS and
                JavaScript to any project We are run by engineers who have been
                working with frontend libraries such as React and Svelte since
                the early days.{" "}
              </p>
            </div>
            <div className={style["iconAlign"]}>
              <li
                style={{ textDecoration: "none" }}
                onClick={() => {
                  linkCtx.onNavigate(true);
                  navigate("/frontEnd");
                }}
              >
                <span className={style["learn"]}>LEARN MORE</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={style["icon"]}
                />
              </li>
            </div>
          </div>
        </div>
        <div className={style["firstBox"]}>
          <FontAwesomeIcon icon={faPaintBrush} className={style["brushIcon"]} />
          <div className={style["digitalAlign"]}>
            <h1 className={style["backEnd"]}>DIGITAL DESIGN</h1>
            <div className={style["firstText2Align"]}>
              <p className={style["thirdTextAlign"]}>
                We create custom design that strengthens your brand identity,
                helps you reach new customers as well as fueling up the user
                experience and expand potential business.
              </p>
            </div>
            <div className={style["iconAlign"]}>
              <li
                style={{ textDecoration: "none" }}
                onClick={() => {
                  linkCtx.onNavigate(true);
                  navigate("/digitalDesign");
                }}
              >
                <span className={style["learn"]}>LEARN MORE</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={style["icon"]}
                />
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
