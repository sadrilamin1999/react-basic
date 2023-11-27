import { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [data, setData] = useState("");
  const handleChild = (childData) => {
    setData(childData);
  };
  return (
    <div>
      <h2>This is parent</h2>
      <h2>{data}</h2>
      <Child onClidData={handleChild} />
    </div>
  );
};

export default App;
