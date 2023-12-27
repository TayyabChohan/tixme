import React from "react";
import india from "./assets/india.svg";
import singapore from "./assets/singapore.svg";
import USA from "./assets/USA.svg";
import arrow from "./assets/arrow.svg";
import Logo from "./assets/Logo.svg";
import Search from "./assets/search.png";
import Account from "./assets/account.svg";
import menu from "./assets/menu.svg";
import plus from "./assets/plus.svg";
import location from "./assets/location (5) 1.svg";
const Contact = () => {
  return (
    <>
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
                  className="nav-link text-primary pe-1 font-nav"
                  href="/"
                >
                  Home
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a className="nav-link text-primary pe-1 font-nav" href="/events">
                  Events
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary pe-1 font-nav"
                  href="/about"
                >
                  About Us
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary pe-1 font-nav"
                  href="/contact"
                >
                  Contact Us
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item border rounded border-primary align-self-start px-2 my-1">
                <a className="nav-link text-primary pt-1 pb-1p font-nav" href="/events">
                  List your event
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary pe-1 font-nav"
                  href="/"
                >
                  Login/Sign Up
                  <img className="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li className="nav-item d-flex align-items-center justify-content-start">
                <a
                  className="nav-link text-primary pe-1 font-nav"
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
      <div className="mx-lg-4 my-lg-3 banner bg-primary rounded-8 position-relative">
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
                    className="nav-link text-primary pe-1 font-nav"
                    href="/"
                  >
                    Home
                    <img className="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a className="nav-link text-primary pe-1 font-nav" href="/events">
                    Events
                    <img className="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    className="nav-link text-primary pe-1 font-nav"
                    href="/about"
                  >
                    About Us
                    <img className="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li className="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    className="nav-link text-primary pe-1 font-nav"
                    href="/contact"
                  >
                    Contact Us
                    <img className="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li className="nav-item border rounded border-primary align-self-center me-7">
                  <a className="nav-link text-primary pt-1 pb-1p font-nav" href="/events">
                    List your event
                  </a>
                </li>
                <li className="nav-item position-absolute end-0 bg-white nav-box me-0 d-flex flex-column justify-content-center align-items-center rounded-8">
                  <a className="nav-link text-primary pt-1 pb-1p font-nav" href="/">
                    Login/Sign Up
                  </a>
                  <div className="d-flex align-items-center justify-content-center">
                    <img className="nav-loc" src={location} alt="" />
                    <a
                      className="nav-link text-primary px-1 font-nav-small"
                      href="#"
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
        <h1 className="banner-h text-white text-uppercase fw-bold pb-0">
          Contact Us
        </h1>
        <div className="banner-child bg-white p-3">
          <div className="contact-sec m-2">
            <form className="px-lg-5 px-4 py-4">
              <div className="row">
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control line-field"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control line-field"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control line-field"
                      placeholder="John"
                    />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control line-field"
                      placeholder="+1 012 3456 789"
                    />
                  </div>
                </div>
                <div className="col-lg-8">
                  <p className="text-primary fw-bold mb-3">Select Subject?</p>
                  <div className="d-flex flex-md-row flex-column">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input  rounded-circle"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        General Inquiry
                      </label>
                    </div>
                    <div className="form-check me-3">
                      <input
                        className="form-check-input  rounded-circle"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        General Inquiry
                      </label>
                    </div>
                    <div className="form-check me-3">
                      <input
                        className="form-check-input  rounded-circle"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        General Inquiry
                      </label>
                    </div>
                    <div className="form-check me-3">
                      <input
                        className="form-check-input  rounded-circle"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label" for="flexCheckDefault">
                        General Inquiry
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="mb-3 mt-lg-0 mt-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Message
                    </label>
                    <input
                      type="number"
                      className="form-control line-field"
                      placeholder="Write your message."
                    />
                  </div>
                </div>
              </div>
              <button
                style={{ width: "100px" }}
                className="btn btn-primary text-capitalize py-0 px-0 d-flex rounded-6 align-items-center news-button mt-3"
              >
                <small className="ms-2">SEND</small>
                <div className="bg-ligh-blue rounded-6 h-100 d-flex align-items-center px-2 ms-auto">
                  <img style={{ width: "15px" }} src={arrow} alt="" />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="h-200"></div>
      <div className="address-sec banner-child-address py-5">
        <div className="d-flex justify-content-center">
          <img className="mx-lg-4 mx-2" src={india} alt="" />
          <img className="mx-lg-4 mx-2" src={singapore} alt="" />
          <img className="mx-lg-4 mx-2" src={USA} alt="" />
        </div>
        <div className="contact-sec w-500 m-auto px-5 py-4 mt-4">
          <div>
            <span className="text-primary text-uppercase fw-bold">Address:</span>
            <span>
              Office, Vijay Chambers, Grant Road, Mumbai, Maharashtra 400004
            </span>
          </div>
          <div>
            <span className="text-primary text-uppercase fw-bold">Email</span>
            <span>tixme.tix@gmail.com</span>
          </div>
          <div>
            <span className="text-primary text-uppercase fw-bold">Phone</span>
            <span>+91 8080000007 (WhatsApp)</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
