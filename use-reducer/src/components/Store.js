import { useReducer } from "react";

const initialState = {
  pizza: 20,
};
const Store = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "buy":
        return { ...state, pizza: state.pizza - action.payload };

      case "cancel":
        return { ...state, pizza: state.pizza + action.payload };

      case "add":
        return { ...state, pizza: state.pizza + action.payload };

      case "reset":
        return { ...state, pizza: (state.pizza = action.payload) };

      default:
        return { state };
    }
  };
  const [shop, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Number of pizza = {shop.pizza}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "buy",
            payload: 1,
          })
        }
      >
        Buy
      </button>

      <button
        onClick={() => {
          dispatch({
            type: "cancel",
            payload: 1,
          });
        }}
      >
        Cancel
      </button>

      <button onClick={() => dispatch({ type: "add", payload: 10 })}>
        Add
      </button>

      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default Store;
