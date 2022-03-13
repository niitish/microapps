import { useState, useEffect, useCallback } from "react";
import classes from "./Clock.module.css";

const Clock = () => {
  const systemTime = new Date();
  const [hours, setHours] = useState(systemTime.getHours());
  const [minutes, setMinutes] = useState(systemTime.getMinutes());
  const [seconds, setSeconds] = useState(systemTime.getSeconds());

  const tick = useCallback(() => {
    if (seconds === 59) {
      setSeconds(0);
      if (minutes === 59) {
        setMinutes(0);
        if (hours === 24) {
          setHours(0);
        } else {
          setHours((h) => h + 1);
        }
      } else {
        setMinutes((m) => m + 1);
      }
    } else {
      setSeconds((s) => s + 1);
    }
  }, [seconds, minutes, hours]);

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [tick]);

  return (
    <div className={classes.clock}>
      <div>the time is</div>
      <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
    </div>
  );
};

export default Clock;
