import { IoChatbubblesSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPeopleRobbery } from "react-icons/fa6";
import { PiMagicWandFill } from "react-icons/pi";

import "./Features.scss";

const iconMap = {
  IoChatbubblesSharp: <IoChatbubblesSharp />,
  HiSpeakerphone: <HiSpeakerphone />,
  FaPeopleRobbery: <FaPeopleRobbery />,
  PiMagicWandFill: <PiMagicWandFill />,
};

const Features = ({ t, f }) => {
  return (
    <section className="hero__features" id="features">
      <div className="hero__features__title">
        <h1>{t}</h1>
        <span></span>
      </div>
      <div className="hero__features__container">
        {f.map((feature, index) => (
          <div className="hero__features__container__item" key={index}>
            <div className="hero__features__container__item__icon">
              {iconMap[feature.icon]}
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
