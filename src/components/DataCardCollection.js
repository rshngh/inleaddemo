import React from "react";
import DataCard from "./DataCard";
import clock from "../assets/clock.png";
import building from "../assets/building.png";

const DataCardCollection = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3 col-md-3 col-lg-3 mt-2">
          <div
            className="text-light"
            style={{
              background: `linear-gradient(to right,  #0ac7e48c 0%,#0d92ccd1 100%)`,
            }}>
            <div className="row text-center justify-center">
              <img
                src={clock}
                alt="icon"
                style={{ width: "8rem", height: "8rem" }}
              />
              <h1> block1</h1>
              <p>subtitle</p>
            </div>
          </div>
        </div>

        <div className="col-sm-3 col-md-3 col-lg-3 mt-2  ">
          <div
            className="text-light"
            style={{
              background: `linear-gradient(to right,  #1aba987a 0%,#1aba98 100%)`,
            }}>
            <div className="row text-center align-items-center p-3">
              <div className="col-5 align-items-center">
                <img
                  src={building}
                  style={{ width: "2rem", height: "2rem" }}
                  alt="icon"
                />
              </div>
              <div className="col-7">
                title
                <div> subtitle</div>
              </div>
            </div>
          </div>
          <div
            className=" text-light"
            style={{
              background: `linear-gradient(to right, #fd8f279e 0%,#fd8f27 100%)`,
            }}>
            <div className="row text-center align-items-center mt-2 p-3">
              <div className="col-5 align-items-center">
                <img
                  src={building}
                  style={{ width: "2rem", height: "2rem" }}
                  alt="icon"
                />
              </div>
              <div className="col-7">
                title
                <div> subtitle</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 mt-2  ">
          <div
            className="text-light"
            style={{
              background: `linear-gradient(to right,  #cb6de8 0%,#9870c1 100%)`,
            }}>
            <div className="row text-center align-items-center p-3">
              <div className="col-5 align-items-center">
                <img
                  src={building}
                  style={{ width: "2rem", height: "2rem" }}
                  alt="icon"
                />
              </div>
              <div className="col-7">
                title
                <div> subtitle</div>
              </div>
            </div>
          </div>
          <div
            className=" text-light"
            style={{
              background: `linear-gradient(to right, #fe88b5 0%,#f63378 100%)`,
            }}>
            <div className="row text-center align-items-center mt-2 p-3">
              <div className="col-5 align-items-center">
                <img
                  src={building}
                  style={{ width: "2rem", height: "2rem" }}
                  alt="icon"
                />
              </div>
              <div className="col-7">
                title
                <div> subtitle</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3 col-md-3 col-lg-3 mt-2  ">
          <div
            className="text-light"
            style={{
              background: `linear-gradient(to right,  #abe336 0%,#86ba2f 100%)`,
            }}>
            <div className="row text-center align-items-center p-3">
              <div className="col-5 align-items-center">
                <img
                  src={building}
                  style={{ width: "2rem", height: "2rem" }}
                  alt="icon"
                />
              </div>
              <div className="col-7">
                title
                <div> subtitle</div>
              </div>
            </div>
          </div>
          <div
            className=" text-light"
            style={{
              background: `linear-gradient(to right, #5fa2c3 0%,#2a546a 100%)`,
            }}>
            <div className="row text-center align-items-center mt-2 p-3">
              <div className="col-5 align-items-center">
                <img
                  src={building}
                  style={{ width: "2rem", height: "2rem" }}
                  alt="icon"
                />
              </div>
              <div className="col-7">
                title
                <div> subtitle</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCardCollection;
