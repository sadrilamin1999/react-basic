import React from "react";
import { UserConsumer } from "../contex/userContext";

const Component3 = () => {
  return (
    <div>
      <UserConsumer>
        {(name) => {
          return <h1>{name}</h1>;
        }}
      </UserConsumer>
    </div>
  );
};

export default Component3;
