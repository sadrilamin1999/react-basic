import React, { useContext } from "react";
import { MyContext } from "../App";
const ComponentC = () => {
  const value = useContext(MyContext);
  return (
    <div>
      <h1>{value}</h1>
    </div>
  );
};

export default ComponentC;
