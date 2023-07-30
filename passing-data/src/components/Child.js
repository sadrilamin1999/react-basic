import React from "react";

const Child = (props) => {
  const data = "Hello I am from child";
  props.onChildData(data);
  return (
    <div>
      <h1>Hello this is child</h1>
      <p>{props.data}</p>
    </div>
  );
};

export default Child;
