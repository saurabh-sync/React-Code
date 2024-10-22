import React, { useState, useMemo, useCallback } from "react";
import ChildFive from "./ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("saurabh");

  const person = {
    fname: "Bruce",
    lname: "Wayne",
  };

  const memoizedPerson = useMemo(() => person, []);

  const handleClick = () => {};
  const memoizedHandleClick = useCallback(handleClick, []);

  console.log("ParentFour Render");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Count - {count}
      </button>
      <button onClick={() => setName("Harin")}>Change Name</button>
      <ChildFive name={name} person={memoizedPerson} />

      {/* <ChildFive name={name} handleClick={memoizedHandleClick} /> */}
    </div>
  );
};
