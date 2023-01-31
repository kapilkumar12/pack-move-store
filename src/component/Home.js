import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./css/home.css";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import BungalowIcon from "@mui/icons-material/Bungalow";
import FlightIcon from "@mui/icons-material/Flight";
import EmojiTransportationIcon from "@mui/icons-material/EmojiTransportation";
import HailIcon from "@mui/icons-material/Hail";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import SecurityIcon from "@mui/icons-material/Security";
import PinDropIcon from "@mui/icons-material/PinDrop";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container-fluid fbanner">
        <div className="container home-content">
          <div className="row row-cols-9 mt-3">
            <div className="col items">
              <div className="domestic">
                <div>
                  <LocalShippingIcon />
                </div>
                <p>Domestic Moving</p>
              </div>
            </div>
            <div className="col">
              <div className="domestic">
                <div>
                  <TimeToLeaveIcon />
                </div>
                <div>
                  <p>Car Moving</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic">
                <div>
                  <BungalowIcon />
                </div>
                <div>
                  <p>Secure Storage</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic">
                <div>
                  <FlightIcon />
                </div>
                <div>
                  <p>Flight Booking</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic">
                <div>
                  <FlightIcon />
                </div>
                <div>
                  <p>International Booking</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic">
                <div>
                  <EmojiTransportationIcon />
                </div>
                <div>
                  <p>Office Moving</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic">
                <div>
                  <HailIcon />
                </div>
                <div>
                  <p>Employees Moving</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic">
                <div>
                  <AirportShuttleIcon />
                </div>

                <div>
                  <p>Commercial Moving</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="d-flex">
                <div className="m-2">
                  <div class="wrapper">
                    <div class="ring">
                      <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                        <div class="coccoc-alo-ph-circle"></div>
                        <div class="coccoc-alo-ph-circle-fill"></div>
                        <div class="coccoc-alo-ph-img-circle"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phone text-white">
                  <a href="tel:0123456789">
                    <span>0123456789</span>
                  </a>
                  <p> Shifting Domestic & International</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row home-contact">
            <div className="text-start pt-5">
              <p>
                Get a free <span className="text-danger"> Domestic Moving</span>
                quote
              </p>
            </div>
            <div className="row p-3">
              <div className="col-lg-4">
                <input
                  type="text"
                  id="fname "
                  placeholder="Full Name* "
                  className="fname form-control"
                  required
                />
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="mobile form-control"
                  id="mobile "
                  placeholder="Mobile No*"
                  required
                />
              </div>
              <div className="col-lg-4">
                <input
                  type="text"
                  className="email form-control"
                  id="email"
                  placeholder="Email Id*"
                  required
                />
              </div>
            </div>
            <div className="row p-3">
              <div className="col-lg-3">
                <input
                  type="text"
                  className="from form-control"
                  id="from"
                  placeholder="From*"
                  required
                />
              </div>
              <div className="col-lg-3">
                <input
                  type="text"
                  className="to form-control"
                  id="to"
                  placeholder="To*"
                  required
                />
              </div>
              <div className="col-lg-6 d-flex gap-3">
                <input
                  type="text"
                  className="captcha form-control"
                  id="captcha"
                  placeholder="Enter Captcha*"
                  required
                />
                <div>
                  <div className="captchaC">
                    <p>31674</p>
                  </div>
                </div>
                <div>
                  <div className="">
                    <button type="submit" class="btn btn-danger">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid about-content">
        <div className="container">
          <div className="row about-section">
            <div className="col-lg-6">
              <h3 className="text-danger">Pack Move & Store LTD.</h3>
              <h6>An ISO 9001:2015 & ISO 39001:2012 Certified Company</h6>
              <h3 className="text-danger">
                India’s Largest and Most Awarded Movers
              </h3>
              <div>
                <p>
                  Taking an opportunity to introduce Pack Move & Store – is a
                  packing, moving & Storage company, committed to provide
                  "Personal and Exclusive" relocation services with a team of
                  highly trained and experienced moving
                  professionals.Successfully Moved 5000+ customers to their
                  destinations since 2013 and providing storage facilities to
                  1000+ customers with a space of 15000 sq feet warehouse,
                  Warehousing for storage making sure of smooth transition of
                  your goods during your move from your origin address to
                  destination address.
                </p>
                <a href="" className="text-danger">
                  Read More
                </a>
              </div>

              <div className="pt-3">
                <h3>Read More A MOVING SOLUTION THAT ASSURES</h3>
                <div className="row pt-3">
                  <div className="col-lg-6">
                    <div className="convenienceimg ">
                      {/* <p>Convenience</p> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="safetyimg">
                      <p></p>
                    </div>
                  </div>
                </div>

                <div className="row pt-3">
                  <div className="col-lg-6">
                    <div className="customizedimg"></div>
                  </div>
                  <div className="col-lg-6">
                    <div className="damageimg">
                      {/* <img
                        src="/assets/images/zero-damage.jpg"
                        loading="lazy"
                        alt=""
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div>
                <h3>Why PMS?</h3>
                <hr />
                <div>
                  <p>
                    <SecurityIcon className="text-danger" />
                    34+ Years of Trust
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <PinDropIcon className="text-danger" />
                    1264+ Service Locations
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
