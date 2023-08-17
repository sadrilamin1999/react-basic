import { createContext } from "react";
import Store from "./components/Store";

export const UserContext = createContext();
const App = () => {
  const user = {
    name: "Sadril",
    roll: 77,
  };
  return (
    <div>
      <UserContext.Provider value={user}>
        <Store />
      </UserContext.Provider>
    </div>
  );
};

export default App;
