import React from "react";
import "./Header.css";

// Imports images

import siteLogo from "../../Assets/Img/site-logo.svg";
import headerIntro from "../../Assets/Img/header-bigImg.png"

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <div className="nav__left">
              <a className="nav__link" href="#">
                <img src={siteLogo} alt="siteLogo" width="153" height="58" />
              </a>
            </div>

            <div className="nav__right">
              <a className="nav__right-link" href="#">
                Log In
              </a>
              <a className="nav__right-link" href="tel:99899999999">
                844-332-6440
              </a>
              <button className="nav__btn">Get Started</button>
            </div>
          </nav>

          <div className="header__intro">
            <div className="header__intro-left">
              <h2 className="header__left-title">
                Running the show has never been so easy.
              </h2>
              <p className="header__left-text">
                Ready to put the human back in HR? Clerksy helps you set the
                stage with an inclusive and compliant workplace.
              </p>
            </div>

            <div className="header__intro-right">
              <img src={headerIntro} alt="headerIntro " width="526" height="400"/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
