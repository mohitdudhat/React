import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="wrap">
                <h4>Contact</h4>
                <div className="wrap-text">
                  0665 Broadway NY, New York 10001
                  <br />
                  United States of America
                </div>
                <div className="wrap-phone">Phone: +1 203-123-0606</div>
                <div className="wrap-mail">info@nostop.com</div>
              </div>
            </div>
            <div className="col-md-3 offset-md-1">
              <div className="opening-hours">
                <h4>Opening Hours</h4>
                <ul>
                  <li>
                    <div className="tit">Monday - Friday</div>
                    <div className="dots"></div> <span>06:00 - 22:00</span>
                  </li>
                  <li>
                    <div className="tit">Saturday</div>
                    <div className="dots"></div> <span>08:00 - 17:00</span>
                  </li>
                  <li>
                    <div className="tit">Sunday</div>
                    <div className="dots"></div> <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <div className="wrap">
                <h4>Subscribe</h4>
                <div className="row subscribe">
                  <div className="col-md-12">
                    <p>
                      Subscribe to take advantage of our campaigns and gift
                      certificates.
                    </p>
                    <form>
                      <input
                        type="text"
                        name="search"
                        placeholder="Your email"
                        required
                      />
                      <button>Subscribe</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="copyright">
                <p>
                  2023 © All rights reserved. Designed by{" "}
                  <a
                    href="https://1.envato.market/DuruThemes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DuruThemes
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 text-end">
              <div className="footer-social">
                {" "}
                <a href="#hello">
                  <i className="ti-instagram"></i>
                </a>{" "}
                <a href="#hello">
                  <i className="ti-twitter"></i>
                </a>{" "}
                <a href="#hello">
                  <i className="ti-youtube"></i>
                </a>{" "}
                <a href="#hello">
                  <i className="ti-pinterest"></i>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
