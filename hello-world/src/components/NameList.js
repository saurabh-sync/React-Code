import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Diana", "Bruce"];

  //   const persons = [
  //     { id: 1, name: "Bruce", age: 25, skill: "React" },
  //     { id: 2, name: "Clark", age: 25, skill: "Vue" },
  //     { id: 3, name: "Diana", age: 25, skill: "Next" },
  //   ];

  const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);

  //   const personList = persons.map((person) => (
  //     <h2>
  //       I am {person.name} and my age is {person.age}. I know {person.skill}
  //     </h2>
  //   ));

  //   const personList = persons.map((person) => (
  //     <Person key={person.id} person={person} />
  //   ));

  return <div>{nameList}</div>;
}

export default NameList;
