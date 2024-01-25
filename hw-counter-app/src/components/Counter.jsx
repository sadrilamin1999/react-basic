import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button
          className="btn"
          onClick={() => setCount((prevCount) => prevCount - 1)}
          disabled={count === 0}
        >
          -
        </button>
        <button
          className="btn"
          onClick={() => setCount((prevCount) => prevCount + 1)}
          disabled={count === 5}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
