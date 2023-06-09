import React from "react";
import "../App.css";
import "../MediaScreen.css";
import profile from "./prasad-removebg-preview.png";
function Home() {
  return (
    <div className="home mobile-home" id="home" >
      <div className="intro">
        <p>Hello I am a</p>
        <h1>Front-End Developer</h1>
        <p>
          As a front-end developer, I combine my passion for design and coding
          to create immersive and user-friendly web experiences that captivate
          audiences.
        </p>
      </div>
      <div className="profile">
        <img src={profile} />
      </div>
    </div>
  );
}

export default Home;
