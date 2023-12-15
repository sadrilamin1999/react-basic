import { useReducer } from "react";

const Store = () => {
  const initialState = {
    count: 20,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "buy":
        return { ...state, count: state.count - action.payload };

      case "cancel":
        return { ...state, count: state.count + action.payload };

      case "restock":
        return { ...state, count: state.count + action.payload };

      case "reset":
        return { ...state, count: (state.count = action.payload) };

      default:
        return { state };
    }
  };
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Total pizza = {counter.count}</h2>
      <p>Ordered = 0 </p>
      <button onClick={() => dispatch({ type: "buy", payload: 1 })}>Buy</button>
      <button onClick={() => dispatch({ type: "cancel", payload: 1 })}>
        Cancel
      </button>
      <button onClick={() => dispatch({ type: "restock", payload: 10 })}>
        Restock
      </button>

      <button
        onClick={() => dispatch({ type: "reset", payload: initialState.count })}
      >
        Reset
      </button>
    </>
  );
};

export default Store;
