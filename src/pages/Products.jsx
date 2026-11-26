import ProductsHeader from "../components/products/ProductsHeader";
import ProductsFilter from "../components/products/ProductsFilter";
import ProductsShow from "../components/products/ProductShow";
import ProductsFooter from "../components/products/ProductsFooter";
import { useEffect, useState } from "react";

const itemsPerPage = 12;

const Products = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [products, setProducts] = useState(() => {
    return localStorage.getItem("products") !== null
      ? JSON.parse(localStorage.getItem("products"))
      : [];
  });
  const numOfPages = Math.ceil(products.length / itemsPerPage);
  const start = (pageNumber - 1) * itemsPerPage + 1;
  const end = Math.min(itemsPerPage * pageNumber, products.length);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/products.json");
        const data = await response.json();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setProducts(data);
        localStorage.setItem("products", JSON.stringify(data));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);
  console.log(products);
  const currentProducts = products.slice(start - 1, end);
  return (
    <>
      <main className="w-full bg-white dark:bg-slate-900 dark:text-slate-50 text-slate-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
          <ProductsHeader
            start={start}
            end={end}
            total={products.length}
            isLoading={isLoading}
          />
          <ProductsFilter />
          <ProductsShow
            isLoading={isLoading}
            currentProducts={currentProducts}
          />
          <ProductsFooter numOfPages={numOfPages} />
        </div>
      </main>
    </>
  );
};

export default Products;
