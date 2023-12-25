import React from "react";

const Bio = ({ name, title }) => {
  return (
    <div className="bio">
      <h3> {name}</h3>
      <p>{title}</p>
    </div>
  );
};

export default Bio;
