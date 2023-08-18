import React from "react";

const Video = () => {
  return (
    <section
      className="video-wrapper video section-padding bg-img bg-fixed"
      data-overlay-dark="4"
      data-background="/img/slider/10.jpg"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-30">
            <div className="section-title3">Be Inspired</div>
            <div className="section-title">
              Explore Life <span>Gym</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="text-center col-md-12">
            <a className="vid" href="https://youtu.be/pJsWKy9y1Cg">
              <div className="vid-butn">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="ti-control-play"></i>{" "}
                </span>{" "}
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
