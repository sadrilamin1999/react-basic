import React from "react";

const Product = ({ title, des, image, price, category }) => {
  return (
    <div>
      <img className="card-image" src={image} alt={category} />
      <h1 className="card-title">{title}</h1>
      <p className="caatogory">{category}</p>
      <p className="card-des">{des}</p>
      <h3 className="card-price">{`$ ${price}`}</h3>
    </div>
  );
};

export default Product;
