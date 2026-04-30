import * as icons from "react-icons/io5";

import "./About.scss";

import aboutImg from "../../assets/images/about.jpg";

const About = ({ title, text, whyUs, whyItemsA, whyItemsB }) => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__img-wrapper">
          <img src={aboutImg} alt="About Us" className="about__img" />
        </div>
        <div className="about__info">
          <div className="about__title">
            <h2>{title}</h2>
            <span className="about__title__underline"></span>
          </div>
          <p className="about__desc">{text}</p>
          <h4 className="about__subtitle">{whyUs}</h4>
          <div className="about__features">
            <ul>
              {whyItemsA.map((item, i) => (
                <li key={i}>
                  <span className="about__features__icon">
                    {icons[item.icon]()}
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>
            <ul>
              {whyItemsB.map((item, i) => (
                <li key={i}>
                  <span className="about__features__icon">
                    {icons[item.icon]()}
                  </span>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
