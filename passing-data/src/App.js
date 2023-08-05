import React, { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [reciver, setReciver] = useState("");
  const handleReciver = (data) => {
    setReciver(data);
  };
  return (
    <div>
      <Child handleReciver={handleReciver} />
      <p>{reciver}</p>
    </div>
  );
};

export default App;
