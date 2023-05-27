import ReactDOM from "react-dom/client";

const todoTitle = "This is Sadril";
const todoDes = "I am sadril amin shuvo. Student of cse.";
const date = new Date();
const todoDate = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render("root");
root.render(
  <div>
    <h1>Todo app</h1>
    <h3>{todoTitle}</h3>
    <p>{todoDes}</p>
    <p>{todoDate}</p>
  </div>
);
