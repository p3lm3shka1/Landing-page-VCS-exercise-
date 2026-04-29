import { FaWordpress } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";

import "./Services.scss";
import { services } from "../../data/data.json";

const iconMap = [
  <FaWordpress />,
  <FaCartArrowDown />,
  <IoMdCloudDownload />,
  <MdGTranslate />,
  <FaPaperPlane />,
  <MdOutlineQueryStats />,
];

const Services = ({ t, txt, sI }) => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__title">
          <h2>{t}</h2>
          <span></span>
          <p>{txt}</p>
        </div>
        <div className="services__list">
          {sI.map((s, i) => (
            <div className="services__item" key={i}>
              <div className="services__icon">{iconMap[i]}</div>
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
