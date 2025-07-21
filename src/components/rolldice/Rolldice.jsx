import React, { useState } from 'react'
import "./rolldice.css"
import Rules from '../rules/Rules'

function Rolldice({currentdice, roledice, reset}) { //imported to the gamplay
    
    const [showrule, setshowrule] = useState(false);


    
  return (
    <>
      <section>
        <div className='image'>
            <img onClick= {roledice} src={`/images/dice_${currentdice}.png`} alt={`${currentdice}`} /> 
        </div>
        <p className='p'>Click on dice to roll</p>
        <div className='button'>
            <button className='button1' onClick={reset}>Reset Score</button>
            <button className='button2' onClick={() => setshowrule((prev) => !prev)}>{showrule ? "Hide" : "Show"} Rules</button>
        </div>
        {showrule && <Rules/> }
      </section>
    </>
  )
}

export default Rolldice
