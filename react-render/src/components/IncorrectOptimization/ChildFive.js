import React from "react";

const ChildFive = ({ name, person }) => {
  console.log("ChildFive Render");
  return (
    <div>
      Hello {name} {person.fname} {person.lname}{" "}
    </div>
  );
};

export default React.memo(ChildFive);
