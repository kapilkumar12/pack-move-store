import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./css/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
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
// import TimelineIcon from "@mui/icons-material/Timeline";
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
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
// import $ from "jquery";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // what serve
  // const [style, setStyle] = useState(false);
  const clickDomestic = () => {
    // setStyle(!state);
    document.getElementById("domestic").style.display = "block";
    document.getElementById("commercial").style.display = "none";
  };

  const clickCommercial = () => {
    document.getElementById("domestic").style.display = "none";
    // setStyle("resp-tab-active");
    document.getElementById("commercial").style.display = "block";
  };
  // what serve end
  //  commercial move
  const clickSupply = () => {
    document.getElementById("supply").style.display = "block";
    document.getElementById("warehousing").style.display = "none";
    document.getElementById("exim").style.display = "none";
    document.getElementById("odc").style.display = "none";
    document.getElementById("logistics").style.display = "none";
    document.getElementById("infrastructure").style.display = "none";
  };

  const clickWarehousing = () => {
    document.getElementById("supply").style.display = "none";
    document.getElementById("warehousing").style.display = "block";
    document.getElementById("exim").style.display = "none";
    document.getElementById("odc").style.display = "none";
    document.getElementById("logistics").style.display = "none";
    document.getElementById("infrastructure").style.display = "none";
  };
  const clickExim = () => {
    document.getElementById("supply").style.display = "none";
    document.getElementById("warehousing").style.display = "none";
    document.getElementById("exim").style.display = "block";
    document.getElementById("odc").style.display = "none";
    document.getElementById("logistics").style.display = "none";
    document.getElementById("infrastructure").style.display = "none";
  };
  const clickOdc = () => {
    document.getElementById("supply").style.display = "none";
    document.getElementById("warehousing").style.display = "none";
    document.getElementById("exim").style.display = "none";
    document.getElementById("odc").style.display = "block";
    document.getElementById("logistics").style.display = "none";
    document.getElementById("infrastructure").style.display = "none";
  };
  const clickLogistics = () => {
    document.getElementById("supply").style.display = "none";
    document.getElementById("warehousing").style.display = "none";
    document.getElementById("exim").style.display = "none";
    document.getElementById("odc").style.display = "none";
    document.getElementById("logistics").style.display = "block";
    document.getElementById("infrastructure").style.display = "none";
  };
  const clickInfrastructure = () => {
    document.getElementById("supply").style.display = "none";
    document.getElementById("warehousing").style.display = "none";
    document.getElementById("exim").style.display = "none";
    document.getElementById("odc").style.display = "none";
    document.getElementById("logistics").style.display = "none";
    document.getElementById("infrastructure").style.display = "block";
  };

  // commercial move end
  // what make unique
  // const clickUsp = () => {
  //   document.getElementById("usp").style.display = "block";
  //   document.getElementById("study").style.display = "none";
  //   document.getElementById("advantage").style.display = "none";
  //   document.getElementById("safety").style.display = "none";
  //   document.getElementById("storage").style.display = "none";
  // };

  // const clickStudy = () => {
  //   document.getElementById("usp").style.display = "none";
  //   document.getElementById("study").style.display = "block";
  //   document.getElementById("advantage").style.display = "none";
  //   document.getElementById("safety").style.display = "none";
  //   document.getElementById("storage").style.display = "none";
  // };
  // const clickAdvatage = () => {
  //   document.getElementById("usp").style.display = "none";
  //   document.getElementById("study").style.display = "none";
  //   document.getElementById("advantage").style.display = "block";
  //   document.getElementById("safety").style.display = "none";
  //   document.getElementById("storage").style.display = "none";
  // };
  // const clickSafety = () => {
  //   document.getElementById("usp").style.display = "none";
  //   document.getElementById("study").style.display = "none";
  //   document.getElementById("advantage").style.display = "none";
  //   document.getElementById("safety").style.display = "block";
  //   document.getElementById("storage").style.display = "none";
  // };
  // const clickStorage = () => {
  //   document.getElementById("usp").style.display = "none";
  //   document.getElementById("study").style.display = "none";
  //   document.getElementById("advantage").style.display = "none";
  //   document.getElementById("safety").style.display = "none";
  //   document.getElementById("storage").style.display = "block";
  // };
  // what make unique end
  // usp click event
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
  // usp click event end

  // testimonials start
  const clickCorporate = () => {
    document.getElementById("corporate").style.display = "block";
    document.getElementById("banking").style.display = "none";
    document.getElementById("defence").style.display = "none";
    document.getElementById("iits").style.display = "none";
    document.getElementById("judicial").style.display = "none";
    document.getElementById("govt").style.display = "none";
    document.getElementById("ias").style.display = "none";
    document.getElementById("media").style.display = "none";
  };

  const clickBanking = () => {
    document.getElementById("corporate").style.display = "none";
    document.getElementById("banking").style.display = "block";
    document.getElementById("defence").style.display = "none";
    document.getElementById("iits").style.display = "none";
    document.getElementById("judicial").style.display = "none";
    document.getElementById("govt").style.display = "none";
    document.getElementById("ias").style.display = "none";
    document.getElementById("media").style.display = "none";
  };
  const clickDefence = () => {
    document.getElementById("corporate").style.display = "none";
    document.getElementById("banking").style.display = "none";
    document.getElementById("defence").style.display = "block";
    document.getElementById("iits").style.display = "none";
    document.getElementById("judicial").style.display = "none";
    document.getElementById("govt").style.display = "none";
    document.getElementById("ias").style.display = "none";
    document.getElementById("media").style.display = "none";
  };
  const clickIITs = () => {
    document.getElementById("corporate").style.display = "none";
    document.getElementById("banking").style.display = "none";
    document.getElementById("defence").style.display = "none";
    document.getElementById("iits").style.display = "block";
    document.getElementById("judicial").style.display = "none";
    document.getElementById("govt").style.display = "none";
    document.getElementById("ias").style.display = "none";
    document.getElementById("media").style.display = "none";
  };
  const clickJudicial = () => {
    document.getElementById("corporate").style.display = "none";
    document.getElementById("banking").style.display = "none";
    document.getElementById("defence").style.display = "none";
    document.getElementById("iits").style.display = "none";
    document.getElementById("judicial").style.display = "block";
    document.getElementById("govt").style.display = "none";
    document.getElementById("ias").style.display = "none";
    document.getElementById("media").style.display = "none";
  };
  const clickGovt = () => {
    document.getElementById("corporate").style.display = "none";
    document.getElementById("banking").style.display = "none";
    document.getElementById("defence").style.display = "none";
    document.getElementById("iits").style.display = "none";
    document.getElementById("judicial").style.display = "none";
    document.getElementById("govt").style.display = "block";
    document.getElementById("ias").style.display = "none";
    document.getElementById("media").style.display = "none";
  };
  const clickIas = () => {
    document.getElementById("corporate").style.display = "none";
    document.getElementById("banking").style.display = "none";
    document.getElementById("defence").style.display = "none";
    document.getElementById("iits").style.display = "none";
    document.getElementById("judicial").style.display = "none";
    document.getElementById("govt").style.display = "none";
    document.getElementById("ias").style.display = "block";
    document.getElementById("media").style.display = "none";
  };
  const clickMedia = () => {
    document.getElementById("corporate").style.display = "none";
    document.getElementById("banking").style.display = "none";
    document.getElementById("defence").style.display = "none";
    document.getElementById("iits").style.display = "none";
    document.getElementById("judicial").style.display = "none";
    document.getElementById("govt").style.display = "none";
    document.getElementById("ias").style.display = "none";
    document.getElementById("media").style.display = "block";
  };

  // testimonial end

  // features start

  const clickForbes = () => {
    document.getElementById("forbes").style.display = "block";
    document.getElementById("bw").style.display = "none";
    document.getElementById("business").style.display = "none";
    document.getElementById("hindu").style.display = "none";
    document.getElementById("ndtv").style.display = "none";
  };
  const clickBw = () => {
    document.getElementById("forbes").style.display = "none";
    document.getElementById("bw").style.display = "block";
    document.getElementById("business").style.display = "none";
    document.getElementById("hindu").style.display = "none";
    document.getElementById("ndtv").style.display = "none";
  };
  const clickBusiness = () => {
    document.getElementById("forbes").style.display = "none";
    document.getElementById("bw").style.display = "none";
    document.getElementById("business").style.display = "block";
    document.getElementById("hindu").style.display = "none";
    document.getElementById("ndtv").style.display = "none";
  };
  const clickHindu = () => {
    document.getElementById("forbes").style.display = "none";
    document.getElementById("bw").style.display = "none";
    document.getElementById("business").style.display = "none";
    document.getElementById("hindu").style.display = "block";
    document.getElementById("ndtv").style.display = "none";
  };
  const clickNdtv = () => {
    document.getElementById("forbes").style.display = "none";
    document.getElementById("bw").style.display = "none";
    document.getElementById("business").style.display = "none";
    document.getElementById("hindu").style.display = "none";
    document.getElementById("ndtv").style.display = "block";
  };

  // features end
  return (
    <>
      <Header />
      {/* hero section start */}
      <div
        className="container-fluid fbanner bg-dark text-light"
        data-aos="fade-right"
      >
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
      <div
        className="container-fluid about-content bg-dark text-white"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row about-section">
            {/* <div className="col-lg-6 p-5" id="pmsl"> */}
            <div className=" p-5" id="pmsl">
              <h3 className="text-danger">Pack Move & Store LTD.</h3>
              {/* <h6>An ISO 9001:2015 & ISO 39001:2012 Certified Company</h6> */}
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
                <p>
                  Introduced a one stop solution for hassle free service “Pack,
                  Move & Store” in your metro city New Delhi, Bangalore, Mumbai,
                  Kolkata, Keeping in mind the urge of quick and responsiveness
                  expected from a moving company
                </p>
                <a href="" className="">
                  Read More
                </a>
              </div>

              {/* <div className="pt-3">
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
              </div> */}
            </div>
            {/* <div className="col-lg-3 p-5 shadow  bg-body rounded">
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
            </div> */}
          </div>
        </div>
        <hr />
      </div>
      {/* about section end */}
      {/*what serve section start */}
      <div
        className="container-fluid serve-section bg-dark text-white"
        data-aos="fade-right"
      >
        <div className="row text-center">
          <div>
            <h2>What We're Serve to</h2>
          </div>
          <div>
            <ul className="d-flex justify-content-center gap-5 aos-init aos-animate resp-tabs-list">
              <li
                className=" hor_1 resp-tab-item domestic"
                onClick={clickDomestic}
              >
                <a>Domestic</a>
              </li>
              <li
                className=" hor_1 resp-tab-item  commercial"
                id="Commercial"
                onClick={clickCommercial}
              >
                <a>Commercial</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* domestic serve section start */}
      <div
        className="container-fluid domestic-section commercial-section bg-dark text-light"
        id="domestic"
      >
        <div className="text-center ">
          <h2>Domestic Moving</h2>
          <p className="csp">
            Agarwal Packers and Movers Ltd. offers unrivaled domestic relocation
            services as per your specific requirements. We make sure that your
            household shifting to and from any corner of India is absolutely
            hassle-free by deploying our distinctive and brilliant moving
            techniques.
          </p>
        </div>
        <hr />
        {/* <div className="row text-center">
          <div className="col-lg-6 ">
            <div className="row commercial-two">
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickSupply}>
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Supply Chain</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickWarehousing}>
                  <div>
                    <DomainAddIcon className="icon" />
                  </div>
                  <div>Warehousing</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickExim}>
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Exim Cargo</div>
                </div>
              </div>
            </div>
            <div className="row commercial-two">
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickOdc}>
                  <div>
                    <BusAlertIcon className="icon" />
                  </div>
                  <div>ODC Transportation</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickLogistics}>
                  <div>
                    <CarCrashIcon className="icon" />
                  </div>
                  <div>Transportation & Logistics</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickInfrastructure}>
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tab-red"></div> */}
        {/* supply chain section start */}
        {/* <div id="supply" data-aos="fade-left">
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
            </div> */}
        {/* supply chain section end */}
        {/* warehousing section start */}
        {/* <div id="warehousing" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Warehousing</h4>
                <p>
                  By understanding your storage related needs, we provide
                  A-Grade (box) warehousing services including predominantly
                  transportation and distribution facilities.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Customizable to client’s needs
                  </li>
                  <li>
                    <DoneAllIcon /> Round the Clock Security
                  </li>
                  <li>
                    <DoneAllIcon /> Clean and Temperature Controlled Storages
                  </li>
                  <li>
                    <DoneAllIcon /> Automated Networks
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* warehousing section end */}
        {/* exim cargo section start */}
        {/* <div id="exim" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Exim Cargo</h4>
                <p>
                  We are committed to provide you with comprehensive and high
                  tech export-import solutions using our innovative technology.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Improvement in Operational Efficiency
                  </li>
                  <li>
                    <DoneAllIcon /> Maximizes Visibility of Data Processing
                  </li>
                  <li>
                    <DoneAllIcon /> Upgradation in Custom Processes
                  </li>
                  <li>
                    <DoneAllIcon /> Reduction in Cost
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* exim cargo section end */}
        {/* odc transportion section start */}
        {/* <div id="odc" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>ODC Transportation</h4>
                <p>
                  Owning the huge fleet of GPS enabled vehicles and best
                  handlers of ODC, we provide progressive relocation services to
                  our patrons at budget friendly prices.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Single-Window Service
                  </li>
                  <li>
                    <DoneAllIcon /> Different Size Of Trailers
                  </li>
                  <li>
                    <DoneAllIcon /> Damage-Free Transportation
                  </li>
                  <li>
                    <DoneAllIcon /> Assistance For Route Survey
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* odc transportation section end */}
        {/* transportation and logistics section start */}
        {/* <div id="logistics" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Transportation & Logistics</h4>
                <p>
                  In order to meet your business’ transportation requirements,
                  we are the one-stop solution to perform your day-to day
                  logistics and transportation services efficiently.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Integrated Techniques
                  </li>
                  <li>
                    <DoneAllIcon /> Safe and Secured Shifting
                  </li>
                  <li>
                    <DoneAllIcon /> Value-Added Benefits
                  </li>
                  <li>
                    <DoneAllIcon /> Sustainable Commitments
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* transporation and logistics section end */}
        {/* infrastructure section start */}
        {/* <div id="infrastructure" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Infrastructure</h4>
                <p>
                  We provide you with the top-of-the-line infrastructure and
                  roofing solutions which are advanced, seamless and integrated.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Voluminous
                  </li>
                  <li>
                    <DoneAllIcon /> Self-Supported
                  </li>
                  <li>
                    <DoneAllIcon /> Damage & Corrosion resistant
                  </li>
                  <li>
                    <DoneAllIcon /> User Friendly
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* infrastructure section end */}
        {/* </div>
        </div> */}
      </div>
      {/* domestic serve section end */}

      {/* commercial serve section start */}
      <div
        className="container-fluid bg-dark text-light commercial-section"
        id="commercial"
        data-aos="fade-left"
      >
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
        <hr />
        {/* <div className="row text-center">
          <div className="col-lg-6 ">
            <div className="row commercial-two">
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickSupply}>
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Supply Chain</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickWarehousing}>
                  <div>
                    <DomainAddIcon className="icon" />
                  </div>
                  <div>Warehousing</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickExim}>
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Exim Cargo</div>
                </div>
              </div>
            </div>
            <div className="row commercial-two">
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickOdc}>
                  <div>
                    <BusAlertIcon className="icon" />
                  </div>
                  <div>ODC Transportation</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickLogistics}>
                  <div>
                    <CarCrashIcon className="icon" />
                  </div>
                  <div>Transportation & Logistics</div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="supply-chain" onClick={clickInfrastructure}>
                  <div>
                    <LocalShippingIcon className="icon" />
                  </div>
                  <div>Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tab-red"></div> */}
        {/* supply chain section start */}
        {/* <div id="supply" data-aos="fade-left">
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
            </div> */}
        {/* supply chain section end */}
        {/* warehousing section start */}
        {/* <div id="warehousing" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Warehousing</h4>
                <p>
                  By understanding your storage related needs, we provide
                  A-Grade (box) warehousing services including predominantly
                  transportation and distribution facilities.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Customizable to client’s needs
                  </li>
                  <li>
                    <DoneAllIcon /> Round the Clock Security
                  </li>
                  <li>
                    <DoneAllIcon /> Clean and Temperature Controlled Storages
                  </li>
                  <li>
                    <DoneAllIcon /> Automated Networks
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* warehousing section end */}
        {/* exim cargo section start */}
        {/* <div id="exim" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Exim Cargo</h4>
                <p>
                  We are committed to provide you with comprehensive and high
                  tech export-import solutions using our innovative technology.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Improvement in Operational Efficiency
                  </li>
                  <li>
                    <DoneAllIcon /> Maximizes Visibility of Data Processing
                  </li>
                  <li>
                    <DoneAllIcon /> Upgradation in Custom Processes
                  </li>
                  <li>
                    <DoneAllIcon /> Reduction in Cost
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* exim cargo section end */}
        {/* odc transportion section start */}
        {/* <div id="odc" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>ODC Transportation</h4>
                <p>
                  Owning the huge fleet of GPS enabled vehicles and best
                  handlers of ODC, we provide progressive relocation services to
                  our patrons at budget friendly prices.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Single-Window Service
                  </li>
                  <li>
                    <DoneAllIcon /> Different Size Of Trailers
                  </li>
                  <li>
                    <DoneAllIcon /> Damage-Free Transportation
                  </li>
                  <li>
                    <DoneAllIcon /> Assistance For Route Survey
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* odc transportation section end */}
        {/* transportation and logistics section start */}
        {/* <div id="logistics" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Transportation & Logistics</h4>
                <p>
                  In order to meet your business’ transportation requirements,
                  we are the one-stop solution to perform your day-to day
                  logistics and transportation services efficiently.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Integrated Techniques
                  </li>
                  <li>
                    <DoneAllIcon /> Safe and Secured Shifting
                  </li>
                  <li>
                    <DoneAllIcon /> Value-Added Benefits
                  </li>
                  <li>
                    <DoneAllIcon /> Sustainable Commitments
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* transporation and logistics section end */}
        {/* infrastructure section start */}
        {/* <div id="infrastructure" data-aos="fade-left">
              <div className="tab-image">
                <img
                  src="/assets/images/agarwal_packers_and_movers_mumbai.jpg"
                  loading="lazy"
                  className="animated zoomIn lazyload"
                  alt=""
                />
              </div>
              <div className="red-layer wow slideInRight animated animated">
                <h4>Infrastructure</h4>
                <p>
                  We provide you with the top-of-the-line infrastructure and
                  roofing solutions which are advanced, seamless and integrated.
                </p>
                <ul>
                  <li>
                    <DoneAllIcon /> Voluminous
                  </li>
                  <li>
                    <DoneAllIcon /> Self-Supported
                  </li>
                  <li>
                    <DoneAllIcon /> Damage & Corrosion resistant
                  </li>
                  <li>
                    <DoneAllIcon /> User Friendly
                  </li>
                </ul>

                <button type="button" className="btn btn-outline-light">
                  Secondary
                </button>
              </div>
            </div> */}
        {/* infrastructure section end */}
        {/* </div>
        </div> */}
      </div>
      {/* commercial serve section end */}
      {/*what serve section end */}
      {/* what makes unique pms section start */}
      <div
        className="container-fluid what-unique-section bg-dark text-light clearfix
      aos-init aos-animate"
        data-aos="fade-up"
      >
        <div className="container">
          <h2>What Makes PMS Packers Unique?</h2>
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
                // onClick={clickUsp}
              >
                Our USP
              </li>
              <li
                className="resp-tab-item hor_1"
                aria-controls="hor_1_tab_item-1"
                role="tab"
                // onClick={clickStudy}
              >
                Case Study
              </li>
              <li
                className="resp-tab-item hor_1"
                aria-controls="hor_1_tab_item-2"
                role="tab"
                // onClick={clickAdvatage}
              >
                Advantages
              </li>
              <li
                className="resp-tab-item hor_1"
                aria-controls="hor_1_tab_item-3"
                role="tab"
                // onClick={clickSafety}
              >
                Safety Features
              </li>
              <li
                className="resp-tab-item hor_1"
                aria-controls="hor_1_tab_item-4"
                role="tab"
                // onClick={clickStorage}
              >
                Storage Capacity
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* our usp section start */}

      <div
        className="container-fluid bg-dark text-light usp-section "
        id="usp"
        data-aos="fade-down"
      >
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

      {/* case study start */}
      {/* <div className="container usp-section " id="study">
        <div className="trucking-tube-section" id="truckingTube">
          <h2 className="trucking-h2 gap-3" role="tab" aria-controls="">
            <img
              loading="lazy"
              className="lazyload usp-img"
              src="assets/images/iim-ahmedabad.jpg"
              alt="TRUCKING CUBE"
            />
            IIM Ahmedabad
          </h2>
          <div className="row">
            <div className="col-lg-6 usp-contant">
              <div className="red-border">
                <p>
                  Over time, the company grew with experience, core competence,
                  and confidence and established itself as one of the India's
                  largest household transportation companies. The company’s name
                  was soon changed to Agarwal Packers and Movers Limited. It had
                  a fleet of over 1,000 vehicles, 80 company-owned offices with
                  headquarters in New Delhi. It was an ISO 9001-2008 certified
                  organization with a turnover value of over INR 3,820 million
                  in 2013-14 and aspired to reach INR 20,000 million by the year
                  2020. It employed 1,173 employees at payroll with more than
                  4,000 people attached indirectly with the company. It was
                  amongst the only four companies in India to be certified by
                  ISO 39001:2012, which attested their contributions in road
                  traffic safety. In 2012-13 APML was registered in LimcaBook of
                  Records for transporting household goods of 61,302 clients.
                  The core values of APML were Aastha, Apnapan, Awesome,
                  Aspiration, and Assurance.
                </p>
                <div className="mt-5"></div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="trucking-cube-img">
                <img
                  src="assets/images/packing-and-moving.webp"
                  loading="lazy"
                  className="lazyload"
                  alt=""
                />
              </div>
              <div className="story">
                <div className="story-behind">
                  <a href="">Read More</a>
                  <div>
                    <AddCircleIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* case study section end */}
      {/* Advantages section start */}
      {/* <div className="container usp-section " id="advantage">
        <div className="trucking-tube-section" id="truckingTube">
          <h2 className="trucking-h2 gap-3" role="tab" aria-controls="">
            <img
              loading="lazy"
              className="lazyload usp-img"
              src="assets/images/advantage.svg"
              alt="TRUCKING CUBE"
            />
            Some of our advantages involve:
          </h2>
          <div className="row">
            <div className="col-lg-6 usp-contant">
              <div className="red-border">
                <p>
                  With our technology driven shifting solutions, we strive to
                  turn your hectic process of moving into a hassle free affair.
                  From packing of goods at the origin to unpacking at the
                  customer’s premises, we provide complete moving solutions
                  ensuring extreme care and security. Amongst the various
                  benefits offered by us, some of them namely are:
                </p>
                <div className="advantages">
                  <ul>
                    <li>World-class packaging material</li>
                    <li>Availability of 24*7 customer support</li>
                    <li>GPS enabled Transportation vehicles</li>
                    <li>Immediate settlement of claims</li>
                  </ul>
                </div>
                <div className="mt-5"></div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="trucking-cube-img">
                <img
                  src="assets/images/agarwal-movers-packers-advantages.webp"
                  loading="lazy"
                  className="lazyload"
                  alt=""
                />
              </div>
              <div className="story">
                <div className="story-behind">
                  <a href="">Read More</a>
                  <div>
                    <AddCircleIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Advantages section end */}
      {/* Safety features  section start */}
      {/* <div className="container usp-section " id="safety">
        <div className="trucking-tube-section" id="truckingTube">
          <h2 className="trucking-h2 gap-3" role="tab" aria-controls="">
            <img
              loading="lazy"
              className="lazyload usp-img"
              src="assets/images/security-icon.jpg"
              alt=""
            />
            Safety Belts
          </h2>
          <div className="row">
            <div className="col-lg-6 usp-contant">
              <div className="red-border">
                <div className="safety-belts">
                  <ul>
                    <li>
                      We have standby trucks and security supervisors at various
                      locations to handle any kind of exigencies and also ensure
                      tamper-proof sealing and locking of the consignment while
                      in transit.
                    </li>
                    <li>
                      We also provide our clients with the facility of using
                      their personal locks.
                    </li>
                    <li>
                      We ensure that the goods moved are protected properly
                      against rain, dust, sun, water and pilferage
                      possibilities.
                    </li>
                    <li>
                      Our personnel take adequate safety measures to ensure
                      there is no damage to the goods from the bolts, angles and
                      other vehicle accessories while loading and unloading.
                    </li>
                    <li>
                      In addition, we also provide our customers with a total
                      risk-free (FOV) cover (under section 11 of carrier Act)
                      against their consignment, in case of claims they are
                      settled within 21 days.
                    </li>
                    <li>
                      We have belt system in our trucks which fixes the goods at
                      top of the vehicle and hence, there is no movement of the
                      goods and leads to unbreakable and safe transportation.
                    </li>
                  </ul>
                </div>
                <div className="mt-5"></div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="trucking-cube-img">
                <img
                  src="assets/images/agarwal-movers-packers-safety-belts.webp"
                  loading="lazy"
                  className="lazyload"
                  alt=""
                />
              </div>
              <div className="story">
                <div className="story-behind">
                  <a href="">Read More</a>
                  <div>
                    <AddCircleIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Safety features section end */}
      {/* Storage capacity section start */}
      {/* <div className="container usp-section " id="storage">
        <div className="trucking-tube-section" id="truckingTube">
          <h2 className="trucking-h2 gap-3" role="tab" aria-controls="">
            <img
              loading="lazy"
              className="lazyload usp-img"
              src="assets/images/storage_img.jpg"
              alt=""
            />
            Storage Capacity
          </h2>
          <div className="row">
            <div className="col-lg-6 usp-contant">
              <div className="red-border">
                <p>
                  APML possess well-maintained, fumigated and secure warehousing
                  facilities for ensuring smooth transition of goods from one
                  location to another. Providing safe storage space to the
                  valuable belongings till these are delivered, our well managed
                  services are made available for all places that are supported
                  by our branch/network. For longer duration, we also provide
                  the warehousing services on a fixed rent on monthly/
                  fortnightly or weekly basis as required by the customers. This
                  provides our customers, ease of reclaiming their consignment
                  as per their time schedules. The secure surroundings of the
                  warehouse from both inside and outside assure clients about
                  complete safety of the shipped products.
                </p>
                <div className="mt-5"></div>
              </div>
            </div>
            <div className="col-lg-6 ">
              <div className="trucking-cube-img">
                <img
                  src="assets/images/agarwal-packers-storage-service.webp"
                  loading="lazy"
                  className="lazyload"
                  alt=""
                />
              </div>
              <div className="story">
                <div className="story-behind">
                  <a href="">Read More</a>
                  <div>
                    <AddCircleIcon className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Storage capacity section end */}
      {/* what makes unique pms section end */}

      {/* about our company section start */}
      {/* <div className="container-fluid about-company-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-5" data-aos="fade-left">
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
            </div> */}
      {/* // company award event section start */}
      {/* <div
              className="col-lg-6 about-company-section-right p-5"
              data-aos="fade-right"
            >
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div>
                      <img
                        src="/assets/images/agarwal-packers-nitin-gadkari-goi.webp"
                        alt=""
                      />
                    </div>
                    <div className="awards-slider">
                      <div>
                        <h5>Awards & Events</h5>
                        <p>
                          New Delhi, Shri Nitin Gadkari (Hon’ble, Minister of
                          Road Transport and Highways of India) in discussion
                          with Mr. Ramesh Agarwal (Mentor, APML) on major issues
                          for the betterment of truck drivers of India.
                        </p>
                        <div className="d-flex justify-content-between">
                          <a href="">READ MORE</a>
                          <div>
                            <ArrowCircleLeftIcon
                             
                              type="button"
                              data-bs-target="#carouselExampleControls"
                              data-bs-slide="prev"
                            />
                            <ArrowCircleRightIcon
                            
                              type="button"
                              data-bs-target="#carouselExampleControls"
                              data-bs-slide="next"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div>
                      <img
                        src="/assets/images/agarwal-packers-nitin-gadkari-goi.webp"
                        alt=""
                      />
                    </div>
                    <div className="awards-slider">
                      <div>
                        <h5>Awards & Events</h5>
                        <p>
                          New Delhi, Shri Nitin Gadkari (Hon’ble, Minister of
                          Road Transport and Highways of India) in discussion
                          with Mr. Ramesh Agarwal (Mentor, APML) on major issues
                          for the betterment of truck drivers of India.
                        </p>
                        <div className="d-flex justify-content-between">
                          <a href="">READ MORE</a>
                          <div>
                            <ArrowCircleLeftIcon
                             
                              type="button"
                              data-bs-target="#carouselExampleControls"
                              data-bs-slide="prev"
                            />
                            <ArrowCircleRightIcon
                             
                              type="button"
                              data-bs-target="#carouselExampleControls"
                              data-bs-slide="next"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div>
                      <img
                        src="/assets/images/agarwal-packers-nitin-gadkari-goi.webp"
                        alt=""
                      />
                    </div>
                    <div className="awards-slider">
                      <div>
                        <h5>Awards & Events</h5>
                        <p>
                          New Delhi, Shri Nitin Gadkari (Hon’ble, Minister of
                          Road Transport and Highways of India) in discussion
                          with Mr. Ramesh Agarwal (Mentor, APML) on major issues
                          for the betterment of truck drivers of India.
                        </p>
                        <div className="d-flex justify-content-between">
                          <a href="">READ MORE</a>
                          <div>
                            <ArrowCircleLeftIcon
                             
                              type="button"
                              data-bs-target="#carouselExampleControls"
                              data-bs-slide="prev"
                            />
                            <ArrowCircleRightIcon
                             
                              type="button"
                              data-bs-target="#carouselExampleControls"
                              data-bs-slide="next"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

      {/* // company award event section end*/}
      {/* </div>
        </div> */}
      {/* </div> */}
      {/* about our company section end */}

      {/* our testimonial section start  */}
      <div
        className="container-fluid bg-dark text-light p-5"
        data-aos="fade-up"
      >
        <div className="text-center">
          <h4>Our Testimonials</h4>
          <div className="testimonial-line"></div>
        </div>
        <div className="container">
          <div className="row testimonial-row">
            <div className="col-lg-4">
              <div className="row">
                <div className="text-center testimonial-box ">
                  <div>
                    <img
                      src="assets/images/E_Sreedharan.jpg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>Mr. E. Sreedharan</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 testimonial-first">
              <div className="row">
                <div className="text-center testimonial-box">
                  <div>
                    <img
                      src="assets/images/E_Sreedharan.jpg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>Mr. E. Sreedharan</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 testimonial-first">
              <div className="row">
                <div className="text-center testimonial-box">
                  <div>
                    <img
                      src="assets/images/E_Sreedharan.jpg"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>Mr. E. Sreedharan</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
              </div>
            </div>
            {/* corporate section start */}
            {/* <div className="corporate-section" id="corporate">
              <div className="">
                <img src="/assets/images/hash_img.png" alt="" />
              </div>

              <div className="">
                <div className="client-text">
                  <h4>Direct from client</h4>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
                <div className="client-details">
                  <div>
                    <img src="assets/images/E_Sreedharan.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Mr. E. Sreedharan</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* corporate section end */}
            {/* banking & financesection start */}
            {/* <div className="corporate-section" id="banking">
              <div className="">
                <img src="/assets/images/hash_img.png" alt="" />
              </div>

              <div className="">
                <div className="client-text">
                  <h4>Direct from client</h4>
                  <p>
                    In one word – it was excellent and I was very surprised with
                    the packing technique they used. I’ll rate them 10 out of 10
                    and I have been referring their services to lot of my
                    friends and they are equally satisfied.
                  </p>
                </div>
                <div className="client-details">
                  <div>
                    <img src="assets/images/E_Sreedharan.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Mr. Sunil Srivastava</h5>
                    <p>
                      Dy. Managing Director <br /> State Bank of India
                      <br />
                      <b>Relocated from Mumbai to Ranchi</b>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* banking & finance section end */}
            {/* Defence Officers section start */}
            {/* <div className="corporate-section" id="defence">
              <div className="">
                <img src="/assets/images/hash_img.png" alt="" />
              </div>

              <div className="">
                <div className="client-text">
                  <h4>Direct from client</h4>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
                <div className="client-details">
                  <div>
                    <img src="assets/images/E_Sreedharan.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Capt. N. S. Mohan Ram</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Defence Officers section end */}
            {/* IITs/Education section start */}
            {/* <div className="corporate-section" id="iits">
              <div className="">
                <img src="/assets/images/hash_img.png" alt="" />
              </div>

              <div className="">
                <div className="client-text">
                  <h4>Direct from client</h4>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
                <div className="client-details">
                  <div>
                    <img src="assets/images/E_Sreedharan.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Mr. Vinayshil Gautam Founder</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* IITs/Education section end */}
            {/* Judicial Services section start */}
            {/* <div className="corporate-section" id="judicial">
              <div className="">
                <img src="/assets/images/hash_img.png" alt="" />
              </div>

              <div className="">
                <div className="client-text">
                  <h4>Direct from client</h4>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
                <div className="client-details">
                  <div>
                    <img src="assets/images/E_Sreedharan.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Justice Kurian Joseph</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Judicial Services section end */}
            {/* Govt. of India / Ministries section start */}
            {/* <div className="corporate-section" id="govt">
              <div className="">
                <img src="/assets/images/hash_img.png" alt="" />
              </div>

              <div className="">
                <div className="client-text">
                  <h4>Direct from client</h4>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
                <div className="client-details">
                  <div>
                    <img src="assets/images/E_Sreedharan.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Mr. T. N. Seshan</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Govt. of India / Ministries section end */}
            {/* IAS / IPS / IRS section start */}
            {/* <div className="corporate-section" id="ias">
              <div className="">
                <img src="/assets/images/hash_img.png" alt="" />
              </div>

              <div className="">
                <div className="client-text">
                  <h4>Direct from client</h4>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
                <div className="client-details">
                  <div>
                    <img src="assets/images/E_Sreedharan.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Mr. Ajay Kumar</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* IAS / IPS / IRS section end */}
            {/* Media & Prominent People section start */}
            {/* <div className="corporate-section" id="media">
              <div className="">
                <img src="/assets/images/hash_img.png" alt="" />
              </div>

              <div className="">
                <div className="client-text">
                  <h4>Direct from client</h4>
                  <p>
                    Your team very carefully and meticulously packed all items
                    and got them transported safely to two destinations. This is
                    to acknowledge the superb service rendered by your company.
                  </p>
                </div>
                <div className="client-details">
                  <div>
                    <img src="assets/images/E_Sreedharan.jpg" alt="" />
                  </div>
                  <div>
                    <h5>Mr. E. Sreedharan</h5>
                    <p>
                      Principal Advisor <br /> Delhi Metro Rail Corporation Ltd
                      <br />
                      <b>Relocated From New Delhi to Kerala</b>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Media & Prominent People section end */}
            {/* </div>
          <div className="col-lg-4">
            <div>
              <div className="testimonial-nav">
                <div>
                  <h5>SEGMENTS</h5>
                </div>
                <div className="testimonial-custom-nav">
                  <ul className="custom-nav">
                    <li className="d-flex  gap-2" onClick={clickCorporate}>
                      <h6>Corporate</h6>
                      <AddCircleIcon className="icon" />
                    </li>
                    <li className=" d-flex  gap-2" onClick={clickBanking}>
                      <h6>Banking & Finance</h6>
                      <AddCircleIcon className="icon" />
                    </li>
                    <li className="d-flex  gap-2" onClick={clickDefence}>
                      <h6>Defence Officers</h6>
                      <AddCircleIcon className="icon" />
                    </li>
                    <li className="d-flex  gap-2" onClick={clickIITs}>
                      <h6>IITs/Education</h6>
                      <AddCircleIcon className="icon" />
                    </li>
                    <li className=" d-flex gap-2" onClick={clickJudicial}>
                      <h6>Judicial Services</h6>
                      <AddCircleIcon className="icon" />
                    </li>
                    <li className=" d-flex gap-2" onClick={clickGovt}>
                      <h6>Govt. of India / Ministries</h6>
                      <AddCircleIcon className="icon" />
                    </li>
                    <li className=" d-flex gap-2" onClick={clickIas}>
                      <h6>IAS / IPS / IRS</h6>
                      <AddCircleIcon className="icon" />
                    </li>
                    <li className=" d-flex gap-2" onClick={clickMedia}>
                      <h6>Media & Prominent People</h6>
                      <AddCircleIcon className="icon" />
                    </li>
                  </ul>
                </div>
              </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
          <div>
            <div className="testimonial-btn">
              <button type="button" class="btn btn-primary">
                More Testimonials
              </button>
            </div>
          </div>
        </div>
        <hr />
      </div>

      {/* our testimonial section end */}

      {/* our features section start */}
      <div
        className="container-fluid bg-dark text-white features p-4"
        data-aos="fade-up"
      >
        <div className="text-center">
          <h2>Featured On</h2>
        </div>
        <div className="row row-cols-5 features-img">
          <div className="col ">
            <div onClick={clickForbes}>
              <img
                src="assets/images/forbes-india-logo.jpg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div onClick={clickBw}>
              <img
                src="assets/images/bw-business-logo.jpg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div onClick={clickBusiness}>
              <img
                src="assets/images/business-standard-logo.jpg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div onClick={clickHindu}>
              <img
                src="assets/images/the-hundu-logo.jpg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
          <div className="col">
            <div onClick={clickNdtv}>
              <img
                src="assets/images/ndtv-profit-logo.jpg"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* forbes section start */}

        <div className="text-center" id="forbes">
          <div>
            <h4>
              Agarwal Packers and Movers launches mobile apps for its customers,
              potential partners
            </h4>
          </div>
          <p>
            Agarwal Packers and Movers Limited launched two mobile applications
            last week- APML Suvidha and APML Sathi to equip its customers and
            onboard new partners, respectively.The two mobile apps were launched
            in New Delhi by Minister of Road Transport & Highways Nitin Gadkari,
            in the presence of other dignitaries, including Y.S. Malik
            (Secretary of Ministry of Road Transport & Highways) and Additional
            Secretary, NITI Aayog, Jagdish Mittal, Major General Deepak Sapra
            (SM), Lt.General V.K. Chaturvedi (AVSM), Commodore Gangesh Kumar and
            Pradeep Singhal.
          </p>
        </div>
        {/* forbes section end */}
        {/* bw businessworld section start */}

        <div className="text-center" id="bw">
          <div>
            <h4>
              APML providing Social & Economic Empowerment to Ex- Defence
              personnel through Entrepreneurial scheme.
            </h4>
          </div>
          <p>
            Ramesh Agarwal, Founder Agarwal Packers and Movers Ltd. in an
            exclusive conversation with BW Businessworld discusses how APML
            Saathi Scheme that was launched in Feb 2018 is providing social and
            economic empowerment to ex-defence servicemen through
            entrepreneuerial scheme. The initiative is taken along with Ybrant
            People and AWPO by giving 10 trucks to Ex-Serviceman.
          </p>
        </div>
        {/* bw businessworld section end */}
        {/*  business standard section start */}

        <div className="text-center" id="business">
          <div>
            <h4>
              Agarwal Packers & Movers Sets Up First International Office In
              Singapore.
            </h4>
          </div>
          <p>
            India's leading logistics player Agarwal Packers and Movers Ltd.
            (APML) has opened its first international office in Singapore to
            facilitate relocation of homes both within the country and across
            the globe. The Singapore operations would be spearheaded by Abhishek
            Raj singh who has been with the group for the last seven years
            presiding the Indternational Division, the company said in the
            statement.
          </p>
        </div>
        {/* business standard section end */}
        {/* hindu section start */}

        <div className="text-center" id="hindu">
          <div>
            <h4>
              Agarwal Packers Seeks Strategic Partner; Plans Rs. 500-Cr IPO
            </h4>
          </div>
          <p>
            Agarwal Packers and Movers Ltd, India's biggest relocation company
            by volume (83,000 relocation assignments in FY16) is seeking a
            strategic partner to sacle up its business, a company official said.
            The company, which is also a leading player in the transportation of
            high-value goods like pharmaceuticals, electronics, food products,
            is planning a Rs. 500 crore initial public offering to fund
            expansion plans, the official added.
          </p>
        </div>
        {/* hindu section end */}
        {/* ndtv section start */}

        <div className="text-center" id="ndtv">
          <div>
            <h4>Agarwal Packers scouts for strategic investor</h4>
          </div>
          <p>
            Logistics firm Agarwal Packers and Movers has said it well "very
            soon" bring on board a strategic investor after meeting certain
            revenue targets and may go for an IPO in the next three years.The
            Delhi-based company have also drawn up a Rs 650-crore investment
            plan for the next three years. "We are waiting for the topline to
            get better", the family-owned firm's Chairman Ramesh Agarwal told
            PTI when asked about capital raised plans.
          </p>
        </div>
        {/* ndtv section end */}
        <hr />
      </div>
      {/* our features section end */}

      {/* book flight section start */}
      {/* <div className="container book-flight p-5">
        <div className="text-center">
          <h2>
            Now Book Your Flights at Discounted Rates with APML Trips and Travel
          </h2>
        </div>
        <div className="text-center">
          <img
            src="assets/images/apml-flight-booking.png"
            loading="lazy"
            alt=""
          />
        </div>
      </div> */}

      {/* book flight section end */}
      <Footer />
    </>
  );
};

export default Home;
