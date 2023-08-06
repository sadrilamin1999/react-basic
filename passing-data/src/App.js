import React, { useState } from "react";
import NewTodo from "./NewTodo";

const App = () => {
  const [reciver, setReciver] = useState("");

  const handleReciver = (todo) => {
    setReciver(todo);
  };
  return (
    <div>
      <NewTodo handleReciver={handleReciver} />
      <h2>{reciver}</h2>
    </div>
  );
};

export default App;
