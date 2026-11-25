import ProductsFilter from "../components/products/ProductsFilter";
import ProductsShow from "../components/products/ProductShow";
import ProductsHeader from "../components/products/ProductsHeader";

const Products = () => {
  return (
    <>
      <main className="w-full bg-white dark:bg-slate-900 dark:text-slate-50 text-slate-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
          <ProductsHeader />
          <ProductsFilter />
          <ProductsShow />
        </div>
      </main>
    </>
  );
};

export default Products;
