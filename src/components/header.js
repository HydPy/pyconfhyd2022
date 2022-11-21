import React from "react";
import { Link } from "gatsby";
export const Header = ({ bg, classHeader, color }) => (
  <header className={`header-main ${classHeader}`} style={{ background: bg }}>
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
        <Link smooth spy to="/#venue">
          Venue
        </Link>
      </li>
      <li>
        <Link to="/code-of-conduct">Code of Conduct</Link>
      </li>
      <li>
        <Link to="/faq">FAQ</Link>
      </li>
    </ul>
  </header>
);
