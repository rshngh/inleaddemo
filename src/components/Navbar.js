import React from "react";
import "./Navbar.css";
import logoInlead from "../assets/logoInlead.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logoInlead} alt="logo" style={{ height: "3.5rem" }} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="expand-sm navbar-expand" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                PORGRAMS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                ADMISSIONS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                SUCCESS STORIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                CAMPUS BUZZ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/* <div className="container">
      <div className="row">
        <div className="col">
          <img className="float-left logo " src={logoInlead} alt="logo" />
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                PROGRAMS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                ADMISSIONS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                SUCCESS STORIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                CAMPUS BUZZ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div> */
