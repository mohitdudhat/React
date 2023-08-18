import React from "react";

const InstaSection = () => {
  return (
    <div className="insta">
      <div className="container-fluid flex">
        <div className="img">
          <a href="#0">
            {" "}
            <img src="/img/slider/1.jpg" alt="" />{" "}
          </a>{" "}
          <i className="ti-instagram"></i>
        </div>
        <div className="img">
          <a href="#0">
            {" "}
            <img src="/img/slider/2.jpg" alt="" />{" "}
          </a>{" "}
          <i className="ti-instagram"></i>
        </div>
        <div className="img">
          <a href="#0">
            {" "}
            <img src="/img/slider/3.jpg" alt="" />{" "}
          </a>{" "}
          <i className="ti-instagram"></i>
        </div>
        <div className="img">
          <a href="#0">
            {" "}
            <img src="/img/slider/4.jpg" alt="" />{" "}
          </a>{" "}
          <i className="ti-instagram"></i>
        </div>
        <div className="img">
          <a href="#0">
            {" "}
            <img src="/img/slider/5.jpg" alt="" />{" "}
          </a>{" "}
          <i className="ti-instagram"></i>
        </div>
        <div className="follow">
          <a href="#0" className="text-bg">
            {" "}
            <span>
              <i className="ti-instagram"></i> / NoStop
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstaSection;
