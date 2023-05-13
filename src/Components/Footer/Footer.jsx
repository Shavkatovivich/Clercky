import React from "react";
import "./Footer.css";

import footerLogo from "../../Assets/Img/footer-logo.svg";
import facebook from "../../Assets/Img/facebook.svg";
import twitter from "../../Assets/Img/twitter.svg";
import linkedin from "../../Assets/Img/linkedin.svg";
import instagram from "../../Assets/Img/instagram.svg";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="container">
        <div className="footer__top">
          <img src={footerLogo} alt="" width="110" />
          <h2 className="footer__top-title">A people company.</h2>
          <div className="footer__top-social">
            <img src={facebook} alt="" width="13" />
            <img src={twitter} alt="" width="25" />
            <img src={linkedin} alt="" width="25" />
            <img src={instagram} alt="" width="25" />
          </div>
        </div>
        <hr />

        <div className="footer__bottom">
          <p className="footer__bottom-text">
            A people company. © 2020 Clerksy, Inc. Clerksy is a registered
            trademark of Clerksy, Inc.
          </p   >

          <a className="footer__bottom-link" href="#">Privacy Policy</a>
          <a className="footer__bottom-link" href="#">Terms of Service</a>
          <a className="footer__bottom-link" href="#">GDPR</a>
          <a className="footer__bottom-link" href="#">Careers</a>
          <a className="footer__bottom-link" href="#">Press Kit</a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
