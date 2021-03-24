import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const SecondNav = () => {
  const { t } = useTranslation();
  const history = useHistory();
  //   const handleToWebDiv = () => {
  //     history.push("/WebDiv");
  //   };
  return (
    <>
      <div
        className="container-fluid"
        style={{
          paddingLeft: "2.5%",
          paddingRight: "2.5%",
        }}
      >
        <div
          className="container-fluid"
          style={{
            paddingLeft: "2.5%",
            paddingRight: "2.5%",
            backgroundColor: "white",
          }}
        >
          <div
            className="container-fluid"
            style={{
              paddingLeft: "2.5%",
              paddingRight: "2.5%",
            }}
          >
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className=" row navbar-nav">
                  <div className="col-1"></div>
                  <div className="col-1">
                    <a
                      className="nav-link active"
                      style={{ padding: "10px 25px", color: "white" }}
                    >
                      {t("All")}{" "}
                      <span className="sr-only">({t("current")})</span>
                    </a>
                  </div>

                  <div className="col-1">
                    <a
                      className="nav-link"
                      style={{ padding: "10px 25px" }}
                      href="#"
                    >
                      {t("General Practitioner")}
                    </a>
                  </div>

                  <div className="col-1">
                  <a
                    className="nav-link"
                    style={{ padding: "10px 25px" }}
                    href="#"
                  >
                    {t("Specialist")}
                  </a>
</div>

                  <div className="col-1">
                  <a
                    className="nav-link"
                    style={{ padding: "10px 25px" }}
                    href="#"
                  >
                    {t("Assistant Lecture")}
                  </a>
</div>

                  <div className="col-1">
                  <a
                    className="nav-link"
                    style={{ padding: "10px 25px" }}
                    href="#"
                  >
                    {t("Consultant")}
                  </a>
</div>

                  <div className="col-1">
                  <a
                    className="nav-link"
                    style={{ padding: "10px 25px" }}
                    href="#"
                  >
                    {t("Lecturer")}
                  </a>
</div>

                  <div className="col-1">
                  <a
                    className="nav-link"
                    style={{ padding: "10px 25px" }}
                    href="#"
                  >
                    {t("Assistant professor")}
                  </a>
                  </div>

                  <div className="col-1">
                  <a
                    className="nav-link"
                    style={{ padding: "10px 25px" }}
                    href="#"
                  >
                    {t("Professor")}
                  </a>
                </div>

                                  <div className="col-1">
</div>

                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
