import React from "react";
import Card from "./components/Card";
import Data from "./Data.json";

const App = () => {
  return (
    <div>
      <h1 className="heading">Todo App</h1>
      {Data.map((item) => (
        <Card title={item.title} des={item.des} />
      ))}
    </div>
  );
};

export default App;
