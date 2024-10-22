import React from "react";
import "./App.css";
// import { UseState } from "./components/UseState/UseState";
// import UseReducer from "./components/UseReducer/UseReducer";
// import ObjectUseState from "./components/Immutable State/ObjectUseState";
// import ArrayUseState from "./components/Immutable State/ArrayUseState";
// import { Parent } from "./components/ParentChild/Parent";
// import { ParentOne } from "./components/Optimization/ParentOne";
// import ChildOne from "./components/Optimization/ChildOne";
// import GrandParent from "./components/Optimization/GrandParent";
// import { ParentTwo } from "./components/Optimization/ParentTwo";
// import Component1 from "./components/Component1";
// import { ParentThree } from "./components/IncorrectOptimization/ParentThree";
import { ParentFour } from "./components/IncorrectOptimization/ParentFour";
import ContextParent from "./components/Context/ContextParent";
import { ChildA } from "./components/Context/ContextChildren";

const App = () => {
  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}

      {/* <Parent /> */}

      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}

      {/* <GrandParent /> */}

      {/* <ParentTwo /> */}

      {/* <Component1 /> */}

      {/* <ParentThree /> */}

      {/* <ParentFour /> */}

      {/* <ContextParent /> */}

      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
};

export default App;
