import { myProducts } from "../data/data";
import Product from "./Product";

const Products = () => {
  const products = myProducts;
  console.log(products);
  return (
    <div className="container ">
      <div className="products-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
