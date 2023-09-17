import React from "react";
import "../Styles/Meteor.css";
const Meteor = () => {
  return (
    <div>
      <h2 className="meteor-heading">Meteor Shower</h2>
      <div className="upcoming-meteors">
        <a href="">Button</a>
        <a href="">Button</a>
        <a href="">Button</a>
        <a href="">Button</a>
        <a href="">Button</a>
        <a href="">Button</a>
        <a href="">Button</a>
        <a href="">Button</a>
        <a href="">Button</a>
        <a href="">Button</a>
      </div>
      <div className="single-meteor">
        <div className="left">
          <div className="container">
            <div className="box">
              <span className="title">Quadrantid</span>
              <div>
                <p>3–4 January, 2024 (25-hours)</p>
                <span>
                  In the right conditions, the Quadrantids are one of the year’s
                  best meteor showers, as they feature an average of 25 meteors
                  per hour at their peak. The Quadrantids’ peak is relatively
                  short, lasting from about midnight to dawn, but the volume of
                  meteors makes the experience worthwhile.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="assets\images\disco-moon.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Meteor;
