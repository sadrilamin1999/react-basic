import { useState } from "react";

const Product = ({ product }) => {
  const [count, setCount] = useState(0);

  const cartHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="card">
      <div className="card-header">
        <h2>{product.title}</h2>
      </div>

      <div className="card-body">
        <div className="image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="description">
          <p>{product.description}</p>
        </div>
        <div className="price">
          <h4>{product.price}</h4>
          <p>{count}</p>
        </div>
      </div>

      <div className="card-footer">
        <button onClick={cartHandler} className="btn">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
