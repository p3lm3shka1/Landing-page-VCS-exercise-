import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import "./Nav.scss";

const Nav = ({ title, navItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__title">
          <h1>{title}</h1>
        </div>
        <ul className="nav__links">
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={"#" + item.toLowerCase()} onClick={() => setOpen(false)}>
                {item}
              </a>
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
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={"#" + item.toLowerCase()}
                      onClick={() => setOpen(false)}
                    >
                      {item}
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
