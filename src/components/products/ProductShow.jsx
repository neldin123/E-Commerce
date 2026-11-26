import Skeleton from "react-loading-skeleton";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductSkeletonCard";

const ProductsShow = ({ isLoading, currentProducts }) => {
  {
    if (isLoading === true) {
      return Array.from({ length: 12 }).map((_, index) => {
        <ProductCardSkeleton key={index} />;
      });
    } else {
      return (
        <div className="grid gap-4 grid-cols-4">
          {currentProducts.map((product) => (
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
    }
  }
};

export default ProductsShow;
