import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((count) => count + 1);
  };

  const decrementHandler = () => {
    setCount((count) => count - 1);
  };

  const resetHandler = () => {
    setCount((count = 0));
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={incrementHandler} disabled={count === 5 ? true : false}>
        +
      </button>
      <button onClick={decrementHandler} disabled={count === -5 ? true : false}>
        -
      </button>
      <button onClick={resetHandler}>🔄</button>
    </div>
  );
};

export default Counter;
