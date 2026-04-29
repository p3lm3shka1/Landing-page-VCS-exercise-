import "./Header.scss";

import bgImage from "../../assets/images/intro-bg.jpg";

import { header } from "../../data/data.json";

const Header = ({ tA, tB, s, btn }) => {
  return (
    <header className="header" id="header">
      <img src={bgImage} alt="Header background" className="header__bg" />
      <div className="header__content">
        <h1>
          {tA} <br /> {tB}
        </h1>
        <p>{s}</p>
        <a href="#about" className="header__content__btn">
          {btn}
        </a>
      </div>
    </header>
  );
};

export default Header;
