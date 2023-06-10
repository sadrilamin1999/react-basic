import React from "react";
import ReactDOM from "react-dom/client";

const title = "Call family";
const des = "This is frist class todoapp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <h1 className="heading">{title}</h1>
      <p>{des}</p>
    </div>
  </React.StrictMode>
);
