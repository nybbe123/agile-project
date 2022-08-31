import { Link } from "react-router-dom";
import { memberData } from "../../member/memberData";
import style from "./Team.module.css";

const Team = () => {
  return (
    <div id={style.root}>
      <div id={style.teamContainer}>
        <p className={style.location}>
          <Link to="/">HOME</Link> / TEAM
        </p>
        <h1>THE WEBLY TEAM</h1>
        <h2>Lorem Ipsum Dolor Sit</h2>
      </div>

      <div id={style.team}>
        {memberData.map((member, index) => (
          <div
            key={member.id}
            className={
              index % 2 === 0
                ? style["team-mbr-card-w"]
                : style["team-mbr-card-b"]
            }
          >
            <div className={style["team-mbr-image"]}>
              <img src={member.namePic} alt={member.name} />
            </div>
            <div className={style["team-mbr-detail"]}>
              <p className={style["mbr-title"]}>{member.title}</p>
              <h4 className={style["mbr-name"]}>{member.name}</h4>
              <p className={style["mbr-intro"]}>{member.intro}</p>
              <div className={style["mbr-phone-and-email"]}>
                <p>{member.phoneNmbr}</p>
                <p>{member.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
