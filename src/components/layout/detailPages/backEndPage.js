import {
  faDisplay,
  faLayerGroup,
  faPaintBrush,
  faCode,
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
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={style["home"]}>HOME</p>
            </Link>
            <p className={style["middle"]}>/</p>
            <p className={style["frontEnd"]}>BACK-END</p>
          </div>
          <h1 className={style["h1"]}>BACK-END DEVELOPMENT</h1>
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
              <h1 className={style["backEnd"]}>NODE JS</h1>
              <div className={style["alignment"]}>
              <p className={style["firstTextAlign"]}>
                Webly promises to create a well functioning back end. We build
                the server using Node JS.
              </p>
            </div>
            </div>
          </div>
          <div className={style["firstBox"]}>
            <FontAwesomeIcon icon={faDisplay} className={style["tvIcon"]} />
            <div className={style["frontAlign"]}>
              <h1 className={style["backEnd"]}>MONGO DB</h1>
              <div className={style["alignment"]}>
              <p className={style["firstTextAlign"]}>
                We use the Mongo DB database so that we safely can store user
                information like passwords, emails and phone numbers and much
                more.
              </p>
              </div>
            </div>
          </div>
          <div className={style["firstBox"]}>
            <FontAwesomeIcon icon={faCode} className={style["brushIcon"]} />
            <div className={style["digitalAlign"]}>
              <h1 className={style["backEnd"]}>BCRYPT</h1>
              <div className={style["alignment"]}>
              <p className={style["firstTextAlign"]}>
                Security is a priority for us at Webly, we make sure to encrypt
                all sensitive information such as passwords.
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
            <img className={style["image"]} src={serviceImage}></img>
          </div>
          </div>

          <div className={style["comp1TextAlign"]}>
            <p className={style["head2"]}>COMME CI COMME CA</p>
            <div className={style["alignment"]}>
            <p className={style["text1"]}>
              We built a database for the furniture selling company Comme Ci
              Comme Ca. They can now view customer orders, stock status of their
              products and easily add new products through an admin page. Users
              can also register an account to view their orders. The users
              sensitive information is encrypted.
            </p>
            </div>
          </div>
        </div>
        <div className={style["comp1"]}>
          <div className={style["comp1TextAlign"]}>
            <p className={style["head2"]}>Chatlie</p>
            <div className={style["alignment"]}>
            <p className={style["text1"]}>
              Webly developed a chat application for the company Chatlie using
              Socket.io technology. The users of the application can create a
              username and chat with others in a chat room or create their own
              chat room. The application also notifies you when a user in the
              chat room is typing.
            </p>
          </div>
          </div>
          <div className={style["imageContainer"]}>
          <div className={style["imgAlign"]}>
            <div className={style["box"]}></div>
            <img className={style["image1"]} src={serviceImage}></img>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackEndPage;
