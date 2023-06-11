import React from "react";
import Card from "./components/Card";
import Data from "./Data.json";

const App = () => {
  const dynamicCard = Data.map((item) => (
    <Card title={item.title} des={item.des} />
  ));
  return (
    <div>
      <h1 className="heading">Todo App</h1>
      {dynamicCard}
    </div>
  );
};

export default App;
