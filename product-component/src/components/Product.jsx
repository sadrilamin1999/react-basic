import { useContext } from "react";
import { CountConetxt } from "../Pages/ProductPage";

const Product = ({ product }) => {
  const cartHandler = useContext(CountConetxt);

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
