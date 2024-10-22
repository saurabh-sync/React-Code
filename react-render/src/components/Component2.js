import React from "react";

const Component2 = ({ count, setCount }) => {
  console.log("Component 2 rendered");
  return (
    <div>
      Count - {count}
      <button onClick={() => setCount(1)}>Click</button>
    </div>
  );
};

export default Component2;
