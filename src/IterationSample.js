import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "Snow Man" },
    { id: 2, text: "Ice" },
    { id: 3, text: "Fire" },
    { id: 4, text: "Wind" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

  return <ul>{nameList}</ul>;
};

export default IterationSample;
