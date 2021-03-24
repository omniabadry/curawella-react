import React from 'react'

export const Header = () => {
    return (
      <div id="divNavbar">
        <nav
          className="navbar navbar-expand-md bg-light navbar-light"
          id="Navbar"
        >
          <a className="navbar-brand" href="#" style={{ color: "#00c3ec" }}>
            <img src="logo.png" alt="logo" style={{ width: 90 }} />
            &nbsp;&nbsp;
            <h1 style={{ float: "right",paddingTop:"5px" }}>
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
          <div style={{ width: "25%" }} />
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link new-navbar-links"
                  href="#"
                  style={{ color: "#00c3ec" }}
                >
                  Home
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a
                  className="nav-link new-navbar-links  active"
                  href="#"
                  style={{ color: "white" }}
                >
                  Doctors
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a
                  className="nav-link new-navbar-links"
                  href="#"
                  style={{ color: "#00c3ec" }}
                >
                  Contact US
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a
                  className="nav-link new-navbar-links arabic"
                  href="#"
                  style={{ color: "#00c3ec" }}
                >
                  عربي
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a
                  className="nav-link new-navbar-links"
                  href="#"
                  style={{ color: "#00c3ec" }}
                >
                  Sign in
                </a>
              </li>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <li className="nav-item">
                <a
                  className="nav-link signup new-navbar-links"
                  aria-current="true"
                  href="#"
                  style={{ color: "#00c3ec" }}
                >
                  Sign up
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
}
