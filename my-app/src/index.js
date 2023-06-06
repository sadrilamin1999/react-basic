import React from "react";
import ReactDOM from "react-dom/client";

const title = "call family";
const des = "This is frist class todoapp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <h1>{title}</h1>
      <p>{des}</p>
    </div>
  </React.StrictMode>
);
