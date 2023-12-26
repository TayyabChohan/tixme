import React from "react";
import dropdown from "./assets/dropdown.svg";
import card from "./assets/card.png";
import calendar from "./assets/calendar.svg";
import eventLogo from "./assets/eventLogo.svg";
import location from "./assets/location (5) 1.svg";
import clock from "./assets/clock.svg";
import hourglass from "./assets/hourglass.svg";
import google from "./assets/google.svg";
import airBNB from "./assets/airBNB.svg";
import booking from "./assets/booking.com.svg";
import expedia from "./assets/expedia.svg";
import TUI from "./assets/TUI.svg";
import arrow from "./assets/arrow.svg";
const Home = () => {
  return (
    <>
      {" "}
      <div className="event-sec mx-4">
        <div className="d-flex align-items-start justify-content-start">
          <h5 className="event-h fw-bold mx-head pt-4 me-4">Events In</h5>
          <div className="d-flex align-items-center justify-content-start ms-2 border-bttom-dotted">
            <img className="nav-plus pt-1 mt-2 me-2" src={dropdown} alt="" />
            <h5 className="text-primary fw-bold pt-4 me-4 mb-1">Boston</h5>
          </div>
        </div>
        <div className="row px-0 mt-lg-5 mt-2 gx-lg-5 gy-4 mx-cards">
          <div className="col-xl-4 col-md-6 col-12">
            <div className="bg-white rounded-10 shadow-bottom">
              <img className="event-card-img" src={card} alt="" />
              <div className="d-flex align-items-center justify-content-end mt-n4 me-3">
                <img className="card-icon me-2" src={calendar} alt="" />
                <p className="text-primary fw-bold me-lg-4 me-lg-3 me-0 mb-0 mt-md-0">
                  26 Jan
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-start border-bttom-dotted w-origin ms-3 mt-1 pb-2">
                <img className="card-icon-logo me-2" src={eventLogo} alt="" />
                <div className="d-flex flex-column align-items-start justify-content-start">
                  <small className="small mb-0">Originated by</small>
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 mt-n1">
                    By KING
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-start me-3 ms-3 my-2">
                  <img className="card-icon me-1" src={location} alt="" />
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0">
                    Wilton , United States
                  </p>
                </div>
                <div className="bg-fade rounded p-lg-2 p-1 me-3">
                  <p className="small fw-bold mb-0 pb-0">Onwards</p>
                  <div className="d-flex align-items-baseline">
                    <p className="text-dark fw-bold mb-0 pb-0 line-through me-1">
                      $100
                    </p>
                    <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 price">
                      $95
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start">
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2 border-end pe-3"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img className="card-icon2 me-2" src={clock} alt="" />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Time
                    </p>
                    <p className="small mb-0">07: 00 PM</p>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img className="card-icon2 me-2" src={hourglass} alt="" />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Duration
                    </p>
                    <p className="small mb-0">2Hr 11Min</p>
                  </div>
                </div>
              </div>
              <div className="desc-h ms-3 fw-bold mb-0">Grand Night Party</div>
              <p className="desc mx-3 pb-3">
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout..
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="bg-white rounded-10 shadow-bottom">
              <img className="event-card-img" src={card} alt="" />
              <div className="d-flex align-items-center justify-content-end mt-n4 me-3">
                <img className="card-icon me-2" src={calendar} alt="" />
                <p className="text-primary fw-bold me-lg-4 me-lg-3 me-0 mb-0 mt-md-0">
                  26 Jan
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-start border-bttom-dotted w-origin ms-3 mt-1 pb-2">
                <img className="card-icon-logo me-2" src={eventLogo} alt="" />
                <div className="d-flex flex-column align-items-start justify-content-start">
                  <small className="small mb-0">Originated by</small>
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 mt-n1">
                    By KING
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-start me-3 ms-3 my-2">
                  <img className="card-icon me-1" src={location} alt="" />
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0">
                    Wilton , United States
                  </p>
                </div>
                <div className="bg-fade rounded p-lg-2 p-1 me-3">
                  <p className="small fw-bold mb-0 pb-0">Onwards</p>
                  <div className="d-flex align-items-baseline">
                    <p className="text-dark fw-bold mb-0 pb-0 line-through me-1">
                      $100
                    </p>
                    <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 price">
                      $95
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start">
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2 border-end pe-3"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/clock.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Time
                    </p>
                    <p className="small mb-0">07: 00 PM</p>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/hourglass.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Duration
                    </p>
                    <p className="small mb-0">2Hr 11Min</p>
                  </div>
                </div>
              </div>
              <div className="desc-h ms-3 fw-bold mb-0">Grand Night Party</div>
              <p className="desc mx-3 pb-3">
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout..
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="bg-white rounded-10 shadow-bottom">
              <img className="event-card-img" src={card} alt="" />
              <div className="d-flex align-items-center justify-content-end mt-n4 me-3">
                <img className="card-icon me-2" src={calendar} alt="" />
                <p className="text-primary fw-bold me-lg-4 me-lg-3 me-0 mb-0 mt-md-0">
                  26 Jan
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-start border-bttom-dotted w-origin ms-3 mt-1 pb-2">
                <img className="card-icon-logo me-2" src={eventLogo} alt="" />
                <div className="d-flex flex-column align-items-start justify-content-start">
                  <small className="small mb-0">Originated by</small>
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 mt-n1">
                    By KING
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-start me-3 ms-3 my-2">
                  <img className="card-icon me-1" src={location} alt="" />
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0">
                    Wilton , United States
                  </p>
                </div>
                <div className="bg-fade rounded p-lg-2 p-1 me-3">
                  <p className="small fw-bold mb-0 pb-0">Onwards</p>
                  <div className="d-flex align-items-baseline">
                    <p className="text-dark fw-bold mb-0 pb-0 line-through me-1">
                      $100
                    </p>
                    <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 price">
                      $95
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start">
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2 border-end pe-3"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/clock.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Time
                    </p>
                    <p className="small mb-0">07: 00 PM</p>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/hourglass.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Duration
                    </p>
                    <p className="small mb-0">2Hr 11Min</p>
                  </div>
                </div>
              </div>
              <div className="desc-h ms-3 fw-bold mb-0">Grand Night Party</div>
              <p className="desc mx-3 pb-3">
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout..
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="bg-white rounded-10 shadow-bottom">
              <img className="event-card-img" src={card} alt="" />
              <div className="d-flex align-items-center justify-content-end mt-n4 me-3">
                <img className="card-icon me-2" src={calendar} alt="" />
                <p className="text-primary fw-bold me-lg-4 me-lg-3 me-0 mb-0 mt-md-0">
                  26 Jan
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-start border-bttom-dotted w-origin ms-3 mt-1 pb-2">
                <img className="card-icon-logo me-2" src={eventLogo} alt="" />
                <div className="d-flex flex-column align-items-start justify-content-start">
                  <small className="small mb-0">Originated by</small>
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 mt-n1">
                    By KING
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-start me-3 ms-3 my-2">
                  <img className="card-icon me-1" src={location} alt="" />
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0">
                    Wilton , United States
                  </p>
                </div>
                <div className="bg-fade rounded p-lg-2 p-1 me-3">
                  <p className="small fw-bold mb-0 pb-0">Onwards</p>
                  <div className="d-flex align-items-baseline">
                    <p className="text-dark fw-bold mb-0 pb-0 line-through me-1">
                      $100
                    </p>
                    <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 price">
                      $95
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start">
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2 border-end pe-3"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/clock.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Time
                    </p>
                    <p className="small mb-0">07: 00 PM</p>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/hourglass.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Duration
                    </p>
                    <p className="small mb-0">2Hr 11Min</p>
                  </div>
                </div>
              </div>
              <div className="desc-h ms-3 fw-bold mb-0">Grand Night Party</div>
              <p className="desc mx-3 pb-3">
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout..
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="bg-white rounded-10 shadow-bottom">
              <img className="event-card-img" src={card} alt="" />
              <div className="d-flex align-items-center justify-content-end mt-n4 me-3">
                <img className="card-icon me-2" src={calendar} alt="" />
                <p className="text-primary fw-bold me-lg-4 me-lg-3 me-0 mb-0 mt-md-0">
                  26 Jan
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-start border-bttom-dotted w-origin ms-3 mt-1 pb-2">
                <img className="card-icon-logo me-2" src={eventLogo} alt="" />
                <div className="d-flex flex-column align-items-start justify-content-start">
                  <small className="small mb-0">Originated by</small>
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 mt-n1">
                    By KING
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-start me-3 ms-3 my-2">
                  <img className="card-icon me-1" src={location} alt="" />
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0">
                    Wilton , United States
                  </p>
                </div>
                <div className="bg-fade rounded p-lg-2 p-1 me-3">
                  <p className="small fw-bold mb-0 pb-0">Onwards</p>
                  <div className="d-flex align-items-baseline">
                    <p className="text-dark fw-bold mb-0 pb-0 line-through me-1">
                      $100
                    </p>
                    <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 price">
                      $95
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start">
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2 border-end pe-3"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/clock.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Time
                    </p>
                    <p className="small mb-0">07: 00 PM</p>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/hourglass.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Duration
                    </p>
                    <p className="small mb-0">2Hr 11Min</p>
                  </div>
                </div>
              </div>
              <div className="desc-h ms-3 fw-bold mb-0">Grand Night Party</div>
              <p className="desc mx-3 pb-3">
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout..
              </p>
            </div>
          </div>
          <div className="col-xl-4 col-md-6 col-12">
            <div className="bg-white rounded-10 shadow-bottom">
              <img className="event-card-img" src={card} alt="" />
              <div className="d-flex align-items-center justify-content-end mt-n4 me-3">
                <img className="card-icon me-2" src={calendar} alt="" />
                <p className="text-primary fw-bold me-lg-4 me-lg-3 me-0 mb-0 mt-md-0">
                  26 Jan
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-start border-bttom-dotted w-origin ms-3 mt-1 pb-2">
                <img className="card-icon-logo me-2" src={eventLogo} alt="" />
                <div className="d-flex flex-column align-items-start justify-content-start">
                  <small className="small mb-0">Originated by</small>
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 mt-n1">
                    By KING
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center justify-content-start me-3 ms-3 my-2">
                  <img className="card-icon me-1" src={location} alt="" />
                  <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0">
                    Wilton , United States
                  </p>
                </div>
                <div className="bg-fade rounded p-lg-2 p-1 me-3">
                  <p className="small fw-bold mb-0 pb-0">Onwards</p>
                  <div className="d-flex align-items-baseline">
                    <p className="text-dark fw-bold mb-0 pb-0 line-through me-1">
                      $100
                    </p>
                    <p className="text-primary fw-bold me-lg-4 me-lg-3 me-1 mb-0 price">
                      $95
                    </p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start">
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2 border-end pe-3"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/clock.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Time
                    </p>
                    <p className="small mb-0">07: 00 PM</p>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center justify-content-start w-origin ms-3 pb-2"
                  style={{ flexShrink: 0, width: "auto" }}
                >
                  <img
                    className="card-icon2 me-2"
                    src="./assets/hourglass.svg"
                    alt=""
                  />
                  <div>
                    <p className="small text-primary fw-bold mb-0 pb-0">
                      Event Duration
                    </p>
                    <p className="small mb-0">2Hr 11Min</p>
                  </div>
                </div>
              </div>
              <div className="desc-h ms-3 fw-bold mb-0">Grand Night Party</div>
              <p className="desc mx-3 pb-3">
                Lorem ipsum is a pseudo-Latin text used in web design,
                typography, layout..
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="count-sec">
        <div className="row">
          <div className="col-md-4 text-center pt-4 pb-md-5 pb-0">
            <div className="border-end bottom-line border-primary pb-md-0 pb-4">
              <h6 className="fw-bold text-primary mb-0">EVENT HOSTED</h6>
              <p className="mb-0 fs-3 text-primary fw-bold">6067+</p>
            </div>
          </div>
          <div className="col-md-4 text-center pt-4 pb-md-5 pb-0">
            <div className="border-end bottom-line border-primary pb-md-0 pb-4">
              <h6 className="fw-bold text-primary mb-0">Ticket Sold</h6>
              <p className="mb-0 fs-3 text-primary fw-bold">6067+</p>
            </div>
          </div>
          <div className="col-md-4 text-center pt-4 pb-md-5 pb-0">
            <div>
              <h6 className="fw-bold text-primary mb-0">
                Partners & Organizers
              </h6>
              <p className="mb-0 fs-3 text-primary fw-bold">6067+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="partner-sec">
        <h3 className="fw-bold text-primary mb-0 text-center mb-0">
          OUR PARTNER
        </h3>
        <div className="mt-lg-5 mt-4 pt-xl-5 pt-md-2 pt-5 pb-5 d-flex justify-content-center align-items-center">
          <img className="partner-img me-5" src={google} alt="" />
          <img
            className="partner-img me-md-5"
            src={airBNB}
            alt=""
          />
          <img
            className="partner-img me-5 d-lg-block d-none"
            src={booking}
            alt=""
          />
          <img
            className="partner-img me-5 d-md-block d-none"
            src={expedia}
            alt=""
          />
          <img
            className="partner-img me-5 d-md-block d-none tui"
            src={TUI}
            alt=""
          />
        </div>
      </div>
      <div className="newsletter-sec pb-4 position-relative">
        <div className="position-absolute md-absolute news-form">
          <h5 className="fw-bold text-primary mb-0 pt-2">
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
              <span className="text-primary">privacy statement</span>
            </label>
          </div>
          <button className="btn btn-primary text-capitalize py-0 px-0 d-flex rounded-6 align-items-center news-button">
            <small className="ms-2"> Get the latest updates </small>
            <div className="bg-ligh-blue rounded-6 h-100 d-flex align-items-center px-2 ms-auto">
              <img style={{ width: "15px" }} src={arrow} alt="" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
