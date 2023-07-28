import React, { useContext, useReducer } from "react";
import TimerReducer, { initialTime } from "../reducer/TimerReducer";
import { CHANGE_MIN, CHANGE_SEC, STOP_TIMER } from "../reducer/Actions/Actions";

const TimerContext = React.createContext();

export function useTimeContext() {
  return useContext(TimerContext);
}

export function TimerProvider({ children }) {
  function buttonIsReady() {
    if (initialTime.min == 0 && initialTime.sec == 0) {
      return false;
    } else if (initialTime.min !== 0 || initialTime.sec !== 0) {
      return true;
    }
  }

  const [state, dispatch] = useReducer(TimerReducer, initialTime);

  function changeMin(e) {
    dispatch({
      type: CHANGE_MIN,
      payload: {
        time: e.target.value,
      },
    });
  }

  function changeSec(e) {
    dispatch({
      type: CHANGE_SEC,
      payload: {
        time: e.target.value,
      },
    });
  }

  function stopTimer() {
    dispatch({
      type: STOP_TIMER,
    });
  }

  const value = {
    changeMin,
    changeSec,
    stopTimer,
    initialTime,
    buttonIsReady,
  };

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
}
