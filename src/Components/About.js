import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import CircularBar from "./CircularBar";

function About() {
  return (
    <div className="about" id="about">
      <h1>
        ABOUT <span>ME</span>
      </h1>

      <p>
        As a front-end web developer, I specialize in creating user-facing
        websites and applications. My primary focus is on building the visual
        and interactive elements of a website or app using HTML, CSS, and
        JavaScript. I work closely with designers and back-end developers to
        ensure that the user experience is seamless and intuitive. I'm also
        constantly learning and keeping up-to-date with the latest web
        technologies and best practices to create cutting-edge and accessible
        web experiences.
      </p>
      {/* <h4>Personal Infos</h4>
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
      </table> */}
      <h4>Skills</h4>
      <CircularBar />
    </div>
  );
}

export default About;
