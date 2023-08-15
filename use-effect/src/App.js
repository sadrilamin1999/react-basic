import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  }, []);
  return (
    <div>
      <h2>Counter: {count}</h2>
      {/* <button onClick={handleIncrement}>+</button> */}
    </div>
  );
};

export default App;
