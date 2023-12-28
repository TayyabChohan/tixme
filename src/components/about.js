import React from "react";
import aboutUs from "./assets/about-us-pic.svg";
import Silver from "./assets/Sliver.svg";
import Gold from "./assets/Gold.svg";
import Platinum from "./assets/Platinum.svg";
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
const About = () => {
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
                  class="nav-link text-primary-color pe-1 font-nav"
                  href="/"
                >
                  Home
                  <img class="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li class="nav-item d-flex align-items-center justify-content-start">
                <a class="nav-link text-primary pe-1 font-nav" href="events">
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
                  href="contact"
                >
                  Contact Us
                  <img class="nav-plus" src={plus} alt="" />
                </a>
              </li>
              <li class="nav-item border rounded border-primary align-self-start px-2 my-1">
                <a class="nav-link text-primary pt-1 pb-1p font-nav" href="#">
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
      <div class="mx-lg-4 my-lg-3 banner bg-primary-color rounded-8 position-relative">
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
                    class="nav-link text-primary-color pe-1 font-nav"
                    href="/"
                  >
                    Home
                    <img class="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li class="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a class="nav-link text-primary-color pe-1 font-nav" href="events">
                    Events
                    <img class="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li class="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    class="nav-link text-primary-color pe-1 font-nav"
                    href="/about"
                  >
                    About Us
                    <img class="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li class="nav-item d-flex align-items-center justify-content-center me-xl-5 me-3">
                  <a
                    class="nav-link text-primary-color pe-1 font-nav"
                    href="/contact"
                  >
                    Contact Us
                    <img class="nav-plus" src={plus} alt="" />
                  </a>
                </li>
                <li class="nav-item border rounded border-primary align-self-center me-7">
                  <a class="nav-link text-primary-color pt-1 pb-1p font-nav" href="/events">
                    List your event
                  </a>
                </li>
                <li class="nav-item position-absolute end-0 bg-white nav-box me-0 d-flex flex-column justify-content-center align-items-center rounded-8">
                  <a class="nav-link text-primary-color pt-1 pb-1p font-nav" href="/">
                    Login/Sign Up
                  </a>
                  <div class="d-flex align-items-center justify-content-center">
                    <img class="nav-loc" src={location} alt="" />
                    <a
                      class="nav-link text-primary-color px-1 font-nav-small"
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
        <h1 class="banner-h fw-bold text-white text-uppercase mb-0 pb-0 animate__animated animate__bounce">
          ABout us
        </h1>
        <div class="banner-child bg-white px-0">
          <div class="d-flex flex-md-row flex-column">
            <img class="about-img mt-lg-5 mt-4" src={aboutUs} alt="" />
            <p class="ps-lg-5 ps-4 pe-4 about-p mt-lg-5 mt-4">
              Welcome to TIXME, where every ticket tells a story! Our mission is
              to redefine events, making each occasion an unforgettable and
              cherished memory. We promise fair prices, support event organizers
              with insights, and ensure secure transactions. Our user-friendly
              website and interactive features ensure simple ticketing and help
              curate extraordinary events. TIXME creates a community, by
              rewarding and incentivizing members with every ticket purchase.
              Our social network enables us to reach a variety of customers. To
              bring this vision to life, we seamlessly blend cutting-edge
              technology with an unwavering commitment to prioritizing customer
              satisfaction.
            </p>
          </div>
          <p class="mt-2">
            Step with us into the spotlight of unforgettable moments where the
            journey is secure, the path is clear, and the memories are destined
            to be extraordinary!Seize the moment, secure your ticket!
          </p>
          <p>
            At TIXME, we believe in expressing our gratitude to our valued
            customers for their ongoing support. Thereby, we are proud to
            introduce our Loyalty and Rewards Program, designed to enhance your
            experience and show appreciation for your loyalty. As you embark on
            your ticket-buying journey with us, you automatically become a part
            of our three-tiered loyalty program: Silver, Gold and Platinum
          </p>
        </div>
      </div>
      {/* </div> */}
      <div class="space-height"></div>
      <div class=" sponser-sec banner-child py-5">
        <div class="row w-100 m-auto">
          <div class="col-lg-4 text-lg-center text-start">
            <img class="mb-lg-0 mb-4" src={Silver} alt="" />
          </div>
          <div class="col-lg-8">
            <div class="me-lg-4">
              <span class="text-dark text-capitalize fw-bold animate__animated animate__bounce">
                Silver Tier:
              </span>
              <span>
                The Beginning Of Your Journey As you make your initial
                purchases, you enter the Silver Tier, unlocking a range of
                benefits. Enjoy exclusive discounts on future ticket purchases,
                ensuring that your loyalty is immediately rewarded.
              </span>
            </div>
          </div>
        </div>
        <div class="row w-100 m-auto mt-lg-5 mt-4">
          <div class="col-lg-4 text-lg-center text-start">
            <img class="mb-lg-0 mb-4" src={Gold} alt="" />
          </div>
          <div class="col-lg-8">
            <div class="me-lg-4">
              <span class="text-dark text-capitalize fw-bold">Gold Tier :</span>
              <span>
                Ascending To Greater Rewards With continued engagement, your
                loyalty propels you into the Gold Tier, where the rewards become
                even more enticing. In addition to enhanced discounts, Gold
                members get early access to select events, securing your spot
                before general sales commence.
              </span>
            </div>
          </div>
        </div>
        <div class="row w-100 m-auto mt-lg-5 mt-4">
          <div class="col-lg-4 text-lg-center text-start">
            <img class="mb-lg-0 mb-4" src={Platinum} alt="" />
          </div>
          <div class="col-lg-8">
            <div class="me-lg-4">
              <span class="text-dark text-capitalize fw-bold animate__animated animate__bounce">
                Platinum Tier :
              </span>
              <span>
                Achieving The Pinnacle Of Exclusive Benefits Achieve Platinum
                status through your sustained support, and experience the
                pinnacle of our Loyalty and Rewards Program. TIXME’s platinum
                members receive the most substantial discounts, priority access
                to special events, and exclusive perks tailored to make your
                ticket-buying experience truly exceptional.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="count-sec">
        <div class="row">
          <div class="col-md-4 text-center pt-4 pb-md-5 pb-0">
            <div class="border-end bottom-line border-primary pb-md-0 pb-4">
              <h6 class="fw-bold text-primary-color mb-0">EVENT HOSTED</h6>
              <p class="mb-0 fs-3 text-primary-color fw-bold">6067+</p>
            </div>
          </div>
          <div class="col-md-4 text-center pt-4 pb-md-5 pb-0">
            <div class="border-end bottom-line border-primary pb-md-0 pb-4">
              <h6 class="fw-bold text-primary-color mb-0">Ticket Sold</h6>
              <p class="mb-0 fs-3 text-primary-color fw-bold">6067+</p>
            </div>
          </div>
          <div class="col-md-4 text-center pt-4 pb-md-5 pb-0">
            <div>
              <h6 class="fw-bold text-primary-color mb-0">Partners & Organizers</h6>
              <p class="mb-0 fs-3 text-primary-color fw-bold">6067+</p>
            </div>
          </div>
        </div>
      </div>
      <div class="partner-sec">
        <h3 class="fw-bold text-primary-color mb-0 text-center mb-0">OUR PARTNER</h3>
        <div class="mt-lg-5 mt-4 pt-xl-5 pt-md-2 pt-5 pb-5 d-flex justify-content-center align-items-center">
          <img class="partner-img me-5" src={google} alt="" />
          <img class="partner-img me-md-5" src={airBNB} alt="" />
          <img
            class="partner-img me-5 d-lg-block d-none"
            src={booking}
            alt=""
          />
          <img
            class="partner-img me-5 d-md-block d-none"
            src={expedia}
            alt=""
          />
          <img
            class="partner-img me-5 d-md-block d-none tui"
            src={TUI}
            alt=""
          />
        </div>
      </div>
      <div class="newsletter-sec pb-4 position-relative">
        <div class="position-absolute md-absolute news-form">
          <h5 class="fw-bold text-primary-color mb-0">
            Want to receive events & news and updates?
          </h5>
          <div class="d-flex mt-4 flex-md-row flex-column">
            <input
              class="w-auto form-control rounded me-md-3 me-5 mb-md-0 mb-3"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <input
              class="w-auto form-control rounded me-md-0 me-5"
              type="text"
              name=""
              id=""
              placeholder="Email ID"
            />
          </div>
          <div class="form-check mt-3 mb-4">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="form-check-label" for="flexCheckDefault">
              I agree with the{" "}
              <span class="text-primary-color">privacy statement</span>
            </label>
          </div>
          <button class="btn btn-primary text-capitalize py-0 px-0 d-flex rounded-6 align-items-center news-button">
            <small class="ms-2">Get the latest updates</small>
            <div class="bg-ligh-blue rounded-6 h-100 d-flex align-items-center px-2 ms-auto">
              <img style={{width: "15px"}} src={arrow} alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
