import { IoChatbubblesSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPeopleRobbery } from "react-icons/fa6";
import { PiMagicWandFill } from "react-icons/pi";

import "./Features.scss";

const Features = () => {
  const featureItems = [
    {
      image: <IoChatbubblesSharp />,
      title: "Chat Support",
      desc: "Chat support is available to assist you with any questions or issues you may have.",
    },
    {
      image: <HiSpeakerphone />,
      title: "Speakerphone",
      desc: "This is a speakerphone icon, which represents communication and announcements.",
    },
    {
      image: <FaPeopleRobbery />,
      title: "Community",
      desc: "Our community is built on collaboration and support.",
    },
    {
      image: <PiMagicWandFill />,
      title: "Customizable",
      desc: "Our landing page can be easily customized to fit your brand and style.",
    },
  ];

  return (
    <section className="hero__features" id="features">
      <div className="hero__features__title">
        <h1>features</h1>
        <span></span>
      </div>
      <div className="hero__features__container">
        {featureItems.map((feature, index) => (
          <div className="hero__features__container__item" key={index}>
            <div className="hero__features__container__item__icon">
              {feature.image}
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
