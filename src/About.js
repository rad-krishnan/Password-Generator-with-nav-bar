import React from "react";
import "./About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url({E:\project\src\BG.png})` }}
      ></div>
      <div className="aboutBottom">
        <h1> INSTRUCTIONS</h1>
        <p>
        This website is used to generate random passwords which are strong and hard to crack for the hackers. </p>
        <p>
        Save the Password somewhere safe.
        </p>
        
      </div>
    </div>
  );
}

export default About;
