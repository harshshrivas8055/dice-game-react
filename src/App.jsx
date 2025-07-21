import React, { useState } from "react";
import "./App.css";
import Startpage from "./components/startpage/Startpage";
import Gameplay from "./components/gameplay/Gameplay";

function App() {
  const [gamestarted, setgamestarted] = useState(false);

  const togglegame = () => {
    setgamestarted((prev) => !prev);
  };

  return <>{gamestarted ? <Gameplay /> : <Startpage toggle={togglegame} />}</>;
}

export default App;
