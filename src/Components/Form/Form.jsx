import React from "react";

import "./Form.css";

const Form = () => {
  return (
    <section className="form-section">
      <div className="container">
        <div className="form">
          <div className="form__left">
            <h2 className="form__left-title">Stay up to date!</h2>
            <p className="form__left-text">
              Sign up for the latest Clerksy news.
            </p>
          </div>
          <div className="form__right">
            <form className="form__right-form" action="#">
              <input className="form__right-input" type="text" />
              <button className="form__right-btn">Sign Up</button>
              <p className="form__text">By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View our full <a className="form__text-link" href="#">Privacy Policy</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
