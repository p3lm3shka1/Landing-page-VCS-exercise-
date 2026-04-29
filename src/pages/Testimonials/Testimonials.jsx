import React from "react";
import "./Testimonials.scss";

import avatar1 from "../../assets/images/testimonials/01.jpg";
import avatar2 from "../../assets/images/testimonials/02.jpg";
import avatar3 from "../../assets/images/testimonials/03.jpg";
import avatar4 from "../../assets/images/testimonials/04.jpg";
import avatar5 from "../../assets/images/testimonials/05.jpg";
import avatar6 from "../../assets/images/testimonials/06.jpg";

const avatars = {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
};

const Testimonials = ({ t, txt, tItems }) => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container">
        <h2>{t}</h2>
        <span></span>
        <div className="testimonials__list">
          {tItems.map((item, i) => (
            <div className="testimonial" key={i}>
              <div className="testimonial__avatar">
                <img src={avatars[item.avatar]} alt={item.name} />
              </div>
              <div className="testimonial__text">
                {`"${item.text}"`}
                <p className="testimonial__name">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
