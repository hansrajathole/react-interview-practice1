import React, { useState, useEffect, useRef } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
  const [inputMinutes, setInputMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      clearInterval(intervalRef.current);
      setIsActive(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, time]);

  const startTimer = () => {
    if (time === 0) {
      const totalSeconds = parseInt(inputMinutes) * 60 + parseInt(inputSeconds);
      setTime(totalSeconds);
    }
    setIsActive(true);
  };

  const pauseTimer = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setTime(0);
    setInputMinutes(0);
    setInputSeconds(0);
  };

  const formatTime = () => {
    const mins = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const secs = (time % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="timer-container">
      <h2>⏳ Countdown Timer</h2>

      <div className="input-container">
        <input
          type="number"
          min="0"
          value={inputMinutes}
          onChange={(e) => setInputMinutes(e.target.value)}
          placeholder="Minutes"
        />
        <input
          type="number"
          min="0"
          value={inputSeconds}
          onChange={(e) => setInputSeconds(e.target.value)}
          placeholder="Seconds"
        />
      </div>

      <div className="timer">{formatTime()}</div>

      <div className="button-group">
        <button onClick={startTimer}>▶️ Start</button>
        <button onClick={pauseTimer}>⏸️ Pause</button>
        <button onClick={resetTimer}>🔁 Reset</button>
      </div>
    </div>
  );
};

export default CountdownTimer;
