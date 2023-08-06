import React from "react";

const Todo = (props) => {
  return (
    <div>
      {props.todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </div>
  );
};

export default Todo;
