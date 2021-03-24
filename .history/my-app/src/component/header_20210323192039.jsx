import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CustomSelect } from "./customSelect";
import { changeLang } from "./redux/actions";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();

  const [langConvert, setLangConvert] = useState(false);

   const dispatch = useDispatch();
   const lang = useSelector((state) => state.langState.locale);
   const convertLang = (selectedOption) => {
     const { value, isRTL } = selectedOption;
     if (lang === value) {
       return;
     }
     setLangConvert(true);
     const promise = new Promise((resolve) => {
       resolve(dispatch(changeLang(value, isRTL)));
     });
     promise.then(() => window.location.reload());
   };

   const languagesOptions = [
     { value: "en", label: "English", isRTL: false },
     { value: "ar", label: "عربي", isRTL: true },
   ];

  return (
    <div id="divNavbar">
      <nav
        className="navbar navbar-expand-md bg-light navbar-light"
        id="Navbar"
      >
        {/* col-3 d-xl-block d-lg-none d-sm-none d-md-none d-none */}
        <div className="row">
          <div className="col-5">
            <a className="navbar-brand" href="#" style={{ color: "#00c3ec" }}>
              <img src="logo.png" alt="logo" style={{ width: 90 }} />
              &nbsp;&nbsp;
              <h1 style={{ float: "right", paddingTop: "15px" }}>
                <b>Curawella</b>&nbsp;&nbsp; كيوراويلا
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>
          {/* <div style={{ width: "20%" }} /> */}
          <div className="col-7">

            <div className="collapse navbar-collapse " id="collapsibleNavbar">
              {/* <ul className="navbar-nav"> */}
                {/* <li className="nav-item"> */}
                            <div className="col-1">

                  <a
                    className="nav-link new-navbar-links"
                    href="#"
                    style={{ color: "#00c3ec" }}
                  >
                    <h3>{t("Home")}</h3>
                  </a>
                  </div>
                {/* </li> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <li className="nav-item"> */}
                  <a
                    className="nav-link new-navbar-links  active"
                    href="#"
                    style={{ color: "white" }}
                  >
                    <h3>{t("Doctors")}</h3>
                  </a>
                {/* </li> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <li className="nav-item"> */}
                  <a
                    className="nav-link new-navbar-links"
                    href="#"
                    style={{ color: "#00c3ec" }}
                  >
                    <h3>{t("Contact US")}</h3>
                  </a>
                {/* </li> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <li className="nav-item"> */}
                  <CustomSelect
                    style={{ color: "#00c3ec" }}
                    isMulti={false}
                    closeMenuOnSelect
                    options={languagesOptions}
                    onChange={convertLang}
                    placeholder={t("Language")}
                    defaultValue={lang}
                    widthStyle="100vw"
                    className=" arabic"
                  />
                {/* </li> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <li className="nav-item"> */}
                  <a
                    className="nav-link new-navbar-links"
                    href="#"
                    style={{ color: "#00c3ec" }}
                  >
                    <h3>{t("Sign in")}</h3>
                  </a>
                {/* </li> */}
                &nbsp;&nbsp;&nbsp;&nbsp;
                {/* <li className="nav-item"> */}
                  <a
                    className="nav-link signup new-navbar-links"
                    aria-current="true"
                    href="#"
                    style={{ color: "#00c3ec" }}
                  >
                    <h3>{t("Sign up")}</h3>
                  </a>
                {/* </li> */}
              {/* </ul> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
