import React, { Component } from "react";

class RegularComponent extends Component {
  render() {
    console.log("Regular Component render");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegularComponent;
