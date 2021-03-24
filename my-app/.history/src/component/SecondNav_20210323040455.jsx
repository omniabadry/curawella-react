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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
          <div className="navbar-nav">
            <a
              className="nav-link active"
              style={{ padding: "10px 25px" }}
            >
              {t("All")} <span className="sr-only">({t("current")})</span>
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              {t("General Practitioner")}
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              {t("Specialist")}
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              {t("Assistant Lecture")}
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              {t("Consultant")}
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              {t("Lecturer")}
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              {t("Assistant professor")}
            </a>
            <a className="nav-link" style={{ padding: "10px 25px" }} href="#">
              {t("Professor")}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
