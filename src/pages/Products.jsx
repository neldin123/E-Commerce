import ProductsFilter from "../components/products/ProductsFilter";
import ProductsShow from "../components/products/ProductShow";
import ProductsPadge from "../components/products/ProductsPadge";

const Products = () => {
  return (
    <>
      <main>
        <div>
          <ProductsPadge />
          <ProductsFilter />
          <ProductsShow />
        </div>
      </main>
    </>
  );
};

export default Products;
