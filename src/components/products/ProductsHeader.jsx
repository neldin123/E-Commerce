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
        <h1 className="text-[32px] font-semibold leading-10 tracking-tight">
          All Products
        </h1>
        <div className="flex justify-between items-center mt-1 text-[14px] tracking-wide max-md:flex-col max-md:items-start max-md:mt-4 max-md:gap-4">
          <p>Explore The Style That Speaks Before You Do</p>
          {total === 0 ? (
            <span>No Products Found</span>
          ) : (
            <p>
              Showing <span className="font-bold">{start}</span>-
              <span className="font-bold">{end}</span> of{" "}
              <span className="font-bold">{total}</span> products
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsHeader;
