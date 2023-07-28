import { useTimeContext } from "../../../context/TimerContext";

const SecondsOptions = (num) => {
  const TimeContext = useTimeContext();

  return (
    <div className="custom-select">
      <select onChange={TimeContext.changeSec}>
        {num.value.map((x) => (
          <option value={x} key={x}>
            {x}
          </option>
        ))}
      </select>
      <span className="custom-arrow"></span>
    </div>
  );
};

export default SecondsOptions;
