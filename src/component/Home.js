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
import LanguageIcon from "@mui/icons-material/Language";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import TimelineIcon from "@mui/icons-material/Timeline";
import GroupsIcon from "@mui/icons-material/Groups";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PlaceIcon from "@mui/icons-material/Place";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import GridViewIcon from "@mui/icons-material/GridView";
import $ from "jquery";

const Home = () => {
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $("#pmsl").fadeOut();
  //   } else {
  //     $("#pmsl").fadeIn();
  //   }
  // });
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
            <div className="col-lg-6 p-5" id="pmsl">
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
                    <div className="convenience ">
                      <img
                        src="/assets/images/packing-moving.jpg"
                        loading="lazy"
                        alt=""
                      />
                      <div>
                        <p>convenience</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="safety ">
                      <img
                        src="/assets/images/agarwal-movers-crockery.jpg"
                        alt=""
                        loading="lazy"
                      />
                      <div>
                        <p>Safety and Security</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row pt-3">
                  <div className="col-lg-6">
                    <div className="customized">
                      <img
                        src="/assets/images/customized-packing.jpg"
                        loading="lazy"
                        alt=""
                      />
                      <div>
                        <p>Customized Packing</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="damage">
                      <img
                        src="/assets/images/zero-damage.jpg"
                        loading="lazy"
                        alt=""
                      />
                      <div>
                        <p>Zero Damage</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-5 shadow  bg-body rounded">
              <div className="why-pms ">
                <h3>Why PMS?</h3>
                <hr />
                <div>
                  <p className="">
                    <SecurityIcon className="text-danger m-2" />
                    34+ Years of Trust
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <PinDropIcon className="text-danger m-1" />
                    1264+ Service Locations
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <LanguageIcon className="text-danger m-1" />
                    182 Worldwide Coverage
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <LocationCityIcon className="text-danger m-1" />
                    125+ Branches PAN India
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <TimelineIcon className="text-danger m-1" />
                    132060+ Moves Annually
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <GroupsIcon className="text-danger m-1" />
                    Trained Manpower
                  </p>
                </div>
                <hr />

                <div>
                  <p>
                    <DomainAddIcon className="text-danger m-1" />
                    3000+ Trucking Cube (Container)
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <LocalShippingIcon className="text-danger m-1" />
                    1200+ GPS Enabled Vehicles
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <PsychologyIcon className="text-danger m-1" />
                    Innovative Technology
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <DomainAddIcon className="text-danger m-1" />
                    20 Lac sq. ft warehouse space
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <PlaceIcon className="text-danger m-1" />
                    Online Consignment Tracking
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <MapsHomeWorkIcon className="text-danger m-1" />
                    Free Pre-Move Survey
                  </p>
                </div>
                <hr />
                <div>
                  <p>
                    <GridViewIcon className="text-danger ml-1" />
                    7600+ Home Storage Lockers
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-5 ">
              <h3 className="px-5">Awards</h3>
              <div className="p-5">
                <img
                  src="/assets/images/indiacargo.jpg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="p-5">
                <img
                  src="/assets/images/manindra-awards.jpg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="p-5">
                <img src="/assets/images/jk-award.jpg" loading="lazy" alt="" />
              </div>
              <div className="p-5">
                <img
                  src="/assets/images/zee-awards.jpg"
                  loading="lazy"
                  alt=""
                />
              </div>
              <div className="p-5">
                <img
                  src="/assets/images/ceat-award.jpg"
                  loading="lazy"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
