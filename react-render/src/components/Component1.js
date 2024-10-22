import React, { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {
  const [count, setCount] = useState(0);
  console.log("Component 1 rendered");
  return (
    <div>
      <Component2 count={count} setCount={setCount} />
    </div>
  );
};

export default React.memo(Component1);
