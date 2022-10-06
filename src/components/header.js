import React from "react";
import { Link } from 'gatsby';
export const Header = ({bg}) => (
  <header className={`header-main ${bg}`} style={{background: bg}}>
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="navicon" />
    </label>
    <ul className="menu">
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <a>Speakers</a>
      </li>
      <li>
        <a>Schedule</a>
      </li>
      <li>
        <Link to="/code-of-conduct">Code of Conduct</Link>
      </li>
      <li className="menu-highlight">
        <a href="https://pyconf.hydpy.org/2020" target="_blank">
          PyConf Hyderabad 2020
        </a>
      </li>
    </ul>
  </header>
);
