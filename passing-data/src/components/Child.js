import React from "react";

const Child = (props) => {
  const data = "I am from child";
  props.handleReciver(data);
  return <div></div>;
};

export default Child;
