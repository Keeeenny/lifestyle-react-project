import React, { useEffect, useState, useMemo } from "react";
import { useTimeContext } from "../../../context/TimerContext";
import Message from "./Message";
import PauseButton from "./PauseButton";
import "../../../assets/css/Timer/Countdown/Countdown.css";

const Countdown = () => {
  const TimeContext = useTimeContext();

  const [minutes, setMinutes] = useState(TimeContext.initialTime.min);
  const [seconds, setSeconds] = useState(TimeContext.initialTime.sec);
  const [isGoing, setIsGoing] = useState(true);
  const [timesUp, setTimesUp] = useState(false);

  function calculateEndTime(min, sec) {
    const minutesInMs = min * 60 * 1000;
    const secondsInMs = sec * 1000;
    const totalTime = Date.now() + minutesInMs + secondsInMs;
    return totalTime;
  }

  const endTime = useMemo(() => {
    return calculateEndTime(minutes, seconds);
  }, [isGoing]);

  useEffect(() => {
    let interval = setInterval(() => {
      const remainingTimeInSec = Math.round((endTime - Date.now()) / 1000);
      const remainingMinutes = Math.floor(remainingTimeInSec / 60);
      const remainingSeconds = Math.floor(remainingTimeInSec % 60);
      clearInterval(interval);

      if (isGoing == true) {
        if (seconds !== 0) {
          setSeconds(remainingSeconds);
          clearInterval(interval);
        }
        if (seconds == 0 && minutes !== 0) {
          setSeconds(remainingSeconds);
          setMinutes(remainingMinutes);
          clearInterval(interval);
        } else if (seconds == 0 && minutes == 0) {
          clearInterval(interval);
          setTimesUp(true);
          setIsGoing(false);
        }
      }
    }, 1000);

    localStorage.clear();
    localStorage.setItem("interval-id", interval);
  }, [seconds, minutes, isGoing]);

  function handleEvent() {
    setIsGoing(!isGoing);
    clearInterval(localStorage.getItem("interval-id"));
  }

  const min = minutes < 10 ? `0${minutes}` : minutes;
  const sec = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="countdown">
      <Message isShowing={timesUp} />

      <h1>
        {min}:{sec}
      </h1>

      <PauseButton onClickEvent={handleEvent} isGoing={isGoing} />
    </div>
  );
};

export default Countdown;
