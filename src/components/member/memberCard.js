import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import LinkContext from "../../context/LinkContext";
import style from "../member/memberSection.module.css";
import { memberData } from "./memberData";

function MemberCard() {
  const linkCtx = useContext(LinkContext);
  const navigate = useNavigate();
  return (
    <div id="about-us" className={style["container"]}>
      <p className={style["p"]}>ABOUT US</p>
      <div className={style["memberTitleContainer"]}>
        <h2 className={style["theFantastic"]}>
          THE FANTASTIC <span className={style["five"]}>FIVE</span>
        </h2>
      </div>
      <div className={style["memberContainer"]}>
        {memberData.map((member) => (
          <div className={style["memberInfo"]} key={member.id}>
            <img
              className={style["memberPic"]}
              src={member.namePic}
              alt={member.name}
            />
            <div className={style["memberText"]}>
              <p className={style["memberName"]}>{member.name}</p>
              <p>{member.title}</p>
              <p>{member.phoneNmbr}</p>
              <p>{member.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.learnmore}>
        <p
          onClick={() => {
            linkCtx.onNavigate(true);
            navigate("/team");
          }}
        >
          MORE ABOUT US
        </p>
        <FontAwesomeIcon icon={faArrowRight} className={style.arrow} />
      </div>
    </div>
  );
}

export default MemberCard;
