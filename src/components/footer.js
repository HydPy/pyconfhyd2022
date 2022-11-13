import React from "react";
import logo from "../static/images/Pyconf_2022_03.webp";

export const Footer = () => (
<footer id="myFooter">
    <div class="footer-container">
        <div class="footer-logo">
            <img src={logo} width={180} height={62} loading="eager" />
        </div>
        <div class="footer-venue">
            <p class="footer-venue-heading">Venue</p>
            <div>
                <a target="blank" href="https://www.google.com/maps/place/T-Hub/@17.4338577,78.3610584,15z/data=!4m9!1m2!2m1!1sthub!3m5!1s0x3bcb93bd18410b0f:0x8d7e3fea891858ce!8m2!3d17.4338577!4d78.3785679!15sCgR0aHViWgYiBHRodWKSAQRjYW1wmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVF3TVV4eGExWm5FQUXgAQA">Conference . </a>
                <a target="blank" href="https://www.google.com/maps/place/EPAM/@17.4324493,78.3793073,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb93e152224b79:0xf4ab3bded078553b!8m2!3d17.4324442!4d78.381496">Workshop</a>
            </div>
        </div>
        <div class="footer-contact-us">
            <p>Contact-us : contact@hydpy.org</p>
        </div>
    </div>
    <div class="social-networks">
        <a target="blank" href="https://twitter.com/pyconfhyd" class="twitter"><i class="fa fa-twitter"></i></a>
        <a target="blank" href="https://www.instagram.com/pyconfhyd/" class="instagram"><i class="fa fa-instagram"></i></a>
        <a target="blank" href="https://github.com/hydpy" class="github"><i class="fa fa-github"></i></a>
    </div>
    <div class="footer-copyright">
        <p>Copyright © 2022 PyConf Hyderabad</p>
    </div>
</footer>
);
