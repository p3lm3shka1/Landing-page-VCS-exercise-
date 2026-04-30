import React from "react";
import "./Team.scss";

import avatar1 from "../../assets/images/team/01.jpg";
import avatar2 from "../../assets/images/team/02.jpg";
import avatar3 from "../../assets/images/team/03.jpg";
import avatar4 from "../../assets/images/team/04.jpg";

const members = [avatar1, avatar2, avatar3, avatar4];

const Team = ({ title, txt, teamMembers }) => {
  return (
    <section className="team" id="team">
      <div className="team__container">
        <div className="team__title">
          <h2>{title}</h2>
          <span></span>
          <p>{txt}</p>
        </div>
        <div className="team__list">
          {teamMembers.map((m, i) => (
            <div className="team__member" key={i}>
              <div className="team__member__avatar">
                <img src={members[i]} alt={teamMembers[i].name} />
              </div>
              <div className="team__member__name">{m.name}</div>
              <div className="team__member__role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Team;
