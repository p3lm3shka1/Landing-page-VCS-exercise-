import { useState } from "react";

import "./Gallery.scss";

const imagesSmall = [
  { img: "../../src/assets/images/portfolio/01-small.jpg" },
  { img: "../../src/assets/images/portfolio/02-small.jpg" },
  { img: "../../src/assets/images/portfolio/03-small.jpg" },
  { img: "../../src/assets/images/portfolio/04-small.jpg" },
  { img: "../../src/assets/images/portfolio/05-small.jpg" },
  { img: "../../src/assets/images/portfolio/06-small.jpg" },
  { img: "../../src/assets/images/portfolio/07-small.jpg" },
  { img: "../../src/assets/images/portfolio/08-small.jpg" },
  { img: "../../src/assets/images/portfolio/09-small.jpg" },
];

const imagesLarge = [
  { img: "../../src/assets/images/portfolio/01-large.jpg" },
  { img: "../../src/assets/images/portfolio/02-large.jpg" },
  { img: "../../src/assets/images/portfolio/03-large.jpg" },
  { img: "../../src/assets/images/portfolio/04-large.jpg" },
  { img: "../../src/assets/images/portfolio/05-large.jpg" },
  { img: "../../src/assets/images/portfolio/06-large.jpg" },
  { img: "../../src/assets/images/portfolio/07-large.jpg" },
  { img: "../../src/assets/images/portfolio/08-large.jpg" },
  { img: "../../src/assets/images/portfolio/09-large.jpg" },
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
            <img key={index} src={image.img} onClick={() => open(index)} />
          ))}
        </div>
        {show && (
          <div className="gallery__overlay" onClick={close}>
            <img src={imagesLarge[index].img} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
