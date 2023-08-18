import React from "react";

const About = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-30">
            <div className="section-title2">About Us</div>
            <div className="section-title">
              The story behind <span>our gym</span>
            </div>
            <p className="mb-30">
              Quisque tortor risus, pharetra ut venenatis ac, rutrum eget ante
              fusce in convallis nibh felis rana hendrerit diam rhoncus eget
              sonec dictum acus element sifend nisa efficitur venenatis.
            </p>
            <ul className="list-unstyled list">
              <li>
                <div className="list-icon">
                  {" "}
                  <span className="ti-check"></span>{" "}
                </div>
                <div className="list-text">
                  <p>Over 15 years of experience</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
                  {" "}
                  <span className="ti-check"></span>{" "}
                </div>
                <div className="list-text">
                  <p>Certified Trainers</p>
                </div>
              </li>
              <li>
                <div className="list-icon">
                  {" "}
                  <span className="ti-check"></span>{" "}
                </div>
                <div className="list-text">
                  <p>Exceptional work quality</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <div className="about-img">
              <div className="img">
                {" "}
                <img src="/img/about.jpg" className="img-fluid" alt="" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
