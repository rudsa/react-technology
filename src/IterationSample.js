import React, { useState, Component } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "Snow Man" },
    { id: 2, text: "Ice" },
    { id: 3, text: "Fire" },
    { id: 4, text: "Wind" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    if (inputText) {
      const nextNames = names.concat({
        id: nextId,
        text: inputText,
      });
      setNextId(nextId + 1);
      setNames(nextNames);
      setInputText("");
    }
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>Add Name</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSample;
