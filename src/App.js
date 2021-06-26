import React, { useState, useRef, useEffect } from "react";
import SetTimer from "./component/SetTimer";
import "./App.css";

function App() {
  const [breakCount, setBreak] = useState(5);
  const [sessionCount, setSession] = useState(25);
  const [timerType, setType] = useState("Session");
  const [clockTime, setTime] = useState(1500);
  const [clockState, setClockState] = useState(false);
  const beep = useRef();

  const calculateLength = (oper, lenType) => {
    if (lenType === "break") {
      if (oper === 0) {
        if (breakCount !== 1) return breakCount - 1;
        return 1;
      }
      if (breakCount !== 60) return breakCount + 1;
      return 60;
    } else {
      if (oper === 0) {
        if (sessionCount !== 1) return sessionCount - 1;
        return 1;
      }
      if (sessionCount !== 60) return sessionCount + 1;
      return 60;
    }
  };

  const handleBrkLength = (oper) => {
    if (!clockState) {
      let length = calculateLength(oper, "break");
      setBreak(length);
    }
  };

  const handleSesLength = (oper) => {
    if (!clockState) {
      let length = calculateLength(oper, "session");
      setSession(length);
      setTime(length * 60);
    }
  };

  /* constant object for break and session length component */
  const breakData = {
    type: "break",
    title: "Break Length",
    count: breakCount,
    lengthHandler: handleBrkLength
  };
  const sessionData = {
    type: "session",
    title: "Session Length",
    count: sessionCount,
    lengthHandler: handleSesLength
  };

  const clockify = () => {
    let minutes = Math.floor(clockTime / 60);
    let seconds = clockTime - minutes * 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return minutes + ":" + seconds;
  };

  const resetDefault = () => {
    setBreak(5);
    setSession(25);
    setType("Session");
    setTime(1500);
    setClockState(false);
    beep.current.pause();
    beep.current.currentTime = 0;
  };

  useEffect(() => {
    if (clockState && clockTime > 0) {
      const interval = setInterval(() => {
        setTime(clockTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (clockState && clockTime === 0) {
      beep.current.play();
      beep.current.currentTime = 0;
      if (timerType === "Session") {
        setType("Break");
        setTime(breakCount * 60);
      } else {
        setType("Session");
        setTime(sessionCount * 60);
      }
    }
  });

  return (
    <div className="container">
      <div className="header">
        <h1>Promodoro Clock</h1>
      </div>
      <div className="flex-container">
        <div className="set-timer">
          <SetTimer data={breakData} />
          <SetTimer data={sessionData} />
        </div>
        <div className="timer">
          <div className="timer-wrapper">
            <div id="timer-label">{timerType}</div>
            <div id="time-left">{clockify()}</div>
          </div>
          <div>
            <button id="start_stop" onClick={() => setClockState(!clockState)}>
              <i className={`fa fa-${clockState ? "pause" : "play"}`}></i>
            </button>
            <button id="reset" onClick={resetDefault}>
              <i className="fa fa-refresh"></i>
            </button>
          </div>
        </div>
      </div>
      <audio
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        ref={beep}
      />
    </div>
  );
}
export default App;
