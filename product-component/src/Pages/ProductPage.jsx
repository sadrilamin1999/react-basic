import React, { createContext, useState } from "react";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

export const CountConetxt = createContext();

const ProductPage = () => {
  const [count, setCount] = useState(0);

  const cartHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <CountConetxt.Provider value={cartHandler}>
        <Navbar count={count} />
        <Products />
      </CountConetxt.Provider>
    </div>
  );
};

export default ProductPage;
