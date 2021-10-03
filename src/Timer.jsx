import React from 'react'
import ReactDOM from 'react-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './index.css'
import './App.css';
import Play from './Play'
import Pause from './Pause'
import SettingsContext from "./SettingsContext";
import { useState, useEffect, useRef } from 'react'

const defaultSeconds = 3600;

function Timer() {
  
  const [isPaused, setIsPaused] = useState(true);
  let [secondsLeft, setSecondsLeft] = useState(defaultSeconds);

  const isPausedRef = useRef(isPaused);
  
  function updateRemainingTime() {
    secondsLeft--;
    setSecondsLeft(secondsLeft);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
        if(isPaused)
          return;
        if(secondsLeft === 0)
            return;
        updateRemainingTime();

    }, 1000);
    return () => clearInterval(intervalId);
  }, [isPaused])

  const percent = Math.floor(secondsLeft / 3600 * 100)
  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if(seconds < 10) seconds = '0'+ seconds;
  
  return (
    <div>  
      <CircularProgressbar 
      value={percent} 
      text={minutes + ':' + seconds} />
        <div> {
          isPaused ? <Play onClick={ () => {setIsPaused(false)}}/> :
          <Pause onClick={ () => {setIsPaused(true)}}/>
        }
        </div>
    </div>
  );
}

export default Timer;
