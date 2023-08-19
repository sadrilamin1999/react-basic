import { useReducer } from "react";

const initialState = 20;

const reducer = (state, action) => {
  switch (action) {
    case "buy":
      return state - 1;
    case "restock":
      return state + 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [numberOfBurger, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Number of burger: {numberOfBurger}</h1>
      <button onClick={() => dispatch("buy")}>Buy</button>
      <button onClick={() => dispatch("restock")}>Restock</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default App;
