import "./Header.scss";

import bgImage from "../../assets/images/intro-bg.jpg";

import { header } from "../../data/data.json";

const Header = ({ titleA, titleB, subtitle, buttonText }) => {
  return (
    <header className="header" id="header">
      <img src={bgImage} alt="Header background" className="header__bg" />
      <div className="header__content">
        <h1>
          {titleA} <br /> {titleB}
        </h1>
        <p>{subtitle}</p>
        <a href="#about" className="header__content__btn">
          {buttonText}
        </a>
      </div>
    </header>
  );
};

export default Header;
