import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PhoneIcon from "@mui/icons-material/Phone";
import PlaceIcon from "@mui/icons-material/Place";
import MenuIcon from "@mui/icons-material/Menu";
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import "./css/header.css";
const Header = () => {
  const useStyles = makeStyles((theme) => ({
    avatar: {
      backgroundColor: theme.palette.grey[50],
      border: `1px solid ${theme.palette.info.main}`,
      color: theme.palette.info.main,
    },
  }));
  const classes = useStyles();

  // const select = (el, all = false) => {
  //   el = el.trim();,
  //   if (all) {
  //     return [...document.querySelectorAll(el)];
  //   } else {
  //     return document.querySelector(el);
  //   }
  // };
  // let backtotop = select(".back-to-top");
  // if (backtotop) {
  //   const toggleBacktotop = () => {
  //     if (window.scrollY > 100) {
  //       backtotop.classList.add("active");
  //     } else {
  //       backtotop.classList.remove("active");
  //     }
  //   };
  //   window.addEventListener("load", toggleBacktotop);
  //   document.addEventListener("scroll", toggleBacktotop);
  // }
  return (
    <>
      <header className="container-fluid header-section" id="header">
        {/* header top start*/}
        <div className="">
          <div className="container-fluid header-top">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-9">
                <ul className="header-links mt-3">
                  <li>
                    <a href="">
                      <i className="fa-solid fa-house"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">Online Payment</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">Customer Care</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">Shifting Process</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">Tracking Cube</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">CSR</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">FAQ's</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">Beware Of Fake</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">Our USPs</a>
                  </li>
                  <li>|</li>

                  <li>
                    <a href="">Worldwide Presence</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* haeder top end */}
      {/* header bottom start */}

      <div className="container-fluid header-bottom nav-fixed p-3">
        <div className="container header-inner">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-7">
              <div className="row ">
                <div className="col-lg-8">
                  <div className="d-flex gap-3 call-section">
                    <div className="mt-3">
                      <Avatar className={classes.avatar}>
                        <PhoneIcon />
                      </Avatar>
                    </div>
                    <div className="text-danger telnumber text-start">
                      <a href="tel:0123456789">
                        <span>0123456789</span>
                      </a>
                      <p>
                        Shifting Domestic <br />& International
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex gap-3 track-section mt-2">
                    <div className="mt-1">
                      <Avatar className={classes.avatar}>
                        <PlaceIcon />
                      </Avatar>
                    </div>
                    <div className="text-danger telnumber text-start">
                      <b>Track Your</b>
                      <p>Consigment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-flex gap-3 mt-2">
                <div>
                  <img
                    src="/assets/images/indianflag.png"
                    className="indianflag lazyload"
                    loading="lazy"
                    alt=""
                  />
                </div>
                <div>
                  <select className="border-0" name="countries" id="countries">
                    <option value="india">India</option>
                    <option value="uae">UAE</option>
                    <option value="dubai">Dubai</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* main menu */}
        <div className="row">
          <div className="main-header-menu">
            <nav className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-9 main-header-nav ">
                <ul className="header-links mt-3">
                  <li className="dropdown ">
                    <a href="">Profile</a>
                    <div className="dropdown-content text-danger">hover</div>
                  </li>

                  <li>
                    <a href="">Why Pack Move Store</a>
                  </li>

                  <li>
                    <a href="">Services</a>
                  </li>

                  <li>
                    <a href="">Shifting Process</a>
                  </li>

                  <li>
                    <a href="">International Moving</a>
                  </li>

                  <li>
                    <a href="">Storage</a>
                  </li>

                  <li>
                    <a href="">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-1 menuicon">
                <a href="">
                  <MenuIcon className="icon text-dark icon-large" />
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* main menu */}
      </div>
      {/* top-down */}
      {/* <a
        href="#header"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <KeyboardDoubleArrowUpIcon />
      </a> */}
    </>
  );
};

export default Header;
