import React, { useState, useEffect } from "react";

function HookCounterOneUseEffect() {
  const [count, setcount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - Updating document title");
    document.title = `You Clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>click {count} times</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default HookCounterOneUseEffect;
