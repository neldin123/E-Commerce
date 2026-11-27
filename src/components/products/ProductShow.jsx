import Skeleton from "react-loading-skeleton";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductSkeletonCard";

const ProductsShow = ({ isLoading, currentProducts }) => {
  return (
    <div className="grid gap-4 grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {isLoading
        ? Array.from({ length: 12 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        : currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              category={product.category}
              image_url={product.image}
              price={product.price}
            />
          ))}
    </div>
  );
};

export default ProductsShow;
