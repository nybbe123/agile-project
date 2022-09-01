import {
    faDisplay,
    faLayerGroup,
    faPaintBrush,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import serviceImage from "../../../assets/pexels-christina-morillo-1181263.jpg";
import style from "./frontEnd.module.css";
import { Link } from "react-router-dom";


const BackEndPage = () => {
    return (
        <div>
        <div className={style["section1"]}>
            <div className={style["backgroundImg"]}>
                <div className={style["navAlign"]}>
                    <Link style={{textDecoration: 'none'}} to="/">
                    <p className={style["home"]}>HOME</p>
                    </Link>
                    <p className={style["middle"]}>/</p>
                    <p className={style["frontEnd"]}>BACK-END</p>
                </div>
                <h1 className={style["h1"]}>back-end development</h1>
                <h2 className={style["h2"]}>We back you up</h2>
            </div>
        </div>
        <div className={style["section2"]}>
            <div className={style["headAlign"]}>
                <p className={style["head1"]}>competence</p>
                <p className={style["head2"]}>we offer wide competence</p>

            </div>

            <div className={style["boxesAlign"]}>
        <div className={style["firstBox"]}>
          <FontAwesomeIcon
            icon={faLayerGroup}
            className={style["layersIcon"]}
          />
          <div className={style["backEndAlign"]}>
            <h1 className={style["backEnd"]}>Servers</h1>

            <p className={style["firstTextAlign"]}>
              As part of our backend services, we build applications from the
              ground up. We have experienced developers who work closely with
              you to determine the best approach when developing your
              application.
            </p>
           
          </div>
        </div>
        <div className={style["firstBox"]}>
          <FontAwesomeIcon icon={faDisplay} className={style["tvIcon"]} />
          <div className={style["frontAlign"]}>
            <h1 className={style["backEnd"]}>Databases</h1>
            <p className={style["firstTextAlign"]}>
              Webly brings a wealth of experience with HTML, CSS and JavaScript
              to any project We are run by engineers who have been working with
              frontend libraries such as React and Svelte since the early days.{" "}
            </p>
            
          </div>
        </div>
        <div className={style["firstBox"]}>
          <FontAwesomeIcon icon={faPaintBrush} className={style["brushIcon"]} />
          <div className={style["digitalAlign"]}>
            <h1 className={style["backEnd"]}>RESTful APIs</h1>
            <p className={style["firstTextAlign"]}>
              We create custom design that strengthens your brand identity,
              helps you reach new customers as well as fueling up the user
              experience and expand potential business.
            </p>
          </div>
        </div>
        </div>
        </div >
        
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
                <p className={style["head2"]}>Company .01</p>
                <p className={style["text1"]}>
                Custom web application development by our expert web-app 
                developers. Front-end & design, backend, database, and server 
                scale designed to fit your business. We aim to create a consistent, 
                safe and sustainable website or app that reflects your brand strategy 
                and visual identity of the brand that helps your business establish a 
                prominent position on the market.
                </p>


            </div>


            </div>
            <div className={style["comp1"]}>
            
            <div className={style["comp1TextAlign"]}>
                <p className={style["head2"]}>Company .02</p>
                <p className={style["text1"]}>
                Custom web application development by our expert web-app 
                developers. Front-end & design, backend, database, and server 
                scale designed to fit your business. We aim to create a consistent, 
                safe and sustainable website or app that reflects your brand strategy 
                and visual identity of the brand that helps your business establish a 
                prominent position on the market.
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
}

export default BackEndPage;

