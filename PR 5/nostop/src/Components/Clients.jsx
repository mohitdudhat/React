import React from "react";

const ClientsSection = () => {
  return (
    <section className="clients">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="owl-carousel owl-theme">
              <div className="clients-logo">
                <a href="#0">
                  <img src="/img/clients/lotto.png" alt="" />
                </a>
              </div>
              <div className="clients-logo">
                <a href="#0">
                  <img src="/img/clients/life-fitness.png" alt="" />
                </a>
              </div>
              <div className="clients-logo">
                <a href="#0">
                  <img src="/img/clients/brunswick.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
