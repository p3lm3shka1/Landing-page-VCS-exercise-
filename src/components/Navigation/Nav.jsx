import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import "./Nav.scss";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__title">
          <h1>REACT LANDING PAGE</h1>
        </div>
        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button
          className="nav__menu__open"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <IoMenu />
        </button>
        {open && (
          <>
            <div className="nav__overlay" onClick={() => setOpen(false)}></div>
            <div className="nav__menu__sidebar">
              <ul className="nav__menu__mobile">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} onClick={() => setOpen(false)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
