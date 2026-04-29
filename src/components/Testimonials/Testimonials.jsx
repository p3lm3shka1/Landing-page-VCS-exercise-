import React from "react";
import "./Testimonials.scss";

import avatar1 from "../../assets/images/testimonials/01.jpg";
import avatar2 from "../../assets/images/testimonials/02.jpg";
import avatar3 from "../../assets/images/testimonials/03.jpg";
import avatar4 from "../../assets/images/testimonials/04.jpg";
import avatar5 from "../../assets/images/testimonials/05.jpg";
import avatar6 from "../../assets/images/testimonials/06.jpg";

const testimonials = [
  {
    avatar: avatar1,
    name: "-Jonh Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: avatar2,
    name: "-Johnatan Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: avatar3,
    name: "-John Doe Jr",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: avatar4,
    name: "-Jane Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: avatar5,
    name: "-Johan Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: avatar6,
    name: "-Janette Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <h2>WHAT OUR CLIENTS SAY</h2>
        <span></span>
        <div className="testimonials__list">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <div className="testimonial__avatar">
                <img src={t.avatar} alt={t.name} />
              </div>
              <div className="testimonial__text">
                {`"${t.text}"`}
                <p className="testimonial__name">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
