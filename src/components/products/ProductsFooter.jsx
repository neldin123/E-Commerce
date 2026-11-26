const ProductsFooter = ({ pageNumber, handleProductsPages }) => {
  return (
    <div className="flex gap-4">
      <button onClick={() => handleProductsPages(1)}>+</button>
      <span>{pageNumber}</span>
      <button onClick={() => handleProductsPages(-1)}>-</button>
    </div>
  );
};

export default ProductsFooter;
