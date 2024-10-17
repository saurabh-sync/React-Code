import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  let someProp = 0;
  const tick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  //   function dosomething(someProp) {
  //     console.log(someProp);
  //   }

  useEffect(() => {
    function dosomething() {
      console.log(someProp);
    }
    dosomething();
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count, someProp]);

  return <div>{count}</div>;
}

export default IntervalHookCounter;
