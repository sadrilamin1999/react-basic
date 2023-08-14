import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      if (prevCount === 10) {
        return 10;
      }
      return prevCount + 1;
    });
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount === 0) {
        return 0;
      }
      return prevCount - 1;
    });
  };
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default State;
