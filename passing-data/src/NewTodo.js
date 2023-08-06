import React, { useState } from "react";

const NewTodo = (props) => {
  const [value, setValue] = useState("");
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.handleReciver(value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        id="name"
        placeholder="Enter a todo"
        value={value}
        onChange={handleValueChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default NewTodo;
