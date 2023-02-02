import React, { useState } from "react";
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
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import BusAlertIcon from "@mui/icons-material/BusAlert";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import $ from "jquery";

const Home = () => {
  // const [show, setShow] = React.useState(true);
  // const onClick = () => setShowResults(true);

  const clickTrucking = () => {
    document.getElementById("truckingTube").style.display = "block";

    document.getElementById("ledBox").style.display = "none";

    document.getElementById("fabricSheets").style.display = "none";
  };

  const clickLed = () => {
    document.getElementById("truckingTube").style.display = "none";

    document.getElementById("ledBox").style.display = "block";

    document.getElementById("fabricSheets").style.display = "none";
  };
  const clickFabric = () => {
    document.getElementById("truckingTube").style.display = "none";

    document.getElementById("ledBox").style.display = "none";

    document.getElementById("fabricSheets").style.display = "block";
  };

  return (
    <>
      <Header />
      {/* hero section start */}
      <div className="container-fluid fbanner">
        <div className="container home-content">
          <div className="row row-cols-9 mt-3 text-center">
            <div className="col items">
              <div className="domestic-moving">
                <div>
                  <LocalShippingIcon />
                </div>
                <p>Domestic Moving</p>
              </div>
            </div>
            <div className="col">
              <div className="domestic-moving">
                <div>
                  <TimeToLeaveIcon />
                </div>
                <div>
                  <p>Car Moving</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic-moving">
                <div>
                  <BungalowIcon />
                </div>
                <div>
                  <p>Secure Storage</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic-moving">
                <div>
                  <FlightIcon />
                </div>
                <div>
                  <p>Flight Booking</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic-moving">
                <div>
                  <FlightIcon />
                </div>
                <div>
                  <p>International Booking</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic-moving">
                <div>
                  <EmojiTransportationIcon />
                </div>
                <div>
                  <p>Office Moving</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic-moving">
                <div>
                  <HailIcon />
                </div>
                <div>
                  <p>Employees Moving</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="domestic-moving">
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
                  <div className="wrapper">
                    <div className="ring">
                      <div className="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                        <div className="coccoc-alo-ph-circle"></div>
                        <div className="coccoc-alo-ph-circle-fill"></div>
                        <div className="coccoc-alo-ph-img-circle"></div>
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
                    <button type="submit" className="btn btn-danger">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* hero secttion end */}
      {/* about section start */}
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
                    <EarbudsIcon className="text-danger m-1" />
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
            <div className="col-lg-3 p-5 award-section">
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
              <div className="text-danger mx-5">
                <a href="" className=" ">
                  View More
                </a>
                <ArrowCircleRightIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section end */}
      {/*what serve section start */}
      <div className="container-fluid serve-section">
        <div className="row text-center">
          <div>
            <h2>What We're Serve to</h2>
          </div>
          <div>
            <ul className="d-flex justify-content-center gap-5 aos-init aos-animate resp-tabs-list">
              <li className=" hor_1 resp-tab-item domestic" id="domestic">
                <a href="">Domestic</a>
              </li>
              <li className=" hor_1 resp-tab-active resp-tab-item commercial">
                <a href="">Commercial</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* commercial serve section start */}
      <div className="container-fluid  commercial-section">
        <div className="text-center ">
          <h2>Commercial Move</h2>
          <p className="csp">
            We are trusted by numerous organizations worldwide for offering the
            unexpected commercial moving services. We ensure that our corporate
            clients attain peace of mind while relocating their business to and
            from any place. Our simplified approach includes thoughtful
            planning, expert moving assistance, clear communication, and
            punctuality so that our clients never get disappointed on hiring us
            as their commercial moving partner.
          </p>
        </div>
        <div className="row text-center">
          <div className="col-lg-6 ">
            <div className="row commercial-two">
              <div className="col-lg-4">
                <div className="supply-chain">
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Supply Chain</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain">
                  <div>
                    <DomainAddIcon className="icon" />
                  </div>
                  <div>Warehousing</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain">
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Exim Cargo</div>
                </div>
              </div>
            </div>
            <div className="row commercial-two">
              <div className="col-lg-4">
                <div className="supply-chain">
                  <div>
                    <BusAlertIcon className="icon" />
                  </div>
                  <div>ODC Transportation</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain">
                  <div>
                    <CarCrashIcon className="icon" />
                  </div>
                  <div>Transportation & Logistics</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain">
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tab-red"></div>
            <div>
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Supply Chain</h4>
                <p>
                  We are pioneers in offering third party logistics and supply
                  chain management solutions to maintain the profitability of
                  your business.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Integrated Supply chain solutions
                  </li>
                  <li>
                    <DoneAllIcon /> Digital Innovations
                  </li>
                  <li>
                    <DoneAllIcon /> National Presence
                  </li>
                  <li>
                    <DoneAllIcon /> Cost-Effective Mechanism
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* commercial serve section end */}
      {/*what serve section end */}
      {/* what makes unique pms section start */}
      <div
        className="container-fluid what-unique-section clearfix
      aos-init aos-animate"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="container">
          <h2>What Makes Agarwal Packers Unique?</h2>
          <h5>We Always Deliver More Than Expected</h5>
          <div>
            <ul
              className="resp-tabs-list hor_1 clearfix parent-list owl-carousel owl-theme feature-mob 
                slider"
            >
              <li
                className="resp-tab-item hor_1 resp-tab-active"
                aria-controls="hor_1_tab_item-0"
                role="tab"
              >
                Our USP
              </li>
              <li
                className="resp-tab-item hor_1"
                aria-controls="hor_1_tab_item-1"
                role="tab"
              >
                Case Study
              </li>
              <li
                className="resp-tab-item hor_1"
                aria-controls="hor_1_tab_item-2"
                role="tab"
              >
                Advantages
              </li>
              <li
                className="resp-tab-item hor_1"
                aria-controls="hor_1_tab_item-3"
                role="tab"
              >
                Safety Features
              </li>
              <li
                className="resp-tab-item hor_1"
                aria-controls="hor_1_tab_item-4"
                role="tab"
              >
                Storage Capacity
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* our usp section start */}

      <div className="container usp-section ">
        {/* trucking tube start */}
        <div className="trucking-tube-section" id="truckingTube">
          <h2 className="trucking-h2 gap-3" role="tab" aria-controls="">
            <img
              loading="lazy"
              className="lazyload usp-img"
              src="assets/images/cube.svg"
              alt="TRUCKING CUBE"
            />
            TRUCKING CUBE
          </h2>
          <div className="row">
            <div className="col-lg-6 usp-contant">
              <div className="red-border">
                <p>
                  With the aim to revolutionize the transportation industry, we
                  have devised an out-of-the-box concept known as 'Trucking
                  Cube' (Container). It is a private space that holds your
                  valuable goods with utmost care and security. These cubes are
                  available in various sizes to address distinctive logistics
                  requirements of our clients. Furthermore, you can opt for your
                  perfect cube as per the size of your consignment and secure it
                  by putting your personalized locks.
                </p>
                <div>
                  <div className="text-danger mx-5">
                    <a href="" className=" ">
                      LEARN MORE
                    </a>
                    <ArrowCircleRightIcon className="icon" />
                  </div>
                  <div className="led-box-section" onClick={clickLed}>
                    <div className="gap-5 d-flex">
                      <p className="led-img"></p>
                      <h2 className="led-box-h2 " role="tab" aria-controls="">
                        LED BOX
                      </h2>
                    </div>
                  </div>
                  <div className="fabric-sheet-section" onClick={clickFabric}>
                    <div className="gap-5 d-flex">
                      <p className="fabric-img"></p>
                      <h2
                        className="fabric-sheet-h2 "
                        role="tab"
                        aria-controls=""
                      >
                        FABRIC SHEETS
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="trucking-cube-img">
                <img
                  src="/assets/images/agarwal-movers-packers-tc.jpg"
                  loading="lazy"
                  className="lazyload"
                  alt=""
                />
              </div>
              <div className="story">
                <div className="story-behind">
                  <a href="">
                    Story <br /> Behind it
                  </a>
                  <div>
                    <AddCircleIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* trucking tube end */}
        {/* led box start */}
        <div className="ledBox-section" id="ledBox">
          <h2 className="trucking-h2 gap-3" role="tab" aria-controls="">
            <img
              loading="lazy"
              className="lazyload usp-img"
              src="/assets/images/led-lcd-box.svg"
              alt=""
            />
            LED BOX
          </h2>

          <div className="row">
            <div className="col-lg-6 usp-contant">
              <div className="red-border">
                <p>
                  We, Agarwal Packers have incorporated specialized LCD/LED
                  screen cases in our packing material with an aim to dispose
                  off the use of wooden crates and provide double security to
                  your expensive LED/LED from any external and internal harm
                  during the transportation process. These specialized boxes are
                  fabricated using the hard structured box with extra layer of
                  foam inside to protect the delicate screen of your LED/LCD. We
                  offer customized solutions to the clients as our boxes are
                  available in different sizes of LED TV’s available in the
                  market.
                </p>
                <div>
                  <div className="text-danger mx-5">
                    <a href="" className=" ">
                      LEARN MORE
                    </a>
                    <ArrowCircleRightIcon className="icon" />
                  </div>
                  <div className="led-box-section" onClick={clickTrucking}>
                    <div className="gap-5 d-flex">
                      <p className="led-img"></p>
                      <h2 className="led-box-h2 " role="tab" aria-controls="">
                        TRUCKING CUBE
                      </h2>
                    </div>
                  </div>
                  <div className="fabric-sheet-section" onClick={clickFabric}>
                    <div className="gap-5 d-flex">
                      <p className="fabric-img"></p>
                      <h2
                        className="fabric-sheet-h2 "
                        role="tab"
                        aria-controls=""
                      >
                        FABRIC SHEETS
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="trucking-cube-img">
                <img
                  src="/assets/images/agarwal-packers-and-movers-led-box.webp"
                  loading="lazy"
                  className="lazyload"
                  alt=""
                />
              </div>
              <div className="story">
                <div className="story-behind">
                  <a href="">
                    Story <br /> Behind it
                  </a>
                  <div>
                    <AddCircleIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Led box end */}

        {/* fabric sheets start */}
        <div className="fabric-sheets-section" id="fabricSheets">
          <h2 className="trucking-h2 gap-3" role="tab" aria-controls="">
            <img
              loading="lazy"
              className="lazyload usp-img"
              src="/assets/images/led-lcd-box.svg"
              alt=""
            />
            FABRIC SHEETS
          </h2>

          <div className="row">
            <div className="col-lg-6 usp-contant">
              <div className="red-border">
                <p>
                  We, Agarwal Packers have incorporated specialized LCD/LED
                  screen cases in our packing material with an aim to dispose
                  off the use of wooden crates and provide double security to
                  your expensive LED/LED from any external and internal harm
                  during the transportation process. These specialized boxes are
                  fabricated using the hard structured box with extra layer of
                  foam inside to protect the delicate screen of your LED/LCD. We
                  offer customized solutions to the clients as our boxes are
                  available in different sizes of LED TV’s available in the
                  market.
                </p>
                <div>
                  <div className="text-danger mx-5">
                    <a href="" className=" ">
                      LEARN MORE
                    </a>
                    <ArrowCircleRightIcon className="icon" />
                  </div>
                  <div className="led-box-section" onClick={clickTrucking}>
                    <div className="gap-5 d-flex">
                      <p className="led-img"></p>
                      <h2 className="led-box-h2 " role="tab" aria-controls="">
                        TRUCKING CUBE
                      </h2>
                    </div>
                  </div>
                  <div className="fabric-sheet-section" onClick={clickLed}>
                    <div className="gap-5 d-flex">
                      <p className="fabric-img"></p>
                      <h2
                        className="fabric-sheet-h2 "
                        role="tab"
                        aria-controls=""
                      >
                        LED BOX
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="trucking-cube-img">
                <img
                  src="/assets/images/agarwal-packers-and-movers-led-box.webp"
                  loading="lazy"
                  className="lazyload"
                  alt=""
                />
              </div>
              <div className="story">
                <div className="story-behind">
                  <a href="">
                    Story <br /> Behind it
                  </a>
                  <div>
                    <AddCircleIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Led box end */}
      </div>
      {/* our usp section end */}
      {/* what makes unique pms section end */}

      {/* about our company section start */}
      <div className="container-fluid about-company-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-5">
              <div className="row p-3">
                <div className="col-lg-6">
                  <div className="moving-employee">
                    <div className="employee-text">
                      <h4>
                        Moving <br />
                        your Employees?
                      </h4>
                      <p>
                        Choose our <br /> Corporate moving solutions
                      </p>
                    </div>
                    <div>
                      <a href="">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="home-removals">
                    <div className="employee-text">
                      <h4>Home Removals and Storage?</h4>
                      <p>
                        Opt for <br /> APML Warehousing and Storage
                      </p>
                    </div>
                    <div>
                      <a href="">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row p-3">
                <div className="col-lg-6">
                  <div className="need-claim">
                    <div className="employee-text">
                      <h4>
                        Need to file <br />a claim?
                      </h4>
                      <p>Get Prompt Settlement</p>
                    </div>
                    <div>
                      <a href="">Learn More</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="moving-coordinar">
                    <div className="employee-text">
                      <h4>
                        Require personal <br />
                        Moving Coordinator?
                      </h4>
                      <p>Get in touch with us!</p>
                    </div>
                    <div>
                      <a href="">Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-company-section-right p-5">
              <div>
                <img
                  src="/assets/images/agarwal-packers-nitin-gadkari-goi.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about our company section end */}
      <Footer />
    </>
  );
};

export default Home;
