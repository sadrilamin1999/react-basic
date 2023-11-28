import { createContext } from "react";
import ComponentA from "./components/ComponentA";

export const MyContext = createContext();
const App = () => {
  const name = "Sadril";
  return (
    <div>
      <MyContext.Provider value={name}>
        <ComponentA />
      </MyContext.Provider>
    </div>
  );
};

export default App;
