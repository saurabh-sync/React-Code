import React, { useState } from "react";
import { memoizedChildA } from "./ContextChildren";

export const CountContext = React.createContext();

const CountProvider = CountContext.Provider;

const ContextParent = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("ContextParent render");
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
        {/* <memoizedChildA /> */}
        {children}
      </CountProvider>
    </div>
  );
};

export default ContextParent;
