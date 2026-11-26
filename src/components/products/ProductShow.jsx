import ProductCard from "./ProductCard";

const ProductsShow = ({ isLoading, currentProducts }) => {
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
};

export default ProductsShow;
