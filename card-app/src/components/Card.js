import React from "react";

const cardTitle = "Call family";
const cardDes =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy";

const Card = () => {
  return (
    <div className="card">
      <h3 className="card-title">{cardTitle}</h3>
      <p className="card-des">{cardDes}</p>
    </div>
  );
};

export default Card;
