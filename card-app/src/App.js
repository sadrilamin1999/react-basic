import React from "react";
import Card from "./components/Card";
import Data from "./Data.json";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  return (
    <div>
      <h1 className="heading">Todo App</h1>
      {Data.map((item) => (
        <Card key={uuidv4()} title={item.title} des={item.des} />
      ))}
    </div>
  );
};

export default App;
