import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { useHiddenScroll } from "../../hooks/useHiddenScroll";
import "./Nav.scss";

const Nav = ({ title, navItems }) => {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const hidden = useHiddenScroll({ threshold: 150, delta: 2 });

  useEffect(() => {
    if (hidden && open) setOpen(false);
  }, [hidden, open]);

  return (
    <motion.nav
      className="nav"
      animate={{ y: hidden ? -140 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    >
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
            <div className="nav__overlay" onClick={() => setOpen(false)} />
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
    </motion.nav>
  );
};

export default Nav;
