import React from "react";
import "./NavbarTop.css";
import email from "../assets/email.png";
import smartphone from "../assets/smartphone.png";
import whatsapp from "../assets/whatsapp.png";

const NavbarTop = () => {
  return (
    <section className="container-fluid navbarTop">
      <div className="row">
        <div className="col">
          <ul className="row">
            <div className="col-md-auto">
              <div className="row">
                <li className="col d-flex align-items-center">
                  <img src={email} alt="email" /> <a href="/">info@inlead.in</a>
                </li>
                <li className="col d-flex align-items-center">
                  <img src={smartphone} alt="smartphone" />
                  <a href="/">+9195602-93100</a>
                </li>
                <li className="col d-flex align-items-center">
                  <img src={whatsapp} alt="whatsapp" />
                  <a href="/"> WhatsApp </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="col text-right">
          <a href="/">Contact Us </a>
        </div>
      </div>

      <div className="container text-center"></div>
    </section>
  );
};

export default NavbarTop;
