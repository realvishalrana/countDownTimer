import { useEffect, useState, useCallback, useRef } from "react";

const initialValues = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const useTimer = () => {
  const [isStart, setIsStart] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [timeData, setTimeData] = useState(initialValues);
  const [isDone, setIsDone] = useState(false);
  const timerIdRef = useRef(null);

  const { hours, minutes, seconds } = timeData;

  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("Invalid Input");
      return;
    }
    setIsStart(true);
    setIsPause(false);
    setIsDone(false); 
  };

  const handleReset = () => {
    setIsStart(false);
    setIsPause(false);
    setTimeData(initialValues);
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
    setIsDone(false); 
  };

  const handleInput = (e) => {
    const { id, value } = e.target;

    setTimeData((prev) => ({
      ...prev,
      [id]: Number(value),
    }));
  };

  const runTimer = useCallback(() => {
    setTimeData((prev) => {
      let { hours, minutes, seconds } = prev;

      if (seconds > 0) {
        seconds -= 1;
      } else if (seconds === 0 && minutes > 0) {
        seconds = 59;
        minutes -= 1;
      } else if (seconds === 0 && minutes === 0 && hours > 0) {
        seconds = 59;
        minutes = 59;
        hours -= 1;
      }

      if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(timerIdRef.current);
        return initialValues;
      }

      return { hours, minutes, seconds };
    });
  }, []);

  const handlePause = () => {
    setIsPause(true);
    clearInterval(timerIdRef.current);
    timerIdRef.current = null;
  };

  const handleResume = () => {
    setIsPause(false);
  };

  useEffect(() => {
    if (isStart && !isPause) {
      timerIdRef.current = setInterval(runTimer, 1000);
    }

    return () => {
      if (timerIdRef.current) clearInterval(timerIdRef.current);
    };
  }, [isStart, isPause, runTimer]);

  useEffect(() => {
    if (isStart && timeData.hours === 0 && timeData.minutes === 0 && timeData.seconds === 0) {
      setIsDone(true);
      setIsStart(false);
    }
  }, [isStart, timeData]);

  return {
    isStart,
    isPause,
    isDone,
    timeData,
    handleStart,
    handleReset,
    handleInput,
    handlePause,
    handleResume,
  };
};

export default useTimer;
