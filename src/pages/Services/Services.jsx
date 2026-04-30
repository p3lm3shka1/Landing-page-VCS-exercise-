import * as icons from "react-icons/fa";

import "./Services.scss";
import { services } from "../../data/data.json";

const Services = ({ title, txt, servicesItems }) => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__title">
          <h2>{title}</h2>
          <span></span>
          <p>{txt}</p>
        </div>
        <div className="services__list">
          {servicesItems.map((s, i) => (
            <div className="services__item" key={i}>
              <div className="services__icon">{icons[s.icon]()}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
