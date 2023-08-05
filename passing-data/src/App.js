import { useState } from "react";
import Child from "./components/Child";

const App = () => {
  const [rectveData, setReciveData] = useState("");

  const dataReciver = (dataFromChild) => {
    setReciveData(dataFromChild);
  };
  return (
    <div>
      <Child dataReciver={dataReciver} />
      <p>{rectveData}</p>
    </div>
  );
};

export default App;
