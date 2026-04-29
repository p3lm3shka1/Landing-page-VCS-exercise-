import { useState } from "react";

import "./Gallery.scss";

const imagesSmall = [
  require("../../assets/images/portfolio/01-small.jpg"),
  require("../../assets/images/portfolio/02-small.jpg"),
  require("../../assets/images/portfolio/03-small.jpg"),
  require("../../assets/images/portfolio/04-small.jpg"),
  require("../../assets/images/portfolio/05-small.jpg"),
  require("../../assets/images/portfolio/06-small.jpg"),
  require("../../assets/images/portfolio/07-small.jpg"),
  require("../../assets/images/portfolio/08-small.jpg"),
  require("../../assets/images/portfolio/09-small.jpg"),
];

const imagesLarge = [
  require("../../assets/images/portfolio/01-large.jpg"),
  require("../../assets/images/portfolio/02-large.jpg"),
  require("../../assets/images/portfolio/03-large.jpg"),
  require("../../assets/images/portfolio/04-large.jpg"),
  require("../../assets/images/portfolio/05-large.jpg"),
  require("../../assets/images/portfolio/06-large.jpg"),
  require("../../assets/images/portfolio/07-large.jpg"),
  require("../../assets/images/portfolio/08-large.jpg"),
  require("../../assets/images/portfolio/09-large.jpg"),
];

const Gallery = () => {
  const useOverlay = () => {
    const [showImg, setShowImg] = useState("");

    return {
      show: showImg !== "",
      open: setShowImg,
      close: () => setShowImg(""),
      index: showImg,
    };
  };

  const { show, open, close, index } = useOverlay();

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__container">
        <div className="gallery__title">
          <h2>GALLERY</h2>
          <span></span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leon.
          </p>
        </div>
        <div className="gallery__list">
          {imagesSmall.map((image, index) => (
            <img key={index} src={image} onClick={() => open(index)} />
          ))}
        </div>
        {show && (
          <div className="gallery__overlay" onClick={close}>
            <img src={imagesLarge[index]} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
