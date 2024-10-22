import React, { useState } from "react";
// import ChildThree from "./ChildThree";
import ChildFour from "./ChildFour";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("saurabh");

  console.log("ParentThree Render");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Harin")}>Change Name</button>

      {/* <ChildThree name={name}>
        <strong>Hello</strong>
      </ChildThree> */}

      <ChildFour name={name} />
    </div>
  );
};
