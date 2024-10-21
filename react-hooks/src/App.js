import React, { useReducer } from "react";
import "./App.css";
// import DataFetching from "./components/DataFetching";
// import ClassCounterOneUseEffect from "./components/ClassCounterOneUseEffect";
// import ClassMouse from "./components/ClassMouse";
// import HookCounterOneUseEffect from "./components/HookCounterOneUseEffect";
// import IntervalClassCounter from "./components/IntervalClassCounter";
// import IntervalHookCounter from "./components/IntervalHookCounter";
// import ComponentC from "./components/usecontext/ComponentC";
// import CounterUseReducer2 from "./components/CounterUserReducer2";
// import CounterUseReducer3 from "./components/CounterUseReducer3";
// import ComponentA from "./components/useReducerContext/ComponentA";
// import ComponentB from "./components/useReducerContext/ComponentB";
// import ComponentC from "./components/useReducerContext/ComponentC";
// import DataFetchingOne from "./components/DataFetchingOne";
// import DataFetchingTwo from "./components/DataFetchingTwo";
// import ParentComponent from "./components/ParentComponent";
// import CounteruseMemo from "./components/CounteruseMemo";
// import FoucusInput from "./components/FoucusInput";
// import ClassTimer from "./components/ClassTimer";
// import Hooktimer from "./components/Hooktimer";
// import DocTitleOne from "./components/DocTitleOne";
// import DocTitleTwo from "./components/DocTitleTwo";
// import CounterOne from "./components/CounterOne";
// import CounterTwo from "./components/CounterTwo";
// import UserForm from "./components/UserForm";
import FetchData from "./components/FetchData";
// import MouseContainer from "./components/MouseContainer";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounterThree from "./components/HookCounterThree";
// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounterTwo from "./components/HookCounterTwo";

export const CountContext = React.createContext();

export const userContext = React.createContext();
export const channelContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <ClassCounter />
      <HookCounter /> */}
        {/* <HookCounterTwo /> */}
        {/* <HookCounterThree /> */}
        {/* <HookCounterFour /> */}
        {/* <ClassCounterOneUseEffect /> */}
        {/* <HookCounterOneUseEffect /> */}
        {/* <ClassMouse /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalClassCounter />
      <IntervalHookCounter /> */}
        {/* <DataFetching /> */}
        {/* <userContext.Provider value="Saurabh">
        <channelContext.Provider value="Codevolution">
          <ComponentC />
        </channelContext.Provider>
      </userContext.Provider> */}
        {/* <CounterUseReducer2 /> */}
        {/* <CounterUseReducer3 /> */}

        {/* vid - 66 */}
        {/* Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}

        {/* <DataFetchingOne /> */}
        {/* <DataFetchingTwo /> */}
        {/* <ParentComponent /> */}

        {/* <CounteruseMemo /> */}

        {/* <FoucusInput /> */}

        {/* <ClassTimer />
        <Hooktimer /> */}

        {/* <DocTitleOne />
        <DocTitleTwo /> */}

        {/* <CounterOne />
        <CounterTwo /> */}

        {/* <UserForm /> */}

        <FetchData />
      </div>
    </CountContext.Provider>
  );
}

export default App;
