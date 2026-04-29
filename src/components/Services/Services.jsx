import { FaWordpress } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdCloudDownload } from "react-icons/io";
import { MdGTranslate } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineQueryStats } from "react-icons/md";

import "./Services.scss";

const services = [
  {
    icon: <FaWordpress />,
    title: "WordPress",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    icon: <FaCartArrowDown />,
    title: "Branding",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    icon: <IoMdCloudDownload />,
    title: "Cloud",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    icon: <MdGTranslate />,
    title: "Translation",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    icon: <FaPaperPlane />,
    title: "Planning",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
  {
    icon: <MdOutlineQueryStats />,
    title: "Statistics",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__title">
          <h2>OUR SERVICES</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leon.
          </p>
        </div>
        <div className="services__list">
          {services.map((s, i) => (
            <div className="services__item" key={i}>
              <div className="services__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
