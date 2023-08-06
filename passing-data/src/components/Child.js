import React from "react";
import Todo from "./Todo";

const Child = () => {
  const todos = ["todo1", "todo2", "todo3"];
  return (
    <div>
      <Todo todos={todos} />
    </div>
  );
};

export default Child;
