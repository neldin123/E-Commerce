

const ProductsFooter = ({ pageNumber, handleProductsPages }) => {
  return (
    <>
      <button onClick={handleProductsPages(1)}>+</button>
      <span>{pageNumber}</span>
      <button onClick={handleProductsPages(-1)}>-</button>
    </>
  );
};

export default ProductsFooter;
