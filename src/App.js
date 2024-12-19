import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const calculateTimeLeft = () => {
    const newYear = new Date("January 1, 2025 00:00:00");
    const now = new Date();
    const difference = newYear - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div key={interval} className="timer-section">
      <span className="timer-number">{timeLeft[interval]}</span>
      <span className="timer-label">{interval}</span>
    </div>
  ));

  return (
    <div className="App">
      <div className="countdown-container">
        <h1>🎉 New Year Countdown 🎉</h1>
        <div className="timer">{timerComponents.length ? timerComponents : <span>Happy New Year! 🎆</span>}</div>
      </div>
    </div>
  );
};

export default App;
