import React from 'react'

export const footer = () => {
    return (
     <div className="container">
  <div className="row" id="footer">
    <div className="col-3" id="firstColInFooter">
      <a><img id="footerIcon" src="logo.png" />
      </a>
      <a id="footerBrand">CURAWELLA</a>
    </div>
    <div className="col-3">
      <ul>
        <li>
          <h6>Follow us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h6>
          <div>
            <i className="fab fa-facebook" id="facebookIcon" />
            <i className="fab fa-linkedin-in" id="linkedInIcon" />
          </div>
        </li>
      </ul>
    </div>
    <div className="col-3" id="divLinks">
      <ul>
        <li>
          <h6>Explore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h6>
        </li>
        <a id="footerLinks">What we do?</a>
        <br />
        <a id="footerLinks">Our Partners</a>
        <br />
        <a id="footerLinks">Download our apps</a>
        <br />
        <a id="footerLinks">Contact US</a>
      </ul>
    </div>
    <div className="col-3">
      <ul>
        <li>
          <h6>Download our apps &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </h6>
        </li>
        <div className="row">
          <div className="col-6">
            <img src="google-play-store-button.png" id="google-play" />
          </div>
          <div className="col-6">
            <img src="app_store_icon.png" id="google-play" />
          </div>
        </div>
      </ul>
    </div>
  </div>
</div>

    )
}
