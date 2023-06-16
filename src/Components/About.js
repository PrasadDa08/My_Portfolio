import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import CircularBar from "./CircularBar";

function About() {
  return (
    <div className="about" id="about">
      <div className="div1">
      <h1>
        ABOUT <span>ME</span>
      </h1>
      <h4>Personal Infos</h4>
      <table className="details">
        <tr>
          <td>
            <span>First Name :</span> Prasad
          </td>
          <td>
            <span>Last Name :</span> Datir
          </td>
        </tr>
        <tr>
          <td>
            <span>Age :</span> 25
          </td>
          <td>
            <span>Nationality :</span> Indian
          </td>
        </tr>
        <tr>
          <td>
            <span>Address :</span> Nagpur, Maharashtra
          </td>
          <td>
            <span>Phone No. :</span> 8805278178
          </td>
        </tr>
        <tr>
          <td>
            <span>Email :</span> prasaddatir05@gmail.com
          </td>
          <td>
            <span>Languges :</span> Marathi, Hindi, English
          </td>
        </tr>
      </table>
      </div>
      <div className="div2">
      <h4>Skills</h4>
      <CircularBar />
      </div>
    </div>
  );
}

export default About;
