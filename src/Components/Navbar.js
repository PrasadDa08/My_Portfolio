import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import menu from '../icons/icons8-menu-50.png'
function Navbar() {

  const[mobile,setMobile] = useState(false)
  let myWin = window.innerWidth
  console.log(myWin)


  return (
    <>
      <div className="nav" >
        <ul className={mobile ?'nav-lines' : "nav-bar" } onClick ={
          () =>{
            setMobile(false)
          }
        } >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </div>
      <div className="nav-mobile">
        <h1>PR</h1>
        <button onClick={ () =>
          { setMobile(!mobile)} }
          
        >{mobile ? <img src={menu} className="hbars"/> :<img src={menu} className="bars" />}</button>
      </div>
    </>
  );
}

export default Navbar;
