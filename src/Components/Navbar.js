import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../MediaScreen.css";
import menu from "../icons/arrow.png";
import menu1 from "../icons/bars.png";
function Navbar() {
  const [mobile, setMobile] = useState(false);
  let myWin = window.innerWidth;
  console.log(myWin);

  return (
    <>
    <div className={mobile && "overlay"} onClick={()=>setMobile(!mobile)}>

    </div>
      <div className="nav">
        <h1>Prasad</h1>
        <ul
          className={mobile ? "nav-lines" : "nav-bar"}
          onClick={() => {
            setMobile(false);
          }}
        >
          <li>
            <a href='#home'>Home </a>
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
        <h1>Prasad</h1>
       
          <button onClick={()=>setMobile(!mobile)}>{mobile ? <img src={menu} className="main-img"/> : <img src={menu1} className="main-img"/>}</button>
        
      </div>
    </>
  );
};

export default Navbar;
