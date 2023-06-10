import React from "react";

const Card = ({ title, des }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-des">{des}</p>
    </div>
  );
};

export default Card;
