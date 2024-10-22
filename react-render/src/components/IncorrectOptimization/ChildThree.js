import React from "react";

const ChildThree = ({ children, name }) => {
  console.log("ChildThree Render");
  return (
    <div>
      {children} {name}
    </div>
  );
};

export default React.memo(ChildThree);
