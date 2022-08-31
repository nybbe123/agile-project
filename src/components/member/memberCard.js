import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import style from "../member/memberSection.module.css";
import { memberData } from "./memberData";

function MemberCard() {
  return (
    <div id="aboutUs" className={style["container"]}>
      <p className={style["p"]}>ABOUT US</p>
      <div className={style["memberTitleContainer"]}>
        <h2 className={style["theFantastic"]}>THE FANTASTIC</h2>
        <h2 className={style["five"]}> FIVE</h2>
      </div>
      <div className={style["memberContainer"]}>
        {memberData.map((member) => (
          <div className={style["memberInfo"]} key={member.id}>
            <img
              className={style["memberPic"]}
              src={member.namePic}
              alt={member.name}
            ></img>
            <div className={style["memberText"]}>
              <p className={style["memberName"]}>{member.name}</p>
              <p>{member.title}</p>
              <p>{member.phoneNmbr}</p>
              <p>{member.email}</p>
            </div>
          </div>
        ))}
      </div>
      <p className={style.learnmore}>
        <Link to="/team">LEARN MORE ABOUT US</Link>
        <FontAwesomeIcon icon={faArrowRight} className={style.arrow} />
      </p>
    </div>
  );
}

export default MemberCard;
