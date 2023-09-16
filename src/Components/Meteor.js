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
              <span className="title">Meteor Title</span>
              <div>
                <p>summary</p>
                <span>Date</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src="assets\images\earth-1.gif" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Meteor;
