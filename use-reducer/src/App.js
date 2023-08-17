import React, { useState } from "react";

const App = () => {
  const [burger, setBurger] = useState(0);

  const handleIncrement = () => {
    setBurger((prevBurger) => prevBurger + 1);
  };
  const handleDecrement = () => {
    setBurger((prevBurger) => prevBurger - 1);
  };
  const handleReset = () => {
    setBurger(0);
  };
  return (
    <div>
      <h1>Total Burgers: {burger}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>🔄</button>
    </div>
  );
};

export default App;
