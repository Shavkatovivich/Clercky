import React from "react";

import "./Discover.css";
import lineOne from "../../Assets/Img/line.svg";
import lineTwo from "../../Assets/Img/lineTwo.svg";
import lineThree from "../../Assets/Img/advantage.svg";
import humanBook from "../../Assets/Img/humanBook.png";
import leftImg from "../../Assets/Img/left.svg";
import rightImg from "../../Assets/Img/right.svg";

const Discovery = () => {
  return (
    <section className="discovery-section">
      <div className="discover__top">
        <div className="container">
          <h2 className="top__title">It's easy as 1, 2, 3</h2>
          <p className="top__text">
            Clerksy can help use your unique business needs. Here's how:
          </p>

          <div className="discover__top-list">
            <ul className="top__list">
              <li className="top__list-item">
                <p className="top__item-text">
                  Fill out a form and tell us what you're looking for:
                </p>
                <span className="top__item-price">5 minutes</span>
              </li>
              <li className="top__list-item">
                <img src={lineOne} alt="" width="75" />
              </li>
              <li className="top__list-item">
                <p className="top__item-text">
                  Time it will take a Clerksy rep to follow up:
                </p>
                <span className="top__item-price">24 hours</span>
              </li>
              <li className="top__list-item">
                <img src={lineTwo} alt="" width="75" />
              </li>

              <li className="top__list-item">
                <img src={lineThree} alt="" />
              </li>
            </ul>

            <button className="discover__btn">Book Free Discovery Call</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="discover__middle">
          <div className="middle__left">
            <h2 className="middle__left-title">
              Not just another HR resource.
            </h2>
            <p className="middle__left-text">
              Simple. Entertaining. Informative.
            </p>
            <button className="middle__button discover__btn">
              Download E-book
            </button>
          </div>

          <div className="middle__right">
            <img src={humanBook} alt="" width="400" height="400" />
          </div>
        </div>
      </div>

      <div className="discover__bottom">
        <img className="discover__bottom-left" src={leftImg} alt="" />
        <div className="container">
          <div className="discover__bottom-top">
            <div className="discover__bottom-info">
              <h2 className="bottom__info-title">Get Started With Clerksy</h2>
              <p className="bottom__info-text">
                Make sure your business puts people first.
              </p>
              <button className="bottom__info-btn">
                Book a Free Discovery Call
              </button>
            </div>
          </div>
        </div>
        <img className="discover__bottom-right" src={rightImg} alt="" />
      </div>
    </section>
  );
};

export default Discovery;
