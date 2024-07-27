import { useState } from "react";

const useTimerManager = () => {
  const [timers, setTimers] = useState([]);

  const addTimer = () => {
    setTimers((prevTimers) => [...prevTimers, { id: prevTimers.length + 1 }]);
  };

  const removeTimer = (id) => {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id));
  };
  
  return { timers, setTimers, addTimer, removeTimer };
};

export default useTimerManager;
