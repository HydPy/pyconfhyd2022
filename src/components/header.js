import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import useScrollPosition from "./../hooks/use-scroll-position";
export const Header = ({ bg, classHeader, color }) => {
  const scrollPosition = useScrollPosition();
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setOpen((open) => !open);
  };
  useEffect(() => {
    console.log(scrollPosition, isSticky);
    scrollPosition > 90 ? setIsSticky(true) : setIsSticky(false);
  }, [scrollPosition]);

  return (
    <header className={`header-main ${classHeader}`}>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link smooth spy to="/#keynotes">
            Keynotes
          </Link>
        </li>
        <li>
          <Link smooth spy to="/#timetable">
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/#sponsors">Sponsors</Link>
        </li>
        <li>
          <Link smooth to="/#community-partners">
            Community Partners
          </Link>
        </li>
        <li>
          <Link smooth spy to="/#venue">
            Venue
          </Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/code-of-conduct">Code of Conduct</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        {/* <li>
          <a href="#" onClick={toggleMenu}>
            More
          </a>
          <SubMenu hidden={!open} />
        </li> */}
      </ul>
    </header>
  );
};

const SubMenu = ({ hidden }) => {
  return (
    <ul className="header-submenu" hidden={hidden}>
      <li>one</li>
      <li>two</li>
      <li>three</li>
    </ul>
  );
};
