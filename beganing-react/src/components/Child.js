import React from "react";

const Child = ({ onClidData }) => {
  const data = "I am from Child";
  onClidData(data);
  return (
    <div>
      <h2>I am Child</h2>
    </div>
  );
};

export default Child;
