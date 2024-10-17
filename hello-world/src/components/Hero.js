import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") {
    throw new Error("Not a Hero");
  }
  return (
    <div className="App">
      <div>{heroName}</div>
    </div>
  );
}

export default Hero;
