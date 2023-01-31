import React from "react";
import "./css/footer.css";
const Footer = () => {
  return (
    <>
      {/* location section */}
      <div className="container search-location" id="search-location">
        <div className="text-start text-danger ">
          <b>Search By Location</b>
          <div className="line"></div>
        </div>

        <div className="row row-cols-5 mt-3" id="whatnew">
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
          <div className="col">Column</div>
        </div>
      </div>
      {/* location section end */}
      {/* footer section */}
      {/* first footer */}
      <div className="container-fluid footer">
        <div className="container first-footer">
          <div className="row row-cols-6 mt-3">
            <div className="col about-us">
              <h5>About Us</h5>

              <ul>
                <li>
                  <a href="">Why PMS</a>
                </li>
                <li>
                  <a href="">Our History</a>
                </li>
                <li>
                  <a href="">Strength</a>
                </li>
                <li>
                  <a href="">Our USP</a>
                </li>
                <li>
                  <a href=""> Achievements</a>
                </li>
                <li>
                  <a href="">Our TVC & Videos</a>
                </li>
                <li>
                  <a href="">News & Events</a>
                </li>
                <li>
                  <a href="">Our Advantages</a>
                </li>
                <li>
                  <a href="">Press Release</a>
                </li>
              </ul>
            </div>
            <div className="col help">
              <h5>Need Help ?</h5>
              <ul>
                <li>
                  <a href="">FAQ's</a>
                </li>
                <li>
                  <a href="">Consignment Tracking</a>
                </li>
                <li>
                  <a href="">Career</a>
                </li>
                <li>
                  <a href="">Expert Advice</a>
                </li>
                <li>
                  <a href=""> Do's or Don'ts</a>
                </li>
                <li>
                  <a href=""> Contact Us</a>
                </li>
                <li>
                  <a href="">Customer Care</a>
                </li>
                <li>
                  <a href="">Moving Tips</a>
                </li>
                <li>
                  <a href="">Site Map</a>
                </li>
                <li>
                  <a href=""> Moving Checklist</a>
                </li>
              </ul>
            </div>
            <div className="col services">
              <h5>Services</h5>
              <ul>
                <li>
                  <a href="">Domestic Moving </a>
                </li>
                <li>
                  <a href="">ODC Transportation</a>
                </li>
                <li>
                  <a href="">International Moving</a>
                </li>
                <li>
                  <a href="">Car Carriers</a>
                </li>
                <li>
                  <a href="">Transportation</a>
                </li>
                <li>
                  <a href="">IT Relocation</a>
                </li>
                <li>
                  <a href="">Air Terminal Management</a>
                </li>
                <li>
                  <a href="">Supply Chain Management</a>
                </li>
                <li>
                  <a href="">Exim Cargo</a>
                </li>
                <li>
                  <a href="">Infrastructure</a>
                </li>
                <li>
                  <a href="">Record Management</a>
                </li>
              </ul>
            </div>
            <div className="col services">
              <h5>Secure Storage</h5>
              <ul>
                <li>
                  <a href="">Warehouse</a>
                </li>
                <li>
                  <a href="">Home Storage</a>
                </li>
              </ul>
            </div>

            <div className="col services">
              <h5>Other Links</h5>
              <ul>
                <li>
                  <a href="">Shifting Process</a>
                </li>
                <li>
                  <a href=""> CSR</a>
                </li>
                <li>
                  <a href="">Customer Feedback</a>
                </li>
                <li>
                  <a href="">Safety Features</a>
                </li>
                <li>
                  <a href="">Locations</a>
                </li>
                <li>
                  <a href="">Investors</a>
                </li>
              </ul>
            </div>
            <div className="col call-us">
              <h6>Moving Or Storage ? Call Us</h6>
              <div>
                <a className="dwnld_br" href="" target="_new">
                  Corporate Brochure
                  <i className="fa-solid fa-file-pdf"></i>
                </a>
              </div>
              <div>
                <p>We Accept All</p>
                <img
                  src="/assets/images/apml-icon.svg"
                  loading="lazy"
                  className="lazyload"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* first footer end */}

      {/* second footer */}
      <div className="container-fluid second-footer">
        <div className="container ">
          <div className="row row-cols-2 mt-3">
            <div className="col">
              <div className="copy-right">
                <p>© PACK MOVE STORE LTD. All Rights Reserved</p>
              </div>
            </div>
            <div className="col">
              <div className="footer-links d-flex gap-4">
                <ul className="links d-flex gap-2">
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>|</li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-square-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-instagram"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-square-youtube"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* second footer end*/}
      {/* footer section end */}
      {/* new modal */}
      <div className="what-new">
        <a
          href=""
          aria-label="What's New"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          What's New
        </a>
      </div>

      <div
        className="offcanvas offcanvas-end newpop"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
        </div>
        <div className="offcanvas-body">...</div>
      </div>
      {/* new modal end */}
    </>
  );
};

export default Footer;
