import { useReducer } from "react";

const Counter = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };

      case "decrement":
        return { ...state, count: state.count - action.payload };

      case "reset":
        return { ...state, count: action.payload };

      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h2>Count={counter.count}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            payload: 10,
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            payload: 1,
          })
        }
      >
        Decrement
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "reset",
            payload: 0,
          })
        }
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
