import React, { useState } from "react";
import ChildTwo from "./ChildTwo";

export const ParentTwo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("saurabh");

  console.log("ParentTwo Render");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Harin")}>Change Name</button>
      <ChildTwo name={name} />
    </div>
  );
};
