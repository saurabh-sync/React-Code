import React, { Component } from "react";
import "./App.css";
// import ComponentC from "./components/ComponentC";
// import { UserProvider } from "./components/UserContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserProvider value="Saurabh">
          <ComponentC />
        </UserProvider> */}

        {/* <PostList /> */}

        <PostForm />
      </div>
    );
  }
}

export default App;
