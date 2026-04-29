import React from "react";
import "./Testimonials.scss";

const testimonials = [
  {
    avatar: "../../assets/images/testimonials/01.jpg",
    name: "-Jonh Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: "../../assets/images/testimonials/02.jpg",
    name: "-Johnatan Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: "../../assets/images/testimonials/03.jpg",
    name: "-John Doe Jr",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: "../../assets/images/testimonials/04.jpg",
    name: "-Jane Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: "../../assets/images/testimonials/05.jpg",
    name: "-Johan Doe",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, necessitatibus!",
  },
  {
    avatar: "../../assets/images/testimonials/06.jpg",
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
