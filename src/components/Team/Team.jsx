import React from "react";
import "./Team.scss";

import avatar1 from "../../assets/images/team/01.jpg";
import avatar2 from "../../assets/images/team/02.jpg";
import avatar3 from "../../assets/images/team/03.jpg";
import avatar4 from "../../assets/images/team/04.jpg";

const members = [
  { avatar: avatar1, name: "John Doe", role: "Director" },
  { avatar: avatar2, name: "Mike Doe", role: "Senior Designer" },
  { avatar: avatar3, name: "Jane Doe", role: "Senior Designer" },
  { avatar: avatar4, name: "Karen Doe", role: "Project Manager" },
];

function Team() {
  return (
    <section className="team" id="team">
      <div className="team__container">
        <div className="team__title">
          <h2>Meet The Team</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, possimus.
          </p>
        </div>
        <div className="team__list">
          {members.map((m, i) => (
            <div className="team__member" key={i}>
              <div className="team__member__avatar">
                <img src={m.avatar} alt={m.name} />
              </div>
              <div className="team__member__name">{m.name}</div>
              <div className="team__member__role">{m.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Team;
