import React, { useContext } from "react";
import { UserContext } from "../App";

const Store3 = () => {
  const { name, roll } = useContext(UserContext);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Roll: {roll}</p>
    </div>
  );
};

export default Store3;
