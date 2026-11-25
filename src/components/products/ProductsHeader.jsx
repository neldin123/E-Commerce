import { Link } from "react-router-dom";
const ProductsHeader = ({ start, end, total }) => {
  return (
    <div className="flex flex-col gap-6 mb-10">
      <div className="flex gap-2 text-[14px]">
        <Link to={"/"}>Home</Link>
        <span>&gt;</span>
        <Link to={"/products"}>Products</Link>
      </div>
      <div>
        <h1 className="text-[32px] font-semibold leading-10 ">All Products</h1>
        <div>
          <p>Explore The Style That Speaks Before You Do</p>
          <p>
            Showing {start}-{end} of {total} products
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
