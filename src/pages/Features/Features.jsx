import * as icons from "react-icons/lu";

import "./Features.scss";

const Features = ({ title, featItems }) => {
  return (
    <section className="hero__features" id="features">
      <div className="hero__features__title">
        <h1>{title}</h1>
        <span></span>
      </div>
      <div className="hero__features__container">
        {featItems.map((feature, index) => (
          <div className="hero__features__container__item" key={index}>
            <div className="hero__features__container__item__icon">
              {icons[feature.icon]()}
            </div>
            <h2 className="hero__features__container__item__title">
              {feature.title}
            </h2>

            <p className="hero__features__container__item__description">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
