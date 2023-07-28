import { useEffect } from "react";
import "../../../assets/css/Timer/Countdown/Message.css";
import piano from "../../../assets/sounds/piano.mp3";

const Message = ({ isShowing }) => {
  function play() {
    new Audio(piano).play();
  }

  useEffect(() => {
    if (isShowing == true) play();
  }, [isShowing]);

  return <>{isShowing ? <h2 className="message">Well Done!</h2> : ""}</>;
};

export default Message;
