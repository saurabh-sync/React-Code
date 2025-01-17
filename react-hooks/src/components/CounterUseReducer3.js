import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterUseReducer3() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Inrement</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>

      <div>Count - {count2}</div>
      <button onClick={() => dispatch2("increment")}>Inrement</button>
      <button onClick={() => dispatch2("decrement")}>Decrement</button>
      <button onClick={() => dispatch2("reset")}>Reset</button>
    </div>
  );
}

export default CounterUseReducer3;
