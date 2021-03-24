import React from "react";
import { useTranslation } from "react-i18next";


export const Footer = () => {
    const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid" style={{ clear: "both" }}>
        <div className="row" id="footer">
          <div
            className="col-xl-3 d-xl-block col-lg-3 d-lg-block d-md-none d-sm-none"
            id="firstColInFooter"
          >
            <a>
              <img id="footerIcon" src="logo.png" />
            </a>
            <a id="footerBrand">CURAWELLA</a>
          </div>
          <div className="col-xl-3 d-xl-block col-lg-3 d-lg-block d-md-none d-sm-none">
            <p>
              <h3 style={{ float: "left" }}>{t("Follow us")}</h3>
            </p>
            <br /> <br />
            <div style={{ width: "auto" }}>
              <i className="fab fa-facebook" id="facebookIcon" />
              <i className="fab fa-linkedin-in" id="linkedInIcon" />
            </div>
          </div>

          <div className="col-xl-3 d-xl-block col-lg-3 d-lg-block d-md-none d-sm-none textleft">
            <p>
              <h3>{t("Explore")}</h3>
            </p>
            <br /> <br />
            <div id="footerLinks">
              <p>
                <a>{t("What we do?")}</a>
              </p>
              <p>
                <a>{t("Our Partners")}</a>
              </p>
              <p style={{ paddingLeft: "5%" }}>
                <a>{t("Download our apps")}</a>
              </p>
              <p>
                <a>{t("Contact US")}</a>
              </p>
            </div>
          </div>

          <div className="col-xl-3 d-xl-block col-lg-3 d-lg-block d-md-none d-sm-none">
            <p>
              <h3 style={{ float: "left" }}>{t("Download our apps")}</h3>
            </p>
            <br />
            <br />

            <div className="row">
              <div className="col-xl-6 col-12">
                <img
                  src="/images/google-play-store-button.png"
                  id="googlePlay"
                />
              </div>
              <div className="col-xl-6 col-12">
                <img src="/images/app_store_icon.png" id="googlePlay" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid" style={{ clear: "both" }}>
        <div className="row" id="footer">
          <div
            className="d-xl-none d-lg-none col-md-12 col-12"
            id="firstColInFooter"
          >
            <a>
              <img id="footerIcon" src="logo.png" />
            </a>
            <a id="footerBrand">CURAWELLA</a>
          </div>
          <div className="d-xl-none d-lg-none col-md-12 col-12">
            <p>
              <h3>{t("Follow us")}</h3>
            </p>
            <br /> <br />
            <div style={{ width: "auto" }}>
              <i className="fab fa-facebook" id="facebookIcon2" />
              <i className="fab fa-linkedin-in" id="linkedInIcon2" />
            </div>
          </div>

          <div className="d-xl-none d-lg-none col-md-12 col-12">
            <p>
              <h3>{t("Explore")}</h3>
            </p>
            <br /> <br />
            <div id="footerLinkss">
              <p>
                <a>{t("What we do?")}</a>
              </p>
              <p>
                <a>{t("Our Partners")}</a>
              </p>
              <p style={{ paddingLeft: "5%" }}>
                <a>{t("Download our apps")}</a>
              </p>
              <p>
                <a>{t("Contact US")}</a>
              </p>
            </div>
          </div>

          <div className="d-xl-none d-lg-none col-md-12 col-12">
            <p>
              <h3>{t("Download our apps")}</h3>
            </p>
            <br />
            <br />

            <div className="row">
              <div className="d-xl-none d-lg-none col-md-12 col-12">
                <img
                  src="/images/google-play-store-button.png"
                  id="googlePlay"
                />
              </div>
              <div className="d-xl-none d-lg-none col-md-12 col-12">
                <img src="/images/app_store_icon.png" id="googlePlay" />
              </div>
            </div>
          </div>
        </div>
      </div>
     */}
    </>
  );
};
