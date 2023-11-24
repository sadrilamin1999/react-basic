import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Calls with count");
  }, [count]);
  return (
    <div>
      <h2>Counter App</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
