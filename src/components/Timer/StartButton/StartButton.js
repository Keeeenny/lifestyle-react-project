import "../../../assets/css/Timer/StartButton/StartButton.css";
import { useTimeContext } from "../../../context/TimerContext";

const StartButton = ({ handleCLick, isGoing }) => {
  const time = useTimeContext();

  function buttonEvent() {
    const isReady = time.buttonIsReady();

    if (isGoing == false) {
      if (isReady == true) handleCLick();
      else if (isReady == false) {
      }
    } else if (isGoing == true) {
      time.stopTimer();
      handleCLick();
    }
  }

  return (
    <button onClick={buttonEvent} className="StartButton">
      {isGoing ? "Cancel" : "Start"}
    </button>
  );
};

export default StartButton;
