import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
  
    <div className="home" style={{ backgroundImage: `url("E:\project\src\BG3.png")` }}>
      <div className="headerContainer">
        <h1> Password Generator </h1>
        <p> Generate Random Passwords in SECONDS!!! </p>
        
          <button> Create Now </button>
      </div>
    </div>
  );
}

export default Home;
