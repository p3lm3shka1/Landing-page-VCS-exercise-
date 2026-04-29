import bgImage from "../../assets/images/intro-bg.jpg";

import "./Hero.scss";

import { IoChatbubblesSharp } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { FaPeopleRobbery } from "react-icons/fa6";
import { PiMagicWandFill } from "react-icons/pi";

function Hero() {
  return (
    <section className="hero" id="hero">
      <img src={bgImage} alt="Hero background" className="hero__bg" />
      <div className="hero__content">
        <h1>
          WE ARE A <br /> LANDING PAGE
        </h1>
        <p>
          We are lorem ipsum company that provides the best services for our
          customers. We are committed to delivering high-quality products and
          services that meet the needs of our clients.
        </p>
        <a href="#about" className="hero__content__btn">
          LEARN MORE
        </a>
      </div>
    </section>
  );
}

export default Hero;
