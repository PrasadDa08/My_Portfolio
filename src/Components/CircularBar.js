import React from "react";
// import { CircularProgressbar } from 'react-circular-progressbar';

function CircularBar() {
  const percentage = 65;
  return (
    <div className="skills">
      <div className="circular-bar1">
        <div className="html-bar">
          <p>90%</p>
        </div>
        <h3>HTML</h3>
      </div>

      <div className="circular-bar2">
        <div className="html-bar">
          <p>70%</p>
        </div>
        <h3>CSS</h3>
      </div>

      <div className="circular-bar3">
        <div className="html-bar">
          <p>60%</p>
        </div>
        <h3>JavaScript</h3>
      </div>

      <div className="circular-bar4">
        <div className="html-bar">
          <p>60%</p>
        </div>
        <h3>Python</h3>
      </div>

      <div className="circular-bar5">
        <div className="html-bar">
          <p>40%</p>
        </div>
        <h3>Django</h3>
      </div>


      <div className="circular-bar6">
        <div className="html-bar">
          <p>85%</p>
        </div>
        <h3>BootStrap</h3>
      </div>


      <div className="circular-bar7">
        <div className="html-bar">
          <p>70%</p>
        </div>
        <h3>Git</h3>
      </div>


      <div className="circular-bar8">
        <div className="html-bar">
          <p>50%</p>
        </div>
        <h3>React</h3>
      </div>

    </div>

    
  );
}

export default CircularBar;
