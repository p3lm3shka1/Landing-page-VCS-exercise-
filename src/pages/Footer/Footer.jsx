import React from "react";
import "./Footer.scss";

const Footer = ({ txt, link }) => {
  return (
    <footer className="footer">
      <p>
        {txt}{" "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          Vitalij Lazarev
        </a>
      </p>
    </footer>
  );
};
export default Footer;
