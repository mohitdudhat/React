import React from "react";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div
        className="background bg-img bg-fixed section-padding pb-0"
        data-background="/img/slider/4.jpg"
        data-overlay-dark="4"
      >
        <div className="container">
          <div className="row">
            {/* Free Trial Training */}
            <div className="col-md-6 mb-30">
              <div className="ready v-middle">
                <h4>Free Trial Training</h4>
                <p>
                  Make an appointment today for your free and non-binding trial
                  session with or without one of our personal trainers.
                </p>
                <a href="contact.html" className="btn-1 button-1">
                  Contact Us
                </a>
              </div>
            </div>
            {/* Testimonials */}
            <div className="col-md-5 offset-md-1">
              <div className="testimonials-box">
                <h4>
                  What <span>Clients</span> Say
                </h4>
                <div className="owl-carousel owl-theme">
                  <div className="item">
                    {" "}
                    <span className="quote">
                      <img src="/img/quot.png" alt="" />
                    </span>
                    <p>
                      Lorem luctus nulla a scelerisque ultricies miss elonas
                      nisa drana aliquamen the placerat quis risus onthase vitae
                      tesus in the duzse vitaeni asthe nesue the duru in fermen.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        {" "}
                        <img src="/img/team/1.jpg" alt="" />{" "}
                      </div>
                      <div className="cont">
                        <h6>Jason Brown</h6> <span>Customer Review</span>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    {" "}
                    <span className="quote">
                      <img src="/img/quot.png" alt="" />
                    </span>
                    <p>
                      Lorem luctus nulla a scelerisque ultricies miss elonas
                      nisa drana aliquamen the placerat quis risus onthase vitae
                      tesus in the duzse vitaeni asthe nesue the duru in fermen.
                    </p>
                    <div className="info">
                      <div className="author-img">
                        {" "}
                        <img src="/img/team/2.jpg" alt="" />{" "}
                      </div>
                      <div className="cont">
                        <h6>Emily White</h6> <span>Customer Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
