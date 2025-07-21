import React, { useState } from "react";
import "./gameplay.css";
import Rolldice from "../rolldice/Rolldice";

function Gameplay() {
  const arrnum = [1, 2, 3, 4, 5, 6];

  const [score, setscore] = useState(0);
  const [currentdice, setcurrentdice] = useState(1); //imported from rolldice can be replaced , puuted here to not use useContext
  const [number, setnumber] = useState();
  const [error, seterror] = useState("");

  // funstion for random roll dice number
  const generaterandomnumber = (min, max) => {
        // console.log(Math.floor(Math.random()*(max-min)+min))
        return Math.floor(Math.random()*(max-min)+min);
    }

    const roledice = () => {
      if(!number){
        seterror("You have not selected any number")
        return
      }
      seterror("");
        const randomnum = generaterandomnumber(1,7);
        setcurrentdice((prev)=> randomnum)

        if(number===randomnum) {
          setscore((prev)=>prev+randomnum)
        }else{
          setscore((prev)=>prev-randomnum)
        }
        setnumber(undefined);
    }

    const numberhandler = (value) => {
        setnumber(value);
        seterror("")
    }

    const reset = () => {
      setscore(0);
      setcurrentdice(1);
      setnumber(undefined);
      seterror("");
    }
//-->
  // console.log(number);
  return (
    <>
      <main className="main">
        <div className="main2">
          <h1>{score}</h1>
          <p>Total</p>
        </div>
        <p className="error">{error}</p>
        <div className="h4">
          {arrnum.map((value, i) => (
            <h4
              className={`dicenum ${value === number ? "selected" : ""}`}
              onClick={() => numberhandler(value)}
              key={i}
            >
              {value}
            </h4>
          ))}
        </div>
      </main>
      <h6>Select Number</h6>
      <br />
      <Rolldice currentdice={currentdice} roledice={roledice} reset={reset}/>
    </>
  );
}

export default Gameplay;
