import React from "react";
// import { CircularProgressbar } from 'react-circular-progressbar';

function CircularBar() {
  const percentage = 65;
  return (
    <div className="main">
    <h2>Skills</h2>
    <div className="skills">
      <div className="circular-bar1 cb">
        <div className="html-bar">
          <p>90%</p>
        </div>
        <h3>HTML</h3>
      </div>

      <div className="circular-bar2 cb">
        <div className="html-bar">
          <p>70%</p>
        </div>
        <h3>CSS</h3>
      </div>

      <div className="circular-bar3 cb">
        <div className="html-bar">
          <p>60%</p>
        </div>
        <h3>JavaScript</h3>
      </div>

      <div className="circular-bar4 cb">
        <div className="html-bar">
          <p>60%</p>
        </div>
        <h3>Python</h3>
      </div>

      <div className="circular-bar5 cb">
        <div className="html-bar">
          <p>40%</p>
        </div>
        <h3>Django</h3>
      </div>


      <div className="circular-bar6 cb">
        <div className="html-bar">
          <p>85%</p>
        </div>
        <h3>BootStrap</h3>
      </div>


      <div className="circular-bar7 cb">
        <div className="html-bar">
          <p>70%</p>
        </div>
        <h3>Git</h3>
      </div>


      <div className="circular-bar8 cb">
        <div className="html-bar">
          <p>50%</p>
        </div>
        <h3>React</h3>
      </div>

    </div>

    </div>
  );
}

export default CircularBar;
