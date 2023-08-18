import React from "react";

const ParallaxHeader = () => {
  return (
    <div
      className="parallax-header valign bg-img bg-fixed"
      data-overlay-dark="4"
      data-background="/img/slider/12.jpg"
    >
      <div className="container">
        <div className="row content-justify-center">
          <div className="col-md-12 text-center">
            <div className="v-middle">
              <h6>Welcome to NoStop</h6>
              <h1>
                Be A Happier, Healthier,
                <br />
                <span>Stronger You</span>
              </h1>
              <p>Achieve your health & fitness goals at any stage.</p>
              <a href="#hello" className="btn-1 button-1">
                Our Classes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxHeader;
