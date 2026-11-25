import { Link } from "react-router-dom";
const ProductsHeader = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        <span> &gt; </span>
        <Link to={"/products"}>Products</Link>
      </div>
      <div>
        <h1>All Products</h1>
        <div>
          <p>Explore The Style That Speaks Before You Do</p>
          <p>Showing 1-12 of 48 products</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
