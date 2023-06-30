import React from "react";


function About() {
  return (
    <div className="about mobile-about" id="about" >
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
    </div>
  );
}
export default About;
