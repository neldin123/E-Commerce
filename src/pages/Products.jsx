import ProductsFilter from "../components/products/ProductsFilter";
import ProductsShow from "../components/products/ProductShow";
import ProductsHeader from "../components/products/ProductsHeader";
import { useEffect, useState } from "react";
import ProductsFooter from "../components/products/ProductsFooter";

const itemsPerPage = 12;

const Products = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [products, setProducts] = useState(() => {
    return localStorage.getItem("products") !== null
      ? JSON.parse(localStorage.getItem("products"))
      : [];
  });
  const numOfPages = Math.ceil(products.length / itemsPerPage);
  const start = Math.ceil(
    pageNumber === 1 ? pageNumber : pageNumber * itemsPerPage,
  );
  const end = Math.ceil(pageNumber * itemsPerPage);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/public/products.json");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <main className="w-full bg-white dark:bg-slate-900 dark:text-slate-50 text-slate-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto container px-15 py-16 max-md:px-6">
          <ProductsHeader start={start} end={end} />
          <ProductsFilter />
          <ProductsShow />
          <ProductsFooter />
        </div>
      </main>
    </>
  );
};

export default Products;
