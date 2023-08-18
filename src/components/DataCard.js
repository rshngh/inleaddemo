import React from "react";
import "./DataCard.css";
import "./DataCardCollection.css";
import clock from "../assets/clock.png";
import building from "../assets/building.png";
import graduationCap from "../assets/graduationCap.png";
import users from "../assets/users.png";
import libra from "../assets/libra.png";
import checked from "../assets/checked.png";

const DataCard = () => {
  const data = [
    {
      icon: clock,
      title: "10+",
      subtitle: "Year History",
      color1: "gray",
      color2: "black",
    },
    {
      icon: graduationCap,
      title: "5000+",
      subtitle: "Students",
      color1: "gray",
      color2: "black",
    },
    {
      icon: users,
      title: "500+",
      subtitle: "subtitle",
      color1: "gray",
      color2: "black",
    },
    {
      icon: libra,
      title: "8:1",
      subtitle: "subtitle",
      color1: "gray",
      color2: "black",
    },
    {
      icon: building,
      title: "65000sqft",
      subtitle: "subtitle",
      color1: "gray",
      color2: "black",
    },
    {
      icon: checked,
      title: "100%",
      subtitle: "subtitle",
      color1: "gray",
      color2: "black",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {data.map((data) => (
          <div className="col-sm-4">
            <div></div>
            <div
              class="card flex-row"
              style={{
                background: `linear-gradient(to bottom,  ${data.color1} 0%,${data.color2} 100%)`,
              }}>
              <img src={data.icon} class="card-img-top" alt="icon" />
              <div class="card-body">
                <h5 class="card-title text-left">{data.title}</h5>
                <p class="card-text text-left whitespace-nowrap">
                  {data.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataCard;
