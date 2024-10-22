import React from "react";

const ChildTwo = () => {
  console.log("ChildTwo Render");
  return <div>Child components</div>;
};

export default React.memo(ChildTwo);
