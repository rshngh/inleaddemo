import React from "react";
import "./Content.css";
import students from "../assets/students.png";
import DataCardCollection from "./DataCardCollection";

const Content = () => {
  return (
    <section className="contentContainer">
      <img src={students} class="img-fluid" alt="students"></img>
      <h1 className="text-uppercase">
        <b className="fs-5 fs-1">Your shortcut to sure shot success</b>
      </h1>
      <DataCardCollection />
    </section>
  );
};

export default Content;
