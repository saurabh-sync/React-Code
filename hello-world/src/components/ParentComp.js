import React, { Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Saurabh",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Saurabh",
      });
    }, 2000);
  }

  render() {
    console.log("Parent Component render");
    return (
      <div>
        Parent Component
        <MemoComp name={this.state.nam} />
        {/* <RegularComponent name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}

export default ParentComp;
