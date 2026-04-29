import { useState } from "react";
import "./Gallery.scss";

import img01s from "../../assets/images/portfolio/01-small.jpg";
import img02s from "../../assets/images/portfolio/02-small.jpg";
import img03s from "../../assets/images/portfolio/03-small.jpg";
import img04s from "../../assets/images/portfolio/04-small.jpg";
import img05s from "../../assets/images/portfolio/05-small.jpg";
import img06s from "../../assets/images/portfolio/06-small.jpg";
import img07s from "../../assets/images/portfolio/07-small.jpg";
import img08s from "../../assets/images/portfolio/08-small.jpg";
import img09s from "../../assets/images/portfolio/09-small.jpg";

import img01l from "../../assets/images/portfolio/01-large.jpg";
import img02l from "../../assets/images/portfolio/02-large.jpg";
import img03l from "../../assets/images/portfolio/03-large.jpg";
import img04l from "../../assets/images/portfolio/04-large.jpg";
import img05l from "../../assets/images/portfolio/05-large.jpg";
import img06l from "../../assets/images/portfolio/06-large.jpg";
import img07l from "../../assets/images/portfolio/07-large.jpg";
import img08l from "../../assets/images/portfolio/08-large.jpg";
import img09l from "../../assets/images/portfolio/09-large.jpg";

const imagesSmall = [
  img01s,
  img02s,
  img03s,
  img04s,
  img05s,
  img06s,
  img07s,
  img08s,
  img09s,
];
const imagesLarge = [
  img01l,
  img02l,
  img03l,
  img04l,
  img05l,
  img06l,
  img07l,
  img08l,
  img09l,
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
          {imagesSmall.map((image, idx) => (
            <img key={idx} src={image} onClick={() => open(idx)} />
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
