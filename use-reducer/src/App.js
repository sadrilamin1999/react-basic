import { useReducer } from "react";

const initialState = {
  burgers: 20,
  pizza: 50,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "buy":
      return {
        ...state,
        burgers: state.burgers - action.payload,
      };
    case "restore":
      return {
        ...state,
        burgers: state.burgers + action.payload,
      };
    case "reset":
      return {
        ...state,
        burgers: action.payload,
      };
    default:
      return state;
  }
};
const App = () => {
  const [resturent, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Total burgers: {resturent.burgers}</h1>
      <button onClick={() => dispatch({ type: "buy", payload: 5 })}>Buy</button>
      <button onClick={() => dispatch({ type: "restore", payload: 100 })}>
        Restore
      </button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default App;
