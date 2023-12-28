import React from "react";
import arrow from "./assets/arrow.svg";
import Logo from "./assets/Logo.svg";
import Search from "./assets/search.png";
import Account from "./assets/account.svg";
import menu from "./assets/menu.svg";
import plus from "./assets/plus.svg";
import location from "./assets/location (5) 1.svg";
const Faqs = () => {
  return (
    <>
      {/* <!-- mobile nav --> */}
      <nav className="navbar navbar-expand-lg navbar-white bg-white mx-4 rounded-8 top-10 d-lg-none d-block mb-5">
        <div className="container-fluid pe-0">
          <img className="nav-logo ms-lg-5 ms-2" src={Logo} alt="" />
          <div>
            <img className="m-search me-md-4 me-3" src={Search} alt="" />
            <img className="m-account me-md-3 me-2" src={Account} alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <img className="m-account" src={menu} alt="" />
              </span>
            </button>
          </div>
          <div
            className="collapse navbar-collapse mt-3"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary-color pe-1 font-nav"
                  href="/"
                >
                  Home
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a className="nav-link text-primary-color pe-1 font-nav" href="/events">
                  Events
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary-color pe-1 font-nav"
                  href="/about"
                >
                  About Us
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary-color pe-1 font-nav"
                  href="/contact"
                >
                  Contact Us
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item border rounded border-primary align-self-start px-2 my-1">
                <a className="nav-link text-primary-color pt-1 pb-1p font-nav" href="/events">
                  List your event
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary-color pe-1 font-nav"
                  href="/"
                >
                  Login/Sign Up
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary-color pe-1 font-nav"
                  href="/"
                >
                  Location
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="mx-lg-4 my-lg-3 banner bg-primary-color rounded-8 position-relative">
        <nav className="navbar navbar-expand-lg navbar-white bg-white mx-4 rounded-8 top-10 d-lg-block d-none">
          <div className="container-fluid pe-0">
            <img className="nav-logo ms-lg-5 ms-2" src={Logo} alt="" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 position-relative">
                <li className="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    className="nav-link text-primary-color pe-1 font-nav"
                    href="/"
                  >
                    Home
                    <img className="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a className="nav-link text-primary-color pe-1 font-nav" href="/events">
                    Events
                    <img className="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    className="nav-link text-primary-color pe-1 font-nav"
                    href="/about"
                  >
                    About Us
                    <img className="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    className="nav-link text-primary-color pe-1 font-nav"
                    href="/contact"
                  >
                    Contact Us
                    <img className="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li className="nav-item border rounded border-primary align-self-center me-7">
                  <a className="nav-link text-primary-color pt-1 pb-1p font-nav" href="/events">
                    List your event
                  </a>
                </li>
                <li className="nav-item position-absolute end-0 bg-white nav-box me-0 d-flex flex-column justify-content-center align-items-center rounded-8">
                  <a className="nav-link text-primary-color pt-1 pb-1p font-nav" href="/">
                    Login/Sign Up
                  </a>
                  <div className="d-flex align-items-center justify-content-center">
                    <img className="nav-loc" src={location} alt="" />
                    <a
                      className="nav-link text-primary-color px-1 font-nav-small"
                      href="/"
                    >
                      Location
                      <img className="nav-plus" src={plus} alt="" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 className="banner-h text-white text-uppercase fw-bold mb-0 pb-0 animate__animated animate__bounce">
          FAQ’s
        </h1>
        <div className="banner-child bg-white">
          <div
            className="accordion accordion-flush mx-4 my-3"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  How can I purchase tickets?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  How can I purchase tickets?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  How can I purchase tickets?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  How can I purchase tickets?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  How can I purchase tickets?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> className. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "150px" }}></div>
      <div className="newsletter-sec pb-4 position-relative">
        <div className="position-absolute md-absolute news-form">
          <h5 className="fw-bold text-primary-color mb-0">
            Want to receive events & news and updates?
          </h5>
          <div className="d-flex mt-4 flex-md-row flex-column">
            <input
              className="w-auto form-control rounded me-md-3 me-5 mb-md-0 mb-3"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              className="w-auto form-control rounded me-md-0 me-5"
              type="text"
              name=""
              id=""
              placeholder="Email ID"
            />
          </div>
          <div className="form-check mt-3 mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              I agree with the{" "}
              <span className="text-primary-color">privacy statement</span>
            </label>
          </div>
          <button className="btn btn-primary text-capitalize py-0 px-0 d-flex rounded-6 align-items-center news-button">
            <small className="ms-2">Get the latest updates</small>
            <div class="bg-ligh-blue rounded-6 h-100 d-flex align-items-center px-2 ms-auto">
              <img style={{ width: "15px" }} src={arrow} alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Faqs;
