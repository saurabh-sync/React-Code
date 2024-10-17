import React, { useState } from "react";

function HookCounter() {
  const [count, SetCount] = useState(0);
  //   const incrementCount = () => {
  //     SetCount((prev) => prev + 1);
  //   };
  return (
    <div>
      <button onClick={() => SetCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
