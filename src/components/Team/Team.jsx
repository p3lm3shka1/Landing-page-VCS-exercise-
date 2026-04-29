import React from "react";
import "./Team.scss";

const members = [
  {
    avatar: "../../assets/images/team/01.jpg",
    name: "John Doe",
    role: "Director",
  },
  {
    avatar: "../../assets/images/team/02.jpg",
    name: "Mike Doe",
    role: "Senior Designer",
  },
  {
    avatar: "../../assets/images/team/03.jpg",
    name: "Jane Doe",
    role: "Senior Designer",
  },
  {
    avatar: "../../assets/images/team/04.jpg",
    name: "Karen Doe",
    role: "Project Manager",
  },
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
