import { memberData } from "./memberData";

function MemberCard() {
  return (
    <div>
      {memberData.map((member) => (
        <div key={member.id}>
          <img src={member.img} alt={member.name}></img>
          <p>{member.name}</p>
        </div>
      ))}
    </div>
  );
}

export default MemberCard;
