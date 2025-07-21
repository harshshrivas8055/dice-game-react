import React from "react";
import "./startpage.css";

function Startpage({toggle}) {
  return (
    <div className="dices">
      <div className="hero">
        <img src="./images/dices.png" alt="dices images" />
      </div>
      <div className="start">
        <h1>DICE GAME</h1><br />
        <button onClick={toggle}>Start Game</button>
      </div>
    </div>
  );
}

export default Startpage;
