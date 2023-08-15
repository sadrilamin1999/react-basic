import React from "react";
import Component1 from "./components/Component1";
import { UserProvider } from "./contex/userContext";

const App = () => {
  const name = "Sadril";
  return (
    <div>
      <UserProvider value={name}>
        <Component1 />
      </UserProvider>
    </div>
  );
};

export default App;
