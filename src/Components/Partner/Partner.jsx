import React from "react";
import "./Partner.css";

// inport qilingan imglar

import recruitments from "../../Assets/Img/Humar-research.png";
import playerPerson from "../../Assets/Img/playerPerson.png";
import logoStripe from "../../Assets/Img/stripe-logo.svg"
import logoGoogle from "../../Assets/Img/google-logo.svg"
import logoNotion from "../../Assets/Img/notionLogo.svg"
import logoGusto from "../../Assets/Img/gusto-logo.svg"
import logoAircall from "../../Assets/Img/aircall.svg"

const Partner = () => {
  return (
    <section className="partner-section">
      <div className="container">
        <div className="partner-top">
          <div className="partner__left">
            <img src={recruitments} alt="recruitments" width="390" />
          </div>
          <div className="partner__right">
            <h3 className="partner__right-title">Put the human back in HR.</h3>
            <p className="partner__right-text">
              Your employees are the real stars. Show the love and help them
              perform!
            </p>
          </div>
        </div>
        <div className="partner-bottom">
          <div className="partner__left">
            <h3 className="partner__right-title">
              You don’t have to play all the parts.
            </h3>
            <p className="partner__right-text">
              Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy
              help.
            </p>
          </div>
          <div className="partner__right">
            <img src={playerPerson} alt="playerPerson" width="390" />
          </div>
        </div>

        <div className="partner__social">
          <h3 className="partner__social-title">We partner with the best</h3>
          <div className="partner__social-logo">
            <img src={logoStripe} alt="" width="110"/>
            <img src={logoGoogle} alt="" width="110"/>
            <img src={logoNotion} alt="" width="110"/>
            <img src={logoGusto} alt="" width="110"/>
            <img src={logoAircall} alt="" width="110"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
