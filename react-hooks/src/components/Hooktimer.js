import React, { useState, useRef, useEffect } from "react";

function Hooktimer() {
  const [timer, setTmer] = useState(0);
  const intervalRef = useRef(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTmer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      Hook timer - {timer}
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
    </div>
  );
}

export default Hooktimer;
