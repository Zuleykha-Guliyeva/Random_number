import React, { useState } from "react";
import "./RandomNum.css";

export default function RandomNum() {
  const [randomNum, setRandomNum] = useState(0);
  const [minNum, setMinNum] = useState(0);
  const [maxNum, setMaxNum] = useState(10);
  const handleRandom = () => (
    setRandomNum(Math.floor(Math.random()*(maxNum-minNum + 1)+parseInt(minNum)))
  )
  return (
    <div className="hero">
      <div className="container">
        <div className="randomNum">
          <p>
            Random Number : <span>{randomNum}</span>
          </p>
        </div>
        <div className="numContainer">
          <div>
            <p>Min:</p>
            <input type="number" value={minNum} onChange={e=>setMinNum(e.target.value)}/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxNum} onChange={e=>setMaxNum(e.target.value)}/>
          </div>
        </div>
        <button className="mt-50" onClick={handleRandom}>Random reqem sec</button>
      </div>
    </div>
  );
}
