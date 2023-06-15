import React, { useEffect, useState } from "react";
import { a } from "react-router-dom";
import "../App.css";
import menu from "../icons/icons8-menu-50.png";
function Navbar() {
  const [mobile, setMobile] = useState(false);
  let myWin = window.innerWidth;
  console.log(myWin);

  return (
    <>
      <div className="nav">
        <h1 className="logo">Prasad</h1>
        <ul
          className={mobile ? "nav-lines" : "nav-bar"}
          onClick={() => {
            setMobile(false);
          }}
        >
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          {/* <li>
            <a href="#">Resume</a>
          </li> */}
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact Me</a>
          </li>
        </ul>
      </div>
      <div className="nav-mobile">
        <h1>PR</h1>
        <button
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? (
            <img src={menu} className="hbars" />
          ) : (
            <img src={menu} className="bars" />
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
