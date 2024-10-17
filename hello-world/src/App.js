import "./App.css";
// import Greet from "./components/Greet";
// import Hello from "./components/Hello";
// import Welcome from "./components/Welcome";
import { Component } from "react";
// import Welcome from "./components/Welcome";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Greet from "./components/Greet";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import StyleSheet from "./components/StyleSheet";

import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounter2 from "./components/ClickCounter2";
import HoverCounter2 from "./components/HoverCounter2";
import User from "./components/User";
import Counter2 from "./components/Counter2";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet />
        <Welcome /> */}
        {/* <Hello name="Bruce" heroName="Batman">
          This is children props
        </Hello>
        <Hello name="Clark" heroName="Superman">
          <button>Action</button>
        </Hello>
        <Hello name="Diana" heroName="Wonder Woman" />
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Diana" heroName="Wonder Woman" /> */}
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Greet name="Bruce" heroName="Batman" /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        {/* <UserGreeting /> */}
        {/* <NameList /> */}
        {/* <StyleSheet primary={true} /> */}
        {/* <Inline />
        <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}
        {/* <Form /> */}
        {/* <LifeCycleA /> */}
        {/* <FragmentDemo /> */}
        {/* <Table /> */}
        {/* <PureComp /> */}
        {/* <ParentComp /> */}
        {/* <RefsDemo /> */}
        {/* <FocusInput /> */}
        {/* <FRParentInput /> */}

        {/* <PortalDemo /> */}

        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName="Joker" />
        </ErrorBoundary> */}

        {/* <ClickCounter name="Saurabh" />
        <HoverCounter /> */}

        {/* <ClickCounter2 />
        <HoverCounter2 />
        <User render={(isLoggedIn) => (isLoggedIn ? "Saurabh" : "Guest")} /> */}

        {/* <Counter2
          render={(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter2
          render={(count, incrementCount) => (
            <HoverCounter count={count} incrementCount={incrementCount} />
          )}
        /> */}
        <Counter2>
          {(count, incrementCount) => (
            <ClickCounter2 count={count} incrementCount={incrementCount} />
          )}
        </Counter2>
        <Counter2>
          {(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        </Counter2>
      </div>
    );
  }
}

export default App;
