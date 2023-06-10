import ReactDOM from "react-dom/client";

const cardTitle = "Call family";
const cardDes =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className="heading">Todo App</h1>
    <div className="card">
      <h3 className="card-title">{cardTitle}</h3>
      <p className="card-des">{cardDes}</p>
    </div>
  </div>
);
