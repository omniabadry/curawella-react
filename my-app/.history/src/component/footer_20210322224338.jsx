import React from "react";

export const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row" id="footer">
        <div className="col-3" id="firstColInFooter">
          <a>
            <img id="footerIcon" src="logo.png" />
          </a>
          <a id="footerBrand">CURAWELLA</a>
        </div>
        <div className="col-3">
          <h3 style={{ float: "left" }}>Follow us</h3>
          <br /> <br />
          {/* <div style={{paddingTop: "5px" }}> */}
          <i className="fab fa-facebook" id="facebookIcon" />
          <i className="fab fa-linkedin-in" id="linkedInIcon" />
          {/* </div> */}
        </div>
        <div className="col-3" id="divLinks">
          <h3 style={{ float: "left" }}>Explore</h3>
          <br />

          <a id="footerLinks">What we do?</a>
          <br />
          <a id="footerLinks">Our Partners</a>
          <br />
          <a id="footerLinks">Download our apps</a>
          <br />
          <a id="footerLinks">Contact US</a>
        </div>
        <div className="col-3">
          <ul>
            <li>
              <h6>
                Download our apps
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </h6>
            </li>
            <div className="row">
              <div className="col-6">
                <img
                  src="/images/google-play-store-button.png"
                  id="google-play"
                />
              </div>
              <div className="col-6">
                <img src="/images/app_store_icon.png" id="google-play" />
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
