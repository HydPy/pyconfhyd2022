import React from "react";
import "../assets/stylesheets/footer.css";
import logo from "../images/Pyconf_2022_03.webp";

export const Footer = () => (
  <footer id="myFooter">
    <div class="footer-container">
      <div class="footer-logo">
        <img src={logo} width={180} height={62} loading="eager" />
      </div>
      <div class="footer-contact-us">
        <p>Contact : contact@hydpy.org</p>
      </div>
    </div>

    <div class="social-networks">
      <a target="blank" href="https://twitter.com/pyconfhyd" class="twitter">
        <i class="fa fa-twitter"></i>
      </a>
      <a
        target="blank"
        href="https://www.instagram.com/pyconfhyd/"
        class="instagram"
      >
        <i class="fa fa-instagram"></i>
      </a>
      <a target="blank" href="https://github.com/hydpy" class="github">
        <i class="fa fa-github"></i>
      </a>
    </div>
    <div class="footer-copyright">
      <p>Copyright © 2022 PyConf Hyderabad</p>
      <p>
        Previous: &nbsp;
        <a
          href="https://pyconf.hydpy.org/2020"
          target="_blank"
          style={{ textDecoration: "underline" }}
        >
          2020
        </a>
      </p>
    </div>
  </footer>
);
