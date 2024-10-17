import react from "react";

class ClassClick extends react.Component {
  clickHandler() {
    console.log("Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default ClassClick;
