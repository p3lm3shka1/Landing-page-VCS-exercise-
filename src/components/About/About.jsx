import aboutImage from "../../assets/images/about.jpg";

import "./About.scss";

import { IoCheckmark } from "react-icons/io5";

function About() {
  const aboutInfo = {
    title: "ABOUT US",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    features: [
      [
        "Lorem ipsum dolor",
        "Tempor incididunt",
        "Incididunt ut labore",
        "Aliquip ex ea commodo",
      ],
      [
        "Lorem ipsum dolor",
        "Exercitation ullamco",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
      ],
    ],
  };

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__img-wrapper">
          <img src={aboutImage} alt="About Us" className="about__img" />
        </div>
        <div className="about__info">
          <div className="about__title">
            <h2>{aboutInfo.title}</h2>
            <span className="about__title-underline"></span>
          </div>
          {aboutInfo.paragraphs.map((p, i) => (
            <p key={i} className="about__desc">
              {p}
            </p>
          ))}
          <h4 className="about__subtitle">Why Choose Us?</h4>
          <div className="about__features">
            {aboutInfo.features.map((col, index) => (
              <ul key={index}>
                {col.map((feature, i) => (
                  <li key={i}>
                    <span className="about__icon">
                      <IoCheckmark />
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
