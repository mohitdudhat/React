import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        {/* Logo */}
        <div className="logo-wrapper">
          <a className="logo" href="index.html">
            <img src="/img/logo.png" className="logo-img" alt="" />
            {/* <h2>NO<span>STOP</span></h2> */}
          </a>
        </div>
        {/* Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hellonavbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="ti-menu"></i>
          </span>
        </button>
        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#hello"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Home <i className="ti-angle-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="index.html" className="dropdown-item active">
                    <span>Home Layout 1</span>
                  </a>
                </li>
                <li>
                  <a href="index2.html" className="dropdown-item">
                    <span>Home Layout 2</span>
                  </a>
                </li>
                <li>
                  <a href="index3.html" className="dropdown-item">
                    <span>Home Layout 3</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#hello"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Classes <i className="ti-angle-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="classes.html" className="dropdown-item">
                    <span>Classes 1</span>
                  </a>
                </li>
                <li>
                  <a href="classes2.html" className="dropdown-item">
                    <span>Classes 2</span>
                  </a>
                </li>
                <li>
                  <a href="classes3.html" className="dropdown-item">
                    <span>Classes 3</span>
                  </a>
                </li>
                <li>
                  <a href="classes-single.html" className="dropdown-item">
                    <span>Class Single</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pricing.html">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="trainers.html">
                Trainers
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#hello"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Pages <i className="ti-angle-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="gallery-image.html" className="dropdown-item">
                    <span>Image Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="gallery-video.html" className="dropdown-item">
                    <span>Video Gallery</span>
                  </a>
                </li>
                <li>
                  <a href="trainer-single.html" className="dropdown-item">
                    <span>Trainer Single</span>
                  </a>
                </li>
                <li>
                  <a href="faq.html" className="dropdown-item">
                    <span>Faq</span>
                  </a>
                </li>
                <li className="dropdown-submenu dropdown">
                  <a
                    className="dropdown-item dropdown-toggle"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                    href="#hello"
                  >
                    <span>
                      Other Pages <i className="ti-angle-right"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="coming-soon.html" className="dropdown-item">
                        <span>Coming Soon</span>
                      </a>
                    </li>
                    <li>
                      <a href="404.html" className="dropdown-item">
                        <span>404 Page</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#hello"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Blog <i className="ti-angle-down"></i>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="blog.html" className="dropdown-item">
                    <span>Blog 1</span>
                  </a>
                </li>
                <li>
                  <a href="blog2.html" className="dropdown-item">
                    <span>Blog 2</span>
                  </a>
                </li>
                <li>
                  <a href="post.html" className="dropdown-item">
                    <span>Post Single</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
