import {
  faComputerMouse,
  faPaintBrush,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import serviceImage from "../../../assets/pexels-christina-morillo-1181263.jpg";
import style from "./detailPages.module.css";

const DesignPage = () => {
  return (
    <div>
      <div className={style["section1"]}>
        <div className={style["backgroundImg"]}>
          <div className={style["navAlign"]}>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={style["home"]}>HOME</p>
            </Link>
            <p className={style["middle"]}>/</p>
            <p className={style["frontEnd"]}>DIGITAL DESIGN</p>
          </div>
          <h1 className={style["h1"]}>DIGITAL DESIGN</h1>
          <h2 className={style["h2Design"]}>Let us design your application</h2>
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
              icon={faComputerMouse}
              className={style["layersIcon"]}
            />
            <div className={style["backEndAlign"]}>
              <h1 className={style["backEnd"]}>UX</h1>
              <div className={style["alignment"]}>
                <p className={style["firstTextAlign"]}>
                  The user experience is one of the most important aspects of a
                  working website. We aim to create user friendly websites with
                  easy navigation to make it as easy as possible for users
                  visiting your website.
                </p>
              </div>
            </div>
          </div>
          <div className={style["firstBox"]}>
            <FontAwesomeIcon icon={faPalette} className={style["tvIcon"]} />
            <div className={style["frontAlign"]}>
              <h1 className={style["backEnd"]}>UI</h1>
              <div className={style["alignment"]}>
                <p className={style["firstTextAlign"]}>
                  The looks of a website is what attracts a user a lot of the
                  time. We take a lot of time developing the design of your
                  website to make it look and feel professional.
                </p>
              </div>
            </div>
          </div>
          <div className={style["firstBox"]}>
            <FontAwesomeIcon
              icon={faPaintBrush}
              className={style["brushIcon"]}
            />
            <div className={style["digitalAlign"]}>
              <h1 className={style["backEnd"]}>PHOTOSHOP</h1>
              <div className={style["alignment"]}>
                <p className={style["firstTextAlign"]}>
                  Our team has great experience in Adobe programs such as
                  Photoshop to create the best design for your website.
                </p>
              </div>
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
          <div className={style["imageContainer"]}>
            <div className={style["imgAlign"]}>
              <div className={style["box"]}></div>
              <img
                className={style["image"]}
                src={serviceImage}
                alt="img"
              ></img>
            </div>
          </div>

          <div className={style["comp1TextAlign"]}>
            <p className={style["head2"]}>PLANET OF SNEAKERS</p>
            <div className={style["alignment"]}>
              <p className={style["text1"]}>
                Using Adobe Illustrator the Webly team created a graphic profile
                for the company Planet of Sneakers. The graphic profile contains
                colors, fonts and font sizes, a logo and a slogan. We also
                created a professional website design using the graphic profile,
                with wireframes and mockups for desktop, tablet and mobile.
              </p>
            </div>
          </div>
        </div>
        <div className={style["comp1"]}>
          <div className={style["comp1TextAlign"]}>
            <p className={style["head2"]}>PHARMA</p>
            <div className={style["alignment"]}>
              <p className={style["text1"]}>
                Webly remade the webpage for the pharmacy company Pharma. The
                goal was to re-construct their page and make their UX design
                better. The team used Figma to design and prototype a better
                user experience and worked closely with the client.
              </p>
            </div>
          </div>
          <div className={style["imageContainer"]}>
            <div className={style["imgAlign"]}>
              <div className={style["box"]}></div>
              <img
                className={style["image1"]}
                src={serviceImage}
                alt="img"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;
