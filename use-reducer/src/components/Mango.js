import React, { useReducer } from "react";

const Mango = () => {
  const initialState = {
    mangos: 20,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "buy":
        return { ...state, mangos: state.mangos - action.payload };

      case "restock":
        return { ...state, mangos: state.mangos + action.payload };

      case "reset":
        return { ...state, mangos: (state.mangos = 0) };
      default:
        return state;
    }
  };

  const [mangoShop, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Mangos: {mangoShop.mangos}</h2>
      <button
        onClick={() =>
          dispatch({
            type: "buy",
            payload: 1,
          })
        }
        disabled={mangoShop.mangos <= 0}
      >
        Buy
      </button>
      <button
        onClick={() => {
          dispatch({ type: "restock", payload: 1 });
        }}
      >
        Restock
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset", payload: 0 });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Mango;
