import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import CircularBar from "./CircularBar";

function About() {
  return (
    <div className="about" id="about">
      <h1>
        ABOUT <span>ME</span>
      </h1>
      <div className="Details">
        <div className="short-intro">
          <p>
            <span>Hi, I am Prasad Datir.</span> As a front-end web developer, I
            specialize in creating user-facing websites and applications. My
            primary focus is on building the visual and interactive elements of
            a website or app using HTML, CSS, and JavaScript.
            {/* I work closely with designers and back-end developers to
        ensure that the user experience is seamless and intuitive. I'm also
        constantly learning and keeping up-to-date with the latest web
        technologies and best practices to create cutting-edge and accessible
        web experiences. */}
          </p>
        </div>
        <div className="personal-info">
          <h2>Personal Details</h2>
          <table className="table">
            <tr>
              <td className="hlight">Birthdate</td>
              <td>: 08-05-1998</td>
            </tr>
            <tr>
              <td className="hlight">Phone</td>
              <td>: 8805278178</td>
            </tr>
            <tr>
              <td className="hlight">Email</td>
              <td>: prasaddatir05@gmail.com</td>
            </tr>
            <tr>
              <td className="hlight">Address</td>
              <td>: Maharashtra, India</td>
            </tr>
            <tr>
              <td className="hlight">Job Status</td>
              <td>: Working</td>
            </tr>
            <tr>
              <td className="hlight">Languges Known</td>
              <td>: Marathi, hindi, English</td>
            </tr>
          </table>
        </div>
      </div>

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
  
      
    </div>
  );
}
export default About;
