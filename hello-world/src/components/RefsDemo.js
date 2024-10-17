import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
        this.cbRef = element;
    }

  }

//   componentDidMount() {
//     this.inputRef.current.focus();
//   }
  componentDidMount() {
    if(this.cbRef){
        this.cbRef.focus();
    }
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input ref={this.inputRef} type="text" />
        <input ref={this.setCbRef} type="text" />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
