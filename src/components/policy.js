import React from "react";
import dropdown from "./assets/dropdown.svg";
import card from "./assets/card.png";
import calendar from "./assets/calendar.svg";
import eventLogo from "./assets/eventLogo.svg";
import clock from "./assets/clock.svg";
import hourglass from "./assets/hourglass.svg";
import google from "./assets/google.svg";
import airBNB from "./assets/airBNB.svg";
import booking from "./assets/booking.com.svg";
import expedia from "./assets/expedia.svg";
import TUI from "./assets/TUI.svg";
import arrow from "./assets/arrow.svg";
import Logo from "./assets/Logo.svg";
import Search from "./assets/search.png";
import Account from "./assets/account.svg";
import menu from "./assets/menu.svg";
import plus from "./assets/plus.svg";
import location from "./assets/location (5) 1.svg";
import music from "./assets/music.svg";
import nightlife from "./assets/nightlife.svg";
import business from "./assets/business.svg";
import sport from "./assets/sport.svg";
import foot from "./assets/food.svg";
import art from "./assets/art.svg";
const policy = () => {
  return (
    <>
      {/* <!-- mobile nav --> */}
      <nav class="navbar navbar-expand-lg navbar-white bg-white mx-4 rounded-8 top-10 d-lg-none d-block mb-5">
        <div class="container-fluid pe-0">
          <img class="nav-logo ms-lg-5 ms-2" src={Logo} alt="" />
          <div>
            <img class="m-search me-md-4 me-3" src={Search} alt="" />
            <img class="m-account me-md-3 me-2" src={Account} alt="" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <img class="m-account" src={menu} alt="" />
              </span>
            </button>
          </div>
          <div
            class="collapse navbar-collapse mt-3"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item d-flex align-items-center justify-content-start">
                <a
                  class="nav-link text-primary pe-1 font-nav"
                  href="/"
                >
                  Home
                  <img class="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li class="nav-item d-flex align-items-center justify-content-start">
                <a class="nav-link text-primary pe-1 font-nav" href="/events">
                  Events
                  <img class="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li class="nav-item d-flex align-items-center justify-content-start">
                <a
                  class="nav-link text-primary pe-1 font-nav"
                  href="/about"
                >
                  About Us
                  <img class="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li class="nav-item d-flex align-items-center justify-content-start">
                <a
                  class="nav-link text-primary pe-1 font-nav"
                  href="/contact"
                >
                  Contact Us
                  <img class="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li class="nav-item border rounded border-primary align-self-start px-2 my-1">
                <a class="nav-link text-primary pt-1 pb-1p font-nav" href="/events">
                  List your event
                </a>
              </li>
              <li class="nav-item d-flex align-items-center justify-content-start">
                <a
                  class="nav-link text-primary pe-1 font-nav"
                  href="/"
                >
                  Login/Sign Up
                  <img class="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li class="nav-item d-flex align-items-center justify-content-start">
                <a
                  class="nav-link text-primary pe-1 font-nav"
                  href="/"
                >
                  Location
                  <img class="nav-plus" src={plus} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="mx-lg-4 my-lg-3 banner bg-primary rounded-8 position-relative">
        <nav class="navbar navbar-expand-lg navbar-white bg-white mx-4 rounded-8 top-10 d-lg-block d-none">
          <div class="container-fluid pe-0">
            <img class="nav-logo ms-lg-5 ms-2" src={Logo} alt="" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 position-relative">
                <li class="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    class="nav-link text-primary pe-1 font-nav"
                    href="/"
                  >
                    Home
                    <img class="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li class="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a class="nav-link text-primary pe-1 font-nav" href="/events">
                    Events
                    <img class="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li class="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    class="nav-link text-primary pe-1 font-nav"
                    href="/about"
                  >
                    About Us
                    <img class="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li class="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    class="nav-link text-primary pe-1 font-nav"
                    href="/contact"
                  >
                    Contact Us
                    <img class="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li class="nav-item border rounded border-primary align-self-center me-7">
                  <a class="nav-link text-primary pt-1 pb-1p font-nav" href="/events">
                    List your event
                  </a>
                </li>
                <li class="nav-item position-absolute end-0 bg-white nav-box me-0 d-flex flex-column justify-content-center align-items-center rounded-8">
                  <a class="nav-link text-primary pt-1 pb-1p font-nav" href="/">
                    Login/Sign Up
                  </a>
                  <div class="d-flex align-items-center justify-content-center">
                    <img class="nav-loc" src={location} alt="" />
                    <a
                      class="nav-link text-primary px-1 font-nav-small"
                      href="/"
                    >
                      Location
                      <img class="nav-plus" src={plus} alt="" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <h1 class="banner-h text-white text-uppercase fw-bold">
          Privacy policy
        </h1>
      </div>
      <div
        class="banner-child mt-n200 bg-white p-md-5 p-4"
        style={{ overflowWrap: "break-word" }}
      >
        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You.
        </p>
        <p>
          We use Your Personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>
        <p>Interpretation</p>
        <p>
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <p>Definitions</p>
        <p>For the purposes of this Privacy Policy:</p>
        <ul>
          <li>
            Account means a unique account created for You to access our Service
            or parts of our Service.
          </li>
          <li>
            Affiliate means an entity that controls, is controlled by or is
            under common control with a party, where "control" means ownership
            of 50% or more of the shares, equity interest or other securities
            entitled to vote for election of directors or other managing
            authority.
          </li>
          <li>
            Company (referred to as either "the Company", "We", "Us" or "Our" in
            this Agreement) refers to Evento.
          </li>
          <li>
            Cookies are small files that are placed on Your computer, mobile
            device or any other device by a website,{" "}
          </li>
          <li>
            Containing the details of Your browsing history on that website
            among its many uses.
          </li>
          <li>Country refers to: Alaska, United States</li>
          <li>
            Device means any device that can access the Service such as a
            computer, a cellphone or a digital tablet.
          </li>
          <li>
            Personal Data is any information that relates to an identified or
            identifiable individual. Service refers to the Website.
          </li>
          <li>
            Service Provider means any natural or legal person who processes the
            data on behalf of the Company. It refers to third-party companies or
            individuals employed by the Company to facilitate the Service, to
            provide the Service on behalf of the Company, to perform services
            related to the Service or to assist the Company in analyzing how the
            Service is used.
          </li>
          <li>
            Third-party Social Media Service refers to any website or any social
            network website through which a User can log in or create an account
            to use the Service.
          </li>
          <li>
            Usage Data refers to data collected automatically, either generated
            by the use of the Service or from the Service infrastructure itself
            (for example, the duration of a page visit).
          </li>
          <li>
            Website refers to Evento, accessible from
            https://codecanyon8.kreativdev.com/evento
          </li>
          <li>
            You means the individual accessing or using the Service, or the
            company, or other legal entity on behalf of which such individual is
            accessing or using the Service, as applicable.
          </li>
        </ul>
        <p>Collecting and Using Your Personal Data</p>
      </div>
    </>
  );
};

export default policy;
